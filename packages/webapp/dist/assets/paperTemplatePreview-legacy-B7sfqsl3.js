System.register(["./PrivatePages-legacy-4pET6Xu4.js","./index-legacy-D5XI0zpp.js"],(function(e,t){"use strict";var r,n,i,o,a,c,l,s,d,p,x,b,u;return{setters:[e=>{r=e.G,n=e.J,i=e.K,o=e.N,a=e.O,c=e.Q},e=>{l=e.r,s=e.cb,d=e.w,p=e.R,x=e.cc,b=e.c,u=e.an}],execute:function(){e({G:se,P:de,S:function({spacing:e=20,align:t="stretch",justify:r="flex-start",...n}){return d.jsx(s.div,{display:"flex",flexDirection:"column",justifyContent:r,gap:`${e}px`,alignItems:t,...n})},p:function(e,t){const r=[...Object.keys(t).filter((e=>!ue.has(e))),"companyAddress"];return u.pick(e,r)}});var t=r(n,"DataView"),f=r(n,"Promise"),h=r(n,"Set"),g=r(n,"WeakMap"),j=t,y=i,m=f,v=h,w=g,A=o,S=a,k="[object Map]",D="[object Promise]",N="[object Set]",T="[object WeakMap]",W="[object DataView]",B=S(j),C=S(y),I=S(m),O=S(v),U=S(w),P=A;(j&&P(new j(new ArrayBuffer(1)))!=W||y&&P(new y)!=k||m&&P(m.resolve())!=D||v&&P(new v)!=N||w&&P(new w)!=T)&&(P=function(e){var t=A(e),r="[object Object]"==t?e.constructor:void 0,n=r?S(r):"";if(n)switch(n){case B:return W;case C:return k;case I:return D;case O:return N;case U:return T}return t}),e("_",P);var F=function(e){return null!=e&&"object"==typeof e},G=o,L=F,M=function(e){return L(e)&&"[object Arguments]"==G(e)},z=F,E=Object.prototype,R=E.hasOwnProperty,$=E.propertyIsEnumerable,V=M(function(){return arguments}())?M:function(e){return z(e)&&R.call(e,"callee")&&!$.call(e,"callee")};e("h",V);var q=e("i",(function(e){return"number"==typeof e&&e>-1&&e%1==0&&e<=9007199254740991})),H={exports:{}},K=function(){return!1};!function(e,t){var r=n,i=K,o=t&&!t.nodeType&&t,a=o&&e&&!e.nodeType&&e,c=a&&a.exports===o?r.Buffer:void 0,l=(c?c.isBuffer:void 0)||i;e.exports=l}(H,H.exports),e("j",H.exports);var J=o,Q=q,_=F,X={};X["[object Float32Array]"]=X["[object Float64Array]"]=X["[object Int8Array]"]=X["[object Int16Array]"]=X["[object Int32Array]"]=X["[object Uint8Array]"]=X["[object Uint8ClampedArray]"]=X["[object Uint16Array]"]=X["[object Uint32Array]"]=!0,X["[object Arguments]"]=X["[object Array]"]=X["[object ArrayBuffer]"]=X["[object Boolean]"]=X["[object DataView]"]=X["[object Date]"]=X["[object Error]"]=X["[object Function]"]=X["[object Map]"]=X["[object Number]"]=X["[object Object]"]=X["[object RegExp]"]=X["[object Set]"]=X["[object String]"]=X["[object WeakMap]"]=!1;var Y=function(e){return _(e)&&Q(e.length)&&!!X[J(e)]},Z=function(e){return function(t){return e(t)}},ee={exports:{}};!function(e,t){var r=c,n=t&&!t.nodeType&&t,i=n&&e&&!e.nodeType&&e,o=i&&i.exports===n&&r.process,a=function(){try{var e=i&&i.require&&i.require("util").types;return e||o&&o.binding&&o.binding("util")}catch(t){}}();e.exports=a}(ee,ee.exports);var te=ee.exports,re=Y,ne=Z,ie=te&&te.isTypedArray,oe=ie?ne(ie):re;e("k",oe);const ae=e("B",l.forwardRef((({className:e,...t},r)=>{const n=s.div;return d.jsx(n,{className:e,ref:r,...t})})));ae.displayName="@bigcapital/Box";const ce=e=>p.Children.toArray(e).filter(Boolean),le={left:"flex-start",center:"center",right:"flex-end",apart:"space-between"};function se({position:e="left",spacing:t=20,align:r="center",noWrap:n,children:i,...o}){const a=ce(i);return d.jsx(ae,{boxSizing:"border-box",display:"flex",flexDirection:"row",alignItems:r,flexWrap:n?"nowrap":"wrap",justifyContent:le[e],gap:`${t}px`,...o,children:a})}function de({primaryColor:e,secondaryColor:t,children:r,...n}){return d.jsxs(ae,{backgroundColor:"#fff",color:"#111",boxShadow:"inset 0 4px 0px 0 var(--invoice-primary-color)",padding:"30px 30px",fontSize:"12px",position:"relative",m:"0 auto",h:"1123px",w:"794px",...n,className:b(n?.className,x`
          @media print {
            width: auto !important;
            height: auto !important;
          }
        `),children:[d.jsx("style",{children:`:root { --invoice-primary-color: ${e}; --invoice-secondary-color: ${t}; }`}),r]})}var pe;de.BigTitle=({title:e})=>d.jsx(s.h1,{fontSize:"30px",margin:0,lineHeight:1,fontWeight:500,color:"#333",children:e}),de.Logo=({logoUri:e})=>d.jsx(s.div,{overflow:"hidden",children:d.jsx(s.img,{width:"100%",height:"100%",maxWidth:"260px",maxHeight:"100px",alt:"",src:e})}),de.Table=({columns:e,data:t})=>{const r=e.filter((e=>!1!==e.visible));return d.jsxs("table",{className:x`
        width: 100%;
        border-collapse: collapse;
        text-align: left;

        thead th {
          font-weight: 400;
          border-bottom: 1px solid #000;
          padding: 2px 10px;
          color: #333;

          &.rate,
          &.total {
            text-align: right;
          }
          &:first-of-type {
            padding-left: 0;
          }
          &:last-of-type {
            padding-right: 0;
          }
        }
        tbody {
          td {
            border-bottom: 1px solid #f6f6f6;
            padding: 12px 10px;

            &:first-of-type {
              padding-left: 0;
            }
            &:last-of-type {
              padding-right: 0;
            }
            &.rate,
            &.total {
              text-align: right;
            }
          }
        }
      `,children:[d.jsx("thead",{children:d.jsx("tr",{children:r.map(((e,t)=>d.jsx(s.th,{textAlign:e.align,style:e.thStyle,children:e.label},t)))})}),d.jsx("tbody",{children:t.map(((e,t)=>d.jsx("tr",{children:r.map(((t,r)=>d.jsx(s.td,{textAlign:t.align,children:u.isFunction(t?.accessor)?t?.accessor(e):u.get(e,t.accessor)},r)))},t)))})]})},e("a",pe),function(e){e.Gray="gray",e.Dark="dark"}(pe||e("a",pe={})),de.Totals=({children:e})=>d.jsx(s.div,{style:{display:"flex",flexDirection:"column",marginLeft:"auto",width:"300px"},children:e});const xe=x`
  border-bottom: 1px solid #000;
`,be=x`
  border-bottom: 1px solid #dadada;
`;de.TotalLine=({label:e,amount:t,border:r,style:n})=>d.jsxs(s.div,{display:"flex",padding:"4px 0",className:b({[xe]:r===pe.Dark,[be]:r===pe.Gray}),style:n,children:[d.jsx(s.div,{"min-w":"160px",children:e}),d.jsx(s.div,{flex:"1 1 auto",textAlign:"right",children:t})]}),de.AddressesGroup=e=>d.jsx(se,{spacing:10,align:"flex-start",...e,className:x`
        > div {
          flex: 1;
        }
      `}),de.Address=({children:e})=>d.jsx(ae,{children:e}),de.Statement=({label:e,children:t})=>d.jsxs(s.div,{mb:"20px",children:[e&&d.jsx(s.div,{color:"#666",children:e}),d.jsx(s.div,{children:t})]}),de.TermsList=({children:e})=>d.jsx(s.div,{display:"flex",flexDirection:"column",gap:"4px",children:e}),de.TermsItem=({label:e,children:t})=>d.jsxs(se,{spacing:12,children:[d.jsx(s.div,{minWidth:"120px",color:"#333",children:e}),d.jsx(s.div,{children:t})]}),e("c","All services provided are non-refundable. For any disputes, please contact us within 7 days of receiving this invoice."),e("g","Thank you for your business. We look forward to working with you again!"),e("d","Web development"),e("e","Website development with content and SEO optimization"),e("D","Bigcapital Technology, Inc.<br />\n131 Continental Dr, <br />\nSuite 305, <br />\nNewark, Delaware 19713, <br />\nUnited States,<br />\n+1 762-339-5634\n"),e("b","131 Continental Dr Suite 305 Newark, <br />\nDelaware 19713,<br />\nUnited States, <br />\n+1 762-339-5634, <br />\nahmed@bigcapital.app\n");const ue=new Set(["templateName","companyLogoKey"]);e("f",{borderRadius:5,boxShadow:"inset 0 4px 0 0 var(--invoice-primary-color), 0 10px 15px rgba(0, 0, 0, 0.05)"})}}}));
