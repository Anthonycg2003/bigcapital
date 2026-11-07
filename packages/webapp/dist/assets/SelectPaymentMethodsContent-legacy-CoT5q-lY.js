System.register(["./index-legacy-D5XI0zpp.js","./queries-legacy-CNzbYTo4.js","./Stack-legacy-Cw-5jWUp.js","./dialogFooter-legacy-CVB2CDxm.js"],(function(e,n){"use strict";var l,a,i,c,r,o,d,s,t,g,u,x,j,p,y,h,b;return{setters:[e=>{l=e.w,a=e.c8,i=e.c6,c=e.r,r=e.cQ,o=e.$,d=e.e,s=e.fD,t=e.c9,g=e.bU,u=e.er,x=e.gl,j=e.b4},e=>{p=e.u},e=>{y=e.S},e=>{h=e.D,b=e.a}],execute:function(){e("SelectPaymentMethodsContent",(function(){const{closeDialog:e}=r();return l.jsx(k,{children:l.jsxs(P,{children:[l.jsx(h,{children:l.jsxs(y,{spacing:12,children:[l.jsx(m,{label:"Card (Including Apple Pay, Google Pay and Link)"}),l.jsx(m,{label:"Card (Including Apple Pay, Google Pay and Link)"}),l.jsx(m,{label:"Card (Including Apple Pay, Google Pay and Link)"}),l.jsx(m,{label:"Card (Including Apple Pay, Google Pay and Link)"}),l.jsx(m,{label:"Card (Including Apple Pay, Google Pay and Link)"}),l.jsx(m,{label:"Card (Including Apple Pay, Google Pay and Link)"})]})}),l.jsx(b,{actions:l.jsxs(l.Fragment,{children:[l.jsx(o,{onClick:()=>{e(g.SelectPaymentMethod)},children:"Cancel"}),l.jsx(o,{intent:d.PRIMARY,children:"Submit"})]})})]})})}));const n={},P=({children:e})=>l.jsx(a,{initialValues:n,onSubmit:e=>{},children:l.jsx(i,{children:e})}),C=c.createContext({}),k=({children:e})=>{const{isLoading:n,data:a}=p(),i={paymentServices:a,isPaymentServicesLoading:n};return l.jsx(C.Provider,{value:i,children:e})};function m({value:e,initialValue:n,onChange:a,label:i}){const[c,r]=s({value:e,initialValue:n,finalValue:!1,onChange:a}),o=()=>{r(!c)};return l.jsxs(S,{onClick:o,children:[l.jsx(L,{label:"",checked:c,onClick:o}),l.jsx(v,{children:i})]})}const S=t(u)`
  border: 1px solid #d3d8de;
  border-radius: 5px;
  padding: 10px;
  gap: 0;
  cursor: pointer;
`,L=t(x)`
  margin: 0;

  &.bp4-control .bp4-control-indicator {
    box-shadow: 0 0 0 1px #c5cbd3;
  }
`,v=t(j)`
  color: #404854;
`}}}));
