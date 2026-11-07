System.register(["./index-legacy-DIiV7_Ij.js","./useQueryString-legacy-BjVMr3RS.js","./FinancialLoadingBar-legacy-BGBR9DV-.js","./reportTestIds-legacy-Cni8Cj2U.js","./FinancialStatementHeader-legacy-CXlLOamZ.js","./useDownloadFile-legacy-C4yfv5jg.js","./useRequestPdf-legacy-WU4tb0ef.js","./query-keys-legacy-8S6IFNCn.js","./Stack-legacy-3Pb6llei.js","./PrivatePages-legacy-D_3nSDfL.js","./financial-statements.actions-legacy-3imPffcJ.js","./DashboardActionsBar-legacy-CuVdhJUr.js","./index-legacy-_DTdO8yJ.js","./FinancialSheet-legacy-BCzgjxeS.js","./FinancialStatementDateRange-legacy-CLFyRsj-.js","./FinancialStatementsFilter-legacy-0mux7luv.js","./FinancialHeaderLoadingSkeleton-legacy-DuhBN9Ly.js","./queries-legacy-NEd4ofgZ.js","./Row-legacy-BK7WrKsL.js","./DashboardPageContent-legacy-rJcfap5z.js"],(function(e,t){"use strict";var s,r,n,a,o,i,c,l,u,m,d,x,g,j,h,b,f,p,y,C,w,D,F,v,T,S,N,_,P,O,R,M,I,L,Y,E,k,A,q,H,B,z,K,G,W,U,J,Q,V,X,Z,$,ee,te,se,re,ne,ae,oe,ie,ce,le,ue,me,de,xe,ge,je,he,be,fe,pe,ye,Ce,we,De,Fe,ve,Te,Se,Ne,_e,Pe,Oe,Re;return{setters:[e=>{s=e.a3,r=e.jI,n=e.a6,a=e.jJ,o=e.a4,i=e.jK,c=e.jL,l=e.c0,u=e.dL,m=e.be,d=e.eD,x=e.dq,g=e.r,j=e.ds,h=e.am,b=e.w,f=e.bD,p=e.M,y=e.k,C=e.bd,w=e.R,D=e.eF,F=e.dE,v=e.b1,T=e.c,S=e.t,N=e.e,_=e.bm,P=e.aS,O=e.br,R=e.bQ,M=e.Z,I=e.by,L=e.bh,Y=e.b6,E=e.bS,k=e.P,A=e.b4,q=e.m,H=e.dR,B=e.bR,z=e.c6,K=e.co,G=e.eH,W=e.eI,U=e.eJ,J=e.eK,Q=e.eL,V=e.bp,X=e.bX,Z=e.bu,$=e.c4,ee=e.iZ,te=e.c5,se=e.c3,re=e.eM,ne=e.eN,ae=e.eO},e=>{oe=e.u},e=>{ie=e.F},e=>{ce=e.t,le=e.g},e=>{ue=e.F,me=e.b,de=e.c},e=>{xe=e.d},e=>{ge=e.u},e=>{je=e.f},e=>{he=e.S},e=>{be=e.P,fe=e.d,pe=e.D},e=>{ye=e.F,Ce=e.G,we=e.B},e=>{De=e.D},e=>{Fe=e.N},e=>{ve=e.F},e=>{Te=e.F},e=>{Se=e.F},e=>{Ne=e.F},e=>{_e=e.u},e=>{Pe=e.R,Oe=e.C},e=>{Re=e.D}],execute:function(){e("a",(function(e){const t=s();return ge((()=>r(t,e)))}));const Me=()=>({fromDate:x().startOf("month").format("YYYY-MM-DD"),toDate:x().format("YYYY-MM-DD"),customersIds:[],filterByOption:"with-transactions",numberFormat:{}}),Ie=()=>{const[e,t]=oe();return[g.useMemo((()=>(e=>{const t=Me(),s={...t,...j(e,t)};return{...s,customersIds:h.castArray(s.customersIds).map(Number)}})(e)),[e]),t]},Le=g.createContext(void 0);function Ye({filter:e,...t}){const r=g.useMemo((()=>ce(e)),[e]),{data:o,isFetching:i,isLoading:c,refetch:l}=function(e,t){const r=s({enableCamelCaseTransform:!0});return n({...t,queryKey:je.customerTransactions(e),queryFn:()=>a(r,e).then((e=>({data:e.table,tableRows:e.table.rows,meta:e.meta})))})}(r,{placeholderData:e=>e}),u={customersTransactions:o,isCustomersTransactionsFetching:i,isCustomersTransactionsLoading:c,CustomersTransactionsRefetch:l,filter:e,query:r,httpQuery:r};return b.jsx(ue,{name:"customer-transactions",children:b.jsx(Le.Provider,{value:u,...t})})}const Ee=e("u",(()=>{const e=g.useContext(Le);if(!e)throw new Error("useCustomersTransactionsContext must be used within a CustomersTransactionsProvider");return e})),ke=()=>{const{customersTransactions:e}=Ee(),t=e?.tableRows;return w.useMemo((()=>[{Header:m.get("customer_name"),accessor:"cells[0].value",className:"customer_name"},{Header:m.get("account_name"),accessor:"cells[1].value",className:"name",textOverview:!0,width:170},{Header:m.get("reference_type"),accessor:"cells[2].value",width:120,textOverview:!0},{Header:m.get("transaction_type"),accessor:"cells[3].value",width:120,textOverview:!0},{Header:m.get("credit"),accessor:"cells[4].value",className:"credit",textOverview:!0,width:D(t,"cells[5].value",{minWidth:100,magicSpacing:12}),align:F.Right,money:!0},{Header:m.get("debit"),accessor:"cells[5].value",className:"debit",textOverview:!0,width:D(t,"cells[6].value",{minWidth:100,magicSpacing:12}),align:F.Right,money:!0},{Header:m.get("running_balance"),accessor:"cells[6].value",className:"running_balance",textOverview:!0,width:D(t,"cells[7].value",{minWidth:120,magicSpacing:12}),align:F.Right,money:!0}]),[t])};function Ae(){const{isCustomersTransactionsFetching:e}=Ee();return b.jsx(f,{condition:e,children:b.jsx(ie,{})})}function qe(){const e={isCloseButtonShown:!0,timeout:2e3},{query:t}=Ee(),r=e=>b.jsxs(he,{spacing:8,children:[b.jsx(v,{children:e?"The report has been exported successfully.":"Exporting the report…"}),b.jsx(be,{className:T("toast-progress",{[S]:e}),intent:e?N.SUCCESS:N.PRIMARY,value:e?1:void 0})]}),{mutateAsync:n}=function(e,t){const r=s();return o({...t,mutationFn:()=>i(r,e).then((e=>xe(e,"customers_transactions.xlsx")))})}(t),{mutateAsync:a}=function(e,t){const r=s();return o({...t,mutationFn:()=>c(r,e).then((e=>xe(e,"customers_transactions.csv")))})}(t),l=async t=>{const s=C.show({message:r(!1),...e,timeout:0});try{await t(),C.show({message:r(!0),...e},s)}catch{C.dismiss(s)}};return b.jsxs(p,{children:[b.jsx(y,{text:"XLSX (Microsoft Excel)",onClick:()=>l(n)}),b.jsx(y,{text:"CSV",onClick:()=>l(a)})]})}const He=e=>{const t=(t,s)=>{const r={customersTransactionsDrawerFilter:ye(t)};return e?e(r,t,s):r};return function(e){return _(t)(e)}},Be=e=>({toggleCustomersTransactionsFilterDrawer:t=>e(Ce(t))});function ze(e){return _(null,Be)(e)}const Ke=P((function({numberFormat:e,onNumberFormatSubmit:t,isFilterDrawerOpen:s,toggleCustomersTransactionsFilterDrawer:r,openDialog:n}){const{isCustomersTransactionsLoading:a,CustomersTransactionsRefetch:o}=Ee();return b.jsx(De,{children:b.jsxs(R,{children:[b.jsx(M,{className:T(I,"button--gray-highlight"),text:b.jsx(L,{id:"recalc_report"}),onClick:()=>{o()},icon:b.jsx(Y,{icon:"refresh-16",iconSize:16})}),b.jsx(E,{}),b.jsx(M,{className:T(I,"button--table-views"),icon:b.jsx(Y,{icon:"cog-16",iconSize:16}),text:s?b.jsx(L,{id:"hide_customizer"}):b.jsx(L,{id:"customize_report"}),onClick:()=>{r()},active:s}),b.jsx(E,{}),b.jsx(k,{content:b.jsx(Fe,{numberFormat:e,onSubmit:e=>{H(t,e)},submitDisabled:a}),minimal:!0,interactionKind:A.CLICK,position:q.BOTTOM_LEFT,children:b.jsx(M,{className:T(I,"button--filter"),text:b.jsx(L,{id:"format"}),icon:b.jsx(Y,{icon:"numbers",width:23,height:16})})}),b.jsx(E,{}),b.jsx(M,{className:I,icon:b.jsx(Y,{icon:"print-16",iconSize:16}),text:b.jsx(L,{id:"print"}),onClick:()=>{n(B.CustomerTransactionsPdfPreview)}}),b.jsx(k,{content:b.jsx(qe,{}),interactionKind:A.CLICK,placement:"bottom-start",minimal:!0,children:b.jsx(M,{className:I,icon:b.jsx(Y,{icon:"file-export-16",iconSize:16}),text:b.jsx(L,{id:"export"})})})]})})}),O,ze,He((({customersTransactionsDrawerFilter:e})=>({isFilterDrawerOpen:e}))));function Ge({companyName:e}){const{customersTransactions:t,query:s}=Ee(),r=t?.tableRows,n=t?.meta,a=ke(),o=g.useMemo((()=>G(r,4)),[r]);return b.jsx(ve,{companyName:e,sheetType:m.get("customers_transactions"),dateText:n?.formattedDateRange??n?.formattedAsDate,fullWidth:!0,children:b.jsx(We,{columns:a,data:r,rowClassNames:W,rowTestId:le("customers-transactions"),noInitialFetch:!0,expandable:!0,expanded:o,sticky:!0,expandToggleColumn:1,expandColumnSpace:.8,styleName:U.Constrant})})}const We=z(K)`
  --color-table-border-left-color: #ececec;
  --color-table-customer-border-color: #ddd;
  --color-table-border-left-color: var(--color-dark-gray4);
  --color-table-customer-border-color: var(--color-dark-gray4);

  .table {
    .tbody {
      .tr .td {
        padding-top: 0.36rem;
        padding-bottom: 0.36rem;
      }
      .tr:not(.no-results) .td:not(:first-of-type) {
        border-left: 1px solid var(--color-table-border-left-color);
      }
      .tr:last-child .td {
        border-bottom-width: 1px;
      }

      .tr.row_type {
        &--CUSTOMER {
          .td {
            &.customer_name {
              font-weight: 500;

              .cell-inner {
                white-space: nowrap;
                position: relative;
              }
            }
          }
          &:not(:first-child).is-expanded .td {
            border-top: 1px solid var(--color-table-customer-border-color);
          }
        }
        &--OPENING_BALANCE,
        &--CLOSING_BALANCE {
          font-weight: 500;
        }
        &--CUSTOMER {
          &.is-expanded {
            .td.running_balance .cell-inner {
              display: none;
            }
          }
          &:not(:first-child).is-expanded .td {
            border-top: 1px solid var(--color-table-customer-border-color);
          }
        }
        &--CUSTOMER:last-child {
          .td {
            border-bottom: 1px solid var(--color-table-customer-border-color);
          }
        }
      }
    }
  }
`,Ue=function(){const e=J(),{isCustomersTransactionsLoading:t}=Ee();return b.jsx(me,{children:t?b.jsx(Q,{}):b.jsx(Ge,{companyName:e})})},Je=g.lazy((()=>V((()=>t.import("./CustomerTransactionsPdfDialogContent-legacy-BoJxrSh4.js")),void 0).then((e=>({default:e.CustomerTransactionsPdfDialogContent}))))),Qe=P((function({dialogName:e,payload:t,isOpen:s}){return b.jsx(X,{name:e,title:"Customer Tranasctions PDF Preview",className:T(Z.DIALOG_PDF_PREVIEW),autoFocus:!0,canEscapeKeyClose:!0,isOpen:s,style:{width:"1000px"},children:b.jsx(pe,{children:b.jsx(Je,{})})})}),fe());function Ve(){return b.jsx(b.Fragment,{children:b.jsx(Qe,{dialogName:B.CustomerTransactionsPdfPreview})})}const Xe=g.createContext(void 0);function Ze({...e}){const{data:t,isFetching:s,isLoading:r}=_e(),n={customers:t?.data||[],isCustomersLoading:r,isCustomersFetching:s};return r?b.jsx(Ne,{}):b.jsx(Xe.Provider,{value:n,...e})}const $e=()=>{const e=g.useContext(Xe);if(!e)throw new Error("useCustomersTransactionsGeneralPanelContext must be used within a CustomersTransactionsGeneralPanelProvider");return e};function et(){return b.jsx(Ze,{children:b.jsx(tt,{})})}function tt(){const{customers:e}=$e();return b.jsxs("div",{children:[b.jsx(Te,{}),b.jsx(Pe,{children:b.jsx(Oe,{xs:4,children:b.jsx(Se,{items:we,label:m.get("customers.label_filter_customers"),initialSelectedItem:"with-transactions"})})}),b.jsx(Pe,{children:b.jsx(Oe,{xs:4,children:b.jsx($,{label:m.get("specific_customers"),name:"customersIds",children:b.jsx(ee,{name:"customersIds",items:e})})})})]})}const st=P((function({onSubmitFilter:e,pageFilter:t,isFilterDrawerOpen:s,toggleCustomersTransactionsFilterDrawer:r}){const n=Me(),a=j({...n,...t,fromDate:x(t.fromDate).toDate(),toDate:x(t.toDate).toDate()},n),o=l().shape({fromDate:u().required().label(m.get("fromDate")),toDate:u().min(d("fromDate")).required().label(m.get("toDate"))}),i=()=>{r(!1)};return b.jsx(rt,{isOpen:s,drawerProps:{onClose:i},children:b.jsx(te,{initialValues:a,validationSchema:o,onSubmit:(t,{setSubmitting:s})=>{e(t),r(!1),s(!1)},children:b.jsxs(se,{children:[b.jsx(re,{animate:!0,vertical:!0,renderActiveTabPanelOnly:!0,children:b.jsx(ne,{id:"general",title:b.jsx(L,{id:"general"}),panel:b.jsx(et,{})})}),b.jsxs("div",{className:"financial-header-drawer__footer",children:[b.jsx(M,{className:"mr1",intent:N.PRIMARY,type:"submit",children:b.jsx(L,{id:"calculate_report"})}),b.jsx(M,{onClick:i,minimal:!0,children:b.jsx(L,{id:"cancel"})})]})]})})})}),ze,He((({customersTransactionsDrawerFilter:e})=>({isFilterDrawerOpen:e})))),rt=z(de)`
  .bp4-drawer {
    max-height: 450px;
  }
`,nt=P((function({toggleCustomersTransactionsFilterDrawer:e}){const[t,s]=Ie();return g.useEffect((()=>()=>{e(!1)}),[e]),b.jsxs(Ye,{filter:t,children:[b.jsx(Ke,{numberFormat:t.numberFormat??{},onNumberFormatSubmit:e=>{s({...t,numberFormat:e})}}),b.jsx(Ae,{}),b.jsx(Re,{children:b.jsxs(ae,{numberFormat:t.numberFormat??{},children:[b.jsx(st,{pageFilter:t,onSubmitFilter:e=>{const t={...e,fromDate:x(e.fromDate).format("YYYY-MM-DD"),toDate:x(e.toDate).format("YYYY-MM-DD")};s({...t})}}),b.jsx(Ue,{})]})}),b.jsx(Ve,{})]})}),ze),at=Object.freeze(Object.defineProperty({__proto__:null,CustomersTransactions:nt},Symbol.toStringTag,{value:"Module"}));e("C",at)}}}));
