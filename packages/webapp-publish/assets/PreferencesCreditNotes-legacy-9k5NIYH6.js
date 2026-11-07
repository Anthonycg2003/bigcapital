System.register(["./index-legacy-DIiV7_Ij.js","./PreferencesPageLoader-legacy-B5UQa63D.js","./queries-legacy-DyhODsVI.js","./utils-legacy-BbWmFeu9.js","./Textarea-legacy-DrQOTPsD.js","./query-keys-legacy-BjYca0jo.js","./textArea-legacy-CLfjS4Tj.js"],(function(e,t){"use strict";var s,n,i,r,o,c,a,d,l,u,x,g,m,p,f,j,b,N,h,C,E,S,P,y,T,_,v;return{setters:[e=>{s=e.R,n=e.c6,i=e.hr,r=e.w,o=e.c,c=e.bu,a=e.bs,d=e.c3,l=e.c4,u=e.be,x=e.Z,g=e.e,m=e.bh,p=e.c0,f=e.c1,j=e.aS,b=e.bq,N=e.r,h=e.ds,C=e.c5,E=e.dg,S=e.bd},e=>{P=e.P},e=>{y=e.l,T=e.a},e=>{_=e.t},e=>{v=e.T},null,null],execute:function(){e("PreferencesCreditNotes",(function(){return r.jsx(A,{children:r.jsx(q,{})})}));const t=s.createContext({});function A({children:e}){const{data:s,isLoading:n}=y(),i={creditNoteSettings:s,isSettingsLoading:n},a=n;return r.jsx("div",{className:o(c.PREFERENCES_PAGE_INSIDE_CONTENT,c.PREFERENCES_PAGE_INSIDE_CONTENT_ACCOUNTANT),children:r.jsx(R,{children:a?r.jsx(P,{}):r.jsx(t.Provider,{value:i,children:e})})})}const R=n(i)`
  padding: 25px;

  .bp4-form-group {
    max-width: 600px;
  }
`;function F({isSubmitting:e}){const t=a();return r.jsxs(d,{children:[r.jsx(l,{name:"customerNotes",label:u.get("pref.creditNotes.customerNotes.field"),fastField:!0,children:r.jsx(v,{name:"customerNotes",fastField:!0,fill:!0})}),r.jsx(l,{name:"termsConditions",label:u.get("pref.creditNotes.termsConditions.field"),fastField:!0,children:r.jsx(v,{name:"termsConditions",fastField:!0,fill:!0})}),r.jsxs(I,{children:[r.jsx(x,{loading:e,intent:g.PRIMARY,type:"submit",children:r.jsx(m,{id:"save"})}),r.jsx(x,{onClick:()=>{t.go(-1)},children:r.jsx(m,{id:"close"})})]})]})}const I=n.div`
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
`,w=p().shape({termsConditions:f().optional(),customerNotes:f().optional()}),k={termsConditions:"",customerNotes:""},q=j((function({changePreferencesPageTitle:e}){const{creditNoteSettings:n}=s.useContext(t),{mutateAsync:i}=T();N.useEffect((()=>{e(u.get("preferences.creditNotes"))}),[e]);const o={...k,...h(n,k)};return r.jsx(C,{initialValues:o,validationSchema:w,onSubmit:(e,{setSubmitting:t})=>{const s=j({creditNote:{...e}},E,_);i({options:s}).then((()=>{S.show({message:u.get("preferences.credit_notes.success_message"),intent:g.SUCCESS}),t(!1)})).catch((()=>{t(!1)}))},component:F})}),b)}}}));
