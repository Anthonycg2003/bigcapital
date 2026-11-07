System.register(["./index-legacy-DIiV7_Ij.js","./DialogContent-legacy-vIDMvNJa.js","./queries-legacy-BupkIJZC.js","./utils-legacy-BiuCGDOQ.js","./utils-legacy-BO2ACmD4.js","./useRequestPdf-legacy-WU4tb0ef.js","./PrivatePages-legacy-D_3nSDfL.js","./queries-legacy-DoGbuOYf.js","./popover2-legacy-vMO8H1RU.js","./index-legacy-CR2XlTxQ.js","./withDrawers-legacy-ZeT-fD45.js","./index-legacy-BBFNWTQZ.js","./InputGroup-legacy-CF5nXE0t.js","./Row-legacy-BK7WrKsL.js","./queries-legacy-KwrWT7KM.js","./query-keys-legacy-DnFH9VJm.js","./query-keys-legacy-8S6IFNCn.js","./query-keys-legacy-B0klOuwE.js","./query-keys-legacy-mAJrYc7q.js","./query-keys-legacy-BjYca0jo.js","./FormatDate-legacy-Ct2JVirJ.js","./queries-legacy-C_sfNZGu.js","./query-keys-legacy-BZxPNJ8E.js"],(function(e,t){"use strict";var i,n,l,s,a,r,o,c,d,u,g,x,m,j,y,p,h,f,b,N,v,C,_,S,q,D,I,R,k,w,E,P,W,M,U,F,L,Z,$,z,A,G,O;return{setters:[e=>{i=e.c0,n=e.dO,l=e.dN,s=e.r,a=e.am,r=e.w,o=e.R,c=e.c6,d=e.dP,u=e.aS,g=e.dx,x=e.er,m=e.d_,j=e.x,y=e.e0,p=e.dU,h=e.c2,f=e.d$,b=e.dw,N=e.e1,v=e.e2,C=e.br,_=e.bZ,S=e.b_,q=e.Z,D=e.e,I=e.bh,R=e.ed,k=e.c3,w=e.c5,E=e.ds,P=e.bd,W=e.be},e=>{M=e.D},e=>{U=e.h,F=e.u,L=e.i},e=>{Z=e.u,$=e.m,z=e.a,A=e.E,G=e.t},e=>{O=e.g},null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],execute:function(){var t=document.createElement("style");t.textContent=".dialog--reconcile-credit-form{width:850px}.dialog--reconcile-credit-form .bp4-callout{font-size:14px}.dialog--reconcile-credit-form .bp4-dialog-footer{display:flex;justify-content:flex-start;padding-top:10px}\n/*$vite$:1*/",document.head.appendChild(t),e("ReconcileCreditNoteDialogContent",(function({dialogName:e,creditNoteId:t}){return r.jsx(H,{creditNoteId:t,dialogName:e,children:r.jsx(ae,{})})}));const V=i().shape({entries:n().of(i().shape({invoiceId:l().required(),amount:l().nullable()}))}),B=s.createContext({});function H({creditNoteId:e,dialogName:t,...i}){const{isLoading:n,data:l}=U(e,{enabled:!!e}),s=l??[],{data:o,isLoading:c}=F(e,{enabled:!!e}),{mutateAsync:d}=L(),u={dialogName:t,reconcileCreditNotes:s,createReconcileCreditNoteMutate:d,isEmptyStatus:a.isEmpty(s),creditNote:o,creditNoteId:e??null};return r.jsx(M,{isLoading:n||c,name:"reconcile-credit-note",children:r.jsx(B.Provider,{value:u,...i})})}const J=()=>o.useContext(B);function K({onUpdateData:e,entries:t,errors:i}){const n=Z(),{creditNote:l}=J(),s=l?.creditsRemaining,c=o.useCallback(((i,n,l)=>{const s=u(t,g(i,n,l));e(s)}),[e,t]);return x((()=>{const i=u(t,z,$(a.defaultTo(s,0)));e(i)}),[t]),r.jsx(Q,{columns:n,data:t,payload:{errors:i||[],updateData:c}})}const Q=c(d)`
  .table {
    max-height: 400px;
    overflow: auto;

    .thead .tr .th {
      padding-top: 8px;
      padding-bottom: 8px;
    }

    .tbody {
      .tr .td {
        padding: 2px 4px;
        min-height: 38px;
      }
    }
  }
`;function T(){const{creditNote:e}=J(),t=e?.formattedCreditsRemaining;return r.jsxs("div",{className:j,children:[r.jsxs(X,{children:[r.jsx(y,{id:"reconcile_credit_note.dialog.credits_balance"}),r.jsx(ee,{children:t})]}),r.jsx(p,{name:"entries",children:({form:{setFieldValue:e},field:{value:t},meta:{error:i}})=>r.jsx(K,{entries:t,errors:i,onUpdateData:t=>{e("entries",t)}})}),r.jsx(Y,{})]})}function Y(){const{creditNote:e}=J(),t=e?.creditsRemaining??0,i=e?.currencyCode,{values:n}=h(),l=o.useMemo((()=>O(n.entries)),[n.entries]),s=a.subtract(t,l);return r.jsx(te,{children:r.jsxs(ie,{labelColWidth:"180px",amountColWidth:"180px",children:[r.jsx(f,{title:r.jsx(y,{id:"reconcile_credit_note.dialog.total_amount_to_credit"}),value:b(l,i),borderStyle:N.SingleDark}),r.jsx(f,{title:r.jsx(y,{id:"reconcile_credit_note.dialog.remaining_credits"}),value:b(s,i),borderStyle:N.SingleDark,textStyle:v.Bold})]})})}const X=c.div`
  display: flex;
  justify-content: flex-end;
  padding-bottom: 15px;
`,ee=c.span`
  font-weight: 600;
  color: #343463;
  margin-left: 5px;
`,te=c.div`
  margin-top: 15px;
`,ie=c(m)`
  margin-left: auto;
`,ne=u((function({closeDialog:e}){const{isSubmitting:t}=h(),{dialogName:i}=J();return r.jsx("div",{className:_,children:r.jsxs("div",{className:S,children:[r.jsx(q,{intent:D.PRIMARY,style:{minWidth:"95px"},type:"submit",loading:t,children:r.jsx(I,{id:"save"})}),r.jsx(q,{onClick:()=>{e(i)},style:{minWidth:"85px"},children:r.jsx(I,{id:"cancel"})})]})})}),C);function le(){const{isEmptyStatus:e}=J();return r.jsxs(R,{children:[r.jsx(R.When,{condition:e,children:r.jsx(A,{})}),r.jsx(R.Otherwise,{children:r.jsxs(k,{children:[r.jsx(T,{}),r.jsx(ne,{})]})})]})}const se=[{invoiceId:"",amount:""}],ae=u((function({closeDialog:e}){const{dialogName:t,creditNoteId:i,reconcileCreditNotes:n,createReconcileCreditNoteMutate:l}=J(),s={entries:n.map((e=>({...e,invoiceId:e.id??"",amount:""})))};return r.jsx(w,{validationSchema:V,initialValues:s,onSubmit:(n,{setSubmitting:s,setErrors:a})=>{s(!0);const r=n.entries.filter((e=>e.invoiceId&&""!==e.amount&&null!=e.amount)).map((e=>E(e,se[0]))),o={...n,entries:r};l([i,o]).then((()=>{P.show({message:W.get("reconcile_credit_note.success_message"),intent:D.SUCCESS}),s(!1),e(t)})).catch((({data:{errors:e}})=>{e&&G(e,{setErrors:a}),s(!1)}))},component:le})}),C)}}}));
