!function(e,t){if("object"==typeof exports&&"object"==typeof module)module.exports=t();else if("function"==typeof define&&define.amd)define([],t);else{var n=t();for(var r in n)("object"==typeof exports?exports:e)[r]=n[r]}}(window,function(){return r={},o.m=n=[function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(1);t.default=new r.default},function(e,t,n){"use strict";var r=this&&this.__awaiter||function(e,a,u,f){return new(u=u||Promise)(function(n,t){function r(e){try{i(f.next(e))}catch(e){t(e)}}function o(e){try{i(f.throw(e))}catch(e){t(e)}}function i(e){var t;e.done?n(e.value):((t=e.value)instanceof u?t:new u(function(e){e(t)})).then(r,o)}i((f=f.apply(e,a||[])).next())})},o=this&&this.__generator||function(n,r){var o,i,a,e,u={label:0,sent:function(){if(1&a[0])throw a[1];return a[1]},trys:[],ops:[]};return e={next:t(0),throw:t(1),return:t(2)},"function"==typeof Symbol&&(e[Symbol.iterator]=function(){return this}),e;function t(t){return function(e){return function(t){if(o)throw new TypeError("Generator is already executing.");for(;u;)try{if(o=1,i&&(a=2&t[0]?i.return:t[0]?i.throw||((a=i.return)&&a.call(i),0):i.next)&&!(a=a.call(i,t[1])).done)return a;switch(i=0,a&&(t=[2&t[0],a.value]),t[0]){case 0:case 1:a=t;break;case 4:return u.label++,{value:t[1],done:!1};case 5:u.label++,i=t[1],t=[0];continue;case 7:t=u.ops.pop(),u.trys.pop();continue;default:if(!(a=0<(a=u.trys).length&&a[a.length-1])&&(6===t[0]||2===t[0])){u=0;continue}if(3===t[0]&&(!a||t[1]>a[0]&&t[1]<a[3])){u.label=t[1];break}if(6===t[0]&&u.label<a[1]){u.label=a[1],a=t;break}if(a&&u.label<a[2]){u.label=a[2],u.ops.push(t);break}a[2]&&u.ops.pop(),u.trys.pop();continue}t=r.call(n,u)}catch(e){t=[6,e],i=0}finally{o=a=0}if(5&t[0])throw t[1];return{value:t[0]?t[1]:void 0,done:!0}}([t,e])}}};Object.defineProperty(t,"__esModule",{value:!0});var i=(a.prototype.read=function(){return r(this,void 0,void 0,function(){var t,n,r;return o(this,function(e){switch(e.label){case 0:if(void 0!==this.manifestData){if(this.manifestData instanceof Error)throw this.manifestData;return[2,this.manifestData]}if(!(t=this.getManifestPath()))throw new Error("No manifest declaration found.");e.label=1;case 1:return e.trys.push([1,3,,4]),[4,(n=this).getManifestContent(t)];case 2:return n.manifestData=e.sent(),[3,4];case 3:throw r=e.sent(),this.manifestData=r;case 4:return[2,this.manifestData]}})})},a.prototype.getManifestContent=function(t){return r(this,void 0,void 0,function(){return o(this,function(e){switch(e.label){case 0:return[4,fetch(t)];case 1:return[4,e.sent().json()];case 2:return[2,e.sent()]}})})},a.prototype.getManifestPath=function(){var e=document.head.querySelector('link[rel="manifest"]');return e?e.href:null},a);function a(){}t.default=i}],o.c=r,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)o.d(n,r,function(e){return t[e]}.bind(null,r));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="",o(o.s=0);function o(e){if(r[e])return r[e].exports;var t=r[e]={i:e,l:!1,exports:{}};return n[e].call(t.exports,t,t.exports,o),t.l=!0,t.exports}var n,r});