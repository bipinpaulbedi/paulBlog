(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{131:function(e,t,n){"use strict";n.r(t),n.d(t,"default",function(){return g}),n.d(t,"pageQuery",function(){return v});var r=n(6),o=n.n(r),i=n(141),a=n.n(i),u=n(0),s=n.n(u),c=n(148),l=n.n(c),d=n(143),f=n(147),p=n(146),m=n(139),h=n(142),y=n(150);function w(){var e=a()(["\n    width: 80%;"]);return w=function(){return e},e}var b=m.b.div.withConfig({displayName:"blog-post__StyledBlog",componentId:"sc-1g2ojw6-0"})(["margin:0 auto;padding:0rem 1rem;div{text-align:justify;}ul.navigator{list-style-type:none;text-align:center;}",""],Object(h.a)("tablet")(w())),g=function(e){function t(){return e.apply(this,arguments)||this}return o()(t,e),t.prototype.render=function(){var e=this.props.data.markdownRemark,t=this.props.data.site.siteMetadata.title,n=this.props.data.site.siteMetadata.siteUrl,r=e.excerpt,o=this.props.pageContext,i=o.previous,a=o.next,u={url:n+e.fields.slug,identifier:e.fields.slug,title:e.frontmatter.title};return s.a.createElement(s.a.Fragment,null,s.a.createElement(f.a,null),s.a.createElement(l.a,{htmlAttributes:{lang:"en"},meta:[{name:"description",content:r}],title:e.frontmatter.title+" | "+t}),s.a.createElement(b,null,s.a.createElement("h1",null,s.a.createElement("a",{href:"#",alt:"{post.frontmatter.title}"},e.frontmatter.title)),s.a.createElement("p",null,e.frontmatter.date),s.a.createElement("div",{dangerouslySetInnerHTML:{__html:e.html}}),s.a.createElement("p",null,s.a.createElement("a",{href:"/categories/"+e.frontmatter.categories,alt:e.frontmatter.categories},e.frontmatter.categories)),s.a.createElement(y.DiscussionEmbed,{shortname:"paul-blog",config:u}),s.a.createElement("hr",null),s.a.createElement("ul",{className:"navigator"},s.a.createElement("li",null,i&&s.a.createElement(d.Link,{to:i.fields.slug,rel:"prev"},"← ",i.frontmatter.title)),s.a.createElement("li",null,a&&s.a.createElement(d.Link,{to:a.fields.slug,rel:"next"},a.frontmatter.title," →")))),s.a.createElement(p.a,null))},t}(s.a.Component),v="60424810"},140:function(e,t,n){var r;e.exports=(r=n(144))&&r.default||r},143:function(e,t,n){"use strict";n.r(t),n.d(t,"graphql",function(){return m}),n.d(t,"StaticQueryContext",function(){return f}),n.d(t,"StaticQuery",function(){return p});var r=n(0),o=n.n(r),i=n(4),a=n.n(i),u=n(138),s=n.n(u);n.d(t,"Link",function(){return s.a}),n.d(t,"withPrefix",function(){return u.withPrefix}),n.d(t,"navigate",function(){return u.navigate}),n.d(t,"push",function(){return u.push}),n.d(t,"replace",function(){return u.replace}),n.d(t,"navigateTo",function(){return u.navigateTo});var c=n(140),l=n.n(c);n.d(t,"PageRenderer",function(){return l.a});var d=n(28);n.d(t,"parsePath",function(){return d.a});var f=o.a.createContext({}),p=function(e){return o.a.createElement(f.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):o.a.createElement("div",null,"Loading (StaticQuery)")})};function m(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}p.propTypes={data:a.a.object,query:a.a.string.isRequired,render:a.a.func,children:a.a.func}},144:function(e,t,n){"use strict";n.r(t);n(29);var r=n(0),o=n.n(r),i=n(4),a=n.n(i),u=n(46),s=n(2),c=function(e){var t=e.location,n=s.default.getResourcesForPathnameSync(t.pathname);return o.a.createElement(u.a,Object.assign({location:t,pageResources:n},n.json))};c.propTypes={location:a.a.shape({pathname:a.a.string.isRequired}).isRequired},t.default=c},145:function(e,t,n){var r=n(0);function o(e){return r.createElement("svg",e,r.createElement("g",{transform:"translate(0.000000,512.000000) scale(0.100000,-0.100000)",fill:"#000000",stroke:"none"},[r.createElement("path",{d:"M0 2560 l0 -2560 2560 0 2560 0 0 2560 0 2560 -2560 0 -2560 0 0\r\n-2560z m3317 2231 c167 -42 276 -103 379 -213 69 -74 104 -131 141 -226 21\r\n-55 27 -90 31 -192 5 -143 -10 -239 -56 -349 -147 -349 -572 -592 -1232 -705\r\n-153 -26 -402 -56 -468 -56 l-38 0 -46 -127 c-118 -328 -188 -651 -217 -998\r\n-45 -537 1 -840 149 -985 42 -41 65 -54 131 -75 91 -28 181 -33 235 -10 46 19\r\n133 108 167 172 38 72 58 176 58 307 0 188 -28 251 -198 450 -65 76 -122 144\r\n-128 152 -22 31 70 238 159 357 69 91 169 187 226 218 34 18 60 23 110 23 207\r\n-2 340 -190 435 -614 109 -488 177 -636 309 -671 56 -15 131 2 188 44 64 45\r\n145 141 251 297 101 147 139 179 192 166 37 -10 80 -57 117 -130 40 -78 48\r\n-172 24 -266 -23 -91 -94 -233 -164 -326 -149 -199 -288 -274 -507 -274 -154\r\n1 -333 42 -408 95 -12 8 -25 15 -29 15 -3 0 -25 -35 -48 -78 -105 -196 -305\r\n-364 -515 -431 -249 -80 -595 -91 -847 -27 -332 84 -573 264 -698 521 -92 187\r\n-126 384 -115 650 22 532 143 1050 369 1573 20 46 36 85 36 86 0 2 -51 29\r\n-112 59 -192 96 -293 186 -319 281 -15 55 2 113 38 127 40 15 171 -7 297 -50\r\n149 -51 268 -79 273 -64 11 31 154 273 228 383 337 504 723 812 1135 905 95\r\n22 358 14 467 -14z",key:0}),r.createElement("path",{d:"M2975 4209 c-154 -54 -368 -249 -542 -494 -65 -93 -195 -306 -190\r\n-312 9 -8 240 48 362 88 157 52 284 114 383 188 94 72 142 128 183 215 25 53\r\n30 78 30 134 0 165 -83 231 -226 181z",key:1})]))}o.defaultProps={version:"1.0",width:"512.000000pt",height:"512.000000pt",viewBox:"0 0 512.000000 512.000000",preserveAspectRatio:"xMidYMid meet"},e.exports=o,o.default=o},146:function(e,t,n){"use strict";n.d(t,"a",function(){return s});var r=n(6),o=n.n(r),i=n(0),a=n.n(i),u=n(139).b.div.withConfig({displayName:"Footer__StyledFooter",componentId:"sc-1xqajj9-0"})(["padding:1rem;font-weight:700;text-align:right;"]),s=function(e){function t(){return e.apply(this,arguments)||this}return o()(t,e),t.prototype.render=function(){return a.a.createElement(u,null,"powered by | ",a.a.createElement("a",{href:"https://reactjs.org/",alt:"react"},"react")," | ",a.a.createElement("a",{href:"https://www.gatsbyjs.org/"},"gatsby")," | ",a.a.createElement("a",{href:"https://github.com/"},"github"))},t}(a.a.PureComponent)},147:function(e,t,n){"use strict";var r=n(6),o=n.n(r),i=n(0),a=n.n(i),u=n(145),s=n.n(u),c=n(141),l=n.n(c),d=n(139),f=n(142);function p(){var e=l()(["\nfont-size: 1.5rem;\n"]);return p=function(){return e},e}var m=d.b.ul.withConfig({displayName:"HeaderNav__StyledHeaderNav",componentId:"wnyhma-0"})(["float:right;li{float:left;list-style:none;padding:1rem 0.5rem;}",""],Object(f.a)("tablet")(p())),h=function(e){function t(){return e.apply(this,arguments)||this}return o()(t,e),t.prototype.render=function(){return a.a.createElement(m,null,a.a.createElement("li",null,a.a.createElement("a",{title:"Articles",href:"/tags/article"},"articles")),a.a.createElement("li",null,a.a.createElement("a",{title:"Search",href:"/search"},"search")))},t}(a.a.PureComponent);n.d(t,"a",function(){return w});var y=d.b.div.withConfig({displayName:"Header__StyledHeader",componentId:"sc-9eu2yh-0"})(["padding:1rem;font-weight:700;"]),w=function(e){function t(){return e.apply(this,arguments)||this}return o()(t,e),t.prototype.render=function(){return a.a.createElement(y,null,a.a.createElement("a",{href:"/",alt:"home"},a.a.createElement(s.a,{height:60,width:60})),a.a.createElement(h,null))},t}(a.a.PureComponent)},149:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.insertScript=function(e,t,n){var r=window.document.createElement("script");return r.async=!0,r.src=e,r.id=t,n.appendChild(r),r},t.removeScript=function(e,t){var n=window.document.getElementById(e);n&&t.removeChild(n)},t.debounce=function(e,t,n){var r=void 0;return function(){var o=this,i=arguments,a=n&&!r;window.clearTimeout(r),r=setTimeout(function(){r=null,n||e.apply(o,i)},t),a&&e.apply(o,i)}}},150:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.DiscussionEmbed=t.CommentEmbed=t.CommentCount=void 0;var r=n(151),o=n(152),i=n(153);t.CommentCount=r.CommentCount,t.CommentEmbed=o.CommentEmbed,t.DiscussionEmbed=i.DiscussionEmbed;var a={CommentCount:r.CommentCount,CommentEmbed:o.CommentEmbed,DiscussionEmbed:i.DiscussionEmbed};t.default=a},151:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.CommentCount=void 0;var r,o=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),i=n(0),a=(r=i)&&r.__esModule?r:{default:r},u=n(149);var s=(0,u.debounce)(function(){window.DISQUSWIDGETS&&window.DISQUSWIDGETS.getCount({reset:!0})},300,!1);t.CommentCount=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,a.default.Component),o(t,[{key:"componentDidMount",value:function(){this.loadInstance()}},{key:"shouldComponentUpdate",value:function(e){if(this.props.shortname!==e.shortname)return!0;var t=e.config,n=this.props.config;return t.url!==n.url&&t.identifier!==n.identifier}},{key:"componentWillUpdate",value:function(e){this.props.shortname!==e.shortname&&this.cleanInstance()}},{key:"componentDidUpdate",value:function(){this.loadInstance()}},{key:"loadInstance",value:function(){var e=window.document;e.getElementById("dsq-count-scr")?s():(0,u.insertScript)("https://"+this.props.shortname+".disqus.com/count.js","dsq-count-scr",e.body)}},{key:"cleanInstance",value:function(){var e=window.document.body;(0,u.removeScript)("dsq-count-scr",e),window.DISQUSWIDGETS=void 0}},{key:"render",value:function(){return a.default.createElement("span",{className:"disqus-comment-count","data-disqus-identifier":this.props.config.identifier,"data-disqus-url":this.props.config.url},this.props.children)}}]),t}()},152:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.CommentEmbed=void 0;var r,o=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),i=n(0),a=(r=i)&&r.__esModule?r:{default:r};(t.CommentEmbed=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,a.default.Component),o(t,[{key:"getSrc",value:function(){return"https://embed.disqus.com/p/"+Number(this.props.commentId).toString(36)+"?p="+(this.props.showParentComment?"1":"0")+"&m="+(this.props.showMedia?"1":"0")}},{key:"render",value:function(){return a.default.createElement("iframe",{src:this.getSrc(),width:this.props.width,height:this.props.height,seamless:"seamless",scrolling:"no",frameBorder:"0"})}}]),t}()).defaultProps={showMedia:!0,showParentComment:!0,width:420,height:320}},153:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.DiscussionEmbed=void 0;var r,o=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),i=n(0),a=(r=i)&&r.__esModule?r:{default:r},u=n(149);t.DiscussionEmbed=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,a.default.Component),o(t,[{key:"componentWillMount",value:function(){"undefined"!=typeof window&&window.disqus_shortname&&window.disqus_shortname!==this.props.shortname&&this.cleanInstance()}},{key:"componentDidMount",value:function(){this.loadInstance()}},{key:"shouldComponentUpdate",value:function(e){if(this.props.shortname!==e.shortname)return!0;var t=e.config,n=this.props.config;return t.url!==n.url&&t.identifier!==n.identifier}},{key:"componentWillUpdate",value:function(e){this.props.shortname!==e.shortname&&this.cleanInstance()}},{key:"componentDidUpdate",value:function(){this.loadInstance()}},{key:"loadInstance",value:function(){var e=window.document;window&&window.DISQUS&&e.getElementById("dsq-embed-scr")?window.DISQUS.reset({reload:!0,config:this.getDisqusConfig(this.props.config)}):(window.disqus_config=this.getDisqusConfig(this.props.config),window.disqus_shortname=this.props.shortname,(0,u.insertScript)("https://"+this.props.shortname+".disqus.com/embed.js","dsq-embed-scr",e.body))}},{key:"cleanInstance",value:function(){var e=window.document;(0,u.removeScript)("dsq-embed-scr",e.body),window&&window.DISQUS&&window.DISQUS.reset({});try{delete window.DISQUS}catch(e){window.DISQUS=void 0}var t=e.getElementById("disqus_thread");if(t)for(;t.hasChildNodes();)t.removeChild(t.firstChild)}},{key:"getDisqusConfig",value:function(e){return function(){this.page.identifier=e.identifier,this.page.url=e.url,this.page.title=e.title,this.callbacks.onNewComment=[e.onNewComment]}}},{key:"render",value:function(){return a.default.createElement("div",{id:"disqus_thread"})}}]),t}()}}]);
//# sourceMappingURL=component---src-templates-blog-post-js-ce64ee14a37041a69cde.js.map