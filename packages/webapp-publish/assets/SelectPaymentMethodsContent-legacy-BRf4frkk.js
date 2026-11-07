System.register(["./index-legacy-DIiV7_Ij.js","./queries-legacy-DLqCYXn2.js","./Stack-legacy-3Pb6llei.js","./dialogFooter-legacy-CPGofosb.js"],(function(e,n){"use strict";var l,a,i,c,r,d,o,s,t,g,u,x,j,p,y,h,b;return{setters:[e=>{l=e.w,a=e.c5,i=e.c3,c=e.r,r=e.cN,d=e.Z,o=e.e,s=e.fF,t=e.c6,g=e.bR,u=e.d8,x=e.gn,j=e.b1},e=>{p=e.u},e=>{y=e.S},e=>{h=e.D,b=e.a}],execute:function(){e("SelectPaymentMethodsContent",(function(){const{closeDialog:e}=r();return l.jsx(k,{children:l.jsxs(P,{children:[l.jsx(h,{children:l.jsxs(y,{spacing:12,children:[l.jsx(S,{label:"Card (Including Apple Pay, Google Pay and Link)"}),l.jsx(S,{label:"Card (Including Apple Pay, Google Pay and Link)"}),l.jsx(S,{label:"Card (Including Apple Pay, Google Pay and Link)"}),l.jsx(S,{label:"Card (Including Apple Pay, Google Pay and Link)"}),l.jsx(S,{label:"Card (Including Apple Pay, Google Pay and Link)"}),l.jsx(S,{label:"Card (Including Apple Pay, Google Pay and Link)"})]})}),l.jsx(b,{actions:l.jsxs(l.Fragment,{children:[l.jsx(d,{onClick:()=>{e(g.SelectPaymentMethod)},children:"Cancel"}),l.jsx(d,{intent:o.PRIMARY,children:"Submit"})]})})]})})}));const n={},P=({children:e})=>l.jsx(a,{initialValues:n,onSubmit:e=>{},children:l.jsx(i,{children:e})}),C=c.createContext({}),k=({children:e})=>{const{isLoading:n,data:a}=p(),i={paymentServices:a,isPaymentServicesLoading:n};return l.jsx(C.Provider,{value:i,children:e})};function S({value:e,initialValue:n,onChange:a,label:i}){const[c,r]=s({value:e,initialValue:n,finalValue:!1,onChange:a}),d=()=>{r(!c)};return l.jsxs(m,{onClick:d,children:[l.jsx(v,{label:"",checked:c,onClick:d}),l.jsx(L,{children:i})]})}const m=t(u)`
  border: 1px solid #d3d8de;
  border-radius: 5px;
  padding: 10px;
  gap: 0;
  cursor: pointer;
`,v=t(x)`
  margin: 0;

  &.bp4-control .bp4-control-indicator {
    box-shadow: 0 0 0 1px #c5cbd3;
  }
`,L=t(j)`
  color: #404854;
`}}}));
