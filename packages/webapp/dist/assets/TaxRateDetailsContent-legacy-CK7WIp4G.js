System.register(["./index-legacy-D5XI0zpp.js","./queries-legacy-r8oMDs3e.js","./PrivatePages-legacy-4pET6Xu4.js","./queries-legacy-Ct__8mSf.js","./popover2-legacy-nKk8WodS.js","./index-legacy-BNzxNAmQ.js","./InputGroup-legacy-D0k9_JqC.js","./Row-legacy-DfeDrUO-.js","./queries-legacy-DYFrCvuT.js"],(function(e,t){"use strict";var n,i,a,s,l,c,o,r,x,d,m,h,j,u,g,b,R,C,v,S,p,T,f,E,I,y,w,D,N,A,k,L,U,z,F;return{setters:[e=>{n=e.r,i=e.lI,a=e.w,s=e.aT,l=e.cl,c=e.bu,o=e.bT,r=e.di,x=e.cI,d=e.bL,m=e.$,h=e.bB,j=e.b9,u=e.bV,g=e.e,b=e.P,R=e.b7,C=e.m,v=e.M,S=e.k,p=e.bU,T=e.bg,f=e.c9,E=e.ed,I=e.hp,y=e.oK,w=e.oL,D=e.ce},e=>{N=e.c,A=e.a,k=e.b},e=>{L=e.v,U=e.w,z=e.t,F=e.x},null,null,null,null,null,null],execute:function(){e("TaxRateDetailsContent",(function({name:e,taxRateId:t}){return a.jsxs(G,{taxRateId:t,children:[a.jsx(D,{name:e,title:"Tax Rate Details"}),a.jsx(P,{}),a.jsx(F,{children:a.jsx(q,{})})]})}));const t=n.createContext(void 0);function G({taxRateId:e,...n}){const{data:s,isFetching:l,isLoading:c}=N(e,{placeholderData:i}),o={isTaxRateLoading:c,isTaxRateFetching:l,taxRate:s,taxRateId:e};return a.jsx(L,{loading:c,children:a.jsx(t.Provider,{value:o,...n})})}const O=()=>{const e=n.useContext(t);if(!e)throw new Error("useTaxRateDetailsContext must be used within a TaxRateDetailsContentBoot.");return e},P=s((function({openDialog:e,openAlert:t}){const{taxRateId:n,taxRate:i}=O(),{mutateAsync:s}=A(),{mutateAsync:l}=k();return a.jsx(z,{children:a.jsxs(o,{children:[a.jsx(r,{I:x.Edit,a:d.TaxRate,children:a.jsx(m,{className:h,icon:a.jsx(j,{icon:"pen-18"}),text:"Edit Tax Rate",onClick:()=>{e(p.TaxRateForm,{id:n})}})}),a.jsxs(r,{I:x.Delete,a:d.Item,children:[a.jsx(u,{}),a.jsx(m,{className:h,text:"Delete",icon:a.jsx(j,{icon:"trash-16",iconSize:16}),intent:g.DANGER,onClick:()=>{t("tax-rate-delete",{taxRateId:n})}})]}),a.jsxs(r,{I:x.Edit,a:d.TaxRate,children:[a.jsx(u,{}),a.jsx(b,{minimal:!0,interactionKind:R.CLICK,position:C.BOTTOM_LEFT,modifiers:{offset:{offset:"0, 4"}},content:a.jsxs(v,{children:[!i?.active&&a.jsx(S,{text:"Activate Tax Rate",onClick:()=>{s(n).then((()=>{T.show({message:"The tax rate has been activated successfully.",intent:g.SUCCESS})})).catch((()=>{T.show({message:"Something went wrong.",intent:g.DANGER})}))}}),!!i?.active&&a.jsx(S,{text:"Inactivate Tax Rate",onClick:()=>{l(n).then((()=>{T.show({message:"The tax rate has been inactivated successfully.",intent:g.SUCCESS})})).catch((()=>{T.show({message:"Something went wrong.",intent:g.DANGER})}))}})]}),children:a.jsx(m,{icon:a.jsx(j,{icon:"more-vert",iconSize:16}),minimal:!0})})]})]})})}),U,c,l);function q(){const{taxRate:e}=O();return a.jsx(I,{children:a.jsxs("div",{children:[a.jsxs(B,{children:[a.jsxs(K,{children:[e?.rate,"%"]}),e?.active?a.jsx(M,{round:!1,intent:g.SUCCESS,minimal:!0,children:"Active"}):a.jsx(M,{round:!1,intent:g.NONE,minimal:!0,children:"Inactive"})]}),a.jsxs(y,{direction:"horizantal",minLabelSize:200,children:[a.jsx(w,{label:"Tax Rate Name",children:e?.name}),a.jsx(w,{label:"Code",children:e?.code}),a.jsx(w,{label:"Description",children:e?.description||"-"}),a.jsx(w,{label:"Non Recoverable",children:e?.isNonRecoverable?a.jsx(E,{round:!1,intent:g.SUCCESS,minimal:!0,children:"Enabled"}):a.jsx(E,{round:!1,intent:g.NONE,minimal:!0,children:"Disabled"})}),a.jsx(w,{label:"Compound",children:e?.isCompound?a.jsx(E,{round:!1,intent:g.SUCCESS,minimal:!0,children:"Enabled"}):a.jsx(E,{round:!1,intent:g.NONE,minimal:!0,children:"Disabled"})})]})]})})}const B=f("div")`
  margin-bottom: 1.25rem;
  display: flex;
  align-items: flex-start;
  margin-top: 0.25rem;
`,K=f("div")`
  line-height: 1;
  font-size: 30px;
  font-weight: 600;
  display: inline-block;
  color: var(--x-color-amount-text, #565b71);

  .bp4-dark & {
    color: rgba(255, 255, 255, 0.9);
  }
`,M=f(E)`
  margin-top: auto;
  margin-bottom: auto;
  margin-left: 1rem;
`}}}));
