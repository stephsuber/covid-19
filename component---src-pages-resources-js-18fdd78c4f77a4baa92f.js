(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{"4Fil":function(e,r,n){"use strict";n.d(r,"a",(function(){return a})),n.d(r,"d",(function(){return l})),n.d(r,"b",(function(){return f})),n.d(r,"c",(function(){return u}));var o=n("17x9"),t=n.n(o),i=n("vOnD"),a=i.c.div.withConfig({displayName:"card__Card",componentId:"vz6j3s-0"})((function(e){var r=e.theme;return"\n    // & * { border: 1px solid #f99; }\n    border-radius: "+r.border.radius+";\n    overflow: hidden;\n    margin-bottom: 3rem;\n    height: 100%;\n    display: flex;\n    flex-direction: column;\n    background-color: "+r.color.white+";\n    transition: filter 250ms;\n    filter: drop-shadow(0 0 4px rgba(0, 0, 0, 0.1));\n    &:hover {\n        filter: drop-shadow(0 0 6px rgba(0, 0, 0, 0.2));\n    }\n    a, a:active, a:visited {\n        color: "+r.color.primary.light+";\n        transition: filter 250ms, text-decoration-color 250ms;\n        text-decoration-color: "+r.color.primary.light+";\n        text-underline-offset: 0.1em;\n    }\n    a:hover, a:active:hover, a:visited:hover {\n        filter: brightness(0.75);\n        text-decoration-color: "+r.color.primary.dark+";\n        text-underline-offset: 0.1em;\n    }\n"}));a.propTypes={children:t.a.node.isRequired,elevate:t.a.bool.isRequired},a.defaultProps={elevate:!0};var l=i.c.div.withConfig({displayName:"card-header__CardHeader",componentId:"sc-34wzb3-0"})((function(e){var r=e.theme;return"\n    display: flex;\n    // justify-content: center;\n    // align-items: center;\n    // text-align: left;\n    color: "+r.color.darkgrey+";\n    background-color: "+r.color.white+";\n    font-weight: bold;\n    padding: 0.5rem 2rem;\n    position: relative;\n    font-size: 200%;\n    min-height: 4rem;\n    padding: "+r.padding.normal+" "+r.padding.normal+" 0 "+r.padding.normal+";\n"}));l.propTypes={fgColor:t.a.string.isRequired,bgColor:t.a.string.isRequired,children:t.a.node.isRequired},l.defaultProps={fgColor:"#fff",bgColor:"var(--color-crimson)",children:""};var d=n("FdF9"),c=i.c.div.withConfig({displayName:"card-body__CardBodyWrapper",componentId:"c38ykj-0"})(["display:flex;flex-direction:row;"]),s=i.c.div.withConfig({displayName:"card-body__CardBodyContents",componentId:"c38ykj-1"})((function(e){var r=e.theme;return"\n    flex: 1;\n    padding: "+r.padding.normal+";\n    background-color: "+r.color.white+";\n    color: "+r.color.black+";\n"}));s.propTypes={fgColor:t.a.string.isRequired,bgColor:t.a.string.isRequired},s.defaultProps={fgColor:"inherit",bgColor:"#fff"};var f=function(e){var r=e.children,n=(e.image,e.style);return d.default.createElement(c,null,d.default.createElement(s,{style:n},r))},u=i.c.div.withConfig({displayName:"card-footer__CardFooter",componentId:"sc-17yhfms-0"})((function(e){var r=e.theme;e.left;return"\n    display: flex;\n    justify-content: flex-start;\n    "+(e.center&&"justify-content: center")+";\n    "+(e.right&&"justify-content: flex-end")+";\n    align-items: center;\n    color: "+r.color.black+";\n    background-color: "+r.color.white+";\n    padding: "+r.padding.normal+";\n    height: 4rem;\n"}));u.propTypes={fgColor:t.a.string.isRequired,bgColor:t.a.string.isRequired,children:t.a.node.isRequired},u.defaultProps={fgColor:"#fff",bgColor:"var(--color-crimson)"}},"9I2h":function(e,r,n){"use strict";n.r(r);n("f3/d");var o=n("FdF9"),t=n("I/Ru"),i=n("jNNy"),a=n("gGy4"),l=n("RiPl"),d=n("4Fil"),c=n("/m4c");r.default=function(){var e=Object(a.d)();return o.default.createElement(t.a,null,o.default.createElement(i.a,{title:"Resources",description:"",keywords:""}),o.default.createElement(l.c,null,"General COVID-19 Resources"),o.default.createElement("section",{id:"resource-list"},e.map((function(e){var r=e.name,n=e.url,t=e.description;return o.default.createElement(d.a,{key:r},o.default.createElement(d.d,null,r),o.default.createElement(d.b,null,t),o.default.createElement(d.c,{right:!0},o.default.createElement(c.a,{to:n},n)))}))))}}}]);
//# sourceMappingURL=component---src-pages-resources-js-18fdd78c4f77a4baa92f.js.map