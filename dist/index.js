!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.WebManifestReader=e():t.WebManifestReader=e()}(window,(function(){return function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(r,o,function(e){return t[e]}.bind(null,o));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=0)}([function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(1);e.default=new r.default},function(t,e,n){"use strict";var r=this&&this.__awaiter||function(t,e,n,r){return new(n||(n=Promise))((function(o,i){function a(t){try{c(r.next(t))}catch(t){i(t)}}function u(t){try{c(r.throw(t))}catch(t){i(t)}}function c(t){var e;t.done?o(t.value):(e=t.value,e instanceof n?e:new n((function(t){t(e)}))).then(a,u)}c((r=r.apply(t,e||[])).next())}))},o=this&&this.__generator||function(t,e){var n,r,o,i,a={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:u(0),throw:u(1),return:u(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function u(i){return function(u){return function(i){if(n)throw new TypeError("Generator is already executing.");for(;a;)try{if(n=1,r&&(o=2&i[0]?r.return:i[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;switch(r=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return a.label++,{value:i[1],done:!1};case 5:a.label++,r=i[1],i=[0];continue;case 7:i=a.ops.pop(),a.trys.pop();continue;default:if(!(o=(o=a.trys).length>0&&o[o.length-1])&&(6===i[0]||2===i[0])){a=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){a.label=i[1];break}if(6===i[0]&&a.label<o[1]){a.label=o[1],o=i;break}if(o&&a.label<o[2]){a.label=o[2],a.ops.push(i);break}o[2]&&a.ops.pop(),a.trys.pop();continue}i=e.call(t,a)}catch(t){i=[6,t],r=0}finally{n=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,u])}}};Object.defineProperty(e,"__esModule",{value:!0});var i=function(){function t(){this.internalStorage=window.sessionStorage}return t.prototype.exists=function(){return null!==this.getManifestPath()},t.prototype.readCallback=function(t){this.read().then((function(e){t(e,null)})).catch((function(e){t(null,e)}))},t.prototype.read=function(){return r(this,void 0,void 0,(function(){var t,e,n;return o(this,(function(r){switch(r.label){case 0:if(t=this.getContentFromCache())return[2,t];if(!(e=this.getManifestPath()))throw new Error("No manifest declaration found.");return[4,this.getManifestContent(e)];case 1:return n=r.sent(),this.storeContentInCache(n),[2,n]}}))}))},t.prototype.getManifestContent=function(t){return r(this,void 0,void 0,(function(){var e;return o(this,(function(n){switch(n.label){case 0:return[4,fetch(t)];case 1:if(200!==(e=n.sent()).status)throw new Error("Impossible to get the manifest content.");return[4,e.json()];case 2:return[2,n.sent()]}}))}))},t.prototype.getManifestPath=function(){var t=document.head.querySelector('link[rel="manifest"]');return t?t.href:null},t.prototype.getContentFromCache=function(){var e=this.extractCachedContent(t.PWA_COMPAT_STORAGE_KEY);if(e)return e;var n=this.extractCachedContent(t.STORAGE_KEY);return n||null},t.prototype.extractCachedContent=function(t){var e=this.internalStorage.getItem(t);if(e)try{return JSON.parse(e)}catch(t){}return null},t.prototype.storeContentInCache=function(e){this.internalStorage.setItem(t.STORAGE_KEY,JSON.stringify(e))},t.STORAGE_KEY="__web_manifest_reader_storage",t.PWA_COMPAT_STORAGE_KEY="__pwacompat_manifest",t}();e.default=i}]).default}));