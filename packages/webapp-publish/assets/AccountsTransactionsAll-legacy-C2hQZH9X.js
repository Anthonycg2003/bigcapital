System.register(["./index-legacy-DIiV7_Ij.js","./AccountTransactionsList-legacy-CEjwrjHy.js","./withBankingActions-legacy-BRURVtlJ.js","./index-legacy-CUy7ufDX.js","./queries-legacy-CK4svenr.js","./bank-transactions-legacy-B7r902TJ.js","./TableVirtualizedRows-legacy-Cq1lncIU.js","./tables-legacy-DJt1cVww.js","./PrivatePages-legacy-D_3nSDfL.js","./withBanking-legacy-DETNl3t3.js","./query-keys-legacy-Dbapw2O7.js","./useQueryString-legacy-BjVMr3RS.js","./queries-legacy-rgbwHpF0.js","./query-keys-legacy-8S6IFNCn.js","./queries-legacy-DyhODsVI.js","./query-keys-legacy-BjYca0jo.js","./DashboardInsider-legacy-C56WGtyI.js","./withDrawers-legacy-ZeT-fD45.js","./index-legacy-BBFNWTQZ.js","./index-legacy-CR2XlTxQ.js","./transactionDrawer-legacy-1W2qnP8s.js","./bank-accounts-legacy-BGIUUbT6.js","./DashboardActionsBar-legacy-CuVdhJUr.js","./index-legacy-DaCzmA0b.js","./cashflowOptions-legacy-Dgz3nJEG.js","./FinancialLoadingBar-legacy-BGBR9DV-.js","./DashboardPageContent-legacy-rJcfap5z.js","./CashFlowDrawers-legacy-BCsiSad7.js","./index-legacy-B95A4rjm.js","./index-legacy-D4NgkjvR.js","./index-legacy-DcH_eLLD.js","./index-legacy-CIfRh-Ti.js","./index-legacy-BC-hywY8.js","./index-legacy-BsjkDd0Q.js","./index-legacy-BXhFxiCq.js","./index-legacy-DbCcf6lg.js","./useInfiniteQuery-legacy-TsW93Eaj.js","./query-keys-legacy-DnFH9VJm.js","./query-keys-legacy-CJusCswQ.js","./queries-legacy-DoGbuOYf.js","./popover2-legacy-vMO8H1RU.js","./InputGroup-legacy-CF5nXE0t.js","./Row-legacy-BK7WrKsL.js","./queries-legacy-KwrWT7KM.js"],(function(e,n){"use strict";var a,s,l,t,o,c,r,i,d,u,g,y,h,j,b,x,w,p,C,m,T,f,S,k,R,v,z;return{setters:[e=>{a=e.R,s=e.w,l=e.aS,t=e.ci,o=e.c6,c=e.co,r=e.dm,i=e.dn,d=e.cp,u=e.dp,g=e.bh,y=e.bd,h=e.e,j=e.r},e=>{b=e.u,x=e.a,w=e.A,p=e.h},e=>{C=e.w},e=>{m=e.u,T=e.I},e=>{f=e.g,S=e.d},e=>{k=e.c},e=>{R=e.T},e=>{v=e.T},e=>{z=e.w},null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],execute:function(){const n=a.createContext({});function I({children:e}){const{accountId:l}=b(),{data:t,isFetching:o,isLoading:c,isSuccess:r,fetchNextPage:i,hasNextPage:d}=f(l,{accountId:l,pageSize:50}),u=m(r?t:void 0,(e=>e?.transactions??[])),g=a.useCallback((()=>{!o&&d&&i()}),[o,d,i]),y={cashflowTransactions:u??[],isCashFlowTransactionsFetching:o,isCashFlowTransactionsLoading:c};return s.jsxs(n.Provider,{value:y,children:[e,s.jsx(T,{onIntersect:g})]})}const F=l((function({openDrawer:e,setCategorizedTransactionsSelected:l}){const t=x(),{cashflowTransactions:o,isCashFlowTransactionsLoading:c,isCashFlowTransactionsFetching:j}=a.useContext(n),{mutateAsync:C}=S(),{mutateAsync:m}=k(),[T,,f]=r(v.CASHFLOW_Transactions),{scrollableRef:z,cashflowTransactionsSettings:I}=b(),F=a.useCallback((e=>{const n=e?.filter((e=>e.original.uncategorizedTransactionId))?.map((e=>e.original.uncategorizedTransactionId));l(n)}),[l]);return s.jsx(L,{noInitialFetch:!0,columns:t,data:o,sticky:!0,loading:c,headerLoading:c,progressBarLoading:j,expandColumnSpace:1,expandToggleColumn:2,selectionColumnWidth:45,TableCellRenderer:i,TableLoadingRenderer:d,TableRowsRenderer:R,TableHeaderSkeletonRenderer:u,ContextMenu:w,onCellClick:n=>{const a=n.row.original;p(a,e)},vListrowHeight:32,vListOverscanRowCount:0,initialColumnsWidths:T,onColumnResizing:f,selectionColumn:!0,onSelectedRowsChange:F,noResults:s.jsx(g,{id:"cash_flow.account_transactions.no_results"}),className:"table-constrant",windowScrollerProps:{scrollElement:z},payload:{onViewDetails:n=>{p(n,e)},onUncategorize:e=>{C(e.uncategorizedTransactionId).then((()=>{y.show({message:"The bank transaction has been uncategorized.",intent:h.SUCCESS})})).catch((()=>{y.show({message:"Something went wrong.",intent:h.DANGER})}))},onUnmatch:e=>{m({id:e.uncategorizedTransactionId}).then((()=>{y.show({message:"The bank transaction has been unmatched.",intent:h.SUCCESS})})).catch((()=>{y.show({message:"Something went wrong.",intent:h.DANGER})}))}}})}),C,t,z),A=o(c)`
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
`,L=o(A)`
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
`;e("AccountTransactionsAll",l((function({resetCategorizedTransactionsSelected:e}){return j.useEffect((()=>()=>{e()}),[e]),s.jsx(I,{children:s.jsx(q,{children:s.jsx(D,{children:s.jsx(F,{})})})})}),C))}}}));
