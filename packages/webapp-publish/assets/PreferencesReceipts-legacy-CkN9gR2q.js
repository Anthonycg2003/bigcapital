System.register(["./index-legacy-DIiV7_Ij.js","./PreferencesPageLoader-legacy-B5UQa63D.js","./queries-legacy-DyhODsVI.js","./utils-legacy-BbWmFeu9.js","./Textarea-legacy-DrQOTPsD.js","./query-keys-legacy-BjYca0jo.js","./textArea-legacy-CLfjS4Tj.js"],(function(e,s){"use strict";var t,i,n,r,c,o,a,l,d,p,g,x,u,m,f,j,b,h,C,E,S,P,y,N,R,T,v;return{setters:[e=>{t=e.R,i=e.c6,n=e.hr,r=e.w,c=e.c,o=e.bu,a=e.bs,l=e.c3,d=e.c4,p=e.be,g=e.Z,x=e.e,u=e.bh,m=e.c0,f=e.c1,j=e.aS,b=e.bq,h=e.r,C=e.ds,E=e.c5,S=e.dg,P=e.bd},e=>{y=e.P},e=>{N=e.k,R=e.a},e=>{T=e.t},e=>{v=e.T},null,null],execute:function(){e("PreferencesReceipts",(function(){return r.jsx(_,{children:r.jsx(w,{})})}));const s=t.createContext({});function _({children:e}){const{data:t,isLoading:i}=N(),n={receiptSettings:t,isSettingsLoading:i},a=i;return r.jsx("div",{className:c(o.PREFERENCES_PAGE_INSIDE_CONTENT,o.PREFERENCES_PAGE_INSIDE_CONTENT_ACCOUNTANT),children:r.jsx(A,{children:a?r.jsx(y,{}):r.jsx(s.Provider,{value:n,children:e})})})}const A=i(n)`
  padding: 25px;

  .bp4-form-group {
    max-width: 600px;
  }
`;function F({isSubmitting:e}){const s=a();return r.jsxs(l,{children:[r.jsx(d,{name:"receiptMessage",label:p.get("pref.receipts.receiptMessage.field"),fastField:!0,children:r.jsx(v,{name:"receiptMessage",fastField:!0,fill:!0})}),r.jsx(d,{name:"termsConditions",label:p.get("pref.receipts.termsConditions.field"),fastField:!0,children:r.jsx(v,{name:"termsConditions",fastField:!0,fill:!0})}),r.jsxs(M,{children:[r.jsx(g,{loading:e,intent:x.PRIMARY,type:"submit",children:r.jsx(u,{id:"save"})}),r.jsx(g,{onClick:()=>{s.go(-1)},children:r.jsx(u,{id:"close"})})]})]})}const M=i.div`
  --x-color-border: #e0e7ea;

  .bp4-dark & {
    --x-color-border: rgba(255, 255, 255, 0.15);
  }
  padding-top: 16px;
  border-top: 1px solid var(--x-color-border);
  margin-top: 30px;

  .bp4-button {
    min-width: 70px;

    + .bp4-button {
      margin-left: 10px;
    }
  }
`,I=m().shape({termsConditions:f().optional(),customerNotes:f().optional(),receiptMessage:f().optional()}),k={termsConditions:"",receiptMessage:""},w=j((function({changePreferencesPageTitle:e}){const{receiptSettings:i}=t.useContext(s),{mutateAsync:n}=R();h.useEffect((()=>{e(p.get("preferences.receipts"))}),[e]);const c={...k,...C(i,k)};return r.jsx(E,{initialValues:c,validationSchema:I,onSubmit:(e,{setSubmitting:s})=>{const t=j({salesReceipts:{...e}},S,T);n({options:t}).then((()=>{P.show({message:p.get("preferences.receipts.success_message"),intent:x.SUCCESS}),s(!1)})).catch((()=>{s(!1)}))},component:F})}),b)}}}));
