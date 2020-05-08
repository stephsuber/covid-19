(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{"4Fil":function(e,n,t){"use strict";t.d(n,"a",(function(){return a})),t.d(n,"c",(function(){return l})),t.d(n,"b",(function(){return s})),t.d(n,"d",(function(){return b}));var r=t("17x9"),o=t.n(r),i=t("vOnD"),a=i.c.div.withConfig({displayName:"card__Card",componentId:"vz6j3s-0"})((function(e){var n=e.theme,t=e.dark;return"\n    // & * { border: 1px solid #f99; }\n    border-radius: "+n.border.radius+";\n    overflow: hidden;\n    margin-bottom: 3rem;\n    height: 100%;\n    display: flex;\n    flex-direction: column;\n    background-color: "+(t?n.color.primary.dark:n.color.white)+";\n    color: "+(t?n.color.white:n.color.primary.dark)+";\n    opacity: "+(t?.75:1)+";\n    transition: filter 250ms;\n    filter: drop-shadow(0 0 4px rgba(0, 0, 0, 0.1));\n    &:hover {\n        filter: drop-shadow(0 0 6px rgba(0, 0, 0, 0.2));\n    }\n    a, a:active, a:visited {\n        color: "+n.color.primary.light+";\n        transition: filter 250ms, text-decoration-color 250ms;\n        text-decoration-color: "+n.color.primary.light+";\n        text-underline-offset: 0.1em;\n    }\n    a:hover, a:active:hover, a:visited:hover {\n        filter: brightness(1.25);\n        text-decoration-color: "+n.color.primary.dark+";\n        text-underline-offset: 0.1em;\n    }\n"}));a.propTypes={children:o.a.node.isRequired,elevate:o.a.bool.isRequired},a.defaultProps={elevate:!0};var l=i.c.div.withConfig({displayName:"card-header__CardHeader",componentId:"sc-34wzb3-0"})((function(e){var n=e.theme;return"\n    display: flex;\n    // justify-content: center;\n    // align-items: center;\n    // text-align: left;\n    color: "+n.color.darkgrey+";\n    background: linear-gradient(#f3ffff 0%, "+n.color.white+" 100%);\n    font-weight: bold;\n    position: relative;\n    font-size: 200%;\n    min-height: 4rem;\n    padding: "+n.padding.normal+";\n    padding-bottom: 0;\n"}));l.propTypes={fgColor:o.a.string.isRequired,bgColor:o.a.string.isRequired,children:o.a.node.isRequired},l.defaultProps={fgColor:"#fff",bgColor:"var(--color-crimson)",children:""};var c=t("FdF9"),d=i.c.div.withConfig({displayName:"card-body__CardBodyContents",componentId:"c38ykj-0"})((function(e){return"\n    flex: 1;\n    padding: "+e.theme.padding.normal+";\n    background-color: inherit;\n"}));d.propTypes={fgColor:o.a.string.isRequired,bgColor:o.a.string.isRequired},d.defaultProps={fgColor:"inherit",bgColor:"#fff"};var s=function(e){var n=e.children,t=(e.image,e.style);return c.default.createElement(d,{style:t},n)},u=i.c.div.withConfig({displayName:"card-footer__CardFooter",componentId:"sc-17yhfms-0"})((function(e){var n=e.theme;e.left;return"\n    display: flex;\n    justify-content: flex-start;\n    "+(e.center&&"justify-content: center")+";\n    "+(e.right&&"justify-content: flex-end")+";\n    align-items: center;\n    color: "+n.color.black+";\n    background-color: inherit;\n    padding: "+n.padding.normal+";\n    height: 4rem;\n"}));u.propTypes={fgColor:o.a.string.isRequired,bgColor:o.a.string.isRequired,children:o.a.node.isRequired},u.defaultProps={fgColor:"#fff",bgColor:"var(--color-crimson)"};t("84bF");var f=t("RiPl"),m=t("gGy4"),p=i.c.div.withConfig({displayName:"title-card__Wrapper",componentId:"sc-15t9ua8-0"})(["position:relative;margin-top:5rem;"]),g=i.c.div.withConfig({displayName:"title-card__TitleCardHeader",componentId:"sc-15t9ua8-1"})((function(e){var n=e.theme;return"\n    display: flex;\n    border-radius: "+n.border.radius+";\n    justfy-content: center;\n    align-items: center;\n    background-color: "+n.color.primary.dark+";\n    filter: drop-shadow(0 8px 8px #00000033);\n    font-weight: bold;\n    position: relative;\n    min-height: 4rem;\n    padding: "+n.padding.small+";\n    position: absolute;\n    left: 50%;\n    top: -3rem;\n    transform: translateX(-50%);\n    transition: min-width 250ms;\n    z-index: 1;\n    min-width: 50%;\n    @media (max-width: 798px) {\n        min-width: 90%;\n    }\n    "+f.c+" {\n        color: "+n.color.white+";\n        text-align: center;\n        width: 100%;\n        font-size: calc(12pt + 1vmin);\n        padding: 0;\n        margin: 0;\n    }\n"})),h=i.c.div.withConfig({displayName:"title-card__TitleCardBody",componentId:"sc-15t9ua8-2"})((function(e){var n=e.topPadding;return"\n    flex: 1;\n    padding: "+e.theme.padding.normal+";\n    padding-top: calc(3 * "+n+"px / 4);\n    background-color: inherit;\n"})),b=function(e){var n=e.title,t=e.children,r=Object(c.useRef)(),o=Object(c.useState)(0),i=o[0],l=o[1],d=Object(m.f)().windowWidth;return Object(c.useEffect)((function(){l(r.current.scrollHeight)}),[r.current,d]),c.default.createElement(p,null,c.default.createElement(g,{ref:r},c.default.createElement(f.c,null,n)),c.default.createElement(a,null,c.default.createElement(h,{topPadding:i},t)))}},"84bF":function(e,n,t){"use strict";t("OGtf")("small",(function(e){return function(){return e(this,"small","","")}}))},"9I2h":function(e,n,t){"use strict";t.r(n);t("Z2Ku"),t("L9s1");var r=t("FdF9"),o=t("vOnD"),i=t("I/Ru"),a=t("jNNy"),l=t("gGy4"),c=t("RiPl"),d=t("4Fil"),s=t("/m4c"),u=t("FT44"),f=t("QmAe"),m=o.c.div.withConfig({displayName:"resources__ResourceButtons",componentId:"sc-1l7een9-0"})((function(e){return"\n    display: flex;\n    flex-wrap: wrap;\n    flex-direction: row;\n    justify-content: center;\n    align-items: center;\n    padding-bottom: "+e.theme.padding.normal+";\n"})),p=Object(o.c)(u.a).withConfig({displayName:"resources__ResourceButton",componentId:"sc-1l7een9-1"})((function(e){var n=e.theme,t=e.active;return"\n    display: block;\n    padding: 0.5rem 1rem;\n    margin: 0.5rem;\n    border-radius: 4px;\n    "+(void 0!==t&&t?"background-color: "+n.color.primary.main+";":"background-color: "+n.color.darkgrey+";")+"\n    @media (max-width: 798px) {\n        width: 100%;\n    }\n"})),g=o.c.div.withConfig({displayName:"resources__Resource",componentId:"sc-1l7een9-2"})((function(e){var n=e.theme;return"\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n    margin-bottom: 1rem;\n    padding-bottom: "+n.padding.normal+";\n    &:not(:last-child) {\n        border-bottom: 1px solid "+n.color.lightgrey+";\n    }\n    @media (max-width: 798px) {\n        flex-direction: column;\n    }\n"})),h=o.c.div.withConfig({displayName:"resources__ResourceInfo",componentId:"sc-1l7een9-3"})((function(e){return"\n    flex: 1;\n    padding-right: "+e.theme.padding.normal+";\n"})),b=Object(o.c)(c.a).withConfig({displayName:"resources__ResourceTitle",componentId:"sc-1l7een9-4"})(["text-align:left;@media (max-width:798px){text-align:center;}"]),y=o.c.div.withConfig({displayName:"resources__ResourceSource",componentId:"sc-1l7een9-5"})((function(e){var n=e.theme;return"\n    color: "+n.color.grey+";\n    @media (max-width: 798px) {\n        margin-bottom: "+n.padding.normal+";\n    }\n"}));n.default=function(){var e=Object(l.d)(),n=Object(r.useState)(-1),t=n[0],o=n[1],u=Object(r.useState)(!1),v=u[0],w=u[1];Object(r.useLayoutEffect)((function(){v&&setTimeout((function(){return w(!1)}),250),console.log(v)}),[v]);var x=function(e){return function(n){w(!0),setTimeout((function(){return o(e)}),250)}};return r.default.createElement(i.a,null,r.default.createElement(a.a,{title:"COVID-19 Resources",description:"",keywords:""}),r.default.createElement(d.d,{title:"COVID-19 Resources"},r.default.createElement(c.b,null,"The resources listed below have proven to be of interest at RENCI as we discuss the progression of COVID-19 and and its impact on research and our society. We have collected them here in case they are interesting to others also, although we do not take credit for or endorse the information within these links in any way.")),r.default.createElement(m,null,r.default.createElement(p,{onClick:x(-1),active:-1===t},"ALL (",e.reduce((function(e,n){return e+n.resources.length}),0),")"),e.map((function(e,n){return r.default.createElement(p,{key:e.title+"_button",onClick:x(n),active:t===n},e.title," (",e.resources.length,")")}))),r.default.createElement("section",{id:"resource-list",style:{opacity:v?0:1,transform:"translate3d("+(v?"0, 2rem, 0":"0, 0, 0")+")",transition:"transform 250ms ease-out, opacity 250ms"}},e.map((function(e,n){var o=e.title,i=e.resources;return[-1,n].includes(t)&&r.default.createElement(d.a,{key:o,name:Object(f.kebabCase)(o)},r.default.createElement(d.c,null,o),r.default.createElement(d.b,null,i.map((function(e){return r.default.createElement(g,{key:e.title},r.default.createElement(h,null,r.default.createElement(b,null,e.title),r.default.createElement(y,null,"Source: ",e.source||"-")),r.default.createElement(s.b,{to:e.url},"View"))}))))}))))}},AeWJ:function(e,n,t){t("pIFo"),e.exports={kebabCase:function(e){return e.toLowerCase().replace(/ +/g,"-")}}},QmAe:function(e,n,t){"use strict";var r=t("AeWJ");t.o(r,"kebabCase")&&t.d(n,"kebabCase",(function(){return r.kebabCase}))}}]);
//# sourceMappingURL=component---src-pages-resources-js-44c0f9bfa58252d04d9b.js.map