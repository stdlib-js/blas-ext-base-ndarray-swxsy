"use strict";var q=function(e,r){return function(){try{return r||e((r={exports:{}}).exports,r),r.exports}catch(t){throw (r=0, t)}};};var n=q(function(g,v){
var d=require('@stdlib/ndarray-base-numel-dimension/dist'),u=require('@stdlib/ndarray-base-stride/dist'),a=require('@stdlib/ndarray-base-offset/dist'),s=require('@stdlib/ndarray-base-data-buffer/dist'),o=require('@stdlib/blas-ext-base-swxsy/dist').ndarray;function x(e){var r=e[0],t=e[1],i=e[2];return o(d(r,0),s(r),u(r,0),a(r),s(t),u(t,0),a(t),s(i),u(i,0),a(i)),i}v.exports=x
});var c=n();module.exports=c;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
