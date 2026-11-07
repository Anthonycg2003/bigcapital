System.register(["./index-legacy-D5XI0zpp.js","./PrivatePages-legacy-4pET6Xu4.js","./EmptyStatus-legacy-BnX_0aZt.js","./queries-legacy-CUvFCKxh.js","./contextMenu2-legacy-CeGQgA1V.js","./queries-legacy-Ct__8mSf.js","./popover2-legacy-nKk8WodS.js","./index-legacy-BNzxNAmQ.js","./InputGroup-legacy-D0k9_JqC.js","./Row-legacy-DfeDrUO-.js","./queries-legacy-DYFrCvuT.js","./query-keys-legacy-tDh8CtqJ.js"],(function(e,r){"use strict";var o,t,i,n,s,a,c,l,d,x,u,h,p,j,g,m,b,y,w,v,f,E,k,C,_,S,N,P,F;return{setters:[e=>{o=e.c9,t=e.w,i=e.M,n=e.k,s=e.b9,a=e.bh,c=e.eb,l=e.bG,d=e.e,x=e.e4,u=e.aT,h=e.bu,p=e.bk,j=e.R,g=e.$,m=e.bg,b=e.r,y=e.by,w=e.an,v=e.c,f=e.bx,E=e.bt},e=>{k=e.M,C=e.w,_=e.F},e=>{S=e.E},e=>{N=e.e,P=e.u},e=>{F=e.C},null,null,null,null,null,null,null],execute:function(){var r=document.createElement("style");r.textContent=".preferences-page__inside-content--warehouses{height:100%}\n/*$vite$:1*/",document.head.appendChild(r),e("WarehousesPerences",(function(){return t.jsx(Y,{children:t.jsx(Q,{})})}));const I=4;function R({onEditClick:e,onDeleteClick:r,onMarkPrimary:o,warehouse:x}){return t.jsxs(i,{children:[t.jsx(n,{icon:t.jsx(s,{icon:"pen-18"}),text:a.get("warehouses.action.edit_warehouse"),onClick:c(e)}),t.jsx(l,{condition:!x.primary,children:t.jsx(n,{icon:t.jsx(s,{icon:"check",iconSize:18}),text:a.get("warehouses.action.make_as_parimary"),onClick:c(o)})}),t.jsx(k,{}),t.jsx(n,{text:a.get("warehouses.action.delete_warehouse"),icon:t.jsx(s,{icon:"trash-16",iconSize:16}),intent:d.DANGER,onClick:c(r)})]})}function A(){return t.jsxs(M,{children:[t.jsxs(T,{children:[t.jsx(q,{className:x,children:"X"}),t.jsx(W,{className:x,children:"X"})]}),t.jsxs(L,{children:[t.jsx(O,{className:x,children:"X"}),t.jsx(O,{className:x,children:"X"})]})]})}function z({title:e,code:r,city:o,country:i,email:n,phoneNumber:a,primary:c}){return t.jsxs(M,{"data-testId":"warehouse-item",children:[t.jsxs(T,{children:[t.jsxs(q,{children:[e," ",c?t.jsx(s,{icon:"star-18dp",iconSize:16}):null]}),t.jsx(W,{children:r}),t.jsx(X,{children:t.jsx(s,{icon:"warehouse-16",iconSize:20})})]}),t.jsxs(L,{children:[o&&t.jsx(O,{children:o}),i&&t.jsx(O,{children:i}),n&&t.jsx(O,{children:n}),a&&t.jsx(O,{children:a})]})]})}function D(){return t.jsx(t.Fragment,{children:[...Array(I)].map(((e,r)=>t.jsx(A,{},r)))})}const G=o.div`
  display: flex;
  flex-wrap: wrap;
  margin: 15px;
  height: 100%;
`,M=o.div`
  --x-box-border-color: #c8cad0;
  --x-box-background-color: #fff;
  --x-box-hover-border-color: #0153cc;

  .bp4-dark & {
    --x-box-border-color: rgba(255, 255, 255, 0.2);
    --x-box-background-color: var(--color-dark-gray3);
    --x-box-hover-border-color: #0153cc;
  }
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  border-radius: 5px;
  border: 1px solid var(--x-box-border-color);
  background: var(--x-box-background-color);
  margin: 5px 5px 8px;
  width: 200px;
  height: 160px;
  transition: all 0.1s ease-in-out;
  padding: 12px;
  position: relative;

  &:hover {
    border-color: var(--x-box-hover-border-color);
  }
`,T=o.div`
  position: relative;
  padding-right: 24px;
  padding-top: 2px;
`,q=o.div`
  --x-title-color: #000;
  --x-title-icon-color: #e1b31d;

  .bp4-dark & {
    --x-title-color: var(--color-light-gray5);
    --x-title-icon-color: #e1b31d;
  }
  font-size: 14px;
  font-style: inherit;
  color: var(--x-title-color);
  white-space: nowrap;
  font-weight: 500;
  line-height: 1;

  .bp4-icon {
    margin: 0;
    margin-left: 2px;
    vertical-align: top;
    color: var(--x-title-icon-color);
  }
`,W=o.div`
  --x-code-color: #6b7176;

  .bp4-dark & {
    --x-code-color: var(--color-muted-text);
  }
  display: block;
  font-size: 11px;
  color: var(--x-code-color);
  margin-top: 4px;
`,X=o.div`
  position: absolute;
  top: 0;
  color: #abb3bb;
  right: 0;
`,L=o.div`
  width: 100%;
  margin-top: auto;
`,O=o.div`
  --x-item-color: #000;

  .bp4-dark & {
    --x-item-color: var(--color-light-gray1);
  }
  font-size: 11px;
  color: var(--x-item-color);
  text-overflow: ellipsis;
  overflow: hidden;

  &:not(:last-of-type) {
    margin-bottom: 5px;
  }
`,$=u((function({openDialog:e}){return t.jsx(S,{title:t.jsx(p,{id:"warehouses.empty_status.title"}),description:t.jsx("p",{children:t.jsx(p,{id:"warehouses.empty_status.description"})}),action:t.jsx(j.Fragment,{children:t.jsx(g,{intent:d.PRIMARY,large:!0,onClick:()=>{e("warehouse-activate",{})},children:t.jsx(p,{id:"warehouses.activate_button"})})})})}),h),H=u((function({openAlert:e,openDialog:r,warehouse:o}){const{mutateAsync:i}=N();return t.jsx(F,{content:t.jsx(R,{warehouse:o,onEditClick:()=>{r("warehouse-form",{warehouseId:o.id,action:"edit"})},onDeleteClick:()=>{e("warehouse-delete",{warehouseId:o.id})},onMarkPrimary:()=>{i(o.id).then((()=>{m.show({message:a.get("warehouse.alert.mark_primary_message"),intent:d.SUCCESS})}))}}),children:t.jsx(z,{title:o.name,code:o.code,city:o.city,country:o.country,primary:o.primary})})}),h,C);function J({warehouses:e}){return t.jsx(t.Fragment,{children:e.map((e=>t.jsx(H,{warehouse:e},e.id)))})}const U=b.createContext({});function Y({query:e,...r}){const{featureCan:o}=y(),i=o(_.Warehouses),{data:n,isLoading:s}=P(e,{enabled:i}),a=n??[],c={warehouses:a,isWarehouesLoading:s,isEmptyStatus:w.isEmpty(a)||!i};return t.jsx("div",{className:v(f.PREFERENCES_PAGE_INSIDE_CONTENT,f.PREFERENCES_PAGE_INSIDE_CONTENT_WAREHOUSES),children:t.jsx(j.Fragment,{children:t.jsx(U.Provider,{value:c,...r})})})}const B=()=>j.useContext(U);function K(){const{warehouses:e,isWarehouesLoading:r,isEmptyStatus:o}=B();return t.jsx(j.Fragment,{children:t.jsx(G,{children:r?t.jsx(D,{}):o?t.jsx($,{}):t.jsx(J,{warehouses:e})})})}const Q=u((function({changePreferencesPageTitle:e}){return j.useEffect((()=>{e(a.get("warehouses.label"))}),[e]),t.jsx(j.Fragment,{children:t.jsx(K,{})})}),E)}}}));
