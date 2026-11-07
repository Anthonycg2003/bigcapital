System.register(["./index-legacy-D5XI0zpp.js","./PreferencesPageLoader-legacy-B-M9xQkP.js","./queries-legacy-6qeaAy-d.js","./utils-legacy-BbWmFeu9.js","./Textarea-legacy-B-sG4xXI.js","./query-keys-legacy-BjYca0jo.js","./textArea-legacy-BkaZWMb_.js"],(function(e,t){"use strict";var s,n,i,r,o,a,c,l,d,m,u,x,g,p,f,j,b,h,E,C,N,S,y,P,T,v,_;return{setters:[e=>{s=e.R,n=e.c9,i=e.hp,r=e.w,o=e.c,a=e.bx,c=e.bv,l=e.c6,d=e.c7,m=e.bh,u=e.$,x=e.e,g=e.bk,p=e.c3,f=e.c4,j=e.aT,b=e.bt,h=e.r,E=e.dq,C=e.c8,N=e.de,S=e.bg},e=>{y=e.P},e=>{P=e.i,T=e.a},e=>{v=e.t},e=>{_=e.T},null,null],execute:function(){e("PreferencesEstimates",(function(){return r.jsx(A,{children:r.jsx(q,{})})}));const t=s.createContext({});function A({children:e}){const{data:s,isLoading:n}=P(),i={estimatesSettings:s,isSettingsLoading:n},c=n;return r.jsx("div",{className:o(a.PREFERENCES_PAGE_INSIDE_CONTENT,a.PREFERENCES_PAGE_INSIDE_CONTENT_ACCOUNTANT),children:r.jsx(F,{children:c?r.jsx(y,{}):r.jsx(t.Provider,{value:i,children:e})})})}const F=n(i)`
  padding: 25px;

  .bp4-form-group {
    max-width: 600px;
  }
`;function R({isSubmitting:e}){const t=c();return r.jsxs(l,{children:[r.jsx(d,{name:"customerNotes",label:m.get("pref.estimates.customerNotes.field"),fastField:!0,children:r.jsx(_,{name:"customerNotes",fastField:!0,fill:!0})}),r.jsx(d,{name:"termsConditions",label:m.get("pref.estimates.termsConditions.field"),fastField:!0,children:r.jsx(_,{name:"termsConditions",fastField:!0,fill:!0})}),r.jsxs(I,{children:[r.jsx(u,{loading:e,intent:x.PRIMARY,type:"submit",children:r.jsx(g,{id:"save"})}),r.jsx(u,{onClick:()=>{t.go(-1)},children:r.jsx(g,{id:"close"})})]})]})}const I=n.div`
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
`,k=p().shape({termsConditions:f().optional(),customerNotes:f().optional()}),w={termsConditions:"",customerNotes:""},q=j((function({changePreferencesPageTitle:e}){const{estimatesSettings:n}=s.useContext(t),{mutateAsync:i}=T();h.useEffect((()=>{e(m.get("preferences.estimates"))}),[e]);const o={...w,...E(n,w)};return r.jsx(C,{initialValues:o,validationSchema:k,onSubmit:(e,{setSubmitting:t})=>{const s=j({salesEstimates:{...e}},N,v);i({options:s}).then((()=>{S.show({message:m.get("preferences.estimates.success_message"),intent:x.SUCCESS}),t(!1)})).catch((()=>{t(!1)}))},component:R})}),b)}}}));
