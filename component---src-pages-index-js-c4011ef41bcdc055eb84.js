(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{"4Fil":function(e,n,t){"use strict";t.d(n,"a",(function(){return o})),t.d(n,"c",(function(){return l})),t.d(n,"b",(function(){return s})),t.d(n,"d",(function(){return y}));var r=t("17x9"),i=t.n(r),a=t("vOnD"),o=a.c.div.withConfig({displayName:"card__Card",componentId:"vz6j3s-0"})((function(e){var n=e.theme,t=e.dark;return"\n    // & * { border: 1px solid #f99; }\n    border-radius: "+n.border.radius+";\n    overflow: hidden;\n    margin-bottom: 3rem;\n    height: 100%;\n    display: flex;\n    flex-direction: column;\n    background-color: "+(t?n.color.primary.dark:n.color.white)+";\n    color: "+(t?n.color.white:n.color.primary.dark)+";\n    opacity: "+(t?.75:1)+";\n    transition: filter 250ms;\n    filter: drop-shadow(0 0 4px rgba(0, 0, 0, 0.1));\n    &:hover {\n        filter: drop-shadow(0 0 6px rgba(0, 0, 0, 0.2));\n    }\n    a, a:active, a:visited {\n        color: "+n.color.primary.light+";\n        transition: filter 250ms, text-decoration-color 250ms;\n        text-decoration-color: "+n.color.primary.light+";\n        text-underline-offset: 0.1em;\n    }\n    a:hover, a:active:hover, a:visited:hover {\n        filter: brightness(1.25);\n        text-decoration-color: "+n.color.primary.dark+";\n        text-underline-offset: 0.1em;\n    }\n"}));o.propTypes={children:i.a.node.isRequired,elevate:i.a.bool.isRequired},o.defaultProps={elevate:!0};var l=a.c.div.withConfig({displayName:"card-header__CardHeader",componentId:"sc-34wzb3-0"})((function(e){var n=e.theme;return"\n    display: flex;\n    // justify-content: center;\n    // align-items: center;\n    // text-align: left;\n    color: "+n.color.primary.dark+";\n    background: linear-gradient(-30deg, "+n.color.primary.light+"22 0%, "+n.color.white+" 100%);\n    background-color: "+n.color.primary.light+"11;\n    border-bottom: 1px solid "+n.color.primary.light+"66;\n    font-weight: bold;\n    position: relative;\n    font-size: 200%;\n    min-height: 4rem;\n    padding: "+n.padding.normal+";\n    // padding-bottom: 0;\n"}));l.propTypes={fgColor:i.a.string.isRequired,bgColor:i.a.string.isRequired,children:i.a.node.isRequired},l.defaultProps={fgColor:"#fff",bgColor:"var(--color-crimson)",children:""};var d=t("FdF9"),c=a.c.div.withConfig({displayName:"card-body__CardBodyContents",componentId:"c38ykj-0"})((function(e){return"\n    flex: 1;\n    padding: "+e.theme.padding.normal+";\n    background-color: inherit;\n"}));c.propTypes={fgColor:i.a.string.isRequired,bgColor:i.a.string.isRequired},c.defaultProps={fgColor:"inherit",bgColor:"#fff"};var s=function(e){var n=e.children,t=(e.image,e.style);return d.default.createElement(c,{style:t},n)},u=a.c.div.withConfig({displayName:"card-footer__CardFooter",componentId:"sc-17yhfms-0"})((function(e){var n=e.theme;e.left;return"\n    display: flex;\n    justify-content: flex-start;\n    "+(e.center&&"justify-content: center")+";\n    "+(e.right&&"justify-content: flex-end")+";\n    align-items: center;\n    color: "+n.color.black+";\n    background-color: inherit;\n    padding: "+n.padding.normal+";\n    height: 4rem;\n"}));u.propTypes={fgColor:i.a.string.isRequired,bgColor:i.a.string.isRequired,children:i.a.node.isRequired},u.defaultProps={fgColor:"#fff",bgColor:"var(--color-crimson)"};t("84bF");var f=t("RiPl"),m=t("gGy4"),p=a.c.div.withConfig({displayName:"title-card__Wrapper",componentId:"sc-15t9ua8-0"})(["position:relative;margin-top:5rem;"]),g=a.c.div.withConfig({displayName:"title-card__TitleCardHeader",componentId:"sc-15t9ua8-1"})((function(e){var n=e.theme;return"\n    display: flex;\n    border-radius: "+n.border.radius+";\n    justfy-content: center;\n    align-items: center;\n    background-color: "+n.color.primary.dark+";\n    filter: drop-shadow(0 8px 8px #00000033);\n    font-weight: bold;\n    position: relative;\n    min-height: 4rem;\n    padding: "+n.padding.small+";\n    position: absolute;\n    left: 50%;\n    top: -3rem;\n    transform: translateX(-50%);\n    transition: min-width 250ms;\n    z-index: 1;\n    min-width: 50%;\n    @media (max-width: 798px) {\n        min-width: 90%;\n    }\n    "+f.c+" {\n        color: "+n.color.white+";\n        text-align: center;\n        width: 100%;\n        font-size: calc(12pt + 1vmin);\n        padding: 0;\n        margin: 0;\n    }\n"})),h=a.c.div.withConfig({displayName:"title-card__TitleCardBody",componentId:"sc-15t9ua8-2"})((function(e){var n=e.topPadding;return"\n    flex: 1;\n    padding: "+e.theme.padding.normal+";\n    padding-top: calc(3 * "+n+"px / 4);\n    background-color: inherit;\n"})),y=function(e){var n=e.title,t=e.children,r=Object(d.useRef)(),i=Object(d.useState)(0),a=i[0],l=i[1],c=Object(m.f)().windowWidth;return Object(d.useEffect)((function(){l(r.current.scrollHeight)}),[r.current,c]),d.default.createElement(p,null,d.default.createElement(g,{ref:r},d.default.createElement(f.c,null,n)),d.default.createElement(o,null,d.default.createElement(h,{topPadding:a},t)))}},"84bF":function(e,n,t){"use strict";t("OGtf")("small",(function(e){return function(){return e(this,"small","","")}}))},RXBc:function(e,n,t){"use strict";t.r(n);var r=t("FdF9"),i=t("I/Ru"),a=t("RiPl"),o=t("jNNy"),l=t("4Fil"),d=t("vOkX"),c=t("/m4c"),s=t("gGy4");n.default=function(){var e=Object(s.a)();return r.default.createElement(i.a,null,r.default.createElement(o.a,{title:"Home",description:"",keywords:""}),r.default.createElement(l.d,{title:"RENCI's COVID-19 Response"},r.default.createElement(a.b,null,"Working closely with partner research institutions and the private sector, ",r.default.createElement(c.a,{to:"https://www.renci.org/"},"RENCI")," is adapting and extending its existing capabilities to accelerate COVID-19 response and research efforts. RENCI researchers are leaders in data science and in data-driven discoveries, and we want to use those talents to assist the larger international effort to slow the spread of the virus and search for treatments."),r.default.createElement(a.b,null,"At a high level, our work in the area of COVID-19 research aims to:"),r.default.createElement(d.a,null,r.default.createElement(d.b,{primary:"Apply linked open data, including biomedical ontologies, to build in silico knowledge models of drugs, processes, and systems involved in the coronavirus disease and related diseases."}),r.default.createElement(d.b,{primary:"Present aggregated clinical statistical models and an open, privacy-preserving framework to expose, share, and analyze data on clinical correlates of disease and outcomes, environmental exposures, socio-economic indicators, and genotype data."}),r.default.createElement(d.b,{primary:"Provision notebook-based analytical environments with big data, machine learning, and artificial intelligence capabilities to support access to the growing body of COVID-19 related datasets, as well as tools to analyze and explore the data."}))),r.default.createElement(l.a,null,r.default.createElement(l.c,null,"Our Blog"),r.default.createElement(l.b,null,r.default.createElement(a.b,null,"Keep up with the latest on our blog."),e.map((function(e){var n=e.date,t=e.title,i=e.url;return r.default.createElement("article",{key:t},r.default.createElement(a.a,null,r.default.createElement("strong",null,n),r.default.createElement("br",null),r.default.createElement(c.a,{to:i},t)))})))),r.default.createElement(a.b,null))}},vOkX:function(e,n,t){"use strict";t.d(n,"a",(function(){return d})),t.d(n,"b",(function(){return f}));t("rGqo"),t("yt8O"),t("Btvt"),t("RW0V");var r=t("FdF9"),i=t("17x9"),a=t.n(i),o=t("vOnD");o.c.ol.withConfig({displayName:"list__OrderedList",componentId:"gziq1o-0"})(["line-height:",";"],(function(e){return e.dense?"1.0":"2.0"}));var l=o.c.ul.withConfig({displayName:"list__UnorderedList",componentId:"gziq1o-1"})(["list-style-type:none;margin:0 0 2rem 0;padding:0;text-align:left;"," "," line-height:",";"],(function(e){return!0===e.center?"text-align: center;":void 0}),(function(e){return!0===e.right?"text-align: right;":void 0}),(function(e){return e.dense?"1.0":"2.0"})),d=Object(o.c)(l).withConfig({displayName:"list__BulletedList",componentId:"gziq1o-2"})(["list-style-type:disc;margin:0 0 2rem 1rem;"]),c=(o.c.h4.withConfig({displayName:"list__ListTitle",componentId:"gziq1o-3"})([""]),o.c.li.withConfig({displayName:"list__ListItemContainer",componentId:"gziq1o-4"})(["margin:0;margin-bottom:1rem;padding:0;"])),s=o.c.span.withConfig({displayName:"list__PrimaryText",componentId:"gziq1o-5"})(["display:block;"]),u=o.c.span.withConfig({displayName:"list__SecondaryText",componentId:"gziq1o-6"})(["display:block;font-size:90%;"]),f=function(e){var n=e.primary,t=e.secondary;return r.default.createElement(c,null,r.default.createElement(s,null,n),t&&r.default.createElement(u,null,t))};(function(e){var n=e.children,t=function(e,n){if(null==e)return{};var t,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,["children"]);return r.default.createElement(l,t,n)}).defaultProps={dense:!1,children:a.a.node.isRequired}}}]);
//# sourceMappingURL=component---src-pages-index-js-c4011ef41bcdc055eb84.js.map