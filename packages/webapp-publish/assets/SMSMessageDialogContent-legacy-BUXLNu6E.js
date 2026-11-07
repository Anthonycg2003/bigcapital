System.register(["./index-legacy-DIiV7_Ij.js","./DialogContent-legacy-vIDMvNJa.js","./queries-legacy-DyhODsVI.js","./dataTypes-legacy-Ba6DsCIw.js","./textArea-legacy-CLfjS4Tj.js","./utils-legacy-ijM5fC85.js","./query-keys-legacy-BjYca0jo.js"],(function(e,s){"use strict";var t,i,a,n,o,r,l,d,c,m,g,x,u,f,p,h,j,y,b,v,S,N,_,T,M,E,k,w,A,C,D,R,z;return{setters:[e=>{t=e.r,i=e.w,a=e.R,n=e.c0,o=e.c1,r=e.dM,l=e.c6,d=e.Z,c=e.c2,m=e.dU,g=e.bY,x=e.be,u=e.kd,f=e.hq,p=e.e,h=e.bh,j=e.aS,y=e.br,b=e.oy,v=e.oz,S=e.am,N=e.c3,_=e.x,T=e.oJ,M=e.ds,E=e.c5,k=e.bd},e=>{w=e.D},e=>{A=e.t,C=e.v},e=>{D=e.D},e=>{R=e.T},e=>{z=e.g},null],execute:function(){var s=document.createElement("style");s.textContent=".dialog--sms-message{width:800px}.dialog--sms-message .bp4-form-group{margin-bottom:15px}.dialog--sms-message .bp4-form-group label.bp4-label{font-size:13px;margin-bottom:6px}.dialog--sms-message .form-group--message_text .bp4-form-content textarea{width:100%;min-width:100%;min-height:90px;font-size:14px}.dialog--sms-message .bp4-dialog-footer{padding-top:10px}\n/*$vite$:1*/",document.head.appendChild(s),e("SMSMessageDialogContent",(function({dialogName:e,notificationkey:s}){return i.jsx(L,{dialogName:e,notificationkey:s,children:i.jsx(Z,{})})}));const V=t.createContext({});function L({notificationkey:e,dialogName:s,...t}){const{mutateAsync:a}=A(),{data:n,isLoading:o}=C(e),r={dialogName:s,smsNotification:n??{},editSMSNotificationMutate:a};return i.jsx(w,{isLoading:o,children:i.jsx(V.Provider,{value:r,...t})})}const P=()=>a.useContext(V),q=n().shape({notificationKey:o().required(),isNotificationEnabled:r(),messageText:o().min(3).max(D.TEXT)});function U(){const{smsNotification:e}=P(),{setFieldValue:s}=c(),t=()=>{s("messageText",e.defaultSmsMessage??"")};return i.jsx("div",{children:i.jsx(m,{name:"messageText",children:({field:e,meta:{error:s,touched:a}})=>i.jsx(g,{label:x.get("notify_via_sms.dialog.message_text"),className:"form-group--message_text",intent:u({error:s,touched:a}),helperText:i.jsxs(i.Fragment,{children:[i.jsx(f,{name:"messageText"}),i.jsx($,{minimal:!0,small:!0,intent:p.PRIMARY,onClick:t,children:i.jsx(h,{id:"sms_message.edit_form.reset_to_default_message"})})]}),children:i.jsx(R,{growVertically:!0,large:!0,intent:u({error:s,touched:a}),...e})})})})}const $=l(d)`
  font-size: 12px;
`,I=j((function({closeDialog:e}){const{isSubmitting:s}=c(),{dialogName:t}=P();return i.jsx(b,{children:i.jsxs(v,{alignment:"left",children:[i.jsx(d,{onClick:()=>{e(t)},style:{minWidth:"75px"},children:i.jsx(h,{id:"cancel"})}),i.jsx(d,{intent:p.PRIMARY,loading:s,style:{minWidth:"75px"},type:"submit",children:i.jsx(h,{id:"save_sms_message"})})]})})}),y);function K(){const{smsNotification:e}=P(),s=a.useMemo((()=>S.castArray(e.allowedVariables??[])),[e.allowedVariables]);return i.jsxs(N,{children:[i.jsx("div",{className:_,children:i.jsxs(H,{children:[i.jsxs(J,{children:[i.jsx(U,{}),i.jsx(W,{children:s.map((({variable:e,description:s})=>i.jsxs(B,{children:[i.jsx("strong",{children:`{${e}}`})," ",s]},e)))})]}),i.jsx(O,{children:i.jsx(Y,{})})]})}),i.jsx(I,{})]})}function Y(){const{values:{messageText:e}}=c(),s=z(e);return i.jsxs(F,{children:[i.jsx(T,{message:e}),i.jsx(G,{children:x.formatHTMLMessage({id:"sms_message.dialog.sms_note"},{value:s})})]})}const F=l.div``,G=l.div`
  font-size: 12px;
  opacity: 0.7;
`,W=l.div`
  list-style: none;
  font-size: 12px;
  opacity: 0.9;
`,B=l.div`
  margin-bottom: 8px;
`,H=l.div`
  display: flex;
`,J=l.div`
  width: 55%;
`,O=l.div`
  display: flex;
  flex-direction: column;
  width: 45%;
  padding-left: 25px;
  margin-left: 25px;
  border-left: 1px solid #dcdcdd;

  .bp4-dark & {
    border-left-color: var(--color-dark-gray5);
  }
`,X={notificationKey:"",isNotificationEnabled:!1,messageText:""},Z=j((function({closeDialog:e}){const{dialogName:s,smsNotification:t,editSMSNotificationMutate:a}=P(),n={...X,...M(t,X),notificationKey:t.key,messageText:t.smsMessage??""};return i.jsx(E,{validationSchema:q,initialValues:n,onSubmit:(i,{setSubmitting:n,setErrors:o})=>{const r={key:t.key,values:{messageText:i.messageText,isNotificationEnabled:i.isNotificationEnabled}};a(r).then((()=>{k.show({message:x.get("sms_message.dialog.success_message"),intent:p.SUCCESS}),e(s)})).catch((({data:{errors:e}})=>{e&&((e,{setErrors:s})=>{const t=e.find((e=>"UNSUPPORTED_SMS_MESSAGE_VARIABLES"===e.type));t&&s({messageText:`The SMS message has unsupported variables - ${S.castArray(t.payload?.unsupported_args??[]).join(", ")}`,intent:p.DANGER})})(e,{setErrors:o}),n(!1)}))},component:K})}),y)}}}));
