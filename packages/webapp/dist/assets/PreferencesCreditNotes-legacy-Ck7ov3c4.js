System.register(["./index-legacy-D5XI0zpp.js","./PreferencesPageLoader-legacy-B-M9xQkP.js","./queries-legacy-6qeaAy-d.js","./utils-legacy-BbWmFeu9.js","./Textarea-legacy-B-sG4xXI.js","./query-keys-legacy-BjYca0jo.js","./textArea-legacy-BkaZWMb_.js"],(function(e,t){"use strict";var s,n,i,r,o,c,a,d,l,u,x,g,m,p,f,j,b,N,h,C,E,S,y,P,T,v,_;return{setters:[e=>{s=e.R,n=e.c9,i=e.hp,r=e.w,o=e.c,c=e.bx,a=e.bv,d=e.c6,l=e.c7,u=e.bh,x=e.$,g=e.e,m=e.bk,p=e.c3,f=e.c4,j=e.aT,b=e.bt,N=e.r,h=e.dq,C=e.c8,E=e.de,S=e.bg},e=>{y=e.P},e=>{P=e.l,T=e.a},e=>{v=e.t},e=>{_=e.T},null,null],execute:function(){e("PreferencesCreditNotes",(function(){return r.jsx(A,{children:r.jsx(q,{})})}));const t=s.createContext({});function A({children:e}){const{data:s,isLoading:n}=P(),i={creditNoteSettings:s,isSettingsLoading:n},a=n;return r.jsx("div",{className:o(c.PREFERENCES_PAGE_INSIDE_CONTENT,c.PREFERENCES_PAGE_INSIDE_CONTENT_ACCOUNTANT),children:r.jsx(F,{children:a?r.jsx(y,{}):r.jsx(t.Provider,{value:i,children:e})})})}const F=n(i)`
  padding: 25px;

  .bp4-form-group {
    max-width: 600px;
  }
`;function R({isSubmitting:e}){const t=a();return r.jsxs(d,{children:[r.jsx(l,{name:"customerNotes",label:u.get("pref.creditNotes.customerNotes.field"),fastField:!0,children:r.jsx(_,{name:"customerNotes",fastField:!0,fill:!0})}),r.jsx(l,{name:"termsConditions",label:u.get("pref.creditNotes.termsConditions.field"),fastField:!0,children:r.jsx(_,{name:"termsConditions",fastField:!0,fill:!0})}),r.jsxs(I,{children:[r.jsx(x,{loading:e,intent:g.PRIMARY,type:"submit",children:r.jsx(m,{id:"save"})}),r.jsx(x,{onClick:()=>{t.go(-1)},children:r.jsx(m,{id:"close"})})]})]})}const I=n.div`
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
`,k=p().shape({termsConditions:f().optional(),customerNotes:f().optional()}),w={termsConditions:"",customerNotes:""},q=j((function({changePreferencesPageTitle:e}){const{creditNoteSettings:n}=s.useContext(t),{mutateAsync:i}=T();N.useEffect((()=>{e(u.get("preferences.creditNotes"))}),[e]);const o={...w,...h(n,w)};return r.jsx(C,{initialValues:o,validationSchema:k,onSubmit:(e,{setSubmitting:t})=>{const s=j({creditNote:{...e}},E,v);i({options:s}).then((()=>{S.show({message:u.get("preferences.credit_notes.success_message"),intent:g.SUCCESS}),t(!1)})).catch((()=>{t(!1)}))},component:R})}),b)}}}));
