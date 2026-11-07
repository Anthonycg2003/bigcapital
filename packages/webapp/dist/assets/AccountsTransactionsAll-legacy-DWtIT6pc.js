System.register(["./index-legacy-D5XI0zpp.js","./AccountTransactionsList-legacy-yEKeMHBo.js","./withBankingActions-legacy-BtOjdxZH.js","./index-legacy-Ckwbx7oP.js","./queries-legacy-Cu5zpmlT.js","./bank-transactions-legacy-BaGNPRjU.js","./TableVirtualizedRows-legacy-D53ApRip.js","./tables-legacy-DJt1cVww.js","./PrivatePages-legacy-4pET6Xu4.js","./withBanking-legacy-Du-hw-ME.js","./query-keys-legacy-Dbapw2O7.js","./useQueryString-legacy-BEJuTV76.js","./queries-legacy-CPhkHnvW.js","./query-keys-legacy-8S6IFNCn.js","./queries-legacy-6qeaAy-d.js","./query-keys-legacy-BjYca0jo.js","./DashboardInsider-legacy-DDgSdkhO.js","./transactionDrawer-legacy-DJX6-4lV.js","./bank-accounts-legacy-CC7a_K-V.js","./DashboardActionsBar-legacy-BAD8uqAY.js","./index-legacy-CCtRpK7d.js","./cashflowOptions-legacy-B1IsmiZU.js","./FinancialLoadingBar-legacy-DNg2RMev.js","./DashboardPageContent-legacy-OZk9UtxT.js","./CashFlowDrawers-legacy-Bdxv2a_I.js","./index-legacy-B5EQtI2L.js","./index-legacy-BPi3v6ed.js","./index-legacy-ev3m0y0z.js","./index-legacy-SnIuzj7F.js","./index-legacy-DAFGD8qb.js","./index-legacy-LXYTtvGw.js","./index-legacy-nZFRlx4y.js","./index-legacy-D9Pfnvw7.js","./useInfiniteQuery-legacy-BkMnmdih.js","./query-keys-legacy-DnFH9VJm.js","./query-keys-legacy-CJusCswQ.js","./queries-legacy-Ct__8mSf.js","./popover2-legacy-nKk8WodS.js","./index-legacy-BNzxNAmQ.js","./InputGroup-legacy-D0k9_JqC.js","./Row-legacy-DfeDrUO-.js","./queries-legacy-DYFrCvuT.js"],(function(e,n){"use strict";var a,s,l,t,o,c,r,i,d,u,g,y,h,j,b,x,w,p,C,m,T,k,f,S,R,v,I;return{setters:[e=>{a=e.R,s=e.w,l=e.aT,t=e.cl,o=e.c9,c=e.cr,r=e.dk,i=e.dl,d=e.cs,u=e.dm,g=e.bk,y=e.bg,h=e.e,j=e.r},e=>{b=e.u,x=e.a,w=e.A,p=e.h},e=>{C=e.w},e=>{m=e.u,T=e.I},e=>{k=e.g,f=e.d},e=>{S=e.c},e=>{R=e.T},e=>{v=e.T},e=>{I=e.w},null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],execute:function(){const n=a.createContext({});function z({children:e}){const{accountId:l}=b(),{data:t,isFetching:o,isLoading:c,isSuccess:r,fetchNextPage:i,hasNextPage:d}=k(l,{accountId:l,pageSize:50}),u=m(r?t:void 0,(e=>e?.transactions??[])),g=a.useCallback((()=>{!o&&d&&i()}),[o,d,i]),y={cashflowTransactions:u??[],isCashFlowTransactionsFetching:o,isCashFlowTransactionsLoading:c};return s.jsxs(n.Provider,{value:y,children:[e,s.jsx(T,{onIntersect:g})]})}const F=l((function({openDrawer:e,setCategorizedTransactionsSelected:l}){const t=x(),{cashflowTransactions:o,isCashFlowTransactionsLoading:c,isCashFlowTransactionsFetching:j}=a.useContext(n),{mutateAsync:C}=f(),{mutateAsync:m}=S(),[T,,k]=r(v.CASHFLOW_Transactions),{scrollableRef:I,cashflowTransactionsSettings:z}=b(),F=a.useCallback((e=>{const n=e?.filter((e=>e.original.uncategorizedTransactionId))?.map((e=>e.original.uncategorizedTransactionId));l(n)}),[l]);return s.jsx(A,{noInitialFetch:!0,columns:t,data:o,sticky:!0,loading:c,headerLoading:c,progressBarLoading:j,expandColumnSpace:1,expandToggleColumn:2,selectionColumnWidth:45,TableCellRenderer:i,TableLoadingRenderer:d,TableRowsRenderer:R,TableHeaderSkeletonRenderer:u,ContextMenu:w,onCellClick:n=>{const a=n.row.original;p(a,e)},vListrowHeight:32,vListOverscanRowCount:0,initialColumnsWidths:T,onColumnResizing:k,selectionColumn:!0,onSelectedRowsChange:F,noResults:s.jsx(g,{id:"cash_flow.account_transactions.no_results"}),className:"table-constrant",windowScrollerProps:{scrollElement:I},payload:{onViewDetails:n=>{p(n,e)},onUncategorize:e=>{C(e.uncategorizedTransactionId).then((()=>{y.show({message:"The bank transaction has been uncategorized.",intent:h.SUCCESS})})).catch((()=>{y.show({message:"Something went wrong.",intent:h.DANGER})}))},onUnmatch:e=>{m({id:e.uncategorizedTransactionId}).then((()=>{y.show({message:"The bank transaction has been unmatched.",intent:h.SUCCESS})})).catch((()=>{y.show({message:"Something went wrong.",intent:h.DANGER})}))}}})}),C,t,I),L=o(c)`
  .table {
    .thead {
      .th {
        letter-spacing: 1px;
        text-transform: uppercase;
        font-size: 13px;
      }
    }

    .tbody {
      .tr:last-child .td {
        border-bottom: 0;
      }
    }
  }
`,A=o(L)`
  --table-cell-border-color: #e6e6e6;

  .bp4-dark & {
    --table-cell-border-color: rgba(255, 255, 255, 0.15);
  }

  .table .tbody {
    .tbody-inner .tr.no-results {
      .td {
        padding: 2rem 0;
        font-size: 14px;
        color: #888;
        font-weight: 400;
        border-bottom: 0;
      }
    }

    .tbody-inner {
      .tr .td:not(:first-child) {
        border-left: 1px solid var(--table-cell-border-color);
      }
    }
  }
`,q=o.div`
  margin: 30px 15px;
`,D=o.div`
  background: var(--color-bank-transactions-content-background);
  border: 2px solid var(--color-bank-transactions-content-border);
  border-radius: 10px;
  padding: 30px 18px;
  flex: 0 1;
`;e("AccountTransactionsAll",l((function({resetCategorizedTransactionsSelected:e}){return j.useEffect((()=>()=>{e()}),[e]),s.jsx(z,{children:s.jsx(q,{children:s.jsx(D,{children:s.jsx(F,{})})})})}),C))}}}));
