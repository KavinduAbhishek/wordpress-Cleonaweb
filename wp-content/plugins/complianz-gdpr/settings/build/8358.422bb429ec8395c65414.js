"use strict";(globalThis.webpackChunkcomplianz_gdpr=globalThis.webpackChunkcomplianz_gdpr||[]).push([[8358],{78358:(e,t,a)=>{a.r(t),a.d(t,{default:()=>m});var l=a(86087),n=a(37489),r=a(27723),o=a(9588),u=a(22589),c=a(45111),d=a(4219),i=a(7320);const m=(0,l.memo)((({id:e,value:t,options:a,defaultValue:m,disabled:s})=>{const[p,g]=(0,l.useState)(!1),[_,h]=(0,l.useState)(""),[v,E]=(0,l.useState)([]),[b,f]=(0,l.useState)(!1),[y,z]=(0,l.useState)(!1),[A,C]=(0,l.useState)(null),T=(0,l.useRef)(t),{updateField:k,setChangedField:F}=(0,d.default)(),N=a=>{let l=T.current!==t||a;if("custom"!==t||b||(T.current=t,l&&S(!1)),"url"===t&&!y){let a={};T.current=t,a.type=e,o.doAction("get_custom_legal_document_url",a).then((e=>{h(e.pageUrl),z(!0)}))}};(0,l.useEffect)((()=>{a.map((e=>e.value)).includes(t)||k(e,m),N(!0)}),[]),(0,u.A)((()=>{N(!1)}));const S=t=>{let a={};return a.type=e,a.search=t,o.doAction("get_pages_list",a).then((e=>{let t=e.pages.filter((function(t){return t.value===e.pageId}));return g(t),f(!0),E(e.pages),e.pages}))},w={};for(const e in a){const t=a[e];w[t.value]=t.label}return(0,l.createElement)(l.Fragment,null,(0,l.createElement)(i.default,{id:e,options:w,value:t,onChange:t=>{k(e,t),F(e,t)},disabled:s}),"custom"===t&&!b&&(0,l.createElement)("div",{className:"cmplz-documents-loader"},(0,l.createElement)("div",null,(0,l.createElement)(c.default,{name:"loading",color:"grey"})),(0,l.createElement)("div",null,(0,r.__)("Loading...","complianz-gdpr"))),"custom"===t&&b&&(0,l.createElement)(l.Fragment,null,(0,l.createElement)(n.A,{label:(0,r.__)("Link to custom page","complianz-gdpr"),defaultOptions:v,loadOptions:e=>new Promise((t=>{setTimeout((()=>{t(S(e))}),1e3)})),menuPortalTarget:document.body,menuPosition:"fixed",placeholder:(0,r.__)("Type at least two characters","complianz-gdpr"),onChange:t=>(t=>{let a={};a.pageId=t.value,a.type=e,g(t),o.doAction("update_custom_legal_document_id",a).then((e=>{}))})(t),value:p})),"url"===t&&!y&&(0,l.createElement)("div",{className:"cmplz-documents-loader"},(0,l.createElement)("div",null,(0,l.createElement)(c.default,{name:"loading",color:"grey"})),(0,l.createElement)("div",null,(0,r.__)("Loading...","complianz-gdpr"))),"url"===t&&y&&(0,l.createElement)(l.Fragment,null,(0,l.createElement)("input",{type:"text",value:_,onChange:t=>{let a={},l=t.target.value;a.pageUrl=l,a.type=e,h(l),clearTimeout(A);const n=setTimeout((()=>{o.doAction("update_custom_legal_document_url",a).then((e=>{}))}),500);C(n)},placeholder:"https://domain.com/your-policy"})))}))},7320:(e,t,a)=>{a.r(t),a.d(t,{default:()=>r});var l=a(86087),n=a(62848);const r=(0,l.memo)((({label:e,id:t,value:a,onChange:r,required:o,defaultValue:u,disabled:c,options:d={}})=>(0,l.createElement)(n.bL,{disabled:c&&!Array.isArray(c),className:"cmplz-input-group cmplz-radio-group",value:a,"aria-label":e,onValueChange:r,required:o,default:u},Object.entries(d).map((([e,a])=>(0,l.createElement)("div",{key:e,className:"cmplz-radio-group__item"},(0,l.createElement)(n.q7,{disabled:Array.isArray(c)&&c.includes(e),value:e,id:t+"_"+e},(0,l.createElement)(n.C1,{className:"cmplz-radio-group__indicator"})),(0,l.createElement)("label",{className:"cmplz-radio-label",htmlFor:t+"_"+e},a)))))))}}]);