(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{137:function(e,t,n){"use strict";n.r(t);var a=n(6),r=n.n(a),i=n(141),l=n.n(i),o=n(0),c=n.n(o),u=n(147),s=n(196),d=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){return c.a.createElement(c.a.Fragment,null,c.a.createElement("a",{href:"https://twitter.com/bipinpaulbedi",alt:"twitter"},c.a.createElement(s.e,null)),"  ",c.a.createElement("a",{href:"https://www.facebook.com/bipinpaulbedi",alt:"facebook"},c.a.createElement(s.a,null)),"  ",c.a.createElement("a",{href:"https://www.instagram.com/bipinpaulbedi/",alt:"instagram"},c.a.createElement(s.c,null)," "),"  ",c.a.createElement("a",{href:"https://github.com/bipinpaulbedi",alt:"github"},c.a.createElement(s.b,null))," ",c.a.createElement("a",{href:"https://www.linkedin.com/in/bipinpaulbedi/",alt:"linkedin"},c.a.createElement(s.d,null)))},t}(c.a.PureComponent),m=n(139),p=n(142);function f(){var e=l()(["\n    h2 {\n        font-size: 3rem;\n    }\n\n    p {\n        font-size: 4rem;\n    }"]);return f=function(){return e},e}var h=m.b.div.withConfig({displayName:"IndexBanner__StyledIndexBanner",componentId:"sc-1oxnne0-0"})(["text-align:center;p{font-size:2.5rem;}a.nameLink{box-shadow:none;}",""],Object(p.a)("tablet")(f())),g=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){return c.a.createElement(h,null,c.a.createElement("h2",null,"Hello, I'm ",c.a.createElement("a",{className:"nameLink",href:"#",alt:"",Home:!0},"Bipin")," & I craft technology products. This site chronicles my thoughts, stories and ideas."),c.a.createElement("p",null,c.a.createElement(d,null)),c.a.createElement("hr",null))},t}(c.a.PureComponent),y=n(173),C=n.n(y);function b(){var e=l()(["\ndisplay: flex;\ndiv{\n    padding: 1rem;\n    margin: auto;\n}\n"]);return b=function(){return e},e}function E(){var e=l()(["\ntext-align: left;\nfont-size: 1.5rem;\n"]);return E=function(){return e},e}var v=m.b.div.withConfig({displayName:"IndexKeyAreas__StyledBanner",componentId:"sc-1vfnr9b-0"})(["text-align:center;"," ",""],Object(p.a)("tablet")(E()),Object(p.a)("desktop")(b())),w=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){return c.a.createElement(v,null,c.a.createElement("img",{src:C.a,alt:"focus image"}),c.a.createElement("div",null,"I care about sharing and learning, thus I write various technical articles but my current key focus areas are ",c.a.createElement("a",{href:"/tags/applied-cryptography",alt:"Applied cryptograpy"},"Applied cryptograpy")," |",c.a.createElement("a",{href:"/tags/machine-learning",alt:"Machine Learning"}," Machine Learning/AI")," |",c.a.createElement("a",{href:"/tags/algorithm-design",alt:"Algorithm design"}," Algorithm design & data structures")," |",c.a.createElement("a",{href:"/tags/security",alt:"White Hat Security"}," White hat security"),". and when I am not learning about focused item I usually cover topics such as",c.a.createElement("a",{href:"/tags/dot-net",alt:".Net"}," .Net")," |",c.a.createElement("a",{href:"/tags/design-patterns",alt:"Design patterns"}," Design patterns")," |",c.a.createElement("a",{href:"/tags/sitecore",alt:"Sitecore"}," Sitecore")," |",c.a.createElement("a",{href:"/tags/technology",alt:"Technology"}," Rest of the world")),c.a.createElement("hr",null))},t}(c.a.PureComponent),x=(n(174),n(143)),I=n(150);function k(){var e=l()(["\nfont-size: 1.2rem;\n"]);return k=function(){return e},e}function _(){var e=l()(["\nfont-size: 1.2rem;\n"]);return _=function(){return e},e}function L(){var e=l()(["\nfont-size: 2rem;\n"]);return L=function(){return e},e}function S(){var e=l()(["\nfont-size: 1.5rem;\n"]);return S=function(){return e},e}var P=m.b.div.withConfig({displayName:"IndexPost__StyledLatest",componentId:"sc-115x5bv-0"})(["font-weight:bold;",""],Object(p.a)("tablet")(S())),j=m.b.h3.withConfig({displayName:"IndexPost__StyledLatestPost",componentId:"sc-115x5bv-1"})(["margin:0.5rem 0rem font-weight:bold;",""],Object(p.a)("tablet")(L())),N=m.b.small.withConfig({displayName:"IndexPost__StyledSmall",componentId:"sc-115x5bv-2"})(["",""],Object(p.a)("tablet")(_())),R=m.b.p.withConfig({displayName:"IndexPost__StyledHtml",componentId:"sc-115x5bv-3"})(["",""],Object(p.a)("tablet")(k())),q=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props,t=e.posts,n=e.siteURL;return c.a.createElement(c.a.Fragment,null,t.map(function(e){var t=e.node,a={url:n+t.fields.slug,identifier:t.fields.slug,title:t.frontmatter.title},r=t.frontmatter.title||t.fields.slug;return c.a.createElement("div",{key:t.fields.slug},c.a.createElement(P,null,"Latest though, story or idea..."),c.a.createElement(j,null,c.a.createElement(x.Link,{to:t.fields.slug},r)),c.a.createElement(N,null,t.frontmatter.date),c.a.createElement(R,{dangerouslySetInnerHTML:{__html:t.html}}),c.a.createElement(I.DiscussionEmbed,{shortname:"paul-blog",config:a}))}))},t}(c.a.PureComponent),M=n(148),H=n.n(M),O=n(146);function z(){var e=l()(["\n    width: 70%;"]);return z=function(){return e},e}n.d(t,"default",function(){return T}),n.d(t,"pageQuery",function(){return F});var A=m.b.div.withConfig({displayName:"pages__StyledHome",componentId:"sc-6kvjaa-0"})(["margin:0 auto;padding:0rem 1rem;",""],Object(p.a)("tablet")(z())),T=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props.data.site.siteMetadata,t=e.title,n=e.description;return c.a.createElement(c.a.Fragment,null,c.a.createElement(u.a,null),c.a.createElement(H.a,{htmlAttributes:{lang:"en"},meta:[{name:"description",content:n}],title:t}),c.a.createElement(A,null,c.a.createElement(g,null),c.a.createElement(w,null),c.a.createElement(q,{posts:this.props.data.allMarkdownRemark.edges,siteURL:this.props.data.site.siteMetadata.siteUrl})),c.a.createElement(O.a,null))},t}(c.a.PureComponent),F="2698434254"},140:function(e,t,n){var a;e.exports=(a=n(144))&&a.default||a},143:function(e,t,n){"use strict";n.r(t),n.d(t,"graphql",function(){return f}),n.d(t,"StaticQueryContext",function(){return m}),n.d(t,"StaticQuery",function(){return p});var a=n(0),r=n.n(a),i=n(4),l=n.n(i),o=n(138),c=n.n(o);n.d(t,"Link",function(){return c.a}),n.d(t,"withPrefix",function(){return o.withPrefix}),n.d(t,"navigate",function(){return o.navigate}),n.d(t,"push",function(){return o.push}),n.d(t,"replace",function(){return o.replace}),n.d(t,"navigateTo",function(){return o.navigateTo});var u=n(140),s=n.n(u);n.d(t,"PageRenderer",function(){return s.a});var d=n(28);n.d(t,"parsePath",function(){return d.a});var m=r.a.createContext({}),p=function(e){return r.a.createElement(m.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};function f(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}p.propTypes={data:l.a.object,query:l.a.string.isRequired,render:l.a.func,children:l.a.func}},144:function(e,t,n){"use strict";n.r(t);n(29);var a=n(0),r=n.n(a),i=n(4),l=n.n(i),o=n(46),c=n(2),u=function(e){var t=e.location,n=c.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(o.a,Object.assign({location:t,pageResources:n},n.json))};u.propTypes={location:l.a.shape({pathname:l.a.string.isRequired}).isRequired},t.default=u},145:function(e,t,n){var a=n(0);function r(e){return a.createElement("svg",e,a.createElement("g",{id:"svgg"},[a.createElement("path",{id:"path0",d:"M229.494 35.630 C 214.627 36.689,197.007 44.078,181.446 55.779 C 160.666 71.404,141.287 95.404,124.051 126.856 C 121.554 131.414,121.379 131.630,120.382 131.408 C 114.843 130.173,108.919 128.500,103.711 126.702 C 83.590 119.754,77.007 120.309,77.445 128.916 C 77.843 136.734,85.543 144.007,101.953 152.064 C 105.928 154.016,109.251 155.666,109.339 155.732 C 109.426 155.798,108.153 158.997,106.510 162.840 C 81.420 221.522,72.517 285.359,84.897 317.800 C 97.549 350.955,132.525 368.607,177.689 364.632 C 207.264 362.029,228.198 348.944,239.063 326.270 C 241.071 322.079,240.727 322.234,243.717 324.167 C 255.912 332.049,279.830 333.568,292.356 327.256 C 309.905 318.415,326.372 289.311,322.431 274.102 C 320.642 267.201,315.447 259.817,311.913 259.154 C 308.000 258.420,305.492 260.602,298.596 270.743 C 284.675 291.216,277.916 296.957,268.385 296.405 C 257.231 295.760,251.005 284.042,243.935 250.391 C 236.970 217.237,226.880 202.230,211.521 202.178 C 199.311 202.137,181.845 222.194,175.749 243.258 L 175.269 244.914 177.608 247.554 C 197.734 270.285,199.716 273.998,199.751 289.063 C 199.792 306.525,194.785 318.126,184.673 323.994 C 175.734 329.182,159.298 324.545,152.691 314.970 C 137.638 293.160,141.882 225.153,161.637 171.608 L 164.258 164.505 167.188 164.252 C 249.906 157.094,291.849 133.002,295.277 90.676 C 298.047 56.467,269.721 32.764,229.494 35.630 M240.857 79.280 C 244.878 81.041,247.246 86.116,247.260 93.004 C 247.295 111.301,226.610 127.276,191.406 136.140 C 186.913 137.272,176.104 139.516,175.940 139.352 C 175.765 139.177,180.523 130.941,184.005 125.391 C 203.786 93.859,228.454 73.851,240.857 79.280 ",stroke:"none",fill:"#fbfbfb",fillRule:"evenodd",key:0}),a.createElement("path",{id:"path1",d:"M0.000 200.000 L 0.000 400.000 200.000 400.000 L 400.000 400.000 400.000 200.000 L 400.000 0.000 200.000 0.000 L 0.000 0.000 0.000 200.000 M250.286 36.715 C 279.919 41.994,297.511 63.094,295.277 90.676 C 291.849 133.002,249.906 157.094,167.188 164.252 L 164.258 164.505 161.637 171.608 C 141.882 225.153,137.638 293.160,152.691 314.970 C 159.298 324.545,175.734 329.182,184.673 323.994 C 194.785 318.126,199.792 306.525,199.751 289.063 C 199.716 273.998,197.734 270.285,177.608 247.554 L 175.269 244.914 175.749 243.258 C 181.845 222.194,199.311 202.137,211.521 202.178 C 226.880 202.230,236.970 217.237,243.935 250.391 C 251.005 284.042,257.231 295.760,268.385 296.405 C 277.916 296.957,284.675 291.216,298.596 270.743 C 305.492 260.602,308.000 258.420,311.913 259.154 C 315.447 259.817,320.642 267.201,322.431 274.102 C 326.372 289.311,309.905 318.415,292.356 327.256 C 279.830 333.568,255.912 332.049,243.717 324.167 C 240.727 322.234,241.071 322.079,239.063 326.270 C 228.198 348.944,207.264 362.029,177.689 364.632 C 132.525 368.607,97.549 350.955,84.897 317.800 C 72.517 285.359,81.420 221.522,106.510 162.840 C 108.153 158.997,109.426 155.798,109.339 155.732 C 109.251 155.666,105.928 154.016,101.953 152.064 C 85.543 144.007,77.843 136.734,77.445 128.916 C 77.007 120.309,83.590 119.754,103.711 126.702 C 108.919 128.500,114.843 130.173,120.382 131.408 C 121.379 131.630,121.554 131.414,124.051 126.856 C 160.303 60.702,205.156 28.674,250.286 36.715 M232.874 78.701 C 221.923 80.740,204.692 95.759,190.527 115.612 C 185.739 122.323,175.529 138.940,175.940 139.352 C 176.104 139.516,186.913 137.272,191.406 136.140 C 226.610 127.276,247.295 111.301,247.260 93.004 C 247.239 82.167,242.037 76.995,232.874 78.701 ",stroke:"none",fill:"#047ccc",fillRule:"evenodd",key:1})]))}r.defaultProps={id:"svg",version:"1.1",width:"400",height:"400",viewBox:"0 0 400 400"},e.exports=r,r.default=r},146:function(e,t,n){"use strict";n.d(t,"a",function(){return c});var a=n(6),r=n.n(a),i=n(0),l=n.n(i),o=n(139).b.div.withConfig({displayName:"Footer__StyledFooter",componentId:"sc-1xqajj9-0"})(["padding:1rem;font-weight:700;text-align:right;"]),c=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){return l.a.createElement(o,null,"powered by | ",l.a.createElement("a",{href:"https://reactjs.org/",alt:"react"},"react")," | ",l.a.createElement("a",{href:"https://www.gatsbyjs.org/"},"gatsby")," | ",l.a.createElement("a",{href:"https://github.com/"},"github"))},t}(l.a.PureComponent)},147:function(e,t,n){"use strict";var a=n(6),r=n.n(a),i=n(0),l=n.n(i),o=n(145),c=n.n(o),u=n(141),s=n.n(u),d=n(139),m=n(142);function p(){var e=s()(["\nfont-size: 1.5rem;\n"]);return p=function(){return e},e}var f=d.b.ul.withConfig({displayName:"HeaderNav__StyledHeaderNav",componentId:"wnyhma-0"})(["float:right;li{float:left;list-style:none;padding:1rem 0.5rem;}",""],Object(m.a)("tablet")(p())),h=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){return l.a.createElement(f,null,l.a.createElement("li",null,l.a.createElement("a",{title:"Articles",href:"/tags/article"},"articles")),l.a.createElement("li",null,l.a.createElement("a",{title:"Search",href:"/search"},"search")))},t}(l.a.PureComponent);n.d(t,"a",function(){return y});var g=d.b.div.withConfig({displayName:"Header__StyledHeader",componentId:"sc-9eu2yh-0"})(["padding:1rem;font-weight:700;"]),y=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){return l.a.createElement(g,null,l.a.createElement("a",{href:"/",alt:"home"},l.a.createElement(c.a,{height:60,width:60})),l.a.createElement(h,null))},t}(l.a.PureComponent)},173:function(e,t,n){e.exports=n.p+"static/focus-6335b0f511dc2db7d359740fec5cf6c6.jpg"}}]);
//# sourceMappingURL=component---src-pages-index-js-9f2df03b668d2ff3e3c6.js.map