System.register(["./index-legacy-D5XI0zpp.js","./DialogContent-legacy-PdzVaofL.js","./queries-legacy-6qeaAy-d.js","./dataTypes-legacy-Ba6DsCIw.js","./textArea-legacy-BkaZWMb_.js","./utils-legacy-CrscsFUK.js","./query-keys-legacy-BjYca0jo.js"],(function(e,s){"use strict";var t,i,a,n,o,r,l,d,c,m,g,x,u,f,p,h,j,y,b,v,S,N,_,T,M,E,k,w,A,C,D,R,V;return{setters:[e=>{t=e.r,i=e.w,a=e.R,n=e.c3,o=e.c4,r=e.dK,l=e.c9,d=e.$,c=e.c5,m=e.dS,g=e.b$,x=e.bh,u=e.k5,f=e.ho,p=e.e,h=e.bk,j=e.aT,y=e.bu,b=e.oq,v=e.or,S=e.an,N=e.c6,_=e.x,T=e.oB,M=e.dq,E=e.c8,k=e.bg},e=>{w=e.D},e=>{A=e.t,C=e.v},e=>{D=e.D},e=>{R=e.T},e=>{V=e.g},null],execute:function(){var s=document.createElement("style");s.textContent=".dialog--sms-message{width:800px}.dialog--sms-message .bp4-form-group{margin-bottom:15px}.dialog--sms-message .bp4-form-group label.bp4-label{font-size:13px;margin-bottom:6px}.dialog--sms-message .form-group--message_text .bp4-form-content textarea{width:100%;min-width:100%;min-height:90px;font-size:14px}.dialog--sms-message .bp4-dialog-footer{padding-top:10px}\n/*$vite$:1*/",document.head.appendChild(s),e("SMSMessageDialogContent",(function({dialogName:e,notificationkey:s}){return i.jsx(q,{dialogName:e,notificationkey:s,children:i.jsx(Q,{})})}));const $=t.createContext({});function q({notificationkey:e,dialogName:s,...t}){const{mutateAsync:a}=A(),{data:n,isLoading:o}=C(e),r={dialogName:s,smsNotification:n??{},editSMSNotificationMutate:a};return i.jsx(w,{isLoading:o,children:i.jsx($.Provider,{value:r,...t})})}const z=()=>a.useContext($),P=n().shape({notificationKey:o().required(),isNotificationEnabled:r(),messageText:o().min(3).max(D.TEXT)});function K(){const{smsNotification:e}=z(),{setFieldValue:s}=c(),t=()=>{s("messageText",e.defaultSmsMessage??"")};return i.jsx("div",{children:i.jsx(m,{name:"messageText",children:({field:e,meta:{error:s,touched:a}})=>i.jsx(g,{label:x.get("notify_via_sms.dialog.message_text"),className:"form-group--message_text",intent:u({error:s,touched:a}),helperText:i.jsxs(i.Fragment,{children:[i.jsx(f,{name:"messageText"}),i.jsx(L,{minimal:!0,small:!0,intent:p.PRIMARY,onClick:t,children:i.jsx(h,{id:"sms_message.edit_form.reset_to_default_message"})})]}),children:i.jsx(R,{growVertically:!0,large:!0,intent:u({error:s,touched:a}),...e})})})})}const L=l(d)`
  font-size: 12px;
`,B=j((function({closeDialog:e}){const{isSubmitting:s}=c(),{dialogName:t}=z();return i.jsx(b,{children:i.jsxs(v,{alignment:"left",children:[i.jsx(d,{onClick:()=>{e(t)},style:{minWidth:"75px"},children:i.jsx(h,{id:"cancel"})}),i.jsx(d,{intent:p.PRIMARY,loading:s,style:{minWidth:"75px"},type:"submit",children:i.jsx(h,{id:"save_sms_message"})})]})})}),y);function I(){const{smsNotification:e}=z(),s=a.useMemo((()=>S.castArray(e.allowedVariables??[])),[e.allowedVariables]);return i.jsxs(N,{children:[i.jsx("div",{className:_,children:i.jsxs(H,{children:[i.jsxs(O,{children:[i.jsx(K,{}),i.jsx(G,{children:s.map((({variable:e,description:s})=>i.jsxs(W,{children:[i.jsx("strong",{children:`{${e}}`})," ",s]},e)))})]}),i.jsx(X,{children:i.jsx(U,{})})]})}),i.jsx(B,{})]})}function U(){const{values:{messageText:e}}=c(),s=V(e);return i.jsxs(Y,{children:[i.jsx(T,{message:e}),i.jsx(F,{children:x.formatHTMLMessage({id:"sms_message.dialog.sms_note"},{value:s})})]})}const Y=l.div``,F=l.div`
  font-size: 12px;
  opacity: 0.7;
`,G=l.div`
  list-style: none;
  font-size: 12px;
  opacity: 0.9;
`,W=l.div`
  margin-bottom: 8px;
`,H=l.div`
  display: flex;
`,O=l.div`
  width: 55%;
`,X=l.div`
  display: flex;
  flex-direction: column;
  width: 45%;
  padding-left: 25px;
  margin-left: 25px;
  border-left: 1px solid #dcdcdd;

  .bp4-dark & {
    border-left-color: var(--color-dark-gray5);
  }
`,J={notificationKey:"",isNotificationEnabled:!1,messageText:""},Q=j((function({closeDialog:e}){const{dialogName:s,smsNotification:t,editSMSNotificationMutate:a}=z(),n={...J,...M(t,J),notificationKey:t.key,messageText:t.smsMessage??""};return i.jsx(E,{validationSchema:P,initialValues:n,onSubmit:(i,{setSubmitting:n,setErrors:o})=>{const r={key:t.key,values:{messageText:i.messageText,isNotificationEnabled:i.isNotificationEnabled}};a(r).then((()=>{k.show({message:x.get("sms_message.dialog.success_message"),intent:p.SUCCESS}),e(s)})).catch((({data:{errors:e}})=>{e&&((e,{setErrors:s})=>{const t=e.find((e=>"UNSUPPORTED_SMS_MESSAGE_VARIABLES"===e.type));t&&s({messageText:`The SMS message has unsupported variables - ${S.castArray(t.payload?.unsupported_args??[]).join(", ")}`,intent:p.DANGER})})(e,{setErrors:o}),n(!1)}))},component:I})}),y)}}}));
