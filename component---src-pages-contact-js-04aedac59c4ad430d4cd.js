(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{"4Fil":function(e,t,n){"use strict";n.d(t,"a",(function(){return l})),n.d(t,"c",(function(){return o})),n.d(t,"b",(function(){return c}));var a=n("17x9"),r=n.n(a),i=n("vOnD"),l=i.c.div.withConfig({displayName:"card__Card",componentId:"vz6j3s-0"})((function(e){var t=e.theme;return"\n    // & * { border: 1px solid #f99; }\n    border-radius: "+t.border.radius+";\n    overflow: hidden;\n    margin-bottom: 3rem;\n    height: 100%;\n    display: flex;\n    flex-direction: column;\n    background-color: "+t.color.white+";\n    transition: filter 250ms;\n    filter: drop-shadow(0 0 4px rgba(0, 0, 0, 0.1));\n    &:hover {\n        filter: drop-shadow(0 0 6px rgba(0, 0, 0, 0.2));\n    }\n    a, a:active, a:visited {\n        color: "+t.color.primary.light+";\n        transition: filter 250ms, text-decoration-color 250ms;\n        text-decoration-color: "+t.color.primary.light+";\n        text-underline-offset: 0.1em;\n    }\n    a:hover, a:active:hover, a:visited:hover {\n        filter: brightness(1.25);\n        text-decoration-color: "+t.color.primary.dark+";\n        text-underline-offset: 0.1em;\n    }\n"}));l.propTypes={children:r.a.node.isRequired,elevate:r.a.bool.isRequired},l.defaultProps={elevate:!0};var o=i.c.div.withConfig({displayName:"card-header__CardHeader",componentId:"sc-34wzb3-0"})((function(e){var t=e.theme;return"\n    display: flex;\n    // justify-content: center;\n    // align-items: center;\n    // text-align: left;\n    color: "+t.color.darkgrey+";\n    background: linear-gradient(#f3ffff 0%, "+t.color.white+" 100%);\n    font-weight: bold;\n    position: relative;\n    font-size: 200%;\n    min-height: 4rem;\n    padding: "+t.padding.normal+";\n"}));o.propTypes={fgColor:r.a.string.isRequired,bgColor:r.a.string.isRequired,children:r.a.node.isRequired},o.defaultProps={fgColor:"#fff",bgColor:"var(--color-crimson)",children:""};var d=n("FdF9"),u=i.c.div.withConfig({displayName:"card-body__CardBodyContents",componentId:"c38ykj-0"})((function(e){var t=e.theme;return"\n    flex: 1;\n    padding: "+t.padding.normal+";\n    background-color: inherit;\n    color: "+t.color.black+";\n"}));u.propTypes={fgColor:r.a.string.isRequired,bgColor:r.a.string.isRequired},u.defaultProps={fgColor:"inherit",bgColor:"#fff"};var c=function(e){var t=e.children,n=(e.image,e.style);return d.default.createElement(u,{style:n},t)},s=i.c.div.withConfig({displayName:"card-footer__CardFooter",componentId:"sc-17yhfms-0"})((function(e){var t=e.theme;e.left;return"\n    display: flex;\n    justify-content: flex-start;\n    "+(e.center&&"justify-content: center")+";\n    "+(e.right&&"justify-content: flex-end")+";\n    align-items: center;\n    color: "+t.color.black+";\n    background-color: inherit;\n    padding: "+t.padding.normal+";\n    height: 4rem;\n"}));s.propTypes={fgColor:r.a.string.isRequired,bgColor:r.a.string.isRequired,children:r.a.node.isRequired},s.defaultProps={fgColor:"#fff",bgColor:"var(--color-crimson)"}},"Cuy+":function(e,t,n){"use strict";n.r(t);var a=n("FdF9"),r=n("I/Ru"),i=n("jNNy"),l=n("RiPl"),o=n("4Fil"),d=n("vOkX"),u=(n("91GP"),n("vOnD")),c=n("FT44"),s=u.c.form.withConfig({displayName:"contact-form__Form",componentId:"sc-1t5wfix-0"})((function(e){var t=e.theme;return"\n    & .input-group {\n        margin: 1rem 0;\n    }\n    & label {\n        display: inline-block;\n        font-weight: bold;\n        padding: 0.5rem 0;\n        color: "+t.color.darkgrey+";\n    }\n    & input, textarea {\n        width: 100%;\n        border-radius: "+t.border.radius+";\n        padding: 0.5rem;\n        border: 1px solid "+t.color.grey+";\n        transition: box-shadow 500ms, border 250ms;\n        &:focus {\n            box-shadow: 0 0 6px 1px "+t.color.primary.light+"66;\n            border: 1px solid "+t.color.primary.light+";\n        }\n    }\n    & input {\n    }\n    & textarea {\n        width: 100%;\n        resize: vertical;\n        min-height: 5rem;\n    }\n    & .actions {\n        text-align: center;\n    }\n"})),m={firstName:"",lastName:"",emailAddress:"",organization:"",message:""},f=function(){var e=Object(a.useState)(m),t=e[0],n=e[1],r=function(e){var a;n(Object.assign({},t,((a={})[e.target.id]=e.target.value,a))),console.log(t)};return a.default.createElement(s,{action:"https://docs.google.com/forms/u/0/d/e/1FAIpQLSfwt6blwqdGD4LQG3EHsLQCajcsL7c5DDF_3oZmRIQhTYWqZA/formResponse",target:"_self",method:"POST",id:"mG61Hd"},a.default.createElement("div",{className:"input-group"},a.default.createElement("label",{htmlFor:"first-name-input"},"First Name"),a.default.createElement("br",null),a.default.createElement("input",{id:"firstName",value:t.firstName,onChange:r,type:"text","aria-label":"First Name",required:!0,autoComplete:"off",tabIndex:"0",jsname:"YPqjbf",name:"entry.511731329",dir:"auto","data-initial-dir":"auto","data-initial-value":""})),a.default.createElement("div",{className:"input-group"},a.default.createElement("label",{htmlFor:"last-name-input"},"Last Name"),a.default.createElement("br",null),a.default.createElement("input",{id:"lastName",value:t.lastName,onChange:r,type:"text","aria-label":"Last Name",required:!0,autoComplete:"off",tabIndex:"0",jsname:"YPqjbf",name:"entry.2107060700",dir:"auto","data-initial-dir":"auto","data-initial-value":""})),a.default.createElement("div",{className:"input-group"},a.default.createElement("label",{htmlFor:"email-input"},"Email"),a.default.createElement("br",null),a.default.createElement("input",{id:"emailAddress",value:t.emailAddress,onChange:r,type:"email","aria-label":"Email address",required:!0,autoComplete:"off",tabIndex:"0",jsname:"YPqjbf",name:"entry.431407946",dir:"auto","data-initial-dir":"auto","data-initial-value":""})),a.default.createElement("div",{className:"input-group"},a.default.createElement("label",{htmlFor:"organization-input"},"Organization"),a.default.createElement("br",null),a.default.createElement("input",{id:"organization",value:t.organization,onChange:r,type:"text","aria-label":"Organization",required:!0,autoComplete:"off",tabIndex:"0",jsname:"YPqjbf",name:"entry.1819972738",dir:"auto","data-initial-dir":"auto","data-initial-value":""})),a.default.createElement("div",{className:"input-group"},a.default.createElement("label",{htmlFor:"message-input"},"Tell us how you'd like to connect. Do you have a question about one of our projects? A suggestion for a partnership? Provide as much detail as you can below."),a.default.createElement("br",null),a.default.createElement("textarea",{id:"message",value:t.message,onChange:r,required:!0,tabIndex:"0","aria-label":"Tell us how you&#39;d like to connect. Do you have a question about one of our projects? A suggestion for a partnership? Provide as much detail as you can below.",jsname:"YPqjbf",jscontroller:"gZjhIf",jsaction:"input:Lg5SV;ti6hGc:XMgOHc;rcuQ6b:WYd;",name:"entry.484709562","data-rows":"1",dir:"auto","data-initial-dir":"auto","data-initial-value":""})),a.default.createElement("div",{className:"actions"},a.default.createElement(c.a,null,"Submit")))};t.default=function(){return a.default.createElement(r.a,null,a.default.createElement(i.a,{title:"Contact",description:"",keywords:""}),a.default.createElement(l.c,null,"Contact Us"),a.default.createElement(o.a,null,a.default.createElement(o.c,null,"Partnering with RENCI"),a.default.createElement(o.b,null,a.default.createElement(l.b,null,"Are you interested in partnering with RENCI to develop solutions to the coronavirus pandemic? In particular, RENCI can offer expertise in the following areas:"),a.default.createElement(d.a,null,a.default.createElement(d.b,{primary:"Data Management and Visualization"}),a.default.createElement(d.b,{primary:"Data Analysis"}),a.default.createElement(d.b,{primary:"AI / Machine Learning"}),a.default.createElement(d.b,{primary:"Data-driven Biological Reasoning"}),a.default.createElement(d.b,{primary:"Cloud Computing"}),a.default.createElement(d.b,{primary:"Workflow Management"}),a.default.createElement(d.b,{primary:"Use of Cloud Resources, High-Performance Clusters, or Distributed Resources"}),a.default.createElement(d.b,{primary:"Cybersecurity"})))),a.default.createElement(o.a,null,a.default.createElement(o.c,null,"Let's Connect!"),a.default.createElement(o.b,null,a.default.createElement(f,null))))}},vOkX:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return m}));n("rGqo"),n("yt8O"),n("Btvt"),n("RW0V");var a=n("FdF9"),r=n("17x9"),i=n.n(r),l=n("vOnD");l.c.ol.withConfig({displayName:"list__OrderedList",componentId:"gziq1o-0"})(["line-height:",";"],(function(e){return e.dense?"1.0":"2.0"}));var o=l.c.ul.withConfig({displayName:"list__UnorderedList",componentId:"gziq1o-1"})(["list-style-type:none;margin:0 0 2rem 0;padding:0;text-align:left;"," "," line-height:",";"],(function(e){return!0===e.center?"text-align: center;":void 0}),(function(e){return!0===e.right?"text-align: right;":void 0}),(function(e){return e.dense?"1.0":"2.0"})),d=Object(l.c)(o).withConfig({displayName:"list__BulletedList",componentId:"gziq1o-2"})(["list-style-type:disc;margin:0 0 2rem 1rem;"]),u=(l.c.h4.withConfig({displayName:"list__ListTitle",componentId:"gziq1o-3"})([""]),l.c.li.withConfig({displayName:"list__ListItemContainer",componentId:"gziq1o-4"})(["margin:0;margin-bottom:1rem;padding:0;"])),c=l.c.span.withConfig({displayName:"list__PrimaryText",componentId:"gziq1o-5"})(["display:block;"]),s=l.c.span.withConfig({displayName:"list__SecondaryText",componentId:"gziq1o-6"})(["display:block;font-size:90%;"]),m=function(e){var t=e.primary,n=e.secondary;return a.default.createElement(u,null,a.default.createElement(c,null,t),n&&a.default.createElement(s,null,n))};(function(e){var t=e.children,n=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,["children"]);return a.default.createElement(o,n,t)}).defaultProps={dense:!1,children:i.a.node.isRequired}}}]);
//# sourceMappingURL=component---src-pages-contact-js-04aedac59c4ad430d4cd.js.map