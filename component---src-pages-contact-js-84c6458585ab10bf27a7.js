(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{"4Fil":function(e,n,t){"use strict";t.d(n,"a",(function(){return a})),t.d(n,"d",(function(){return l})),t.d(n,"b",(function(){return u})),t.d(n,"c",(function(){return f}));var r=t("17x9"),i=t.n(r),o=t("vOnD"),a=o.c.div.withConfig({displayName:"card__Card",componentId:"vz6j3s-0"})((function(e){var n=e.theme;return"\n    // & * { border: 1px solid #f99; }\n    border-radius: "+n.border.radius+";\n    overflow: hidden;\n    margin-bottom: 3rem;\n    height: 100%;\n    display: flex;\n    flex-direction: column;\n    background-color: "+n.color.white+";\n    transition: filter 250ms;\n    filter: drop-shadow(0 0 4px rgba(0, 0, 0, 0.1));\n    &:hover {\n        filter: drop-shadow(0 0 6px rgba(0, 0, 0, 0.2));\n    }\n    a, a:active, a:visited {\n        color: "+n.color.primary.light+";\n        transition: filter 250ms, text-decoration-color 250ms;\n        text-decoration-color: "+n.color.primary.light+";\n        text-underline-offset: 0.1em;\n    }\n    a:hover, a:active:hover, a:visited:hover {\n        filter: brightness(0.75);\n        text-decoration-color: "+n.color.primary.dark+";\n        text-underline-offset: 0.1em;\n    }\n"}));a.propTypes={children:i.a.node.isRequired,elevate:i.a.bool.isRequired},a.defaultProps={elevate:!0};var l=o.c.div.withConfig({displayName:"card-header__CardHeader",componentId:"sc-34wzb3-0"})((function(e){var n=e.theme;return"\n    display: flex;\n    // justify-content: center;\n    // align-items: center;\n    // text-align: left;\n    color: "+n.color.darkgrey+";\n    background-color: inherit;\n    font-weight: bold;\n    padding: 0.5rem 2rem;\n    position: relative;\n    font-size: 200%;\n    min-height: 4rem;\n    padding: "+n.padding.normal+" "+n.padding.normal+" 0 "+n.padding.normal+";\n"}));l.propTypes={fgColor:i.a.string.isRequired,bgColor:i.a.string.isRequired,children:i.a.node.isRequired},l.defaultProps={fgColor:"#fff",bgColor:"var(--color-crimson)",children:""};var d=t("FdF9"),c=o.c.div.withConfig({displayName:"card-body__CardBodyWrapper",componentId:"c38ykj-0"})(["display:flex;flex-direction:row;"]),s=o.c.div.withConfig({displayName:"card-body__CardBodyContents",componentId:"c38ykj-1"})((function(e){var n=e.theme;return"\n    flex: 1;\n    padding: "+n.padding.normal+";\n    background-color: inherit;\n    color: "+n.color.black+";\n"}));s.propTypes={fgColor:i.a.string.isRequired,bgColor:i.a.string.isRequired},s.defaultProps={fgColor:"inherit",bgColor:"#fff"};var u=function(e){var n=e.children,t=(e.image,e.style);return d.default.createElement(c,null,d.default.createElement(s,{style:t},n))},f=o.c.div.withConfig({displayName:"card-footer__CardFooter",componentId:"sc-17yhfms-0"})((function(e){var n=e.theme;e.left;return"\n    display: flex;\n    justify-content: flex-start;\n    "+(e.center&&"justify-content: center")+";\n    "+(e.right&&"justify-content: flex-end")+";\n    align-items: center;\n    color: "+n.color.black+";\n    background-color: inherit;\n    padding: "+n.padding.normal+";\n    height: 4rem;\n"}));f.propTypes={fgColor:i.a.string.isRequired,bgColor:i.a.string.isRequired,children:i.a.node.isRequired},f.defaultProps={fgColor:"#fff",bgColor:"var(--color-crimson)"}},"Cuy+":function(e,n,t){"use strict";t.r(n);var r=t("FdF9"),i=t("I/Ru"),o=t("jNNy"),a=t("RiPl"),l=t("4Fil"),d=t("vOkX");n.default=function(){return r.default.createElement(i.a,null,r.default.createElement(o.a,{title:"Contact",description:"",keywords:""}),r.default.createElement(a.c,null,"Contact Us"),r.default.createElement(l.a,null,r.default.createElement(l.d,null,"Partnering with RENCI"),r.default.createElement(l.b,null,r.default.createElement(a.b,null,"Are you interested in partnering with RENCI to develop solutions to the coronavirus pandemic? In particular, RENCI can offer expertise in the following areas:"),r.default.createElement(d.a,null,r.default.createElement(d.b,{primary:"Data Management and Visualization"}),r.default.createElement(d.b,{primary:"Data Analysis"}),r.default.createElement(d.b,{primary:"AI / Machine Learning"}),r.default.createElement(d.b,{primary:"Data-driven Biological Reasoning"}),r.default.createElement(d.b,{primary:"Cloud Computing"}),r.default.createElement(d.b,{primary:"Workflow Management"}),r.default.createElement(d.b,{primary:"Use of Cloud Resources, High-Performance Clusters, or Distributed Resources"}),r.default.createElement(d.b,{primary:"Cybersecurity"})))),r.default.createElement(l.a,null,r.default.createElement(l.d,null,"A Form Maybe?"),r.default.createElement(l.b,null,r.default.createElement(a.b,null,"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi, suscipit? Nesciunt ipsa excepturi nisi quo. Quibusdam quasi fugit iste quos expedita provident maiores."))))}},vOkX:function(e,n,t){"use strict";t.d(n,"a",(function(){return d})),t.d(n,"b",(function(){return f}));t("rGqo"),t("yt8O"),t("Btvt"),t("RW0V");var r=t("FdF9"),i=t("17x9"),o=t.n(i),a=t("vOnD");a.c.ol.withConfig({displayName:"list__OrderedList",componentId:"gziq1o-0"})(["line-height:",";"],(function(e){return e.dense?"1.0":"2.0"}));var l=a.c.ul.withConfig({displayName:"list__UnorderedList",componentId:"gziq1o-1"})(["list-style-type:none;margin:0 0 2rem 0;padding:0;text-align:left;"," "," line-height:",";"],(function(e){return!0===e.center?"text-align: center;":void 0}),(function(e){return!0===e.right?"text-align: right;":void 0}),(function(e){return e.dense?"1.0":"2.0"})),d=Object(a.c)(l).withConfig({displayName:"list__BulletedList",componentId:"gziq1o-2"})(["list-style-type:disc;margin:0 0 2rem 1rem;"]),c=(a.c.h4.withConfig({displayName:"list__ListTitle",componentId:"gziq1o-3"})([""]),a.c.li.withConfig({displayName:"list__ListItemContainer",componentId:"gziq1o-4"})(["margin:0;margin-bottom:1rem;padding:0;"])),s=a.c.span.withConfig({displayName:"list__PrimaryText",componentId:"gziq1o-5"})(["display:block;"]),u=a.c.span.withConfig({displayName:"list__SecondaryText",componentId:"gziq1o-6"})(["display:block;font-size:90%;"]),f=function(e){var n=e.primary,t=e.secondary;return r.default.createElement(c,null,r.default.createElement(s,null,n),t&&r.default.createElement(u,null,t))};(function(e){var n=e.children,t=function(e,n){if(null==e)return{};var t,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,["children"]);return r.default.createElement(l,t,n)}).defaultProps={dense:!1,children:o.a.node.isRequired}}}]);
//# sourceMappingURL=component---src-pages-contact-js-84c6458585ab10bf27a7.js.map