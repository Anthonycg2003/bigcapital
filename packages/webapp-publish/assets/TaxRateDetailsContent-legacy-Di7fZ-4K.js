System.register(["./index-legacy-DIiV7_Ij.js","./queries-legacy-v8TVpfDw.js","./withDrawers-legacy-ZeT-fD45.js","./PrivatePages-legacy-D_3nSDfL.js","./index-legacy-BBFNWTQZ.js","./index-legacy-CR2XlTxQ.js","./queries-legacy-DoGbuOYf.js","./popover2-legacy-vMO8H1RU.js","./InputGroup-legacy-CF5nXE0t.js","./Row-legacy-BK7WrKsL.js","./queries-legacy-KwrWT7KM.js"],(function(e,t){"use strict";var n,i,a,s,l,c,o,r,x,d,h,m,j,u,g,b,R,C,S,v,f,p,y,E,T,w,I,D,N,k,A,F,z,G,L;return{setters:[e=>{n=e.r,i=e.lQ,a=e.w,s=e.aS,l=e.ci,c=e.br,o=e.bQ,r=e.dk,x=e.cF,d=e.bI,h=e.Z,m=e.by,j=e.b6,u=e.bS,g=e.e,b=e.P,R=e.b4,C=e.m,S=e.M,v=e.k,f=e.bR,p=e.bd,y=e.c6,E=e.ee,T=e.hr,w=e.oR,I=e.oS,D=e.cb},e=>{N=e.c,k=e.a,A=e.b},e=>{F=e.l,z=e.c},e=>{G=e.w,L=e.r},null,null,null,null,null,null,null],execute:function(){e("TaxRateDetailsContent",(function({name:e,taxRateId:t}){return a.jsxs(O,{taxRateId:t,children:[a.jsx(D,{name:e,title:"Tax Rate Details"}),a.jsx(P,{}),a.jsx(z,{children:a.jsx(q,{})})]})}));const t=n.createContext(void 0);function O({taxRateId:e,...n}){const{data:s,isFetching:l,isLoading:c}=N(e,{placeholderData:i}),o={isTaxRateLoading:c,isTaxRateFetching:l,taxRate:s,taxRateId:e};return a.jsx(F,{loading:c,children:a.jsx(t.Provider,{value:o,...n})})}const U=()=>{const e=n.useContext(t);if(!e)throw new Error("useTaxRateDetailsContext must be used within a TaxRateDetailsContentBoot.");return e},P=s((function({openDialog:e,openAlert:t}){const{taxRateId:n,taxRate:i}=U(),{mutateAsync:s}=k(),{mutateAsync:l}=A();return a.jsx(L,{children:a.jsxs(o,{children:[a.jsx(r,{I:x.Edit,a:d.TaxRate,children:a.jsx(h,{className:m,icon:a.jsx(j,{icon:"pen-18"}),text:"Edit Tax Rate",onClick:()=>{e(f.TaxRateForm,{id:n})}})}),a.jsxs(r,{I:x.Delete,a:d.Item,children:[a.jsx(u,{}),a.jsx(h,{className:m,text:"Delete",icon:a.jsx(j,{icon:"trash-16",iconSize:16}),intent:g.DANGER,onClick:()=>{t("tax-rate-delete",{taxRateId:n})}})]}),a.jsxs(r,{I:x.Edit,a:d.TaxRate,children:[a.jsx(u,{}),a.jsx(b,{minimal:!0,interactionKind:R.CLICK,position:C.BOTTOM_LEFT,modifiers:{offset:{offset:"0, 4"}},content:a.jsxs(S,{children:[!i?.active&&a.jsx(v,{text:"Activate Tax Rate",onClick:()=>{s(n).then((()=>{p.show({message:"The tax rate has been activated successfully.",intent:g.SUCCESS})})).catch((()=>{p.show({message:"Something went wrong.",intent:g.DANGER})}))}}),!!i?.active&&a.jsx(v,{text:"Inactivate Tax Rate",onClick:()=>{l(n).then((()=>{p.show({message:"The tax rate has been inactivated successfully.",intent:g.SUCCESS})})).catch((()=>{p.show({message:"Something went wrong.",intent:g.DANGER})}))}})]}),children:a.jsx(h,{icon:a.jsx(j,{icon:"more-vert",iconSize:16}),minimal:!0})})]})]})})}),G,c,l);function q(){const{taxRate:e}=U();return a.jsx(T,{children:a.jsxs("div",{children:[a.jsxs(K,{children:[a.jsxs(Z,{children:[e?.rate,"%"]}),e?.active?a.jsx(B,{round:!1,intent:g.SUCCESS,minimal:!0,children:"Active"}):a.jsx(B,{round:!1,intent:g.NONE,minimal:!0,children:"Inactive"})]}),a.jsxs(w,{direction:"horizantal",minLabelSize:200,children:[a.jsx(I,{label:"Tax Rate Name",children:e?.name}),a.jsx(I,{label:"Code",children:e?.code}),a.jsx(I,{label:"Description",children:e?.description||"-"}),a.jsx(I,{label:"Non Recoverable",children:e?.isNonRecoverable?a.jsx(E,{round:!1,intent:g.SUCCESS,minimal:!0,children:"Enabled"}):a.jsx(E,{round:!1,intent:g.NONE,minimal:!0,children:"Disabled"})}),a.jsx(I,{label:"Compound",children:e?.isCompound?a.jsx(E,{round:!1,intent:g.SUCCESS,minimal:!0,children:"Enabled"}):a.jsx(E,{round:!1,intent:g.NONE,minimal:!0,children:"Disabled"})})]})]})})}const K=y("div")`
  margin-bottom: 1.25rem;
  display: flex;
  align-items: flex-start;
  margin-top: 0.25rem;
`,Z=y("div")`
  line-height: 1;
  font-size: 30px;
  font-weight: 600;
  display: inline-block;
  color: var(--x-color-amount-text, #565b71);

  .bp4-dark & {
    color: rgba(255, 255, 255, 0.9);
  }
`,B=y(E)`
  margin-top: auto;
  margin-bottom: auto;
  margin-left: 1rem;
`}}}));
