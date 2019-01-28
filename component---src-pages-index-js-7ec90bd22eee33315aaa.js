(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{138:function(e,t,n){"use strict";n.r(t);var a=n(6),r=n.n(a),i=n(141),o=n.n(i),l=n(0),u=n.n(l),c=n(148),s=n(201),C=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){return u.a.createElement(u.a.Fragment,null,u.a.createElement("a",{"aria-label":"Twitter",href:"https://twitter.com/bipinpaulbedi",alt:"twitter"},u.a.createElement(s.e,null)),"  ",u.a.createElement("a",{"aria-label":"Facebook",href:"https://www.facebook.com/bipinpaulbedi",alt:"facebook"},u.a.createElement(s.a,null)),"  ",u.a.createElement("a",{"aria-label":"Instagram",href:"https://www.instagram.com/bipinpaulbedi/",alt:"instagram"},u.a.createElement(s.c,null)," "),"  ",u.a.createElement("a",{"aria-label":"Github",href:"https://github.com/bipinpaulbedi",alt:"github"},u.a.createElement(s.b,null))," ",u.a.createElement("a",{"aria-label":"LinkedIn",href:"https://www.linkedin.com/in/bipinpaulbedi/",alt:"linkedin"},u.a.createElement(s.d,null)))},t}(u.a.PureComponent),d=n(140),p=n(143);function m(){var e=o()(["\n    h2 {\n        font-size: 3rem;\n        margin-top: 1rem;\n    }\n\n    p {\n        font-size: 4rem;\n    }"]);return m=function(){return e},e}var f=d.b.div.withConfig({displayName:"IndexBanner__StyledIndexBanner",componentId:"sc-1oxnne0-0"})(["text-align:center;p{font-size:2.5rem;}a.nameLink{box-shadow:none;}",""],Object(p.a)("tablet")(m())),h=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){return u.a.createElement(f,null,u.a.createElement("h2",null,"Hello, I'm ",u.a.createElement("a",{className:"nameLink",href:"#",alt:""},"Bipin")," & I craft technology products. This site chronicles my thoughts, stories and ideas."),u.a.createElement("p",null,u.a.createElement(C,null)))},t}(u.a.PureComponent);function g(){var e=o()(["\nfont-size: 1.5rem;\n"]);return g=function(){return e},e}var y=d.b.div.withConfig({displayName:"IndexKeyAreas__StyledBanner",componentId:"sc-1vfnr9b-0"})(["text-align:justify;margin-bottom:1rem;",""],Object(p.a)("tablet")(g())),b=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){return u.a.createElement(y,null,u.a.createElement("div",null,"I care about sharing and learning, thus I write various technical articles but my current key focus areas are ",u.a.createElement("a",{href:"/tags/applied-cryptography",alt:"Applied cryptography"},"Applied cryptography")," |",u.a.createElement("a",{href:"/tags/machine-learning",alt:"Machine Learning"}," Machine Learning/AI")," |",u.a.createElement("a",{href:"/tags/algorithm-design",alt:"Algorithm design"}," Algorithm design & data structures")," |",u.a.createElement("a",{href:"/tags/security",alt:"White Hat Security"}," White hat security"),". and when I am not learning about focused item I usually cover topics such as",u.a.createElement("a",{href:"/tags/dot-net",alt:".Net"}," .Net")," |",u.a.createElement("a",{href:"/tags/design-patterns",alt:"Design patterns"}," Design patterns")," |",u.a.createElement("a",{href:"/tags/sitecore",alt:"Sitecore"}," Sitecore")," |",u.a.createElement("a",{href:"/tags/technology",alt:"Technology"}," Rest of the world")))},t}(u.a.PureComponent),v=(n(67),n(47),n(177),n(179),n(204)),E=n(144);function w(){var e=o()(["\nfont-size: 1.25rem;\n"]);return w=function(){return e},e}var k=d.b.h3.withConfig({displayName:"IndexPostList__StyledLatestPost",componentId:"sc-1vkq51e-0"})(["font-size:0.8rem;margin:0.75rem 0rem;",""],Object(p.a)("tablet")(w())),I=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props.node,t=e.frontmatter.title||e.fields.slug;return u.a.createElement("div",{key:e.fields.slug},u.a.createElement(k,null,u.a.createElement(E.Link,{to:e.fields.slug},t)))},t}(u.a.PureComponent),x=n(150);function L(){var e=o()(["\nfont-size: 1.5rem;\n"]);return L=function(){return e},e}var P=d.b.div.withConfig({displayName:"IndexPost__StyledLatest",componentId:"sc-115x5bv-0"})(["text-align:center;font-weight:bold;div{color:","}",""],x.pallet.secondary,Object(p.a)("tablet")(L())),j=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props.posts,t=v.a(function(e){return e.node.frontmatter.year},e),n=Object.keys(t).sort().reverse();return u.a.createElement(P,null,"Latest though, story or idea...",n.map(function(e){return u.a.createElement(u.a.Fragment,null,u.a.createElement("div",null,e),t[e].map(function(e){var t=e.node;return u.a.createElement(I,{node:t})}))}))},t}(u.a.PureComponent),S=n(149),_=n.n(S),N=n(147);function q(){var e=o()(["\n    width: 50%;"]);return q=function(){return e},e}function R(){var e=o()(["\n    width: 75%;"]);return R=function(){return e},e}n.d(t,"default",function(){return O}),n.d(t,"pageQuery",function(){return T});var M=d.b.div.withConfig({displayName:"pages__StyledHome",componentId:"sc-6kvjaa-0"})(["margin:0 auto;padding:0rem 1rem;"," ",""],Object(p.a)("tablet")(R()),Object(p.a)("desktop")(q())),O=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props.data.site.siteMetadata,t=e.title,n=e.description;return u.a.createElement(u.a.Fragment,null,u.a.createElement(c.a,null),u.a.createElement(_.a,{htmlAttributes:{lang:"en"},meta:[{name:"description",content:n}],title:t}),u.a.createElement(_.a,null,u.a.createElement("noscript",null,"Your browser does not support JavaScript!")),u.a.createElement(M,null,u.a.createElement(h,null),u.a.createElement(b,null),u.a.createElement(j,{posts:this.props.data.allMarkdownRemark.edges})),u.a.createElement(N.a,null))},t}(u.a.PureComponent),T="609156395"},142:function(e,t,n){var a;e.exports=(a=n(145))&&a.default||a},144:function(e,t,n){"use strict";n.r(t),n.d(t,"graphql",function(){return m}),n.d(t,"StaticQueryContext",function(){return d}),n.d(t,"StaticQuery",function(){return p});var a=n(0),r=n.n(a),i=n(4),o=n.n(i),l=n(139),u=n.n(l);n.d(t,"Link",function(){return u.a}),n.d(t,"withPrefix",function(){return l.withPrefix}),n.d(t,"navigate",function(){return l.navigate}),n.d(t,"push",function(){return l.push}),n.d(t,"replace",function(){return l.replace}),n.d(t,"navigateTo",function(){return l.navigateTo});var c=n(142),s=n.n(c);n.d(t,"PageRenderer",function(){return s.a});var C=n(28);n.d(t,"parsePath",function(){return C.a});var d=r.a.createContext({}),p=function(e){return r.a.createElement(d.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};function m(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}p.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}},145:function(e,t,n){"use strict";n.r(t);n(29);var a=n(0),r=n.n(a),i=n(4),o=n.n(i),l=n(46),u=n(2),c=function(e){var t=e.location,n=u.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(l.a,Object.assign({location:t,pageResources:n},n.json))};c.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},t.default=c},146:function(e,t,n){var a=n(0);function r(e){return a.createElement("svg",e,a.createElement("g",{id:"svgg"},[a.createElement("path",{id:"path0",d:"M226.400 24.393 C 210.265 26.864,191.602 35.725,176.505 48.086 C 175.622 48.808,174.114 50.030,173.154 50.800 C 165.987 56.548,154.251 68.775,147.064 77.981 C 141.288 85.380,136.540 92.037,132.073 99.000 C 127.939 105.444,122.000 115.116,122.000 115.404 C 122.000 115.477,121.142 117.036,120.093 118.868 C 119.044 120.701,117.739 123.073,117.193 124.141 C 116.647 125.208,115.992 126.166,115.739 126.269 C 114.713 126.685,102.513 123.339,93.800 120.251 C 86.446 117.645,80.539 116.419,75.286 116.407 C 70.044 116.396,68.746 117.753,68.758 123.234 C 68.777 131.668,76.783 139.426,94.552 148.230 C 103.411 152.620,103.177 152.406,102.005 155.019 C 101.516 156.109,100.886 157.540,100.604 158.200 C 100.323 158.860,99.712 160.253,99.247 161.296 C 98.781 162.338,98.400 163.279,98.400 163.386 C 98.400 163.493,97.860 164.759,97.200 166.200 C 96.540 167.641,96.000 168.942,96.000 169.090 C 96.000 169.238,95.074 171.709,93.942 174.580 C 90.939 182.196,87.140 193.104,85.228 199.600 C 84.743 201.250,84.196 203.050,84.014 203.600 C 79.598 216.937,74.441 242.556,72.419 261.200 C 70.908 275.137,70.564 296.694,71.727 304.600 C 72.951 312.927,73.180 314.209,74.013 317.400 C 79.560 338.649,91.208 353.583,110.829 364.601 C 113.284 365.980,114.489 366.569,119.000 368.595 C 143.459 379.581,184.324 379.583,207.895 368.601 C 222.319 361.880,234.614 349.737,241.910 335.005 C 242.892 333.022,243.761 331.328,243.841 331.239 C 243.922 331.151,245.039 331.727,246.323 332.520 C 260.304 341.149,284.611 343.107,298.000 336.682 C 313.204 329.386,328.439 307.815,331.559 289.167 C 333.386 278.250,325.809 263.200,318.486 263.200 C 314.614 263.200,312.978 264.798,305.379 276.000 C 289.656 299.178,280.166 306.241,269.663 302.583 C 262.606 300.126,257.418 292.504,253.200 278.400 C 252.707 276.750,252.163 274.950,251.992 274.400 C 251.160 271.727,248.779 261.931,247.763 257.000 C 247.400 255.240,246.963 253.170,246.792 252.400 C 246.621 251.630,246.286 250.046,246.047 248.881 C 239.565 217.203,225.798 199.731,209.419 202.397 C 197.391 204.354,180.820 224.524,174.367 245.060 L 173.469 247.919 176.434 251.271 C 178.065 253.115,180.238 255.608,181.261 256.812 C 182.285 258.015,184.957 261.160,187.199 263.800 C 196.823 275.134,199.301 280.922,199.866 293.400 C 201.011 318.639,188.432 336.936,171.438 334.750 C 157.452 332.951,150.327 327.451,144.814 314.200 C 140.694 304.299,138.723 279.060,140.402 257.708 C 141.450 244.371,142.571 234.595,144.221 224.400 C 145.105 218.942,145.597 216.344,146.800 210.800 C 146.967 210.030,147.403 207.960,147.768 206.200 C 148.133 204.440,148.584 202.550,148.770 202.000 C 148.955 201.450,149.293 200.280,149.521 199.400 C 149.953 197.726,150.675 195.040,151.241 193.000 C 153.706 184.113,160.110 165.183,161.583 162.432 C 161.882 161.873,163.049 161.660,168.074 161.246 C 179.447 160.310,195.639 158.303,202.281 157.006 C 203.996 156.671,206.480 156.200,207.800 155.961 C 244.785 149.243,274.729 134.517,289.500 115.780 C 292.440 112.051,298.400 101.545,298.400 100.092 C 298.400 99.880,298.741 98.828,299.158 97.753 C 303.547 86.451,303.370 70.350,298.725 58.339 C 289.216 33.751,258.730 19.442,226.400 24.393 M243.815 70.449 C 248.902 72.840,251.802 81.054,250.375 89.027 C 248.412 99.996,240.776 109.177,226.400 117.854 C 223.815 119.414,222.536 120.059,216.800 122.697 C 210.428 125.628,197.032 130.139,191.200 131.318 C 190.650 131.429,189.210 131.781,188.000 132.100 C 185.062 132.875,179.700 133.980,175.900 134.594 C 174.060 134.891,174.060 134.888,175.871 131.638 C 182.064 120.526,191.762 106.160,198.170 98.607 C 199.286 97.291,200.640 95.671,201.177 95.007 C 204.667 90.695,215.531 80.780,221.600 76.369 C 224.890 73.977,229.751 71.545,234.200 70.063 C 236.494 69.299,241.824 69.513,243.815 70.449 ",stroke:"none",fill:"#fbfbfb",fillRule:"evenodd",key:0}),a.createElement("path",{id:"path1",d:"M0.000 200.000 L 0.000 400.000 200.000 400.000 L 400.000 400.000 400.000 200.000 L 400.000 0.000 200.000 0.000 L 0.000 0.000 0.000 200.000 M248.136 24.200 C 275.649 27.250,293.667 40.788,300.575 63.600 C 303.318 72.657,302.650 88.761,299.158 97.753 C 298.741 98.828,298.400 99.880,298.400 100.092 C 298.400 101.545,292.440 112.051,289.500 115.780 C 274.729 134.517,244.785 149.243,207.800 155.961 C 206.480 156.200,203.996 156.671,202.281 157.006 C 195.639 158.303,179.447 160.310,168.074 161.246 C 163.049 161.660,161.882 161.873,161.583 162.432 C 160.110 165.183,153.706 184.113,151.241 193.000 C 150.675 195.040,149.953 197.726,149.521 199.400 C 149.293 200.280,148.955 201.450,148.770 202.000 C 148.584 202.550,148.133 204.440,147.768 206.200 C 147.403 207.960,146.967 210.030,146.800 210.800 C 145.597 216.344,145.105 218.942,144.221 224.400 C 142.571 234.595,141.450 244.371,140.402 257.708 C 138.723 279.060,140.694 304.299,144.814 314.200 C 150.327 327.451,157.452 332.951,171.438 334.750 C 188.432 336.936,201.011 318.639,199.866 293.400 C 199.301 280.922,196.823 275.134,187.199 263.800 C 184.957 261.160,182.285 258.015,181.261 256.812 C 180.238 255.608,178.065 253.115,176.434 251.271 L 173.469 247.919 174.367 245.060 C 178.559 231.720,184.828 221.513,195.175 211.181 C 215.903 190.485,237.350 206.378,246.047 248.881 C 246.286 250.046,246.621 251.630,246.792 252.400 C 246.963 253.170,247.400 255.240,247.763 257.000 C 248.779 261.931,251.160 271.727,251.992 274.400 C 252.163 274.950,252.707 276.750,253.200 278.400 C 256.554 289.614,261.951 298.930,266.412 301.206 C 275.732 305.961,284.659 302.610,294.670 290.600 C 298.619 285.863,299.540 284.607,305.379 276.000 C 312.978 264.798,314.614 263.200,318.486 263.200 C 325.809 263.200,333.386 278.250,331.559 289.167 C 328.439 307.815,313.204 329.386,298.000 336.682 C 284.611 343.107,260.304 341.149,246.323 332.520 C 245.039 331.727,243.922 331.151,243.841 331.239 C 243.761 331.328,242.892 333.022,241.910 335.005 C 232.592 353.820,215.615 367.812,195.800 373.008 C 179.821 377.197,157.031 378.006,140.600 374.967 C 129.443 372.903,119.358 369.392,110.829 364.601 C 91.208 353.583,79.560 338.649,74.013 317.400 C 73.180 314.209,72.951 312.927,71.727 304.600 C 70.564 296.694,70.908 275.137,72.419 261.200 C 74.441 242.556,79.598 216.937,84.014 203.600 C 84.196 203.050,84.743 201.250,85.228 199.600 C 87.140 193.104,90.939 182.196,93.942 174.580 C 95.074 171.709,96.000 169.238,96.000 169.090 C 96.000 168.942,96.540 167.641,97.200 166.200 C 97.860 164.759,98.400 163.493,98.400 163.386 C 98.400 163.279,98.781 162.338,99.247 161.296 C 99.712 160.253,100.323 158.860,100.604 158.200 C 100.886 157.540,101.516 156.109,102.005 155.019 C 103.177 152.406,103.411 152.620,94.552 148.230 C 76.783 139.426,68.777 131.668,68.758 123.234 C 68.746 117.753,70.044 116.396,75.286 116.407 C 80.539 116.419,86.446 117.645,93.800 120.251 C 102.513 123.339,114.713 126.685,115.739 126.269 C 115.992 126.166,116.647 125.208,117.193 124.141 C 117.739 123.073,119.044 120.701,120.093 118.868 C 121.142 117.036,122.000 115.477,122.000 115.404 C 122.000 115.116,127.939 105.444,132.073 99.000 C 142.667 82.485,154.731 67.695,166.604 56.663 C 169.246 54.209,172.194 51.570,173.154 50.800 C 174.114 50.030,175.622 48.808,176.505 48.086 C 199.075 29.608,223.488 21.467,248.136 24.200 M234.200 70.063 C 229.751 71.545,224.890 73.977,221.600 76.369 C 215.531 80.780,204.667 90.695,201.177 95.007 C 200.640 95.671,199.286 97.291,198.170 98.607 C 191.762 106.160,182.064 120.526,175.871 131.638 C 174.060 134.888,174.060 134.891,175.900 134.594 C 179.700 133.980,185.062 132.875,188.000 132.100 C 189.210 131.781,190.650 131.429,191.200 131.318 C 197.032 130.139,210.428 125.628,216.800 122.697 C 222.536 120.059,223.815 119.414,226.400 117.854 C 246.371 105.801,254.559 90.907,249.117 76.534 C 246.954 70.822,240.425 67.990,234.200 70.063 ",stroke:"none",fill:"#045c94",fillRule:"evenodd",key:1})]))}r.defaultProps={id:"svg",version:"1.1",width:"400",height:"400",viewBox:"0 0 400 400"},e.exports=r,r.default=r},147:function(e,t,n){"use strict";n.d(t,"a",function(){return u});var a=n(6),r=n.n(a),i=n(0),o=n.n(i),l=n(140).b.div.withConfig({displayName:"Footer__StyledFooter",componentId:"sc-1xqajj9-0"})(["padding:1rem;font-weight:700;text-align:right;"]),u=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){return o.a.createElement(l,null,"powered by | ",o.a.createElement("a",{href:"https://reactjs.org/",alt:"react"},"react")," | ",o.a.createElement("a",{href:"https://www.gatsbyjs.org/"},"gatsby")," | ",o.a.createElement("a",{href:"https://github.com/"},"github"))},t}(o.a.PureComponent)},148:function(e,t,n){"use strict";var a=n(6),r=n.n(a),i=n(0),o=n.n(i),l=n(146),u=n.n(l),c=n(141),s=n.n(c),C=n(140),d=n(143);function p(){var e=s()(["\nfont-size: 1.5rem;\n"]);return p=function(){return e},e}var m=C.b.ul.withConfig({displayName:"HeaderNav__StyledHeaderNav",componentId:"wnyhma-0"})(["float:right;li{float:left;list-style:none;padding:1rem 0.5rem;}",""],Object(d.a)("tablet")(p())),f=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){return o.a.createElement(m,null,o.a.createElement("li",null,o.a.createElement("a",{title:"Tags",href:"/tags"},"Tags")))},t}(o.a.PureComponent);n.d(t,"a",function(){return g});var h=C.b.div.withConfig({displayName:"Header__StyledHeader",componentId:"sc-9eu2yh-0"})(["padding:1rem;font-weight:700;"]),g=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){return o.a.createElement(h,null,o.a.createElement("a",{href:"/","aria-label":"Home",alt:"home"},o.a.createElement(u.a,{height:60,width:60})),o.a.createElement(f,null))},t}(o.a.PureComponent)}}]);
//# sourceMappingURL=component---src-pages-index-js-7ec90bd22eee33315aaa.js.map