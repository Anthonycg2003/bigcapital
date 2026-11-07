System.register(["./index-legacy-D5XI0zpp.js","./DialogContent-legacy-PdzVaofL.js","./queries-legacy-Ob27TRSB.js","./utils-legacy-C9reJBu2.js","./utils-legacy-B33by3Ng.js","./useRequestPdf-legacy-DAYX3bRL.js","./PrivatePages-legacy-4pET6Xu4.js","./queries-legacy-Ct__8mSf.js","./popover2-legacy-nKk8WodS.js","./index-legacy-BNzxNAmQ.js","./InputGroup-legacy-D0k9_JqC.js","./Row-legacy-DfeDrUO-.js","./queries-legacy-DYFrCvuT.js","./query-keys-legacy-DnFH9VJm.js","./query-keys-legacy-8S6IFNCn.js","./query-keys-legacy-B0klOuwE.js","./query-keys-legacy-mAJrYc7q.js","./query-keys-legacy-BjYca0jo.js","./FormatDate-legacy-SjPtFiko.js","./queries-legacy-CO0CHLWp.js","./query-keys-legacy-BZxPNJ8E.js"],(function(e,t){"use strict";var i,n,s,l,o,a,r,c,d,u,g,x,m,j,y,p,h,f,b,v,N,C,S,_,q,k,I,D,R,E,w,M,P,W,L,$,F,G,U,Y,A,T,V;return{setters:[e=>{i=e.c3,n=e.dM,s=e.dL,l=e.r,o=e.an,a=e.w,r=e.R,c=e.c9,d=e.dN,u=e.aT,g=e.dv,x=e.eq,m=e.dY,j=e.x,y=e.d_,p=e.dS,h=e.c5,f=e.dZ,b=e.du,v=e.d$,N=e.e0,C=e.bu,S=e.c0,_=e.c1,q=e.$,k=e.e,I=e.bk,D=e.ec,R=e.c6,E=e.c8,w=e.dq,M=e.bg,P=e.bh},e=>{W=e.D},e=>{L=e.h,$=e.u,F=e.i},e=>{G=e.u,U=e.m,Y=e.a,A=e.E,T=e.t},e=>{V=e.g},null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],execute:function(){var t=document.createElement("style");t.textContent=".dialog--reconcile-credit-form{width:850px}.dialog--reconcile-credit-form .bp4-callout{font-size:14px}.dialog--reconcile-credit-form .bp4-dialog-footer{display:flex;justify-content:flex-start;padding-top:10px}\n/*$vite$:1*/",document.head.appendChild(t),e("ReconcileCreditNoteDialogContent",(function({dialogName:e,creditNoteId:t}){return a.jsx(B,{creditNoteId:t,dialogName:e,children:a.jsx(oe,{})})}));const Z=i().shape({entries:n().of(i().shape({invoiceId:s().required(),amount:s().nullable()}))}),z=l.createContext({});function B({creditNoteId:e,dialogName:t,...i}){const{isLoading:n,data:s}=L(e,{enabled:!!e}),l=s??[],{data:r,isLoading:c}=$(e,{enabled:!!e}),{mutateAsync:d}=F(),u={dialogName:t,reconcileCreditNotes:l,createReconcileCreditNoteMutate:d,isEmptyStatus:o.isEmpty(l),creditNote:r,creditNoteId:e??null};return a.jsx(W,{isLoading:n||c,name:"reconcile-credit-note",children:a.jsx(z.Provider,{value:u,...i})})}const H=()=>r.useContext(z);function J({onUpdateData:e,entries:t,errors:i}){const n=G(),{creditNote:s}=H(),l=s?.creditsRemaining,c=r.useCallback(((i,n,s)=>{const l=u(t,g(i,n,s));e(l)}),[e,t]);return x((()=>{const i=u(t,Y,U(o.defaultTo(l,0)));e(i)}),[t]),a.jsx(O,{columns:n,data:t,payload:{errors:i||[],updateData:c}})}const O=c(d)`
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
`;function Q(){const{creditNote:e}=H(),t=e?.formattedCreditsRemaining;return a.jsxs("div",{className:j,children:[a.jsxs(X,{children:[a.jsx(y,{id:"reconcile_credit_note.dialog.credits_balance"}),a.jsx(ee,{children:t})]}),a.jsx(p,{name:"entries",children:({form:{setFieldValue:e},field:{value:t},meta:{error:i}})=>a.jsx(J,{entries:t,errors:i,onUpdateData:t=>{e("entries",t)}})}),a.jsx(K,{})]})}function K(){const{creditNote:e}=H(),t=e?.creditsRemaining??0,i=e?.currencyCode,{values:n}=h(),s=r.useMemo((()=>V(n.entries)),[n.entries]),l=o.subtract(t,s);return a.jsx(te,{children:a.jsxs(ie,{labelColWidth:"180px",amountColWidth:"180px",children:[a.jsx(f,{title:a.jsx(y,{id:"reconcile_credit_note.dialog.total_amount_to_credit"}),value:b(s,i),borderStyle:v.SingleDark}),a.jsx(f,{title:a.jsx(y,{id:"reconcile_credit_note.dialog.remaining_credits"}),value:b(l,i),borderStyle:v.SingleDark,textStyle:N.Bold})]})})}const X=c.div`
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
`,ne=u((function({closeDialog:e}){const{isSubmitting:t}=h(),{dialogName:i}=H();return a.jsx("div",{className:S,children:a.jsxs("div",{className:_,children:[a.jsx(q,{intent:k.PRIMARY,style:{minWidth:"95px"},type:"submit",loading:t,children:a.jsx(I,{id:"save"})}),a.jsx(q,{onClick:()=>{e(i)},style:{minWidth:"85px"},children:a.jsx(I,{id:"cancel"})})]})})}),C);function se(){const{isEmptyStatus:e}=H();return a.jsxs(D,{children:[a.jsx(D.When,{condition:e,children:a.jsx(A,{})}),a.jsx(D.Otherwise,{children:a.jsxs(R,{children:[a.jsx(Q,{}),a.jsx(ne,{})]})})]})}const le=[{invoiceId:"",amount:""}],oe=u((function({closeDialog:e}){const{dialogName:t,creditNoteId:i,reconcileCreditNotes:n,createReconcileCreditNoteMutate:s}=H(),l={entries:n.map((e=>({...e,invoiceId:e.id??"",amount:""})))};return a.jsx(E,{validationSchema:Z,initialValues:l,onSubmit:(n,{setSubmitting:l,setErrors:o})=>{l(!0);const a=n.entries.filter((e=>e.invoiceId&&""!==e.amount&&null!=e.amount)).map((e=>w(e,le[0]))),r={...n,entries:a};s([i,r]).then((()=>{M.show({message:P.get("reconcile_credit_note.success_message"),intent:k.SUCCESS}),l(!1),e(t)})).catch((({data:{errors:e}})=>{e&&T(e,{setErrors:o}),l(!1)}))},component:se})}),C)}}}));
