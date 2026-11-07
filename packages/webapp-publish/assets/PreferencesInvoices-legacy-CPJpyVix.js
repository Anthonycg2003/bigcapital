System.register(["./index-legacy-DIiV7_Ij.js","./PreferencesPageLoader-legacy-B5UQa63D.js","./queries-legacy-DyhODsVI.js","./utils-legacy-BbWmFeu9.js","./Textarea-legacy-DrQOTPsD.js","./query-keys-legacy-BjYca0jo.js","./textArea-legacy-CLfjS4Tj.js"],(function(e,s){"use strict";var t,n,i,o,r,c,a,l,d,u,x,g,m,p,j,f,b,h,v,C,E,N,S,P,y,T,_;return{setters:[e=>{t=e.R,n=e.c6,i=e.hr,o=e.w,r=e.c,c=e.bu,a=e.c0,l=e.c1,d=e.bs,u=e.c3,x=e.c4,g=e.be,m=e.Z,p=e.e,j=e.bh,f=e.aS,b=e.bq,h=e.r,v=e.ds,C=e.c5,E=e.dg,N=e.bd},e=>{S=e.P},e=>{P=e.j,y=e.a},e=>{T=e.t},e=>{_=e.T},null,null],execute:function(){e("PreferencesInvoices",(function(){return o.jsx(A,{children:o.jsx(q,{})})}));const s=t.createContext({});function A({children:e,...t}){const{data:n,isLoading:i}=P(),a={invoiceSettings:n,isSettingsLoading:i},l=i;return o.jsx("div",{className:r(c.PREFERENCES_PAGE_INSIDE_CONTENT,c.PREFERENCES_PAGE_INSIDE_CONTENT_ACCOUNTANT),children:o.jsx(I,{children:l?o.jsx(S,{}):o.jsx(s.Provider,{value:a,children:e})})})}const I=n(i)`
  padding: 25px;

  .bp4-form-group {
    max-width: 600px;
  }
`,R=a().shape({termsConditions:l().optional(),customerNotes:l().optional()});function F({isSubmitting:e}){const s=d();return o.jsxs(u,{children:[o.jsx(x,{name:"customerNotes",label:g.get("pref.invoices.customerNotes.field"),fastField:!0,children:o.jsx(_,{name:"customerNotes",fastField:!0,fill:!0})}),o.jsx(x,{name:"termsConditions",label:g.get("pref.invoices.termsConditions.field"),fastField:!0,children:o.jsx(_,{name:"termsConditions",fastField:!0,fill:!0})}),o.jsxs(w,{children:[o.jsx(m,{loading:e,intent:p.PRIMARY,type:"submit",children:o.jsx(j,{id:"save"})}),o.jsx(m,{onClick:()=>{s.go(-1)},children:o.jsx(j,{id:"close"})})]})]})}const w=n.div`
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
`,k={termsConditions:"",customerNotes:""},q=f((function({changePreferencesPageTitle:e}){const{invoiceSettings:n}=t.useContext(s),{mutateAsync:i}=y();h.useEffect((()=>{e(g.get("preferences.invoices"))}),[e]);const r={...k,...v(n,k)};return o.jsx(C,{initialValues:r,validationSchema:R,onSubmit:(e,{setSubmitting:s})=>{const t=f({salesInvoices:{...e}},E,T);i({options:t}).then((()=>{N.show({message:g.get("preferences.invoices.success_message"),intent:p.SUCCESS}),s(!1)})).catch((()=>{s(!1)}))},component:F})}),b)}}}));
