(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{135:function(e,t,n){"use strict";n.r(t),n.d(t,"default",function(){return y}),n.d(t,"pageQuery",function(){return b});var r=n(6),a=n.n(r),u=n(141),o=n.n(u),i=n(0),c=n.n(i),f=n(147),l=n(148),d=n.n(l),s=n(139),p=n(146),h=n(142),x=n(143),C=n(176),m=n.n(C);function g(){var e=o()(["\n    width: 80%;"]);return g=function(){return e},e}var v=s.b.div.withConfig({displayName:"search__StyledHome",componentId:"sc-1a2ca53-0"})(["margin:0 auto;padding:0rem 1rem;span{padding:0 1rem 0 0;}",""],Object(h.a)("tablet")(g())),y=function(e){function t(){return e.apply(this,arguments)||this}return a()(t,e),t.prototype.render=function(){var e=this.props.data.site.siteMetadata,t=e.title,n=e.description,r=this.props.data.allMarkdownRemark.group;return c.a.createElement(c.a.Fragment,null,c.a.createElement(f.a,null),c.a.createElement(d.a,{htmlAttributes:{lang:"en"},meta:[{name:"description",content:n}],title:t}),c.a.createElement(v,null,r.map(function(e){return c.a.createElement("span",{key:e.fieldValue},c.a.createElement(x.Link,{to:"/tags/"+m()(e.fieldValue)+"/"},e.fieldValue," (",e.totalCount,")"))})),c.a.createElement(p.a,null))},t}(c.a.PureComponent),b="731455185"},140:function(e,t,n){var r;e.exports=(r=n(144))&&r.default||r},143:function(e,t,n){"use strict";n.r(t),n.d(t,"graphql",function(){return h}),n.d(t,"StaticQueryContext",function(){return s}),n.d(t,"StaticQuery",function(){return p});var r=n(0),a=n.n(r),u=n(4),o=n.n(u),i=n(138),c=n.n(i);n.d(t,"Link",function(){return c.a}),n.d(t,"withPrefix",function(){return i.withPrefix}),n.d(t,"navigate",function(){return i.navigate}),n.d(t,"push",function(){return i.push}),n.d(t,"replace",function(){return i.replace}),n.d(t,"navigateTo",function(){return i.navigateTo});var f=n(140),l=n.n(f);n.d(t,"PageRenderer",function(){return l.a});var d=n(28);n.d(t,"parsePath",function(){return d.a});var s=a.a.createContext({}),p=function(e){return a.a.createElement(s.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):a.a.createElement("div",null,"Loading (StaticQuery)")})};function h(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}p.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}},144:function(e,t,n){"use strict";n.r(t);n(29);var r=n(0),a=n.n(r),u=n(4),o=n.n(u),i=n(46),c=n(2),f=function(e){var t=e.location,n=c.default.getResourcesForPathnameSync(t.pathname);return a.a.createElement(i.a,Object.assign({location:t,pageResources:n},n.json))};f.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},t.default=f},145:function(e,t,n){var r=n(0);function a(e){return r.createElement("svg",e,r.createElement("g",{id:"svgg"},[r.createElement("path",{id:"path0",d:"M229.494 35.630 C 214.627 36.689,197.007 44.078,181.446 55.779 C 160.666 71.404,141.287 95.404,124.051 126.856 C 121.554 131.414,121.379 131.630,120.382 131.408 C 114.843 130.173,108.919 128.500,103.711 126.702 C 83.590 119.754,77.007 120.309,77.445 128.916 C 77.843 136.734,85.543 144.007,101.953 152.064 C 105.928 154.016,109.251 155.666,109.339 155.732 C 109.426 155.798,108.153 158.997,106.510 162.840 C 81.420 221.522,72.517 285.359,84.897 317.800 C 97.549 350.955,132.525 368.607,177.689 364.632 C 207.264 362.029,228.198 348.944,239.063 326.270 C 241.071 322.079,240.727 322.234,243.717 324.167 C 255.912 332.049,279.830 333.568,292.356 327.256 C 309.905 318.415,326.372 289.311,322.431 274.102 C 320.642 267.201,315.447 259.817,311.913 259.154 C 308.000 258.420,305.492 260.602,298.596 270.743 C 284.675 291.216,277.916 296.957,268.385 296.405 C 257.231 295.760,251.005 284.042,243.935 250.391 C 236.970 217.237,226.880 202.230,211.521 202.178 C 199.311 202.137,181.845 222.194,175.749 243.258 L 175.269 244.914 177.608 247.554 C 197.734 270.285,199.716 273.998,199.751 289.063 C 199.792 306.525,194.785 318.126,184.673 323.994 C 175.734 329.182,159.298 324.545,152.691 314.970 C 137.638 293.160,141.882 225.153,161.637 171.608 L 164.258 164.505 167.188 164.252 C 249.906 157.094,291.849 133.002,295.277 90.676 C 298.047 56.467,269.721 32.764,229.494 35.630 M240.857 79.280 C 244.878 81.041,247.246 86.116,247.260 93.004 C 247.295 111.301,226.610 127.276,191.406 136.140 C 186.913 137.272,176.104 139.516,175.940 139.352 C 175.765 139.177,180.523 130.941,184.005 125.391 C 203.786 93.859,228.454 73.851,240.857 79.280 ",stroke:"none",fill:"#fbfbfb",fillRule:"evenodd",key:0}),r.createElement("path",{id:"path1",d:"M0.000 200.000 L 0.000 400.000 200.000 400.000 L 400.000 400.000 400.000 200.000 L 400.000 0.000 200.000 0.000 L 0.000 0.000 0.000 200.000 M250.286 36.715 C 279.919 41.994,297.511 63.094,295.277 90.676 C 291.849 133.002,249.906 157.094,167.188 164.252 L 164.258 164.505 161.637 171.608 C 141.882 225.153,137.638 293.160,152.691 314.970 C 159.298 324.545,175.734 329.182,184.673 323.994 C 194.785 318.126,199.792 306.525,199.751 289.063 C 199.716 273.998,197.734 270.285,177.608 247.554 L 175.269 244.914 175.749 243.258 C 181.845 222.194,199.311 202.137,211.521 202.178 C 226.880 202.230,236.970 217.237,243.935 250.391 C 251.005 284.042,257.231 295.760,268.385 296.405 C 277.916 296.957,284.675 291.216,298.596 270.743 C 305.492 260.602,308.000 258.420,311.913 259.154 C 315.447 259.817,320.642 267.201,322.431 274.102 C 326.372 289.311,309.905 318.415,292.356 327.256 C 279.830 333.568,255.912 332.049,243.717 324.167 C 240.727 322.234,241.071 322.079,239.063 326.270 C 228.198 348.944,207.264 362.029,177.689 364.632 C 132.525 368.607,97.549 350.955,84.897 317.800 C 72.517 285.359,81.420 221.522,106.510 162.840 C 108.153 158.997,109.426 155.798,109.339 155.732 C 109.251 155.666,105.928 154.016,101.953 152.064 C 85.543 144.007,77.843 136.734,77.445 128.916 C 77.007 120.309,83.590 119.754,103.711 126.702 C 108.919 128.500,114.843 130.173,120.382 131.408 C 121.379 131.630,121.554 131.414,124.051 126.856 C 160.303 60.702,205.156 28.674,250.286 36.715 M232.874 78.701 C 221.923 80.740,204.692 95.759,190.527 115.612 C 185.739 122.323,175.529 138.940,175.940 139.352 C 176.104 139.516,186.913 137.272,191.406 136.140 C 226.610 127.276,247.295 111.301,247.260 93.004 C 247.239 82.167,242.037 76.995,232.874 78.701 ",stroke:"none",fill:"#047ccc",fillRule:"evenodd",key:1})]))}a.defaultProps={id:"svg",version:"1.1",width:"400",height:"400",viewBox:"0 0 400 400"},e.exports=a,a.default=a},146:function(e,t,n){"use strict";n.d(t,"a",function(){return c});var r=n(6),a=n.n(r),u=n(0),o=n.n(u),i=n(139).b.div.withConfig({displayName:"Footer__StyledFooter",componentId:"sc-1xqajj9-0"})(["padding:1rem;font-weight:700;text-align:right;"]),c=function(e){function t(){return e.apply(this,arguments)||this}return a()(t,e),t.prototype.render=function(){return o.a.createElement(i,null,"powered by | ",o.a.createElement("a",{href:"https://reactjs.org/",alt:"react"},"react")," | ",o.a.createElement("a",{href:"https://www.gatsbyjs.org/"},"gatsby")," | ",o.a.createElement("a",{href:"https://github.com/"},"github"))},t}(o.a.PureComponent)},147:function(e,t,n){"use strict";var r=n(6),a=n.n(r),u=n(0),o=n.n(u),i=n(145),c=n.n(i),f=n(141),l=n.n(f),d=n(139),s=n(142);function p(){var e=l()(["\nfont-size: 1.5rem;\n"]);return p=function(){return e},e}var h=d.b.ul.withConfig({displayName:"HeaderNav__StyledHeaderNav",componentId:"wnyhma-0"})(["float:right;li{float:left;list-style:none;padding:1rem 0.5rem;}",""],Object(s.a)("tablet")(p())),x=function(e){function t(){return e.apply(this,arguments)||this}return a()(t,e),t.prototype.render=function(){return o.a.createElement(h,null,o.a.createElement("li",null,o.a.createElement("a",{title:"Articles",href:"/tags/article"},"articles")),o.a.createElement("li",null,o.a.createElement("a",{title:"Search",href:"/search"},"search")))},t}(o.a.PureComponent);n.d(t,"a",function(){return m});var C=d.b.div.withConfig({displayName:"Header__StyledHeader",componentId:"sc-9eu2yh-0"})(["padding:1rem;font-weight:700;"]),m=function(e){function t(){return e.apply(this,arguments)||this}return a()(t,e),t.prototype.render=function(){return o.a.createElement(C,null,o.a.createElement("a",{href:"/",alt:"home"},o.a.createElement(c.a,{height:60,width:60})),o.a.createElement(x,null))},t}(o.a.PureComponent)},154:function(e,t,n){var r=n(183).Symbol;e.exports=r},156:function(e,t,n){var r=n(182);e.exports=function(e){return null==e?"":r(e)}},176:function(e,t,n){var r=n(177)(function(e,t,n){return e+(n?"-":"")+t.toLowerCase()});e.exports=r},177:function(e,t,n){var r=n(178),a=n(179),u=n(192),o=RegExp("['’]","g");e.exports=function(e){return function(t){return r(u(a(t).replace(o,"")),e,"")}}},178:function(e,t){e.exports=function(e,t,n,r){var a=-1,u=null==e?0:e.length;for(r&&u&&(n=e[++a]);++a<u;)n=t(n,e[a],a,e);return n}},179:function(e,t,n){var r=n(180),a=n(156),u=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,o=RegExp("[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]","g");e.exports=function(e){return(e=a(e))&&e.replace(u,r).replace(o,"")}},180:function(e,t,n){var r=n(181)({"À":"A","Á":"A","Â":"A","Ã":"A","Ä":"A","Å":"A","à":"a","á":"a","â":"a","ã":"a","ä":"a","å":"a","Ç":"C","ç":"c","Ð":"D","ð":"d","È":"E","É":"E","Ê":"E","Ë":"E","è":"e","é":"e","ê":"e","ë":"e","Ì":"I","Í":"I","Î":"I","Ï":"I","ì":"i","í":"i","î":"i","ï":"i","Ñ":"N","ñ":"n","Ò":"O","Ó":"O","Ô":"O","Õ":"O","Ö":"O","Ø":"O","ò":"o","ó":"o","ô":"o","õ":"o","ö":"o","ø":"o","Ù":"U","Ú":"U","Û":"U","Ü":"U","ù":"u","ú":"u","û":"u","ü":"u","Ý":"Y","ý":"y","ÿ":"y","Æ":"Ae","æ":"ae","Þ":"Th","þ":"th","ß":"ss","Ā":"A","Ă":"A","Ą":"A","ā":"a","ă":"a","ą":"a","Ć":"C","Ĉ":"C","Ċ":"C","Č":"C","ć":"c","ĉ":"c","ċ":"c","č":"c","Ď":"D","Đ":"D","ď":"d","đ":"d","Ē":"E","Ĕ":"E","Ė":"E","Ę":"E","Ě":"E","ē":"e","ĕ":"e","ė":"e","ę":"e","ě":"e","Ĝ":"G","Ğ":"G","Ġ":"G","Ģ":"G","ĝ":"g","ğ":"g","ġ":"g","ģ":"g","Ĥ":"H","Ħ":"H","ĥ":"h","ħ":"h","Ĩ":"I","Ī":"I","Ĭ":"I","Į":"I","İ":"I","ĩ":"i","ī":"i","ĭ":"i","į":"i","ı":"i","Ĵ":"J","ĵ":"j","Ķ":"K","ķ":"k","ĸ":"k","Ĺ":"L","Ļ":"L","Ľ":"L","Ŀ":"L","Ł":"L","ĺ":"l","ļ":"l","ľ":"l","ŀ":"l","ł":"l","Ń":"N","Ņ":"N","Ň":"N","Ŋ":"N","ń":"n","ņ":"n","ň":"n","ŋ":"n","Ō":"O","Ŏ":"O","Ő":"O","ō":"o","ŏ":"o","ő":"o","Ŕ":"R","Ŗ":"R","Ř":"R","ŕ":"r","ŗ":"r","ř":"r","Ś":"S","Ŝ":"S","Ş":"S","Š":"S","ś":"s","ŝ":"s","ş":"s","š":"s","Ţ":"T","Ť":"T","Ŧ":"T","ţ":"t","ť":"t","ŧ":"t","Ũ":"U","Ū":"U","Ŭ":"U","Ů":"U","Ű":"U","Ų":"U","ũ":"u","ū":"u","ŭ":"u","ů":"u","ű":"u","ų":"u","Ŵ":"W","ŵ":"w","Ŷ":"Y","ŷ":"y","Ÿ":"Y","Ź":"Z","Ż":"Z","Ž":"Z","ź":"z","ż":"z","ž":"z","Ĳ":"IJ","ĳ":"ij","Œ":"Oe","œ":"oe","ŉ":"'n","ſ":"s"});e.exports=r},181:function(e,t){e.exports=function(e){return function(t){return null==e?void 0:e[t]}}},182:function(e,t,n){var r=n(154),a=n(185),u=n(186),o=n(187),i=1/0,c=r?r.prototype:void 0,f=c?c.toString:void 0;e.exports=function e(t){if("string"==typeof t)return t;if(u(t))return a(t,e)+"";if(o(t))return f?f.call(t):"";var n=t+"";return"0"==n&&1/t==-i?"-0":n}},183:function(e,t,n){var r=n(184),a="object"==typeof self&&self&&self.Object===Object&&self,u=r||a||Function("return this")();e.exports=u},184:function(e,t,n){(function(t){var n="object"==typeof t&&t&&t.Object===Object&&t;e.exports=n}).call(this,n(66))},185:function(e,t){e.exports=function(e,t){for(var n=-1,r=null==e?0:e.length,a=Array(r);++n<r;)a[n]=t(e[n],n,e);return a}},186:function(e,t){var n=Array.isArray;e.exports=n},187:function(e,t,n){var r=n(188),a=n(191),u="[object Symbol]";e.exports=function(e){return"symbol"==typeof e||a(e)&&r(e)==u}},188:function(e,t,n){var r=n(154),a=n(189),u=n(190),o="[object Null]",i="[object Undefined]",c=r?r.toStringTag:void 0;e.exports=function(e){return null==e?void 0===e?i:o:c&&c in Object(e)?a(e):u(e)}},189:function(e,t,n){var r=n(154),a=Object.prototype,u=a.hasOwnProperty,o=a.toString,i=r?r.toStringTag:void 0;e.exports=function(e){var t=u.call(e,i),n=e[i];try{e[i]=void 0;var r=!0}catch(e){}var a=o.call(e);return r&&(t?e[i]=n:delete e[i]),a}},190:function(e,t){var n=Object.prototype.toString;e.exports=function(e){return n.call(e)}},191:function(e,t){e.exports=function(e){return null!=e&&"object"==typeof e}},192:function(e,t,n){var r=n(193),a=n(194),u=n(156),o=n(195);e.exports=function(e,t,n){return e=u(e),void 0===(t=n?void 0:t)?a(e)?o(e):r(e):e.match(t)||[]}},193:function(e,t){var n=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;e.exports=function(e){return e.match(n)||[]}},194:function(e,t){var n=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;e.exports=function(e){return n.test(e)}},195:function(e,t){var n="\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",r="["+n+"]",a="\\d+",u="[\\u2700-\\u27bf]",o="[a-z\\xdf-\\xf6\\xf8-\\xff]",i="[^\\ud800-\\udfff"+n+a+"\\u2700-\\u27bfa-z\\xdf-\\xf6\\xf8-\\xffA-Z\\xc0-\\xd6\\xd8-\\xde]",c="(?:\\ud83c[\\udde6-\\uddff]){2}",f="[\\ud800-\\udbff][\\udc00-\\udfff]",l="[A-Z\\xc0-\\xd6\\xd8-\\xde]",d="(?:"+o+"|"+i+")",s="(?:"+l+"|"+i+")",p="(?:[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]|\\ud83c[\\udffb-\\udfff])?",h="[\\ufe0e\\ufe0f]?"+p+("(?:\\u200d(?:"+["[^\\ud800-\\udfff]",c,f].join("|")+")[\\ufe0e\\ufe0f]?"+p+")*"),x="(?:"+[u,c,f].join("|")+")"+h,C=RegExp([l+"?"+o+"+(?:['’](?:d|ll|m|re|s|t|ve))?(?="+[r,l,"$"].join("|")+")",s+"+(?:['’](?:D|LL|M|RE|S|T|VE))?(?="+[r,l+d,"$"].join("|")+")",l+"?"+d+"+(?:['’](?:d|ll|m|re|s|t|ve))?",l+"+(?:['’](?:D|LL|M|RE|S|T|VE))?","\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])","\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",a,x].join("|"),"g");e.exports=function(e){return e.match(C)||[]}}}]);
//# sourceMappingURL=component---src-pages-search-js-9f4814311e8b57196cbf.js.map