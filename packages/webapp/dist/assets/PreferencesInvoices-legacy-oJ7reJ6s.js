System.register(["./index-legacy-D5XI0zpp.js","./PreferencesPageLoader-legacy-B-M9xQkP.js","./queries-legacy-6qeaAy-d.js","./utils-legacy-BbWmFeu9.js","./Textarea-legacy-B-sG4xXI.js","./query-keys-legacy-BjYca0jo.js","./textArea-legacy-BkaZWMb_.js"],(function(e,s){"use strict";var t,n,i,o,c,r,a,l,d,u,x,g,m,p,f,j,b,h,v,C,E,N,S,y,P,T,_;return{setters:[e=>{t=e.R,n=e.c9,i=e.hp,o=e.w,c=e.c,r=e.bx,a=e.c3,l=e.c4,d=e.bv,u=e.c6,x=e.c7,g=e.bh,m=e.$,p=e.e,f=e.bk,j=e.aT,b=e.bt,h=e.r,v=e.dq,C=e.c8,E=e.de,N=e.bg},e=>{S=e.P},e=>{y=e.j,P=e.a},e=>{T=e.t},e=>{_=e.T},null,null],execute:function(){e("PreferencesInvoices",(function(){return o.jsx(A,{children:o.jsx(q,{})})}));const s=t.createContext({});function A({children:e,...t}){const{data:n,isLoading:i}=y(),a={invoiceSettings:n,isSettingsLoading:i},l=i;return o.jsx("div",{className:c(r.PREFERENCES_PAGE_INSIDE_CONTENT,r.PREFERENCES_PAGE_INSIDE_CONTENT_ACCOUNTANT),children:o.jsx(F,{children:l?o.jsx(S,{}):o.jsx(s.Provider,{value:a,children:e})})})}const F=n(i)`
  padding: 25px;

  .bp4-form-group {
    max-width: 600px;
  }
`,I=a().shape({termsConditions:l().optional(),customerNotes:l().optional()});function R({isSubmitting:e}){const s=d();return o.jsxs(u,{children:[o.jsx(x,{name:"customerNotes",label:g.get("pref.invoices.customerNotes.field"),fastField:!0,children:o.jsx(_,{name:"customerNotes",fastField:!0,fill:!0})}),o.jsx(x,{name:"termsConditions",label:g.get("pref.invoices.termsConditions.field"),fastField:!0,children:o.jsx(_,{name:"termsConditions",fastField:!0,fill:!0})}),o.jsxs(k,{children:[o.jsx(m,{loading:e,intent:p.PRIMARY,type:"submit",children:o.jsx(f,{id:"save"})}),o.jsx(m,{onClick:()=>{s.go(-1)},children:o.jsx(f,{id:"close"})})]})]})}const k=n.div`
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
`,w={termsConditions:"",customerNotes:""},q=j((function({changePreferencesPageTitle:e}){const{invoiceSettings:n}=t.useContext(s),{mutateAsync:i}=P();h.useEffect((()=>{e(g.get("preferences.invoices"))}),[e]);const c={...w,...v(n,w)};return o.jsx(C,{initialValues:c,validationSchema:I,onSubmit:(e,{setSubmitting:s})=>{const t=j({salesInvoices:{...e}},E,T);i({options:t}).then((()=>{N.show({message:g.get("preferences.invoices.success_message"),intent:p.SUCCESS}),s(!1)})).catch((()=>{s(!1)}))},component:R})}),b)}}}));
