System.register(["./index-legacy-DIiV7_Ij.js","./queries-legacy-CuMR-sCC.js","./DashboardInsider-legacy-C56WGtyI.js","./PrivatePages-legacy-D_3nSDfL.js","./popover2-legacy-vMO8H1RU.js","./divider-legacy-CW6oHseg.js","./withDrawers-legacy-ZeT-fD45.js","./index-legacy-BBFNWTQZ.js","./index-legacy-CR2XlTxQ.js","./queries-legacy-DoGbuOYf.js","./InputGroup-legacy-CF5nXE0t.js","./Row-legacy-BK7WrKsL.js","./queries-legacy-KwrWT7KM.js"],(function(n,o){"use strict";var i,t,e,c,s,l,a,r,d,x,u,g,k,j,p,m,h,_,b,f,v,L,T,y,P,C,w;return{setters:[n=>{i=n.w,t=n.c,e=n.R,c=n.og,s=n.c6,l=n.b6,a=n.e6,r=n.m,d=n.bD,x=n.bh,u=n.be,g=n.Z,k=n.e,j=n.M,p=n.k,m=n.aS,h=n.br,_=n.b$,b=n.oh,f=n.mk,v=n.bd},n=>{L=n.u},n=>{T=n.D},n=>{y=n.H,P=n.w},n=>{C=n.P},n=>{w=n.D},null,null,null,null,null,null,null],execute:function(){function o({items:n,sep:o}){return n.length>0?n.reduce(((n,t)=>i.jsxs(i.Fragment,{children:[n,o,t]}))):null}n("TransactionsLockingPage",(function(){return i.jsx(D,{children:i.jsx(en,{})})}));const R=e.createContext(void 0);function D({children:n}){const{data:o,isFetching:t,isLoading:s}=L(),[l,a]=e.useState("partial");c((()=>{o?.lockingType&&a(o.lockingType)}),o?.lockingType);const r={transactionsLocking:o,isTransactionLockingFetching:t,isTransactionLockingLoading:s,transactionLockingType:l,setTransactionLockingType:a};return i.jsx(T,{children:i.jsx(R.Provider,{value:r,children:n})})}const E=()=>{const n=e.useContext(R);if(!n)throw new Error("useTransactionsLockingContext must be used within a TransactionsLockingProvider");return n};function M({module:n,...o}){return i.jsx(N,{name:n.formattedModule,module:n.module,description:n.description,isEnabled:n.isEnabled,isPartialUnlock:n.isPartialUnlock,lockToDate:n.formattedLockToDate,lockReason:n.lockReason,unlockReason:n.unlockReason,unlockFromDate:n.formattedUnlockFromDate,unlockToDate:n.formattedUnlockToDate,...o})}function U({...n}){const{transactionsLocking:o}=E(),t=o?.modules??[];return i.jsx(i.Fragment,{children:t.map((o=>i.jsx(M,{module:o,...n},o.module)))})}function F({...n}){const{transactionsLocking:o}=E();return o?i.jsx(M,{module:o.all,...n}):null}function I(){return i.jsxs(i.Fragment,{children:[i.jsx(A,{}),i.jsx(A,{}),i.jsx(A,{})]})}const A=()=>i.jsx(S,{isEnabled:!1,children:i.jsxs(G,{children:[i.jsx(O,{children:i.jsx(l,{icon:"lock",iconSize:24})}),i.jsxs(B,{children:[i.jsx(X,{className:a,children:"XXXX"}),i.jsx(q,{className:a,children:"Lorem ipsum dolor sit amet, consectetur adipisicing elit."})]})]})}),$=e.createContext(void 0),H=()=>{const n=e.useContext($);if(!n)throw new Error("useTransactionsLockingItemContext must be used within a TransactionLockingContent");return n},N=n=>{const{isEnabled:o}=n;return i.jsx($.Provider,{value:n,children:i.jsx(S,{isEnabled:o,children:i.jsxs(G,{children:[i.jsx(O,{children:i.jsx(l,{icon:"lock",iconSize:24})}),i.jsx(Y,{}),i.jsx(z,{})]})})})};function Y(){const{name:n,description:o,isEnabled:t,lockToDate:e,lockReason:c,isPartialUnlock:s,unlockToDate:l,unlockFromDate:a,unlockReason:g}=H();return i.jsxs(B,{children:[i.jsxs(X,{children:[n,i.jsx(y,{content:o,position:r.BOTTOM_LEFT})]}),i.jsx(d,{condition:!t,children:i.jsx(q,{children:i.jsx(x,{id:"transactions_locking.lock_item.no_lock"})})}),i.jsx(d,{condition:t,children:i.jsxs(Q,{children:[i.jsx(q,{children:u.formatHTMLMessage({id:"transactions_locking.of_the_module_locked_to"},{value:e})}),i.jsx(d,{condition:!!c,children:i.jsx(J,{children:u.formatHTMLMessage({id:"transactions_locking.lock_reason"},{value:c})})})]})}),i.jsx(d,{condition:s,children:i.jsxs(K,{children:[i.jsx(q,{children:u.formatHTMLMessage({id:"transactions_locking.partial_unlocked_from"},{fromDate:a,toDate:l})}),i.jsx(d,{condition:!!g,children:i.jsx(J,{children:u.formatHTMLMessage({id:"transactions_locking.unlock_reason"},{value:g})})})]})})]})}function z(){const{module:n,isEnabled:o,isPartialUnlock:t,onLock:e,onCancelLock:c,onEditLock:s,onUnlockPartial:l,onCancelUnlockPartial:a}=H();return i.jsxs(Z,{children:[i.jsx(d,{condition:!o,children:i.jsx(g,{small:!0,minimal:!0,intent:k.PRIMARY,onClick:o=>{e?.(n,o)},children:i.jsx(x,{id:"transactions_locking.lock"})})}),i.jsxs(d,{condition:o,children:[i.jsx(g,{small:!0,minimal:!0,intent:k.PRIMARY,onClick:i=>{s?.(n,o,i)},children:i.jsx(x,{id:"edit"})}),i.jsx(w,{}),i.jsx(C,{content:i.jsxs(j,{children:[i.jsx(p,{text:i.jsx(x,{id:"transactions_locking.full_unlock"}),onClick:o=>{c?.(n,o)}}),i.jsx(d,{condition:!t,children:i.jsx(p,{text:i.jsx(x,{id:"transactions_locking.paetial_unlock"}),onClick:o=>{l?.(n,o)}})}),i.jsx(d,{condition:t,children:i.jsx(p,{text:i.jsx(x,{id:"transactions_locking.cancel_partial_unlock"}),onClick:o=>{a?.(n,o)}})})]}),placement:"bottom-start",minimal:!0,children:i.jsx(g,{small:!0,minimal:!0,intent:k.PRIMARY,children:i.jsx(x,{id:"transactions_locking.unlock"})})})]})]})}const S=s.div`
  display: flex;
  align-items: center;
  border-radius: 6px;
  border: 1px solid var(--color-transaction-locking-item-border);
  padding: 16px 18px;
  margin-bottom: 25px;
  background: var(--color-transaction-locking-item-background);
  box-shadow: 0 4px 20px -5px rgb(0 8 36 / 5%);

  ${n=>n.isEnabled&&`\n    border-color: var(--color-transaction-locking-item-enabled-border);\n\n    ${O} {\n      color: #ef6d6d;\n    }\n  `}
`,G=s.div`
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
`,Z=s.div`
  display: flex;

  .bp4-divider {
    margin: 2px;
  }
`,B=s.div`
  flex: 1 1 0;
  margin-left: 20px;
  width: 100%;
  padding-right: 10px;
`,J=s.div`
  font-size: 13px;
  --x-text-color: #777;

  .bp4-dark & {
    --x-text-color: rgba(255, 255, 255, 0.6);
  }
  strong {
    color: var(--x-text-color);
  }
`,K=s.div`
  -x-border-color: #ddd;

  .bp4-dark & {
    --x-border-color: rgba(255, 255, 255, 0.1);
  }
  padding-top: 10px;
  border-top: 1px solid var(--x-border-color);
  margin-top: 10px;

  ${J} {
    margin-top: 8px;
  }
  ${q} {
    font-size: 13px;
  }
`,Q=s.div`
  ${J} {
    margin-top: 10px;
  }
`,V=m((function({openDialog:n,openAlert:o}){const{isTransactionLockingLoading:t,transactionLockingType:e}=E(),c=o=>{n("locking-transactions",{module:o})},s=o=>{n("unlocking-transactions",{module:o})},l=o=>{n("unlocking-partial-transactions",{module:o})},a=n=>{o("cancel-unlocking-partail",{module:n})};return t?i.jsx(I,{}):"partial"===e?i.jsx(U,{onLock:c,onEditLock:(o,i)=>{n("locking-transactions",{isEnabled:i,module:o})},onCancelLock:s,onUnlockPartial:l,onCancelUnlockPartial:a}):i.jsx(F,{onLock:c,onCancelLock:s,onUnlockPartial:l,onCancelUnlockPartial:a})}),h,P),W=n=>n.isEnabled,nn=n=>n.filter((n=>n.isEnabled));function on(){const{transactionsLocking:n,transactionLockingType:t,setTransactionLockingType:e}=E();return"all"!==t?i.jsxs(tn,{title:i.jsx(x,{id:"transactions_locking_lock_all_transactions_at_once"}),intent:k.PRIMARY,children:[i.jsx("p",{children:i.jsx(x,{id:"transactions_locking.callout.lock_all_at_once.desc"})}),i.jsx(f,{onClick:()=>{const t=nn(n?.modules??[]),c=t.map((n=>i.jsx("strong",{children:n.formattedModule},n.module)));t.length>0?v.show({message:i.jsxs("span",{children:["You should unlock ",i.jsx(o,{items:c,sep:", "})," modules first, than you can lock all transactions at once."]}),intent:k.DANGER}):e("all")},children:i.jsx(x,{id:"transactions_locking.lock_all_transactions_at_once"})})]}):i.jsxs(tn,{title:i.jsx(x,{id:"transactions_locking.lock_individual_modules"}),intent:k.PRIMARY,children:[i.jsx("p",{children:i.jsx(x,{id:"transactions_locking.callout.lock_individual.desc"})}),i.jsx(f,{onClick:()=>{n&&W(n.all)?v.show({message:u.get("transactions_locking.you_should_unlock_all_transactions_at_once_before"),intent:k.DANGER}):e("partial")},children:i.jsx(x,{id:"transactions_locking.lock_modules_individually"})})]})}const tn=s(_)`
  margin-bottom: 0;
  margin-top: 20px;
  background: transparent;

  ${b} {
    // color: #1f3255;
  }
`;function en(){return i.jsx(D,{children:i.jsxs(cn,{children:[i.jsxs(sn,{children:[i.jsx(ln,{children:i.jsx(x,{id:"transactions_locking.long_description"})}),i.jsx(on,{})]}),i.jsx(V,{})]})})}const cn=s.div`
  display: flex;
  flex-direction: column;
  padding: 32px 40px;
  min-width: 800px;
  max-width: 900px;
  width: 75%;
`,sn=s((function({className:n,children:o}){return i.jsx("p",{className:t("paragraph",n),children:o})}))`
  margin-bottom: 25px;
`,ln=s.p``}}}));
