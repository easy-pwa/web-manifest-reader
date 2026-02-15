import Reader from '../src/Reader';

const MANIFEST_MOCK = {
  name: 'My PWA App',
  short_name: 'PWA',
  start_url: '/',
  display: 'standalone',
  theme_color: '#ffffff',
  icons: [{ src: '/icon-192.png', sizes: '192x192', type: 'image/png' }],
};

function addManifestLink(href = '/manifest.json'): void {
  const link = document.createElement('link');
  link.rel = 'manifest';
  link.href = href;
  document.head.appendChild(link);
}

function removeManifestLink(): void {
  const link = document.head.querySelector('link[rel="manifest"]');
  if (link) link.remove();
}

function mockFetchSuccess(data: object): void {
  global.fetch = jest.fn().mockResolvedValue({
    status: 200,
    json: () => Promise.resolve(data),
  });
}

function mockFetchFailure(status = 500): void {
  global.fetch = jest.fn().mockResolvedValue({
    status,
    json: () => Promise.resolve({}),
  });
}

beforeEach(() => {
  removeManifestLink();
  sessionStorage.clear();
  jest.restoreAllMocks();
});

describe('Reader', () => {
  describe('static constants', () => {
    it('should have the correct STORAGE_KEY', () => {
      expect(Reader.STORAGE_KEY).toBe('__web_manifest_reader_storage');
    });

    it('should have the correct PWA_COMPAT_STORAGE_KEY', () => {
      expect(Reader.PWA_COMPAT_STORAGE_KEY).toBe('__pwacompat_manifest');
    });
  });

  describe('exists()', () => {
    it('should return true when a manifest link exists', () => {
      addManifestLink();
      const reader = new Reader();
      expect(reader.exists()).toBe(true);
    });

    it('should return false when no manifest link exists', () => {
      const reader = new Reader();
      expect(reader.exists()).toBe(false);
    });
  });

  describe('read()', () => {
    it('should fetch and return the manifest content', async () => {
      addManifestLink();
      mockFetchSuccess(MANIFEST_MOCK);

      const reader = new Reader();
      const result = await reader.read();

      expect(fetch).toHaveBeenCalledTimes(1);
      expect(result).toEqual(MANIFEST_MOCK);
    });

    it('should store the fetched manifest in sessionStorage', async () => {
      addManifestLink();
      mockFetchSuccess(MANIFEST_MOCK);

      const reader = new Reader();
      await reader.read();

      const cached = sessionStorage.getItem(Reader.STORAGE_KEY);
      expect(cached).toBe(JSON.stringify(MANIFEST_MOCK));
    });

    it('should return cached content from sessionStorage without fetching', async () => {
      addManifestLink();
      sessionStorage.setItem(Reader.STORAGE_KEY, JSON.stringify(MANIFEST_MOCK));
      global.fetch = jest.fn();

      const reader = new Reader();
      const result = await reader.read();

      expect(result).toEqual(MANIFEST_MOCK);
      expect(global.fetch).not.toHaveBeenCalled();
    });

    it('should return cached content from PwaCompat storage', async () => {
      addManifestLink();
      sessionStorage.setItem(Reader.PWA_COMPAT_STORAGE_KEY, JSON.stringify(MANIFEST_MOCK));

      const reader = new Reader();
      const result = await reader.read();

      expect(result).toEqual(MANIFEST_MOCK);
    });

    it('should prefer PwaCompat cache over its own cache', async () => {
      addManifestLink();
      const pwaCompatData = { ...MANIFEST_MOCK, name: 'PwaCompat Version' };
      sessionStorage.setItem(Reader.PWA_COMPAT_STORAGE_KEY, JSON.stringify(pwaCompatData));
      sessionStorage.setItem(Reader.STORAGE_KEY, JSON.stringify(MANIFEST_MOCK));

      const reader = new Reader();
      const result = await reader.read();

      expect(result).toEqual(pwaCompatData);
    });

    it('should throw an error when no manifest link exists', async () => {
      const reader = new Reader();
      await expect(reader.read()).rejects.toThrow('No manifest declaration found.');
    });

    it('should throw an error when fetch returns a non-200 status', async () => {
      addManifestLink();
      mockFetchFailure(404);

      const reader = new Reader();
      await expect(reader.read()).rejects.toThrow('Impossible to get the manifest content.');
    });

    it('should ignore invalid JSON in sessionStorage cache', async () => {
      addManifestLink();
      sessionStorage.setItem(Reader.STORAGE_KEY, 'not-valid-json');
      mockFetchSuccess(MANIFEST_MOCK);

      const reader = new Reader();
      const result = await reader.read();

      expect(result).toEqual(MANIFEST_MOCK);
    });
  });

  describe('readCallback()', () => {
    it('should call the callback with data on success', (done) => {
      addManifestLink();
      mockFetchSuccess(MANIFEST_MOCK);

      const reader = new Reader();
      reader.readCallback((data, error) => {
        expect(data).toEqual(MANIFEST_MOCK);
        expect(error).toBeNull();
        done();
      });
    });

    it('should call the callback with error on failure', (done) => {
      const reader = new Reader();
      reader.readCallback((data, error) => {
        expect(data).toBeNull();
        expect(error).toBeInstanceOf(Error);
        expect(error!.message).toBe('No manifest declaration found.');
        done();
      });
    });
  });
});
