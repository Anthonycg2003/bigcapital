System.register(["./index-legacy-D5XI0zpp.js","./useQueryString-legacy-BEJuTV76.js","./FinancialLoadingBar-legacy-DNg2RMev.js","./reportTestIds-legacy-jhMLLzkJ.js","./FinancialStatementHeader-legacy-Wqj9CDGh.js","./useDownloadFile-legacy-C4yfv5jg.js","./useRequestPdf-legacy-DAYX3bRL.js","./query-keys-legacy-8S6IFNCn.js","./Stack-legacy-Cw-5jWUp.js","./PrivatePages-legacy-4pET6Xu4.js","./financial-statements.actions-legacy-BGp-9B47.js","./DashboardActionsBar-legacy-BAD8uqAY.js","./index-legacy-bBI-6HA4.js","./FinancialSheet-legacy-C26THVKs.js","./FinancialStatementDateRange-legacy-MvnU9I41.js","./FinancialStatementsFilter-legacy-CIfmZne7.js","./FinancialHeaderLoadingSkeleton-legacy-vkIX0vHp.js","./queries-legacy-2htiDnkC.js","./Row-legacy-DfeDrUO-.js","./DashboardPageContent-legacy-OZk9UtxT.js"],(function(e,t){"use strict";var s,r,n,a,o,i,c,l,u,m,d,x,g,j,h,b,f,p,y,C,w,D,F,v,T,S,_,N,P,O,M,R,I,Y,L,E,k,A,q,B,H,z,G,K,U,V,W,Q,J,X,$,Z,ee,te,se,re,ne,ae,oe,ie,ce,le,ue,me,de,xe,ge,je,he,be,fe,pe,ye,Ce,we,De,Fe,ve,Te,Se,_e,Ne,Pe,Oe,Me;return{setters:[e=>{s=e.a4,r=e.jA,n=e.a7,a=e.jB,o=e.a5,i=e.jC,c=e.jD,l=e.c3,u=e.dJ,m=e.bh,d=e.eD,x=e.dn,g=e.r,j=e.dq,h=e.an,b=e.w,f=e.bG,p=e.M,y=e.k,C=e.bg,w=e.R,D=e.eF,F=e.dC,v=e.b4,T=e.c,S=e.t,_=e.e,N=e.bp,P=e.aT,O=e.bu,M=e.bT,R=e.$,I=e.bB,Y=e.bk,L=e.b9,E=e.bV,k=e.P,A=e.b7,q=e.m,B=e.dP,H=e.bU,z=e.c9,G=e.cr,K=e.eH,U=e.eI,V=e.eJ,W=e.eK,Q=e.eL,J=e.bs,X=e.b_,$=e.bx,Z=e.c7,ee=e.f7,te=e.c8,se=e.c6,re=e.eM,ne=e.eN,ae=e.eO},e=>{oe=e.u},e=>{ie=e.F},e=>{ce=e.t,le=e.g},e=>{ue=e.F,me=e.b,de=e.c},e=>{xe=e.d},e=>{ge=e.u},e=>{je=e.f},e=>{he=e.S},e=>{be=e.P,fe=e.d,pe=e.D},e=>{ye=e.F,Ce=e.G,we=e.B},e=>{De=e.D},e=>{Fe=e.N},e=>{ve=e.F},e=>{Te=e.F},e=>{Se=e.F},e=>{_e=e.F},e=>{Ne=e.u},e=>{Pe=e.R,Oe=e.C},e=>{Me=e.D}],execute:function(){e("a",(function(e){const t=s();return ge((()=>r(t,e)))}));const Re=()=>({fromDate:x().startOf("month").format("YYYY-MM-DD"),toDate:x().format("YYYY-MM-DD"),customersIds:[],filterByOption:"with-transactions",numberFormat:{}}),Ie=()=>{const[e,t]=oe();return[g.useMemo((()=>(e=>{const t=Re(),s={...t,...j(e,t)};return{...s,customersIds:h.castArray(s.customersIds).map(Number)}})(e)),[e]),t]},Ye=g.createContext(void 0);function Le({filter:e,...t}){const r=g.useMemo((()=>ce(e)),[e]),{data:o,isFetching:i,isLoading:c,refetch:l}=function(e,t){const r=s({enableCamelCaseTransform:!0});return n({...t,queryKey:je.customerTransactions(e),queryFn:()=>a(r,e).then((e=>({data:e.table,tableRows:e.table.rows,meta:e.meta})))})}(r,{placeholderData:e=>e}),u={customersTransactions:o,isCustomersTransactionsFetching:i,isCustomersTransactionsLoading:c,CustomersTransactionsRefetch:l,filter:e,query:r,httpQuery:r};return b.jsx(ue,{name:"customer-transactions",children:b.jsx(Ye.Provider,{value:u,...t})})}const Ee=e("u",(()=>{const e=g.useContext(Ye);if(!e)throw new Error("useCustomersTransactionsContext must be used within a CustomersTransactionsProvider");return e})),ke=()=>{const{customersTransactions:e}=Ee(),t=e?.tableRows;return w.useMemo((()=>[{Header:m.get("customer_name"),accessor:"cells[0].value",className:"customer_name"},{Header:m.get("account_name"),accessor:"cells[1].value",className:"name",textOverview:!0,width:170},{Header:m.get("reference_type"),accessor:"cells[2].value",width:120,textOverview:!0},{Header:m.get("transaction_type"),accessor:"cells[3].value",width:120,textOverview:!0},{Header:m.get("credit"),accessor:"cells[4].value",className:"credit",textOverview:!0,width:D(t,"cells[5].value",{minWidth:100,magicSpacing:12}),align:F.Right,money:!0},{Header:m.get("debit"),accessor:"cells[5].value",className:"debit",textOverview:!0,width:D(t,"cells[6].value",{minWidth:100,magicSpacing:12}),align:F.Right,money:!0},{Header:m.get("running_balance"),accessor:"cells[6].value",className:"running_balance",textOverview:!0,width:D(t,"cells[7].value",{minWidth:120,magicSpacing:12}),align:F.Right,money:!0}]),[t])};function Ae(){const{isCustomersTransactionsFetching:e}=Ee();return b.jsx(f,{condition:e,children:b.jsx(ie,{})})}function qe(){const e={isCloseButtonShown:!0,timeout:2e3},{query:t}=Ee(),r=e=>b.jsxs(he,{spacing:8,children:[b.jsx(v,{children:e?"The report has been exported successfully.":"Exporting the report…"}),b.jsx(be,{className:T("toast-progress",{[S]:e}),intent:e?_.SUCCESS:_.PRIMARY,value:e?1:void 0})]}),{mutateAsync:n}=function(e,t){const r=s();return o({...t,mutationFn:()=>i(r,e).then((e=>xe(e,"customers_transactions.xlsx")))})}(t),{mutateAsync:a}=function(e,t){const r=s();return o({...t,mutationFn:()=>c(r,e).then((e=>xe(e,"customers_transactions.csv")))})}(t),l=async t=>{const s=C.show({message:r(!1),...e,timeout:0});try{await t(),C.show({message:r(!0),...e},s)}catch{C.dismiss(s)}};return b.jsxs(p,{children:[b.jsx(y,{text:"XLSX (Microsoft Excel)",onClick:()=>l(n)}),b.jsx(y,{text:"CSV",onClick:()=>l(a)})]})}const Be=e=>{const t=(t,s)=>{const r={customersTransactionsDrawerFilter:ye(t)};return e?e(r,t,s):r};return function(e){return N(t)(e)}},He=e=>({toggleCustomersTransactionsFilterDrawer:t=>e(Ce(t))});function ze(e){return N(null,He)(e)}const Ge=P((function({numberFormat:e,onNumberFormatSubmit:t,isFilterDrawerOpen:s,toggleCustomersTransactionsFilterDrawer:r,openDialog:n}){const{isCustomersTransactionsLoading:a,CustomersTransactionsRefetch:o}=Ee();return b.jsx(De,{children:b.jsxs(M,{children:[b.jsx(R,{className:T(I,"button--gray-highlight"),text:b.jsx(Y,{id:"recalc_report"}),onClick:()=>{o()},icon:b.jsx(L,{icon:"refresh-16",iconSize:16})}),b.jsx(E,{}),b.jsx(R,{className:T(I,"button--table-views"),icon:b.jsx(L,{icon:"cog-16",iconSize:16}),text:s?b.jsx(Y,{id:"hide_customizer"}):b.jsx(Y,{id:"customize_report"}),onClick:()=>{r()},active:s}),b.jsx(E,{}),b.jsx(k,{content:b.jsx(Fe,{numberFormat:e,onSubmit:e=>{B(t,e)},submitDisabled:a}),minimal:!0,interactionKind:A.CLICK,position:q.BOTTOM_LEFT,children:b.jsx(R,{className:T(I,"button--filter"),text:b.jsx(Y,{id:"format"}),icon:b.jsx(L,{icon:"numbers",width:23,height:16})})}),b.jsx(E,{}),b.jsx(R,{className:I,icon:b.jsx(L,{icon:"print-16",iconSize:16}),text:b.jsx(Y,{id:"print"}),onClick:()=>{n(H.CustomerTransactionsPdfPreview)}}),b.jsx(k,{content:b.jsx(qe,{}),interactionKind:A.CLICK,placement:"bottom-start",minimal:!0,children:b.jsx(R,{className:I,icon:b.jsx(L,{icon:"file-export-16",iconSize:16}),text:b.jsx(Y,{id:"export"})})})]})})}),O,ze,Be((({customersTransactionsDrawerFilter:e})=>({isFilterDrawerOpen:e}))));function Ke({companyName:e}){const{customersTransactions:t,query:s}=Ee(),r=t?.tableRows,n=t?.meta,a=ke(),o=g.useMemo((()=>K(r,4)),[r]);return b.jsx(ve,{companyName:e,sheetType:m.get("customers_transactions"),dateText:n?.formattedDateRange??n?.formattedAsDate,fullWidth:!0,children:b.jsx(Ue,{columns:a,data:r,rowClassNames:U,rowTestId:le("customers-transactions"),noInitialFetch:!0,expandable:!0,expanded:o,sticky:!0,expandToggleColumn:1,expandColumnSpace:.8,styleName:V.Constrant})})}const Ue=z(G)`
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
`,Ve=function(){const e=W(),{isCustomersTransactionsLoading:t}=Ee();return b.jsx(me,{children:t?b.jsx(Q,{}):b.jsx(Ke,{companyName:e})})},We=g.lazy((()=>J((()=>t.import("./CustomerTransactionsPdfDialogContent-legacy-CqKR405T.js")),void 0).then((e=>({default:e.CustomerTransactionsPdfDialogContent}))))),Qe=P((function({dialogName:e,payload:t,isOpen:s}){return b.jsx(X,{name:e,title:"Customer Tranasctions PDF Preview",className:T($.DIALOG_PDF_PREVIEW),autoFocus:!0,canEscapeKeyClose:!0,isOpen:s,style:{width:"1000px"},children:b.jsx(pe,{children:b.jsx(We,{})})})}),fe());function Je(){return b.jsx(b.Fragment,{children:b.jsx(Qe,{dialogName:H.CustomerTransactionsPdfPreview})})}const Xe=g.createContext(void 0);function $e({...e}){const{data:t,isFetching:s,isLoading:r}=Ne(),n={customers:t?.data||[],isCustomersLoading:r,isCustomersFetching:s};return r?b.jsx(_e,{}):b.jsx(Xe.Provider,{value:n,...e})}const Ze=()=>{const e=g.useContext(Xe);if(!e)throw new Error("useCustomersTransactionsGeneralPanelContext must be used within a CustomersTransactionsGeneralPanelProvider");return e};function et(){return b.jsx($e,{children:b.jsx(tt,{})})}function tt(){const{customers:e}=Ze();return b.jsxs("div",{children:[b.jsx(Te,{}),b.jsx(Pe,{children:b.jsx(Oe,{xs:4,children:b.jsx(Se,{items:we,label:m.get("customers.label_filter_customers"),initialSelectedItem:"with-transactions"})})}),b.jsx(Pe,{children:b.jsx(Oe,{xs:4,children:b.jsx(Z,{label:m.get("specific_customers"),name:"customersIds",children:b.jsx(ee,{name:"customersIds",items:e})})})})]})}const st=P((function({onSubmitFilter:e,pageFilter:t,isFilterDrawerOpen:s,toggleCustomersTransactionsFilterDrawer:r}){const n=Re(),a=j({...n,...t,fromDate:x(t.fromDate).toDate(),toDate:x(t.toDate).toDate()},n),o=l().shape({fromDate:u().required().label(m.get("fromDate")),toDate:u().min(d("fromDate")).required().label(m.get("toDate"))}),i=()=>{r(!1)};return b.jsx(rt,{isOpen:s,drawerProps:{onClose:i},children:b.jsx(te,{initialValues:a,validationSchema:o,onSubmit:(t,{setSubmitting:s})=>{e(t),r(!1),s(!1)},children:b.jsxs(se,{children:[b.jsx(re,{animate:!0,vertical:!0,renderActiveTabPanelOnly:!0,children:b.jsx(ne,{id:"general",title:b.jsx(Y,{id:"general"}),panel:b.jsx(et,{})})}),b.jsxs("div",{className:"financial-header-drawer__footer",children:[b.jsx(R,{className:"mr1",intent:_.PRIMARY,type:"submit",children:b.jsx(Y,{id:"calculate_report"})}),b.jsx(R,{onClick:i,minimal:!0,children:b.jsx(Y,{id:"cancel"})})]})]})})})}),ze,Be((({customersTransactionsDrawerFilter:e})=>({isFilterDrawerOpen:e})))),rt=z(de)`
  .bp4-drawer {
    max-height: 450px;
  }
`,nt=P((function({toggleCustomersTransactionsFilterDrawer:e}){const[t,s]=Ie();return g.useEffect((()=>()=>{e(!1)}),[e]),b.jsxs(Le,{filter:t,children:[b.jsx(Ge,{numberFormat:t.numberFormat??{},onNumberFormatSubmit:e=>{s({...t,numberFormat:e})}}),b.jsx(Ae,{}),b.jsx(Me,{children:b.jsxs(ae,{numberFormat:t.numberFormat??{},children:[b.jsx(st,{pageFilter:t,onSubmitFilter:e=>{const t={...e,fromDate:x(e.fromDate).format("YYYY-MM-DD"),toDate:x(e.toDate).format("YYYY-MM-DD")};s({...t})}}),b.jsx(Ve,{})]})}),b.jsx(Je,{})]})}),ze),at=Object.freeze(Object.defineProperty({__proto__:null,CustomersTransactions:nt},Symbol.toStringTag,{value:"Module"}));e("C",at)}}}));
