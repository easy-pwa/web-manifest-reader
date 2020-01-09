# web-manifest-reader
![npm](https://img.shields.io/npm/v/web-manifest-reader?style=flat-square)
![GitHub file size in bytes](https://img.shields.io/github/size/easy-pwa/web-manifest-reader/dist/index.js?style=flat-square)
![npm](https://img.shields.io/npm/dt/web-manifest-reader?style=flat-square)

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

#### With npm
```
npm install web-manifest-reader
```

#### Otherwise
``` html
<script async src="https://cdn.jsdelivr.net/npm/web-manifest-reader@VERSION/index.js"
```


Then, you can use it easly.

#### With ES6 module
```` javascript
import Manifest from 'web-manifest-reader';

Manifest.read().then(manifestData => {
    console.log('I want the name: '+manifestData.name);
}).catch(error => {
    console.log('an error occured', error.message);
});
````

#### Without ES6 module
```` javascript
WebManifestReader.readCallback(function(manifestData, error) {
    if (error) {
        console.log('An error occurred', error.message);
        return;
    }

    console.log('I want the name: '+manifestData.name);
});
````



