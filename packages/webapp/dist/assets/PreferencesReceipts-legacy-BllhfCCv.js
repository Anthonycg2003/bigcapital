System.register(["./index-legacy-D5XI0zpp.js","./PreferencesPageLoader-legacy-B-M9xQkP.js","./queries-legacy-6qeaAy-d.js","./utils-legacy-BbWmFeu9.js","./Textarea-legacy-B-sG4xXI.js","./query-keys-legacy-BjYca0jo.js","./textArea-legacy-BkaZWMb_.js"],(function(e,t){"use strict";var s,i,n,r,c,o,a,l,d,p,g,x,u,m,f,j,b,h,C,E,S,y,N,P,T,v,R;return{setters:[e=>{s=e.R,i=e.c9,n=e.hp,r=e.w,c=e.c,o=e.bx,a=e.bv,l=e.c6,d=e.c7,p=e.bh,g=e.$,x=e.e,u=e.bk,m=e.c3,f=e.c4,j=e.aT,b=e.bt,h=e.r,C=e.dq,E=e.c8,S=e.de,y=e.bg},e=>{N=e.P},e=>{P=e.k,T=e.a},e=>{v=e.t},e=>{R=e.T},null,null],execute:function(){e("PreferencesReceipts",(function(){return r.jsx(_,{children:r.jsx(w,{})})}));const t=s.createContext({});function _({children:e}){const{data:s,isLoading:i}=P(),n={receiptSettings:s,isSettingsLoading:i},a=i;return r.jsx("div",{className:c(o.PREFERENCES_PAGE_INSIDE_CONTENT,o.PREFERENCES_PAGE_INSIDE_CONTENT_ACCOUNTANT),children:r.jsx(A,{children:a?r.jsx(N,{}):r.jsx(t.Provider,{value:n,children:e})})})}const A=i(n)`
  padding: 25px;

  .bp4-form-group {
    max-width: 600px;
  }
`;function F({isSubmitting:e}){const t=a();return r.jsxs(l,{children:[r.jsx(d,{name:"receiptMessage",label:p.get("pref.receipts.receiptMessage.field"),fastField:!0,children:r.jsx(R,{name:"receiptMessage",fastField:!0,fill:!0})}),r.jsx(d,{name:"termsConditions",label:p.get("pref.receipts.termsConditions.field"),fastField:!0,children:r.jsx(R,{name:"termsConditions",fastField:!0,fill:!0})}),r.jsxs(M,{children:[r.jsx(g,{loading:e,intent:x.PRIMARY,type:"submit",children:r.jsx(u,{id:"save"})}),r.jsx(g,{onClick:()=>{t.go(-1)},children:r.jsx(u,{id:"close"})})]})]})}const M=i.div`
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
`,k=m().shape({termsConditions:f().optional(),customerNotes:f().optional(),receiptMessage:f().optional()}),I={termsConditions:"",receiptMessage:""},w=j((function({changePreferencesPageTitle:e}){const{receiptSettings:i}=s.useContext(t),{mutateAsync:n}=T();h.useEffect((()=>{e(p.get("preferences.receipts"))}),[e]);const c={...I,...C(i,I)};return r.jsx(E,{initialValues:c,validationSchema:k,onSubmit:(e,{setSubmitting:t})=>{const s=j({salesReceipts:{...e}},S,v);n({options:s}).then((()=>{y.show({message:p.get("preferences.receipts.success_message"),intent:x.SUCCESS}),t(!1)})).catch((()=>{t(!1)}))},component:F})}),b)}}}));
