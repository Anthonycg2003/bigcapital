System.register(["./index-legacy-D5XI0zpp.js","./queries-legacy-OeuziOYu.js","./DashboardInsider-legacy-DDgSdkhO.js","./PrivatePages-legacy-4pET6Xu4.js","./popover2-legacy-nKk8WodS.js","./divider-legacy-C4sltLzF.js","./queries-legacy-Ct__8mSf.js","./index-legacy-BNzxNAmQ.js","./InputGroup-legacy-D0k9_JqC.js","./Row-legacy-DfeDrUO-.js","./queries-legacy-DYFrCvuT.js"],(function(n,o){"use strict";var i,t,e,c,s,l,a,r,d,x,u,k,g,j,p,m,h,_,b,f,v,L,T,y,P,C,R;return{setters:[n=>{i=n.w,t=n.c,e=n.R,c=n.o8,s=n.c9,l=n.b9,a=n.e4,r=n.m,d=n.bG,x=n.bk,u=n.bh,k=n.$,g=n.e,j=n.M,p=n.k,m=n.aT,h=n.bu,_=n.c2,b=n.o9,f=n.mc,v=n.bg},n=>{L=n.u},n=>{T=n.D},n=>{y=n.H,P=n.w},n=>{C=n.P},n=>{R=n.D},null,null,null,null,null],execute:function(){function o({items:n,sep:o}){return n.length>0?n.reduce(((n,t)=>i.jsxs(i.Fragment,{children:[n,o,t]}))):null}n("TransactionsLockingPage",(function(){return i.jsx(w,{children:i.jsx(en,{})})}));const E=e.createContext(void 0);function w({children:n}){const{data:o,isFetching:t,isLoading:s}=L(),[l,a]=e.useState("partial");c((()=>{o?.lockingType&&a(o.lockingType)}),o?.lockingType);const r={transactionsLocking:o,isTransactionLockingFetching:t,isTransactionLockingLoading:s,transactionLockingType:l,setTransactionLockingType:a};return i.jsx(T,{children:i.jsx(E.Provider,{value:r,children:n})})}const D=()=>{const n=e.useContext(E);if(!n)throw new Error("useTransactionsLockingContext must be used within a TransactionsLockingProvider");return n};function M({module:n,...o}){return i.jsx(N,{name:n.formattedModule,module:n.module,description:n.description,isEnabled:n.isEnabled,isPartialUnlock:n.isPartialUnlock,lockToDate:n.formattedLockToDate,lockReason:n.lockReason,unlockReason:n.unlockReason,unlockFromDate:n.formattedUnlockFromDate,unlockToDate:n.formattedUnlockToDate,...o})}function U({...n}){const{transactionsLocking:o}=D(),t=o?.modules??[];return i.jsx(i.Fragment,{children:t.map((o=>i.jsx(M,{module:o,...n},o.module)))})}function F({...n}){const{transactionsLocking:o}=D();return o?i.jsx(M,{module:o.all,...n}):null}function I(){return i.jsxs(i.Fragment,{children:[i.jsx(A,{}),i.jsx(A,{}),i.jsx(A,{})]})}const A=()=>i.jsx(G,{isEnabled:!1,children:i.jsxs(S,{children:[i.jsx(O,{children:i.jsx(l,{icon:"lock",iconSize:24})}),i.jsxs(J,{children:[i.jsx(X,{className:a,children:"XXXX"}),i.jsx(q,{className:a,children:"Lorem ipsum dolor sit amet, consectetur adipisicing elit."})]})]})}),$=e.createContext(void 0),H=()=>{const n=e.useContext($);if(!n)throw new Error("useTransactionsLockingItemContext must be used within a TransactionLockingContent");return n},N=n=>{const{isEnabled:o}=n;return i.jsx($.Provider,{value:n,children:i.jsx(G,{isEnabled:o,children:i.jsxs(S,{children:[i.jsx(O,{children:i.jsx(l,{icon:"lock",iconSize:24})}),i.jsx(Y,{}),i.jsx(z,{})]})})})};function Y(){const{name:n,description:o,isEnabled:t,lockToDate:e,lockReason:c,isPartialUnlock:s,unlockToDate:l,unlockFromDate:a,unlockReason:k}=H();return i.jsxs(J,{children:[i.jsxs(X,{children:[n,i.jsx(y,{content:o,position:r.BOTTOM_LEFT})]}),i.jsx(d,{condition:!t,children:i.jsx(q,{children:i.jsx(x,{id:"transactions_locking.lock_item.no_lock"})})}),i.jsx(d,{condition:t,children:i.jsxs(V,{children:[i.jsx(q,{children:u.formatHTMLMessage({id:"transactions_locking.of_the_module_locked_to"},{value:e})}),i.jsx(d,{condition:!!c,children:i.jsx(K,{children:u.formatHTMLMessage({id:"transactions_locking.lock_reason"},{value:c})})})]})}),i.jsx(d,{condition:s,children:i.jsxs(Q,{children:[i.jsx(q,{children:u.formatHTMLMessage({id:"transactions_locking.partial_unlocked_from"},{fromDate:a,toDate:l})}),i.jsx(d,{condition:!!k,children:i.jsx(K,{children:u.formatHTMLMessage({id:"transactions_locking.unlock_reason"},{value:k})})})]})})]})}function z(){const{module:n,isEnabled:o,isPartialUnlock:t,onLock:e,onCancelLock:c,onEditLock:s,onUnlockPartial:l,onCancelUnlockPartial:a}=H();return i.jsxs(B,{children:[i.jsx(d,{condition:!o,children:i.jsx(k,{small:!0,minimal:!0,intent:g.PRIMARY,onClick:o=>{e?.(n,o)},children:i.jsx(x,{id:"transactions_locking.lock"})})}),i.jsxs(d,{condition:o,children:[i.jsx(k,{small:!0,minimal:!0,intent:g.PRIMARY,onClick:i=>{s?.(n,o,i)},children:i.jsx(x,{id:"edit"})}),i.jsx(R,{}),i.jsx(C,{content:i.jsxs(j,{children:[i.jsx(p,{text:i.jsx(x,{id:"transactions_locking.full_unlock"}),onClick:o=>{c?.(n,o)}}),i.jsx(d,{condition:!t,children:i.jsx(p,{text:i.jsx(x,{id:"transactions_locking.paetial_unlock"}),onClick:o=>{l?.(n,o)}})}),i.jsx(d,{condition:t,children:i.jsx(p,{text:i.jsx(x,{id:"transactions_locking.cancel_partial_unlock"}),onClick:o=>{a?.(n,o)}})})]}),placement:"bottom-start",minimal:!0,children:i.jsx(k,{small:!0,minimal:!0,intent:g.PRIMARY,children:i.jsx(x,{id:"transactions_locking.unlock"})})})]})]})}const G=s.div`
  display: flex;
  align-items: center;
  border-radius: 6px;
  border: 1px solid var(--color-transaction-locking-item-border);
  padding: 16px 18px;
  margin-bottom: 25px;
  background: var(--color-transaction-locking-item-background);
  box-shadow: 0 4px 20px -5px rgb(0 8 36 / 5%);

  ${n=>n.isEnabled&&`\n    border-color: var(--color-transaction-locking-item-enabled-border);\n\n    ${O} {\n      color: #ef6d6d;\n    }\n  `}
`,S=s.div`
  display: flex;
  align-items: center;
  flex: 1 1 0;
`,X=s.h1`
  font-size: 18px;
  margin: 0 0 8px;
  line-height: 1;
  font-weight: 600;
`,q=s.p`
  margin-bottom: 0;
  opacity: 0.9;
`,O=s.div`
  --x-text-color: #93a1ba;

  .bp4-dark & {
    --x-text-color: rgba(255, 255, 255, 0.6);
  }
  border: 1px solid var(--color-transaction-locking-item-icon-border);
  height: 45px;
  width: 45px;
  text-align: center;
  line-height: 45px;
  border-radius: 8px;
  color: var(--x-text-color);

  .bp4-icon {
    position: relative;
    top: 1px;
  }
`,B=s.div`
  display: flex;

  .bp4-divider {
    margin: 2px;
  }
`,J=s.div`
  flex: 1 1 0;
  margin-left: 20px;
  width: 100%;
  padding-right: 10px;
`,K=s.div`
  font-size: 13px;
  --x-text-color: #777;

  .bp4-dark & {
    --x-text-color: rgba(255, 255, 255, 0.6);
  }
  strong {
    color: var(--x-text-color);
  }
`,Q=s.div`
  -x-border-color: #ddd;

  .bp4-dark & {
    --x-border-color: rgba(255, 255, 255, 0.1);
  }
  padding-top: 10px;
  border-top: 1px solid var(--x-border-color);
  margin-top: 10px;

  ${K} {
    margin-top: 8px;
  }
  ${q} {
    font-size: 13px;
  }
`,V=s.div`
  ${K} {
    margin-top: 10px;
  }
`,W=m((function({openDialog:n,openAlert:o}){const{isTransactionLockingLoading:t,transactionLockingType:e}=D(),c=o=>{n("locking-transactions",{module:o})},s=o=>{n("unlocking-transactions",{module:o})},l=o=>{n("unlocking-partial-transactions",{module:o})},a=n=>{o("cancel-unlocking-partail",{module:n})};return t?i.jsx(I,{}):"partial"===e?i.jsx(U,{onLock:c,onEditLock:(o,i)=>{n("locking-transactions",{isEnabled:i,module:o})},onCancelLock:s,onUnlockPartial:l,onCancelUnlockPartial:a}):i.jsx(F,{onLock:c,onCancelLock:s,onUnlockPartial:l,onCancelUnlockPartial:a})}),h,P),Z=n=>n.isEnabled,nn=n=>n.filter((n=>n.isEnabled));function on(){const{transactionsLocking:n,transactionLockingType:t,setTransactionLockingType:e}=D();return"all"!==t?i.jsxs(tn,{title:i.jsx(x,{id:"transactions_locking_lock_all_transactions_at_once"}),intent:g.PRIMARY,children:[i.jsx("p",{children:i.jsx(x,{id:"transactions_locking.callout.lock_all_at_once.desc"})}),i.jsx(f,{onClick:()=>{const t=nn(n?.modules??[]),c=t.map((n=>i.jsx("strong",{children:n.formattedModule},n.module)));t.length>0?v.show({message:i.jsxs("span",{children:["You should unlock ",i.jsx(o,{items:c,sep:", "})," modules first, than you can lock all transactions at once."]}),intent:g.DANGER}):e("all")},children:i.jsx(x,{id:"transactions_locking.lock_all_transactions_at_once"})})]}):i.jsxs(tn,{title:i.jsx(x,{id:"transactions_locking.lock_individual_modules"}),intent:g.PRIMARY,children:[i.jsx("p",{children:i.jsx(x,{id:"transactions_locking.callout.lock_individual.desc"})}),i.jsx(f,{onClick:()=>{n&&Z(n.all)?v.show({message:u.get("transactions_locking.you_should_unlock_all_transactions_at_once_before"),intent:g.DANGER}):e("partial")},children:i.jsx(x,{id:"transactions_locking.lock_modules_individually"})})]})}const tn=s(_)`
  margin-bottom: 0;
  margin-top: 20px;
  background: transparent;

  ${b} {
    // color: #1f3255;
  }
`;function en(){return i.jsx(w,{children:i.jsxs(cn,{children:[i.jsxs(sn,{children:[i.jsx(ln,{children:i.jsx(x,{id:"transactions_locking.long_description"})}),i.jsx(on,{})]}),i.jsx(W,{})]})})}const cn=s.div`
  display: flex;
  flex-direction: column;
  padding: 32px 40px;
  min-width: 800px;
  max-width: 900px;
  width: 75%;
`,sn=s((function({className:n,children:o}){return i.jsx("p",{className:t("paragraph",n),children:o})}))`
  margin-bottom: 25px;
`,ln=s.p``}}}));
