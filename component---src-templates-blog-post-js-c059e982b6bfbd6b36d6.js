(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{131:function(e,t,n){"use strict";n.r(t),n.d(t,"default",function(){return _}),n.d(t,"pageQuery",function(){return I});var r=n(6),o=n.n(r),i=n(140),a=n.n(i),s=n(0),u=n.n(s),l=n(148),c=n.n(l),d=n(143),p=n(147),f=n(146),m=n(139),h=n(142),y=n(172),g=n(149);function b(){var e=a()(["\n    width: 80%;"]);return b=function(){return e},e}var w=m.b.div.withConfig({displayName:"blog-post__StyledBlog",componentId:"sc-1g2ojw6-0"})(["margin:0 auto;padding:0rem 1rem;div{text-align:justify;}ul.navigator{list-style-type:none;text-align:center;}",""],Object(h.a)("tablet")(b())),v=m.b.p.withConfig({displayName:"blog-post__StyleBlogSubHeading",componentId:"sc-1g2ojw6-1"})(["color:",""],g.pallet.secondary),E=m.b.p.withConfig({displayName:"blog-post__StyleBlogDate",componentId:"sc-1g2ojw6-2"})(["color:",";font-style:italic;text-align:right"],g.pallet.tertiary),_=function(e){function t(){return e.apply(this,arguments)||this}return o()(t,e),t.prototype.render=function(){var e=this.props.data.markdownRemark,t=this.props.data.site.siteMetadata.title,n=this.props.data.site.siteMetadata.siteUrl,r=e.excerpt,o=this.props.pageContext,i=o.previous,a=o.next,s={url:n+e.fields.slug,identifier:e.fields.slug,title:e.frontmatter.title};return u.a.createElement(u.a.Fragment,null,u.a.createElement(p.a,null),u.a.createElement(c.a,{htmlAttributes:{lang:"en"},meta:[{name:"description",content:r}],title:e.frontmatter.title+" | "+t}),u.a.createElement(w,null,u.a.createElement("h1",null,u.a.createElement("a",{href:"#",alt:"{post.frontmatter.title}"},e.frontmatter.title)),u.a.createElement(v,null,e.frontmatter.subTitle),u.a.createElement(E,null,e.frontmatter.date),u.a.createElement("div",{dangerouslySetInnerHTML:{__html:e.html}}),u.a.createElement("p",null,u.a.createElement("a",{href:"/categories/"+e.frontmatter.categories,alt:e.frontmatter.categories},e.frontmatter.categories)),u.a.createElement(y.DiscussionEmbed,{shortname:"paul-blog",config:s}),u.a.createElement("hr",null),u.a.createElement("ul",{className:"navigator"},u.a.createElement("li",null,i&&u.a.createElement(d.Link,{to:i.fields.slug,rel:"prev"},"← ",i.frontmatter.title)),u.a.createElement("li",null,a&&u.a.createElement(d.Link,{to:a.fields.slug,rel:"next"},a.frontmatter.title," →")))),u.a.createElement(f.a,null))},t}(u.a.Component),I="3401492644"},141:function(e,t,n){var r;e.exports=(r=n(144))&&r.default||r},143:function(e,t,n){"use strict";n.r(t),n.d(t,"graphql",function(){return m}),n.d(t,"StaticQueryContext",function(){return p}),n.d(t,"StaticQuery",function(){return f});var r=n(0),o=n.n(r),i=n(4),a=n.n(i),s=n(138),u=n.n(s);n.d(t,"Link",function(){return u.a}),n.d(t,"withPrefix",function(){return s.withPrefix}),n.d(t,"navigate",function(){return s.navigate}),n.d(t,"push",function(){return s.push}),n.d(t,"replace",function(){return s.replace}),n.d(t,"navigateTo",function(){return s.navigateTo});var l=n(141),c=n.n(l);n.d(t,"PageRenderer",function(){return c.a});var d=n(28);n.d(t,"parsePath",function(){return d.a});var p=o.a.createContext({}),f=function(e){return o.a.createElement(p.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):o.a.createElement("div",null,"Loading (StaticQuery)")})};function m(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}f.propTypes={data:a.a.object,query:a.a.string.isRequired,render:a.a.func,children:a.a.func}},144:function(e,t,n){"use strict";n.r(t);n(29);var r=n(0),o=n.n(r),i=n(4),a=n.n(i),s=n(46),u=n(2),l=function(e){var t=e.location,n=u.default.getResourcesForPathnameSync(t.pathname);return o.a.createElement(s.a,Object.assign({location:t,pageResources:n},n.json))};l.propTypes={location:a.a.shape({pathname:a.a.string.isRequired}).isRequired},t.default=l},145:function(e,t,n){var r=n(0);function o(e){return r.createElement("svg",e,r.createElement("g",{transform:"translate(0.000000,512.000000) scale(0.100000,-0.100000)",fill:"#000000",stroke:"none"},[r.createElement("path",{d:"M0 2560 l0 -2560 2560 0 2560 0 0 2560 0 2560 -2560 0 -2560 0 0\r\n-2560z m3317 2231 c167 -42 276 -103 379 -213 69 -74 104 -131 141 -226 21\r\n-55 27 -90 31 -192 5 -143 -10 -239 -56 -349 -147 -349 -572 -592 -1232 -705\r\n-153 -26 -402 -56 -468 -56 l-38 0 -46 -127 c-118 -328 -188 -651 -217 -998\r\n-45 -537 1 -840 149 -985 42 -41 65 -54 131 -75 91 -28 181 -33 235 -10 46 19\r\n133 108 167 172 38 72 58 176 58 307 0 188 -28 251 -198 450 -65 76 -122 144\r\n-128 152 -22 31 70 238 159 357 69 91 169 187 226 218 34 18 60 23 110 23 207\r\n-2 340 -190 435 -614 109 -488 177 -636 309 -671 56 -15 131 2 188 44 64 45\r\n145 141 251 297 101 147 139 179 192 166 37 -10 80 -57 117 -130 40 -78 48\r\n-172 24 -266 -23 -91 -94 -233 -164 -326 -149 -199 -288 -274 -507 -274 -154\r\n1 -333 42 -408 95 -12 8 -25 15 -29 15 -3 0 -25 -35 -48 -78 -105 -196 -305\r\n-364 -515 -431 -249 -80 -595 -91 -847 -27 -332 84 -573 264 -698 521 -92 187\r\n-126 384 -115 650 22 532 143 1050 369 1573 20 46 36 85 36 86 0 2 -51 29\r\n-112 59 -192 96 -293 186 -319 281 -15 55 2 113 38 127 40 15 171 -7 297 -50\r\n149 -51 268 -79 273 -64 11 31 154 273 228 383 337 504 723 812 1135 905 95\r\n22 358 14 467 -14z",key:0}),r.createElement("path",{d:"M2975 4209 c-154 -54 -368 -249 -542 -494 -65 -93 -195 -306 -190\r\n-312 9 -8 240 48 362 88 157 52 284 114 383 188 94 72 142 128 183 215 25 53\r\n30 78 30 134 0 165 -83 231 -226 181z",key:1})]))}o.defaultProps={version:"1.0",width:"512.000000pt",height:"512.000000pt",viewBox:"0 0 512.000000 512.000000",preserveAspectRatio:"xMidYMid meet"},e.exports=o,o.default=o},146:function(e,t,n){"use strict";n.d(t,"a",function(){return u});var r=n(6),o=n.n(r),i=n(0),a=n.n(i),s=n(139).b.div.withConfig({displayName:"Footer__StyledFooter",componentId:"sc-1xqajj9-0"})(["padding:1rem;font-weight:700;text-align:right;"]),u=function(e){function t(){return e.apply(this,arguments)||this}return o()(t,e),t.prototype.render=function(){return a.a.createElement(s,null,"powered by | ",a.a.createElement("a",{href:"https://reactjs.org/",alt:"react"},"react")," | ",a.a.createElement("a",{href:"https://www.gatsbyjs.org/"},"gatsby")," | ",a.a.createElement("a",{href:"https://github.com/"},"github"))},t}(a.a.PureComponent)},147:function(e,t,n){"use strict";var r=n(6),o=n.n(r),i=n(0),a=n.n(i),s=n(145),u=n.n(s),l=n(140),c=n.n(l),d=n(139),p=n(142);function f(){var e=c()(["\nfont-size: 1.5rem;\n"]);return f=function(){return e},e}var m=d.b.ul.withConfig({displayName:"HeaderNav__StyledHeaderNav",componentId:"wnyhma-0"})(["float:right;li{float:left;list-style:none;padding:1rem 0.5rem;}",""],Object(p.a)("tablet")(f())),h=function(e){function t(){return e.apply(this,arguments)||this}return o()(t,e),t.prototype.render=function(){return a.a.createElement(m,null,a.a.createElement("li",null,a.a.createElement("a",{title:"Tags",href:"/tags"},"Tags")))},t}(a.a.PureComponent);n.d(t,"a",function(){return g});var y=d.b.div.withConfig({displayName:"Header__StyledHeader",componentId:"sc-9eu2yh-0"})(["padding:1rem;font-weight:700;"]),g=function(e){function t(){return e.apply(this,arguments)||this}return o()(t,e),t.prototype.render=function(){return a.a.createElement(y,null,a.a.createElement("a",{href:"/","aria-label":"Home",alt:"home"},a.a.createElement(u.a,{height:60,width:60})),a.a.createElement(h,null))},t}(a.a.PureComponent)},149:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.pallet=t.theme=void 0;var r,o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},i=n(150),a=(r=i)&&r.__esModule?r:{default:r},s=n(151);function u(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var l={primary:"#3A3A38",secondary:"#FF0084",tertiary:"#797975"},c={title:"Paul Blog Theme",baseFontSize:"16px",baseLineHeight:1.75,scaleRatio:2.5,googleFonts:[{name:"Montserrat",styles:["700"]},{name:"Merriweather",styles:["400","400i","700","700i","900","900i"]}],headerFontFamily:["Merriweather","Georgia","serif"],bodyFontFamily:["Merriweather","Georgia","serif"],bodyColor:l.primary,headerWeight:900,bodyWeight:400,boldWeight:700,overrideStyles:function(e,t){var n,r=e.adjustFontSizeTo,i=e.scale,c=e.rhythm;return u(n={h1:{fontFamily:["Montserrat","sans-serif"].join(",")},code:{color:l.secondary},blockquote:o({},i(.2),{color:l.secondary,fontStyle:"italic",paddingLeft:c(.8125),marginLeft:c(-1),borderLeft:c(3/16)+" solid "+(0,a.default)(10)}),"blockquote > :last-child":{marginBottom:0},"blockquote cite":o({},r(t.baseFontSize),{color:t.bodyColor,fontWeight:t.bodyWeight}),"blockquote cite:before":{content:'"— "'},ul:{listStyle:"disc"},"ul,ol":{marginLeft:0}},s.MOBILE_MEDIA_QUERY,{"ul,ol":{marginLeft:c(1)},blockquote:{marginLeft:c(-.75),marginRight:0,paddingLeft:c(9/16)}}),u(n,"h1,h2,h3,h4,h5,h6",{marginTop:c(2)}),u(n,"h4",{letterSpacing:"0.140625em",textTransform:"uppercase"}),u(n,"h6",{fontStyle:"italic"}),u(n,"a",{boxShadow:"0 1px 0 0 currentColor",color:l.tertiary,textDecoration:"none"}),u(n,"a:hover,a:active",{boxShadow:"none"}),u(n,"mark,ins",{background:"#007acc",color:"white",padding:c(1/16)+" "+c(1/8),textDecoration:"none"}),n}};t.theme=c,t.pallet=l},150:function(e,t){function n(e){return!isNaN(parseFloat(e))&&isFinite(e)}e.exports=function(e,t,r){if(void 0===t&&(t=0),void 0===r&&(r=!1),"cool"===t?t=237:"slate"===t?t=122:"warm"===t&&(t=69),!n(t))throw new Error("Hue is not a number");if(!n(e))throw new Error("Lightness is not a number");e>100&&(e=100),e<0&&(e=0);var o=0;if(0!==t){o=19.92978+-.3651759*e+.001737214*Math.pow(e,2)}var i=0;return r?(i=e/100,e="100%,"):(i=(100-e)/100,e="0%,"),"hsla("+t+","+o+"%,"+e+i+")"}},151:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.LARGER_DISPLAY_WIDTH="1600px",t.LARGE_DISPLAY_WIDTH="1280px",t.DEFAULT_WIDTH="980px",t.TABLET_WIDTH="768px",t.MOBILE_WIDTH="480px",t.LARGER_DISPLAY_MEDIA_QUERY="@media only screen and (max-width:1600px)",t.LARGE_DISPLAY_MEDIA_QUERY="@media only screen and (max-width:1280px)",t.DEFAULT_MEDIA_QUERY="@media only screen and (max-width:980px)",t.TABLET_MEDIA_QUERY="@media only screen and (max-width:768px)",t.MOBILE_MEDIA_QUERY="@media only screen and (max-width:480px)",t.MIN_LARGER_DISPLAY_MEDIA_QUERY="@media (min-width:1600px)",t.MIN_LARGE_DISPLAY_MEDIA_QUERY="@media (min-width:1280px)",t.MIN_DEFAULT_MEDIA_QUERY="@media (min-width:980px)",t.MIN_TABLET_MEDIA_QUERY="@media (min-width:768px)",t.MIN_MOBILE_MEDIA_QUERY="@media (min-width:480px)"},154:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.insertScript=function(e,t,n){var r=window.document.createElement("script");return r.async=!0,r.src=e,r.id=t,n.appendChild(r),r},t.removeScript=function(e,t){var n=window.document.getElementById(e);n&&t.removeChild(n)},t.debounce=function(e,t,n){var r=void 0;return function(){var o=this,i=arguments,a=n&&!r;window.clearTimeout(r),r=setTimeout(function(){r=null,n||e.apply(o,i)},t),a&&e.apply(o,i)}}},172:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.DiscussionEmbed=t.CommentEmbed=t.CommentCount=void 0;var r=n(173),o=n(174),i=n(175);t.CommentCount=r.CommentCount,t.CommentEmbed=o.CommentEmbed,t.DiscussionEmbed=i.DiscussionEmbed;var a={CommentCount:r.CommentCount,CommentEmbed:o.CommentEmbed,DiscussionEmbed:i.DiscussionEmbed};t.default=a},173:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.CommentCount=void 0;var r,o=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),i=n(0),a=(r=i)&&r.__esModule?r:{default:r},s=n(154);var u=(0,s.debounce)(function(){window.DISQUSWIDGETS&&window.DISQUSWIDGETS.getCount({reset:!0})},300,!1);t.CommentCount=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,a.default.Component),o(t,[{key:"componentDidMount",value:function(){this.loadInstance()}},{key:"shouldComponentUpdate",value:function(e){if(this.props.shortname!==e.shortname)return!0;var t=e.config,n=this.props.config;return t.url!==n.url&&t.identifier!==n.identifier}},{key:"componentWillUpdate",value:function(e){this.props.shortname!==e.shortname&&this.cleanInstance()}},{key:"componentDidUpdate",value:function(){this.loadInstance()}},{key:"loadInstance",value:function(){var e=window.document;e.getElementById("dsq-count-scr")?u():(0,s.insertScript)("https://"+this.props.shortname+".disqus.com/count.js","dsq-count-scr",e.body)}},{key:"cleanInstance",value:function(){var e=window.document.body;(0,s.removeScript)("dsq-count-scr",e),window.DISQUSWIDGETS=void 0}},{key:"render",value:function(){return a.default.createElement("span",{className:"disqus-comment-count","data-disqus-identifier":this.props.config.identifier,"data-disqus-url":this.props.config.url},this.props.children)}}]),t}()},174:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.CommentEmbed=void 0;var r,o=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),i=n(0),a=(r=i)&&r.__esModule?r:{default:r};(t.CommentEmbed=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,a.default.Component),o(t,[{key:"getSrc",value:function(){return"https://embed.disqus.com/p/"+Number(this.props.commentId).toString(36)+"?p="+(this.props.showParentComment?"1":"0")+"&m="+(this.props.showMedia?"1":"0")}},{key:"render",value:function(){return a.default.createElement("iframe",{src:this.getSrc(),width:this.props.width,height:this.props.height,seamless:"seamless",scrolling:"no",frameBorder:"0"})}}]),t}()).defaultProps={showMedia:!0,showParentComment:!0,width:420,height:320}},175:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.DiscussionEmbed=void 0;var r,o=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),i=n(0),a=(r=i)&&r.__esModule?r:{default:r},s=n(154);t.DiscussionEmbed=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,a.default.Component),o(t,[{key:"componentWillMount",value:function(){"undefined"!=typeof window&&window.disqus_shortname&&window.disqus_shortname!==this.props.shortname&&this.cleanInstance()}},{key:"componentDidMount",value:function(){this.loadInstance()}},{key:"shouldComponentUpdate",value:function(e){if(this.props.shortname!==e.shortname)return!0;var t=e.config,n=this.props.config;return t.url!==n.url&&t.identifier!==n.identifier}},{key:"componentWillUpdate",value:function(e){this.props.shortname!==e.shortname&&this.cleanInstance()}},{key:"componentDidUpdate",value:function(){this.loadInstance()}},{key:"loadInstance",value:function(){var e=window.document;window&&window.DISQUS&&e.getElementById("dsq-embed-scr")?window.DISQUS.reset({reload:!0,config:this.getDisqusConfig(this.props.config)}):(window.disqus_config=this.getDisqusConfig(this.props.config),window.disqus_shortname=this.props.shortname,(0,s.insertScript)("https://"+this.props.shortname+".disqus.com/embed.js","dsq-embed-scr",e.body))}},{key:"cleanInstance",value:function(){var e=window.document;(0,s.removeScript)("dsq-embed-scr",e.body),window&&window.DISQUS&&window.DISQUS.reset({});try{delete window.DISQUS}catch(e){window.DISQUS=void 0}var t=e.getElementById("disqus_thread");if(t)for(;t.hasChildNodes();)t.removeChild(t.firstChild)}},{key:"getDisqusConfig",value:function(e){return function(){this.page.identifier=e.identifier,this.page.url=e.url,this.page.title=e.title,this.callbacks.onNewComment=[e.onNewComment]}}},{key:"render",value:function(){return a.default.createElement("div",{id:"disqus_thread"})}}]),t}()}}]);
//# sourceMappingURL=component---src-templates-blog-post-js-c059e982b6bfbd6b36d6.js.map