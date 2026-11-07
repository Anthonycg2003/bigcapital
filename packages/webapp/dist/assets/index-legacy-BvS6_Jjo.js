System.register(["./index-legacy-D5XI0zpp.js","./queries-legacy-6qeaAy-d.js","./index-legacy-C3a0C9O7.js","./InputGroup-legacy-D0k9_JqC.js","./PrivatePages-legacy-4pET6Xu4.js","./useQueryString-legacy-BEJuTV76.js","./query-keys-legacy-BjYca0jo.js","./queries-legacy-Ct__8mSf.js","./popover2-legacy-nKk8WodS.js","./index-legacy-BNzxNAmQ.js","./Row-legacy-DfeDrUO-.js","./queries-legacy-DYFrCvuT.js"],(function(e,t){"use strict";var i,s,n,a,o,l,c,r,g,d,m,u,b,x,_,f,h,p,j,S,y,v,w,E,N,k,C,I,A,T,M,R,F,P,z,L,B,D;return{setters:[e=>{i=e.R,s=e.w,n=e.c,a=e.bx,o=e.c3,l=e.c4,c=e.c9,r=e.c6,g=e.dq,d=e.c8,m=e.e,u=e.bk,b=e.c7,x=e.bh,_=e.oZ,f=e.$,h=e.bg,p=e.M,j=e.k,S=e.f6,y=e.o$,v=e.aT,w=e.bu,E=e.cr,N=e.cs,k=e.bt,C=e.hp,I=e.eM,A=e.eN},e=>{T=e.n,M=e.a,R=e.w,F=e.t},e=>{P=e.f},e=>{z=e.I},e=>{L=e.j,B=e.M},e=>{D=e.u},null,null,null,null,null,null],execute:function(){var t=document.createElement("style");t.textContent=".preferences-page__inside-content--sms-integration .bigcapital-datatable .table .tbody .notification__label{font-weight:500}.preferences-page__inside-content--sms-integration .bigcapital-datatable .table .tbody .notification__desc{font-size:13px;margin-top:3px;line-height:1.25;display:block}.preferences-page__inside-content--sms-integration .bigcapital-datatable .table .tbody .sms_message.td .edit-text{display:inline-block;font-size:11.5px;color:#1652c8;margin-left:2px;text-decoration:underline}.preferences-page__inside-content--sms-integration .bp4-tabs .bp4-tab-panel{margin-top:0}\n/*$vite$:1*/",document.head.appendChild(t),e("SMSIntegration",(function(){return s.jsx(q,{children:s.jsx(ie,{})})}));const G=i.createContext({});function q({children:e}){const{data:t,isLoading:i}=T(),{mutateAsync:o}=M(),{data:l,isLoading:c,isFetching:r}=R(),g={allSettings:t,notifications:l??[],isSMSNotificationsLoading:c||i,isSMSNotificationsFetching:r,saveSettingMutate:o};return s.jsx("div",{className:n(a.PREFERENCES_PAGE_INSIDE_CONTENT,a.PREFERENCES_PAGE_INSIDE_CONTENT_SMS_INTEGRATION),children:s.jsx(G.Provider,{value:g,children:e})})}const H=()=>i.useContext(G),O=o().shape({smsIntegration:o({twilioAccountSid:l().nullable(),twilioAuthToken:l().nullable(),twilioFromNumber:l().nullable()})}),$={smsIntegration:{twilioAccountSid:"",twilioAuthToken:"",twilioFromNumber:"",isEnvCredentialsActive:!1}};function U(){const{allSettings:e,saveSettingMutate:t}=H(),i=e?P.flatten(e):{},n=P.flatten($),a=P.unflatten({...n,...g(i,n)});return s.jsx(d,{initialValues:a,validationSchema:O,onSubmit:(e,{setSubmitting:i})=>{const s=[{group:"sms-integration",key:"twilio_account_sid",value:e.smsIntegration.twilioAccountSid??""},{group:"sms-integration",key:"twilio_auth_token",value:e.smsIntegration.twilioAuthToken??""},{group:"sms-integration",key:"twilio_from_number",value:e.smsIntegration.twilioFromNumber??""}];i(!0),t({options:s}).then((()=>{h.show({message:x.get("sms_integration.saved_success_message"),intent:m.SUCCESS}),i(!1)})).catch((()=>{i(!1)}))},enableReinitialize:!0,children:({isSubmitting:e,values:t})=>s.jsxs(J,{children:[t.smsIntegration.isEnvCredentialsActive&&s.jsx(L,{intent:m.SUCCESS,children:s.jsx(u,{id:"sms_integration.env_credentials_active"})}),s.jsx(b,{name:"smsIntegration.twilioAccountSid",label:x.get("sms_integration.twilio_account_sid"),children:s.jsx(z,{name:"smsIntegration.twilioAccountSid"})}),s.jsx(b,{name:"smsIntegration.twilioAuthToken",label:x.get("sms_integration.twilio_auth_token"),children:s.jsx(z,{name:"smsIntegration.twilioAuthToken",type:"password"})}),s.jsx(b,{name:"smsIntegration.twilioFromNumber",label:x.get("sms_integration.twilio_from_number"),children:s.jsx(z,{name:"smsIntegration.twilioFromNumber"})}),s.jsx(_,{children:s.jsx(f,{intent:m.PRIMARY,loading:e,type:"submit",children:s.jsx(u,{id:"save"})})})]})})}const J=c(r)`
  padding: 25px;
`,Q=e=>s.jsxs("span",{className:"notification",children:[s.jsx(Z,{children:e.notificationLabel}),s.jsx(K,{children:e.notificationDescription})]}),V=({payload:{onEditMessageText:e},row:{original:t}})=>s.jsxs("div",{children:[s.jsx(W,{children:t.smsMessage}),s.jsx(X,{children:s.jsx(f,{minimal:!0,small:!0,intent:m.NONE,onClick:()=>S(e,t),children:x.get("sms_messages.label_edit_message")})})]});function Y({payload:{onEditMessageText:e,onEnableNotification:t,onDisableNotification:i},row:{original:n}}){return s.jsxs(p,{children:[s.jsx(j,{text:x.get("sms_notifications.edit_message_text"),onClick:()=>S(e,n)}),s.jsx(B,{}),n.isNotificationEnabled?s.jsx(j,{text:x.get("sms_notifications.disable_notification"),onClick:()=>S(i,n)}):s.jsx(j,{text:x.get("sms_notifications.enable_notification"),onClick:()=>S(t,n)})]})}const Z=c.div`
  font-weight: 500;
`,K=c.div`
  font-size: 14px;
  margin-top: 6px;
  display: block;
  opacity: 0.75;
`,W=c.div`
  --x-message-bg: #fbfbfb;
  --x-message-border: #dcdcdc;

  .bp4-dark & {
    --x-message-bg: var(--color-dark-gray3);
    --x-message-border: rgba(255, 255, 255, 0.2);
  }
  padding: 10px;
  background-color: var(--x-message-bg);
  border: 1px dashed var(--x-message-border);
  font-size: 14px;
  line-height: 1.45;
`,X=c.div`
  margin-top: 2px;

  button {
    font-size: 12px;
  }
`,ee=v((function({openDialog:e}){const{mutateAsync:t}=F(),n=(e,i)=>{t({key:e,values:{isNotificationEnabled:i}}).then((()=>{h.show({message:x.get("sms_messages.notification_switch_change_success_message"),intent:m.SUCCESS})}))},a=function({onSwitchChange:e}){return i.useMemo((()=>[{id:"notification",Header:x.get("sms_messages.column.notification"),accessor:Q,className:"notification",width:"180",disableSortBy:!0},{Header:x.get("sms_messages.column.service"),accessor:"moduleFormatted",className:"service",width:"80",disableSortBy:!0},{Header:x.get("sms_messages.column.message"),accessor:"smsMessage",Cell:V,className:"sms_message",width:"180",disableSortBy:!0},{Header:x.get("sms_messages.column.auto"),accessor:"isNotificationEnabled",Cell:y,className:"is_notification_enabled",disableResizing:!0,disableSortBy:!0,width:"80",onSwitchChange:e}]),[e])}({onSwitchChange:i.useCallback(((e,t,i)=>{n(i.key,t)}),[])}),{notifications:o,isSMSNotificationsLoading:l,isSMSNotificationsFetching:c}=H();return s.jsx(te,{columns:a,data:o??[],loading:l,progressBarLoading:c,TableLoadingRenderer:N,ContextMenu:Y,payload:{onEditMessageText:({key:t})=>{e("sms-message-form",{notificationkey:t})},onEnableNotification:e=>{n(e.key,!0)},onDisableNotification:e=>{n(e.key,!1)}}})}),w),te=c(E)`
  .table .tbody .tr .td {
    align-items: flex-start;
  }
  .table .tbody .td {
    padding: 0.8rem;
  }
`,ie=v((function({changePreferencesPageTitle:e}){const[t,o]=D(),l="overview"===t?.tab?"overview":"sms_messages";return i.useEffect((()=>{e(x.get("sms_integration.label"))}),[e]),s.jsx(se,{children:s.jsx("div",{className:n(a.PREFERENCES_PAGE_TABS),children:s.jsxs(I,{id:"sms-integration-tabs",animate:!0,selectedTabId:l,onChange:e=>{o({tab:String(e)})},renderActiveTabPanelOnly:!0,children:[s.jsx(A,{id:"overview",title:x.get("sms_integration.label.overview"),panel:s.jsx(U,{})}),s.jsx(A,{id:"sms_messages",title:x.get("sms_integration.label.sms_messages"),panel:s.jsx(ee,{})})]})})})}),k),se=c(C)`
  padding: 0;
`}}}));
