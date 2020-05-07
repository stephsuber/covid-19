(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{"4Fil":function(e,t,n){"use strict";n.d(t,"a",(function(){return o})),n.d(t,"c",(function(){return s})),n.d(t,"b",(function(){return c}));var a=n("17x9"),r=n.n(a),i=n("vOnD"),o=i.c.div.withConfig({displayName:"card__Card",componentId:"vz6j3s-0"})((function(e){var t=e.theme;return"\n    // & * { border: 1px solid #f99; }\n    border-radius: "+t.border.radius+";\n    overflow: hidden;\n    margin-bottom: 3rem;\n    height: 100%;\n    display: flex;\n    flex-direction: column;\n    background-color: "+t.color.white+";\n    transition: filter 250ms;\n    filter: drop-shadow(0 0 4px rgba(0, 0, 0, 0.1));\n    &:hover {\n        filter: drop-shadow(0 0 6px rgba(0, 0, 0, 0.2));\n    }\n    a, a:active, a:visited {\n        color: "+t.color.primary.light+";\n        transition: filter 250ms, text-decoration-color 250ms;\n        text-decoration-color: "+t.color.primary.light+";\n        text-underline-offset: 0.1em;\n    }\n    a:hover, a:active:hover, a:visited:hover {\n        filter: brightness(1.25);\n        text-decoration-color: "+t.color.primary.dark+";\n        text-underline-offset: 0.1em;\n    }\n"}));o.propTypes={children:r.a.node.isRequired,elevate:r.a.bool.isRequired},o.defaultProps={elevate:!0};var s=i.c.div.withConfig({displayName:"card-header__CardHeader",componentId:"sc-34wzb3-0"})((function(e){var t=e.theme;return"\n    display: flex;\n    // justify-content: center;\n    // align-items: center;\n    // text-align: left;\n    color: "+t.color.darkgrey+";\n    background-color: inherit;\n    font-weight: bold;\n    padding: 0.5rem 2rem;\n    position: relative;\n    font-size: 200%;\n    min-height: 4rem;\n    padding: "+t.padding.normal+" "+t.padding.normal+" 0 "+t.padding.normal+";\n"}));s.propTypes={fgColor:r.a.string.isRequired,bgColor:r.a.string.isRequired,children:r.a.node.isRequired},s.defaultProps={fgColor:"#fff",bgColor:"var(--color-crimson)",children:""};var l=n("FdF9"),d=i.c.div.withConfig({displayName:"card-body__CardBodyContents",componentId:"c38ykj-0"})((function(e){var t=e.theme;return"\n    flex: 1;\n    padding: "+t.padding.normal+";\n    background-color: inherit;\n    color: "+t.color.black+";\n"}));d.propTypes={fgColor:r.a.string.isRequired,bgColor:r.a.string.isRequired},d.defaultProps={fgColor:"inherit",bgColor:"#fff"};var c=function(e){var t=e.children,n=(e.image,e.style);return l.default.createElement(d,{style:n},t)},u=i.c.div.withConfig({displayName:"card-footer__CardFooter",componentId:"sc-17yhfms-0"})((function(e){var t=e.theme;e.left;return"\n    display: flex;\n    justify-content: flex-start;\n    "+(e.center&&"justify-content: center")+";\n    "+(e.right&&"justify-content: flex-end")+";\n    align-items: center;\n    color: "+t.color.black+";\n    background-color: inherit;\n    padding: "+t.padding.normal+";\n    height: 4rem;\n"}));u.propTypes={fgColor:r.a.string.isRequired,bgColor:r.a.string.isRequired,children:r.a.node.isRequired},u.defaultProps={fgColor:"#fff",bgColor:"var(--color-crimson)"}},Ofmp:function(e,t,n){"use strict";n.r(t);var a=n("FdF9"),r=n("RiPl"),i=n("I/Ru"),o=n("jNNy"),s=n("4Fil"),l=n("/m4c");t.default=function(){return a.default.createElement(i.a,null,a.default.createElement(o.a,{title:"Our Work",description:"",keywords:""}),a.default.createElement(r.c,null,"Our Work"),a.default.createElement(s.a,null,a.default.createElement(s.c,null,"Literature Co-Occurrence Knowledge Graphs"),a.default.createElement(s.b,null,a.default.createElement(r.b,null,"RENCI researchers have developed literature co-occurrence databases on COVID-19 based on the Semantic Scholar Open Research Dataset (",a.default.createElement(l.a,{to:"https://www.semanticscholar.org/cord19"},"CORD 19"),"), a set of research papers covering COVID-19 and earlier coronaviruses."),a.default.createElement(r.b,null,"As scientists around the world work to understand the best ways to diagnosis and treat COVID-19 patients, it is critical that they can easily access the latest research findings. Literature co-occurrence databases automate this knowledge gathering by uncovering meaningful insights based on the patterns and strength of links between keywords that appear in research papers."),a.default.createElement(r.b,null,"After applying natural language processing (Scigraph) to discover biomedical entities including symptoms and drugs in CORD 19 literature, RENCI researchers determined which entities were frequently mentioned together. For example, if the spike protein of the virus was often mentioned in the same sentence as a certain chemical, then the database would indicate that a relationship might exist between the two. They also performed this analysis using entities found by the ",a.default.createElement(l.a,{to:"https://github.com/SciBiteLabs/CORD19"},"SciBite")," team. This co-occurrence information forms a graph of entities that can be used directly or integrated into other databases such as ROBOKOP to perform even more complex data mining."),a.default.createElement(r.b,null,"The Scigraph and SciBite co-occurrence graphs are available at ",a.default.createElement(l.a,{to:"https://automat.renci.org/"},"automat.renci.org"),"."))),a.default.createElement(s.a,null,a.default.createElement(s.c,null,"Answering Biomedical Questions"),a.default.createElement(s.b,null,a.default.createElement(r.b,null,"RENCI scientists are supporting rapid exploration of data by building a COVID-19 version of their question-answering system called Reasoning Over Biomedical Objects linked in Knowledge Oriented Pathways (",a.default.createElement(l.a,{to:"https://robokop.renci.org/"},"ROBOKOP"),")."),a.default.createElement(r.b,null,"ROBOKOP is a biomedical question-answering system based on a knowledge graph, meaning that it expresses data as a collection of nodes—such as genes and diseases—and edges that represent the relationships between the nodes. ROBOKOP uses multiple open biomedical databases to explore relationships between various biomedical data types. For example, it can be used to examine relationships between a disease and a drug and then explore which genes might be involved in that association."),a.default.createElement(r.b,null,"RENCI scientists have created a special COVID instance of ROBOKOP by integrating the original knowledge graph with the CORD-19 literature co-occurrence graphs they developed, viral protein functions, and hand-curated symptom information. This combination will give scientists access to a vast amount of information about human genes, chemicals, and respiratory diseases and allow them to ask important questions about how that information relates to COVID-19. The new COVID-19 version of ROBOKOP is available at ",a.default.createElement(l.a,{to:"https://covid.robokop.renci.org/"},"https://covid.robokop.renci.org/")))))}}}]);
//# sourceMappingURL=component---src-pages-work-js-b081ad0a984ad1955664.js.map