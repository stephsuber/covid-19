(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{"4Fil":function(n,e,r){"use strict";r.d(e,"a",(function(){return a})),r.d(e,"c",(function(){return d})),r.d(e,"b",(function(){return s})),r.d(e,"d",(function(){return b}));var t=r("17x9"),o=r.n(t),i=r("vOnD"),a=i.c.div.withConfig({displayName:"card__Card",componentId:"vz6j3s-0"})((function(n){var e=n.theme,r=n.dark;return"\n    // & * { border: 1px solid #f99; }\n    border-radius: "+e.border.radius+";\n    overflow: hidden;\n    margin-bottom: 3rem;\n    height: 100%;\n    display: flex;\n    flex-direction: column;\n    background-color: "+(r?e.color.primary.dark:e.color.white)+";\n    color: "+(r?e.color.white:e.color.primary.dark)+";\n    opacity: "+(r?.75:1)+";\n    transition: filter 250ms;\n    filter: drop-shadow(0 0 4px rgba(0, 0, 0, 0.1));\n    &:hover {\n        filter: drop-shadow(0 0 6px rgba(0, 0, 0, 0.2));\n    }\n    a, a:active, a:visited {\n        color: "+e.color.primary.light+";\n        transition: filter 250ms, text-decoration-color 250ms;\n        text-decoration-color: "+e.color.primary.light+";\n        text-underline-offset: 0.1em;\n    }\n    a:hover, a:active:hover, a:visited:hover {\n        filter: brightness(1.25);\n        text-decoration-color: "+e.color.primary.dark+";\n        text-underline-offset: 0.1em;\n    }\n"}));a.propTypes={children:o.a.node.isRequired,elevate:o.a.bool.isRequired},a.defaultProps={elevate:!0};var d=i.c.div.withConfig({displayName:"card-header__CardHeader",componentId:"sc-34wzb3-0"})((function(n){var e=n.theme;return"\n    display: flex;\n    // justify-content: center;\n    // align-items: center;\n    // text-align: left;\n    color: "+e.color.primary.dark+";\n    background: linear-gradient(-30deg, "+e.color.primary.light+"22 0%, "+e.color.white+" 100%);\n    background-color: "+e.color.primary.light+"11;\n    border-bottom: 1px solid "+e.color.primary.light+"66;\n    font-weight: bold;\n    position: relative;\n    font-size: 200%;\n    min-height: 4rem;\n    padding: "+e.padding.normal+";\n    // padding-bottom: 0;\n"}));d.propTypes={fgColor:o.a.string.isRequired,bgColor:o.a.string.isRequired,children:o.a.node.isRequired},d.defaultProps={fgColor:"#fff",bgColor:"var(--color-crimson)",children:""};var l=r("FdF9"),c=i.c.div.withConfig({displayName:"card-body__CardBodyContents",componentId:"c38ykj-0"})((function(n){return"\n    flex: 1;\n    padding: "+n.theme.padding.normal+";\n    background-color: inherit;\n"}));c.propTypes={fgColor:o.a.string.isRequired,bgColor:o.a.string.isRequired},c.defaultProps={fgColor:"inherit",bgColor:"#fff"};var s=function(n){var e=n.children,r=(n.image,n.style);return l.default.createElement(c,{style:r},e)},u=i.c.div.withConfig({displayName:"card-footer__CardFooter",componentId:"sc-17yhfms-0"})((function(n){var e=n.theme;n.left;return"\n    display: flex;\n    justify-content: flex-start;\n    "+(n.center&&"justify-content: center")+";\n    "+(n.right&&"justify-content: flex-end")+";\n    align-items: center;\n    color: "+e.color.black+";\n    background-color: inherit;\n    padding: "+e.padding.normal+";\n    height: 4rem;\n"}));u.propTypes={fgColor:o.a.string.isRequired,bgColor:o.a.string.isRequired,children:o.a.node.isRequired},u.defaultProps={fgColor:"#fff",bgColor:"var(--color-crimson)"};r("84bF");var f=r("RiPl"),m=r("gGy4"),p=i.c.div.withConfig({displayName:"title-card__Wrapper",componentId:"sc-15t9ua8-0"})(["position:relative;margin-top:5rem;"]),g=i.c.div.withConfig({displayName:"title-card__TitleCardHeader",componentId:"sc-15t9ua8-1"})((function(n){var e=n.theme;return"\n    display: flex;\n    border-radius: "+e.border.radius+";\n    justfy-content: center;\n    align-items: center;\n    background-color: "+e.color.primary.dark+";\n    filter: drop-shadow(0 8px 8px #00000033);\n    font-weight: bold;\n    position: relative;\n    min-height: 4rem;\n    padding: "+e.padding.small+";\n    position: absolute;\n    left: 50%;\n    top: -3rem;\n    transform: translateX(-50%);\n    transition: min-width 250ms;\n    z-index: 1;\n    min-width: 50%;\n    @media (max-width: 798px) {\n        min-width: 90%;\n    }\n    "+f.c+" {\n        color: "+e.color.white+";\n        text-align: center;\n        width: 100%;\n        font-size: calc(12pt + 1vmin);\n        padding: 0;\n        margin: 0;\n    }\n"})),h=i.c.div.withConfig({displayName:"title-card__TitleCardBody",componentId:"sc-15t9ua8-2"})((function(n){var e=n.topPadding;return"\n    flex: 1;\n    padding: "+n.theme.padding.normal+";\n    padding-top: calc(3 * "+e+"px / 4);\n    background-color: inherit;\n"})),b=function(n){var e=n.title,r=n.children,t=Object(l.useRef)(),o=Object(l.useState)(0),i=o[0],d=o[1],c=Object(m.f)().windowWidth;return Object(l.useEffect)((function(){d(t.current.scrollHeight)}),[t.current,c]),l.default.createElement(p,null,l.default.createElement(g,{ref:t},l.default.createElement(f.c,null,e)),l.default.createElement(a,null,l.default.createElement(h,{topPadding:i},r)))}},"84bF":function(n,e,r){"use strict";r("OGtf")("small",(function(n){return function(){return n(this,"small","","")}}))},"l+uZ":function(n,e,r){"use strict";r.r(e),r.d(e,"workItemQuery",(function(){return d}));var t=r("FdF9"),o=r("jNNy"),i=(r("Wbzz"),r("I/Ru")),a=(r("RiPl"),r("4Fil"));e.default=function(n){var e=n.data,r=(n.pageContext,e.markdownRemark),d=r.frontmatter,l=r.html;return t.default.createElement(i.a,null,t.default.createElement(o.a,{title:d.title,description:d.blurb,keywords:""}),t.default.createElement(a.d,{title:d.title},t.default.createElement("div",{dangerouslySetInnerHTML:{__html:l}})))};var d="2681215759"}}]);
//# sourceMappingURL=component---src-templates-work-template-js-c1d92703d365e158884d.js.map