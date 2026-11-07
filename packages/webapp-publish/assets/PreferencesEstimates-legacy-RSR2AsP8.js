System.register(["./index-legacy-DIiV7_Ij.js","./PreferencesPageLoader-legacy-B5UQa63D.js","./queries-legacy-DyhODsVI.js","./utils-legacy-BbWmFeu9.js","./Textarea-legacy-DrQOTPsD.js","./query-keys-legacy-BjYca0jo.js","./textArea-legacy-CLfjS4Tj.js"],(function(e,t){"use strict";var s,n,i,r,o,a,c,l,d,m,u,x,g,p,f,j,b,h,E,C,N,S,P,y,T,v,_;return{setters:[e=>{s=e.R,n=e.c6,i=e.hr,r=e.w,o=e.c,a=e.bu,c=e.bs,l=e.c3,d=e.c4,m=e.be,u=e.Z,x=e.e,g=e.bh,p=e.c0,f=e.c1,j=e.aS,b=e.bq,h=e.r,E=e.ds,C=e.c5,N=e.dg,S=e.bd},e=>{P=e.P},e=>{y=e.i,T=e.a},e=>{v=e.t},e=>{_=e.T},null,null],execute:function(){e("PreferencesEstimates",(function(){return r.jsx(A,{children:r.jsx(q,{})})}));const t=s.createContext({});function A({children:e}){const{data:s,isLoading:n}=y(),i={estimatesSettings:s,isSettingsLoading:n},c=n;return r.jsx("div",{className:o(a.PREFERENCES_PAGE_INSIDE_CONTENT,a.PREFERENCES_PAGE_INSIDE_CONTENT_ACCOUNTANT),children:r.jsx(R,{children:c?r.jsx(P,{}):r.jsx(t.Provider,{value:i,children:e})})})}const R=n(i)`
  padding: 25px;

  .bp4-form-group {
    max-width: 600px;
  }
`;function F({isSubmitting:e}){const t=c();return r.jsxs(l,{children:[r.jsx(d,{name:"customerNotes",label:m.get("pref.estimates.customerNotes.field"),fastField:!0,children:r.jsx(_,{name:"customerNotes",fastField:!0,fill:!0})}),r.jsx(d,{name:"termsConditions",label:m.get("pref.estimates.termsConditions.field"),fastField:!0,children:r.jsx(_,{name:"termsConditions",fastField:!0,fill:!0})}),r.jsxs(I,{children:[r.jsx(u,{loading:e,intent:x.PRIMARY,type:"submit",children:r.jsx(g,{id:"save"})}),r.jsx(u,{onClick:()=>{t.go(-1)},children:r.jsx(g,{id:"close"})})]})]})}const I=n.div`
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
`,w=p().shape({termsConditions:f().optional(),customerNotes:f().optional()}),k={termsConditions:"",customerNotes:""},q=j((function({changePreferencesPageTitle:e}){const{estimatesSettings:n}=s.useContext(t),{mutateAsync:i}=T();h.useEffect((()=>{e(m.get("preferences.estimates"))}),[e]);const o={...k,...E(n,k)};return r.jsx(C,{initialValues:o,validationSchema:w,onSubmit:(e,{setSubmitting:t})=>{const s=j({salesEstimates:{...e}},N,v);i({options:s}).then((()=>{S.show({message:m.get("preferences.estimates.success_message"),intent:x.SUCCESS}),t(!1)})).catch((()=>{t(!1)}))},component:F})}),b)}}}));
