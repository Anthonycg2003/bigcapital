System.register(["./withDrawers-legacy-ZeT-fD45.js","./index-legacy-DIiV7_Ij.js"],(function(e,t){"use strict";var r,n,i,o,a,c,l,s,d,p,x,u,f;return{setters:[e=>{r=e._,n=e.f,i=e.a,o=e.h,a=e.j,c=e.k},e=>{l=e.r,s=e.c8,d=e.w,p=e.R,x=e.c9,u=e.c,f=e.am}],execute:function(){e({G:se,P:de,S:function({spacing:e=20,align:t="stretch",justify:r="flex-start",...n}){return d.jsx(s.div,{display:"flex",flexDirection:"column",justifyContent:r,gap:`${e}px`,alignItems:t,...n})}});var t=r(n,"DataView"),b=r(n,"Promise"),h=r(n,"Set"),j=r(n,"WeakMap"),g=t,y=i,m=b,v=h,w=j,A=o,S=a,D="[object Map]",k="[object Promise]",T="[object Set]",N="[object WeakMap]",W="[object DataView]",B=S(g),C=S(y),I=S(m),U=S(v),F=S(w),M=A;(g&&M(new g(new ArrayBuffer(1)))!=W||y&&M(new y)!=D||m&&M(m.resolve())!=k||v&&M(new v)!=T||w&&M(new w)!=N)&&(M=function(e){var t=A(e),r="[object Object]"==t?e.constructor:void 0,n=r?S(r):"";if(n)switch(n){case B:return W;case C:return D;case I:return k;case U:return T;case F:return N}return t}),e("_",M);var O=function(e){return null!=e&&"object"==typeof e},z=o,E=O,G=function(e){return E(e)&&"[object Arguments]"==z(e)},L=O,P=Object.prototype,$=P.hasOwnProperty,H=P.propertyIsEnumerable,R=G(function(){return arguments}())?G:function(e){return L(e)&&$.call(e,"callee")&&!H.call(e,"callee")};e("g",R);var V=e("i",(function(e){return"number"==typeof e&&e>-1&&e%1==0&&e<=9007199254740991})),q={exports:{}},_=function(){return!1};!function(e,t){var r=n,i=_,o=t&&!t.nodeType&&t,a=o&&e&&!e.nodeType&&e,c=a&&a.exports===o?r.Buffer:void 0,l=(c?c.isBuffer:void 0)||i;e.exports=l}(q,q.exports),e("h",q.exports);var J=o,K=V,Q=O,X={};X["[object Float32Array]"]=X["[object Float64Array]"]=X["[object Int8Array]"]=X["[object Int16Array]"]=X["[object Int32Array]"]=X["[object Uint8Array]"]=X["[object Uint8ClampedArray]"]=X["[object Uint16Array]"]=X["[object Uint32Array]"]=!0,X["[object Arguments]"]=X["[object Array]"]=X["[object ArrayBuffer]"]=X["[object Boolean]"]=X["[object DataView]"]=X["[object Date]"]=X["[object Error]"]=X["[object Function]"]=X["[object Map]"]=X["[object Number]"]=X["[object Object]"]=X["[object RegExp]"]=X["[object Set]"]=X["[object String]"]=X["[object WeakMap]"]=!1;var Y=function(e){return Q(e)&&K(e.length)&&!!X[J(e)]},Z=function(e){return function(t){return e(t)}},ee={exports:{}};!function(e,t){var r=c,n=t&&!t.nodeType&&t,i=n&&e&&!e.nodeType&&e,o=i&&i.exports===n&&r.process,a=function(){try{var e=i&&i.require&&i.require("util").types;return e||o&&o.binding&&o.binding("util")}catch(t){}}();e.exports=a}(ee,ee.exports);var te=ee.exports,re=Y,ne=Z,ie=te&&te.isTypedArray,oe=ie?ne(ie):re;e("j",oe);const ae=e("B",l.forwardRef((({className:e,...t},r)=>{const n=s.div;return d.jsx(n,{className:e,ref:r,...t})})));ae.displayName="@bigcapital/Box";const ce=e=>p.Children.toArray(e).filter(Boolean),le={left:"flex-start",center:"center",right:"flex-end",apart:"space-between"};function se({position:e="left",spacing:t=20,align:r="center",noWrap:n,children:i,...o}){const a=ce(i);return d.jsx(ae,{boxSizing:"border-box",display:"flex",flexDirection:"row",alignItems:r,flexWrap:n?"nowrap":"wrap",justifyContent:le[e],gap:`${t}px`,...o,children:a})}function de({primaryColor:e,secondaryColor:t,children:r,...n}){return d.jsxs(ae,{backgroundColor:"#fff",color:"#111",boxShadow:"inset 0 4px 0px 0 var(--invoice-primary-color)",padding:"30px 30px",fontSize:"12px",position:"relative",m:"0 auto",h:"1123px",w:"794px",...n,className:u(n?.className,x`
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
      `,children:[d.jsx("thead",{children:d.jsx("tr",{children:r.map(((e,t)=>d.jsx(s.th,{textAlign:e.align,style:e.thStyle,children:e.label},t)))})}),d.jsx("tbody",{children:t.map(((e,t)=>d.jsx("tr",{children:r.map(((t,r)=>d.jsx(s.td,{textAlign:t.align,children:f.isFunction(t?.accessor)?t?.accessor(e):f.get(e,t.accessor)},r)))},t)))})]})},e("a",pe),function(e){e.Gray="gray",e.Dark="dark"}(pe||e("a",pe={})),de.Totals=({children:e})=>d.jsx(s.div,{style:{display:"flex",flexDirection:"column",marginLeft:"auto",width:"300px"},children:e});const xe=x`
  border-bottom: 1px solid #000;
`,ue=x`
  border-bottom: 1px solid #dadada;
`;de.TotalLine=({label:e,amount:t,border:r,style:n})=>d.jsxs(s.div,{display:"flex",padding:"4px 0",className:u({[xe]:r===pe.Dark,[ue]:r===pe.Gray}),style:n,children:[d.jsx(s.div,{"min-w":"160px",children:e}),d.jsx(s.div,{flex:"1 1 auto",textAlign:"right",children:t})]}),de.AddressesGroup=e=>d.jsx(se,{spacing:10,align:"flex-start",...e,className:x`
        > div {
          flex: 1;
        }
      `}),de.Address=({children:e})=>d.jsx(ae,{children:e}),de.Statement=({label:e,children:t})=>d.jsxs(s.div,{mb:"20px",children:[e&&d.jsx(s.div,{color:"#666",children:e}),d.jsx(s.div,{children:t})]}),de.TermsList=({children:e})=>d.jsx(s.div,{display:"flex",flexDirection:"column",gap:"4px",children:e}),de.TermsItem=({label:e,children:t})=>d.jsxs(se,{spacing:12,children:[d.jsx(s.div,{minWidth:"120px",color:"#333",children:e}),d.jsx(s.div,{children:t})]}),e("c","All services provided are non-refundable. For any disputes, please contact us within 7 days of receiving this invoice."),e("f","Thank you for your business. We look forward to working with you again!"),e("d","Web development"),e("e","Website development with content and SEO optimization"),e("D","Bigcapital Technology, Inc.<br />\n131 Continental Dr, <br />\nSuite 305, <br />\nNewark, Delaware 19713, <br />\nUnited States,<br />\n+1 762-339-5634\n"),e("b","131 Continental Dr Suite 305 Newark, <br />\nDelaware 19713,<br />\nUnited States, <br />\n+1 762-339-5634, <br />\nahmed@bigcapital.app\n")}}}));
