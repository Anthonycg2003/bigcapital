System.register(["./index-legacy-DIiV7_Ij.js","./queries-legacy-DyhODsVI.js","./index-legacy-C3a0C9O7.js","./InputGroup-legacy-CF5nXE0t.js","./PrivatePages-legacy-D_3nSDfL.js","./useQueryString-legacy-BjVMr3RS.js","./query-keys-legacy-BjYca0jo.js","./queries-legacy-DoGbuOYf.js","./popover2-legacy-vMO8H1RU.js","./index-legacy-CR2XlTxQ.js","./withDrawers-legacy-ZeT-fD45.js","./index-legacy-BBFNWTQZ.js","./Row-legacy-BK7WrKsL.js","./queries-legacy-KwrWT7KM.js"],(function(e,i){"use strict";var t,s,n,a,o,l,c,r,g,d,m,u,b,x,_,h,p,f,j,S,y,w,v,N,E,k,C,I,A,T,M,R,F,P,z,D,L,B;return{setters:[e=>{t=e.R,s=e.w,n=e.c,a=e.bu,o=e.c0,l=e.c1,c=e.c6,r=e.c3,g=e.ds,d=e.c5,m=e.e,u=e.bh,b=e.c4,x=e.be,_=e.p4,h=e.Z,p=e.bd,f=e.M,j=e.k,S=e.hs,y=e.p6,w=e.aS,v=e.br,N=e.co,E=e.cp,k=e.bq,C=e.hr,I=e.eM,A=e.eN},e=>{T=e.n,M=e.a,R=e.w,F=e.t},e=>{P=e.f},e=>{z=e.I},e=>{D=e.h,L=e.M},e=>{B=e.u},null,null,null,null,null,null,null,null],execute:function(){var i=document.createElement("style");i.textContent=".preferences-page__inside-content--sms-integration .bigcapital-datatable .table .tbody .notification__label{font-weight:500}.preferences-page__inside-content--sms-integration .bigcapital-datatable .table .tbody .notification__desc{font-size:13px;margin-top:3px;line-height:1.25;display:block}.preferences-page__inside-content--sms-integration .bigcapital-datatable .table .tbody .sms_message.td .edit-text{display:inline-block;font-size:11.5px;color:#1652c8;margin-left:2px;text-decoration:underline}.preferences-page__inside-content--sms-integration .bp4-tabs .bp4-tab-panel{margin-top:0}\n/*$vite$:1*/",document.head.appendChild(i),e("SMSIntegration",(function(){return s.jsx(q,{children:s.jsx(te,{})})}));const G=t.createContext({});function q({children:e}){const{data:i,isLoading:t}=T(),{mutateAsync:o}=M(),{data:l,isLoading:c,isFetching:r}=R(),g={allSettings:i,notifications:l??[],isSMSNotificationsLoading:c||t,isSMSNotificationsFetching:r,saveSettingMutate:o};return s.jsx("div",{className:n(a.PREFERENCES_PAGE_INSIDE_CONTENT,a.PREFERENCES_PAGE_INSIDE_CONTENT_SMS_INTEGRATION),children:s.jsx(G.Provider,{value:g,children:e})})}const H=()=>t.useContext(G),O=o().shape({smsIntegration:o({twilioAccountSid:l().nullable(),twilioAuthToken:l().nullable(),twilioFromNumber:l().nullable()})}),U={smsIntegration:{twilioAccountSid:"",twilioAuthToken:"",twilioFromNumber:"",isEnvCredentialsActive:!1}};function Z(){const{allSettings:e,saveSettingMutate:i}=H(),t=e?P.flatten(e):{},n=P.flatten(U),a=P.unflatten({...n,...g(t,n)});return s.jsx(d,{initialValues:a,validationSchema:O,onSubmit:(e,{setSubmitting:t})=>{const s=[{group:"sms-integration",key:"twilio_account_sid",value:e.smsIntegration.twilioAccountSid??""},{group:"sms-integration",key:"twilio_auth_token",value:e.smsIntegration.twilioAuthToken??""},{group:"sms-integration",key:"twilio_from_number",value:e.smsIntegration.twilioFromNumber??""}];t(!0),i({options:s}).then((()=>{p.show({message:x.get("sms_integration.saved_success_message"),intent:m.SUCCESS}),t(!1)})).catch((()=>{t(!1)}))},enableReinitialize:!0,children:({isSubmitting:e,values:i})=>s.jsxs($,{children:[i.smsIntegration.isEnvCredentialsActive&&s.jsx(D,{intent:m.SUCCESS,children:s.jsx(u,{id:"sms_integration.env_credentials_active"})}),s.jsx(b,{name:"smsIntegration.twilioAccountSid",label:x.get("sms_integration.twilio_account_sid"),children:s.jsx(z,{name:"smsIntegration.twilioAccountSid"})}),s.jsx(b,{name:"smsIntegration.twilioAuthToken",label:x.get("sms_integration.twilio_auth_token"),children:s.jsx(z,{name:"smsIntegration.twilioAuthToken",type:"password"})}),s.jsx(b,{name:"smsIntegration.twilioFromNumber",label:x.get("sms_integration.twilio_from_number"),children:s.jsx(z,{name:"smsIntegration.twilioFromNumber"})}),s.jsx(_,{children:s.jsx(h,{intent:m.PRIMARY,loading:e,type:"submit",children:s.jsx(u,{id:"save"})})})]})})}const $=c(r)`
  padding: 25px;
`,J=e=>s.jsxs("span",{className:"notification",children:[s.jsx(V,{children:e.notificationLabel}),s.jsx(Y,{children:e.notificationDescription})]}),K=({payload:{onEditMessageText:e},row:{original:i}})=>s.jsxs("div",{children:[s.jsx(W,{children:i.smsMessage}),s.jsx(X,{children:s.jsx(h,{minimal:!0,small:!0,intent:m.NONE,onClick:()=>S(e,i),children:x.get("sms_messages.label_edit_message")})})]});function Q({payload:{onEditMessageText:e,onEnableNotification:i,onDisableNotification:t},row:{original:n}}){return s.jsxs(f,{children:[s.jsx(j,{text:x.get("sms_notifications.edit_message_text"),onClick:()=>S(e,n)}),s.jsx(L,{}),n.isNotificationEnabled?s.jsx(j,{text:x.get("sms_notifications.disable_notification"),onClick:()=>S(t,n)}):s.jsx(j,{text:x.get("sms_notifications.enable_notification"),onClick:()=>S(i,n)})]})}const V=c.div`
  font-weight: 500;
`,Y=c.div`
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
`,ee=w((function({openDialog:e}){const{mutateAsync:i}=F(),n=(e,t)=>{i({key:e,values:{isNotificationEnabled:t}}).then((()=>{p.show({message:x.get("sms_messages.notification_switch_change_success_message"),intent:m.SUCCESS})}))},a=function({onSwitchChange:e}){return t.useMemo((()=>[{id:"notification",Header:x.get("sms_messages.column.notification"),accessor:J,className:"notification",width:"180",disableSortBy:!0},{Header:x.get("sms_messages.column.service"),accessor:"moduleFormatted",className:"service",width:"80",disableSortBy:!0},{Header:x.get("sms_messages.column.message"),accessor:"smsMessage",Cell:K,className:"sms_message",width:"180",disableSortBy:!0},{Header:x.get("sms_messages.column.auto"),accessor:"isNotificationEnabled",Cell:y,className:"is_notification_enabled",disableResizing:!0,disableSortBy:!0,width:"80",onSwitchChange:e}]),[e])}({onSwitchChange:t.useCallback(((e,i,t)=>{n(t.key,i)}),[])}),{notifications:o,isSMSNotificationsLoading:l,isSMSNotificationsFetching:c}=H();return s.jsx(ie,{columns:a,data:o??[],loading:l,progressBarLoading:c,TableLoadingRenderer:E,ContextMenu:Q,payload:{onEditMessageText:({key:i})=>{e("sms-message-form",{notificationkey:i})},onEnableNotification:e=>{n(e.key,!0)},onDisableNotification:e=>{n(e.key,!1)}}})}),v),ie=c(N)`
  .table .tbody .tr .td {
    align-items: flex-start;
  }
  .table .tbody .td {
    padding: 0.8rem;
  }
`,te=w((function({changePreferencesPageTitle:e}){const[i,o]=B(),l="overview"===i?.tab?"overview":"sms_messages";return t.useEffect((()=>{e(x.get("sms_integration.label"))}),[e]),s.jsx(se,{children:s.jsx("div",{className:n(a.PREFERENCES_PAGE_TABS),children:s.jsxs(I,{id:"sms-integration-tabs",animate:!0,selectedTabId:l,onChange:e=>{o({tab:String(e)})},renderActiveTabPanelOnly:!0,children:[s.jsx(A,{id:"overview",title:x.get("sms_integration.label.overview"),panel:s.jsx(Z,{})}),s.jsx(A,{id:"sms_messages",title:x.get("sms_integration.label.sms_messages"),panel:s.jsx(ee,{})})]})})})}),k),se=c(C)`
  padding: 0;
`}}}));
