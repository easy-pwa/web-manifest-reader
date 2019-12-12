# web-manifest-reader

This package reads manifest referenced in the current web page.

## Your web manifest

`<link rel="manifest" href="manifest.json">`


``` yaml
{
  "name": "Google I/O 2015",
  "short_name": "I/O 2015",
  "start_url": "./?utm_source=web_app_manifest",
  "display": "standalone"
  "icons": [{
    "src": "images/touch/homescreen48.png",
    "sizes": "48x48",
    "type": "image/png"
  }]
}
```

## Get started

```
npm install web-manifest-reader
```

Then, you can use it easly.

```` javascript
import manifest from 'web-manifest-reader';

manifest.read().then(function(manifestData) {
    console.log('I want the name: '+manifestData.name);
});
````



