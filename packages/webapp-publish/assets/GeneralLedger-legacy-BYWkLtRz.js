System.register(["./index-legacy-DIiV7_Ij.js","./useQueryString-legacy-BjVMr3RS.js","./FinancialLoadingBar-legacy-BGBR9DV-.js","./FinancialStatementHeader-legacy-CXlLOamZ.js","./reportTestIds-legacy-Cni8Cj2U.js","./useDownloadFile-legacy-C4yfv5jg.js","./useRequestPdf-legacy-WU4tb0ef.js","./query-keys-legacy-8S6IFNCn.js","./Stack-legacy-3Pb6llei.js","./PrivatePages-legacy-D_3nSDfL.js","./financial-statements.actions-legacy-3imPffcJ.js","./DashboardActionsBar-legacy-CuVdhJUr.js","./fp-legacy-P3k02yrm.js","./TableVirtualizedRows-legacy-Cq1lncIU.js","./FinancialSheet-legacy-BCzgjxeS.js","./transactionDrawer-legacy-1W2qnP8s.js","./FinancialHeaderLoadingSkeleton-legacy-DuhBN9Ly.js","./queries-legacy-gthxDhhi.js","./BranchMultiSelect-legacy-C_uHwVCi.js","./Row-legacy-BK7WrKsL.js","./FinancialStatementDateRange-legacy-CLFyRsj-.js","./FinancialStatementsFilter-legacy-0mux7luv.js","./RadiosAccountingBasis-legacy-3CewPIaw.js","./queries-legacy-rgbwHpF0.js","./_components-legacy-DSKaTdQ-.js","./DashboardPageContent-legacy-rJcfap5z.js","./TransactionDetailDrawers-legacy-BhNHUIN3.js"],(function(e,t){"use strict";var r,n,a,s,o,i,l,c,d,u,g,x,m,h,j,y,f,b,p,w,D,_,v,C,L,F,S,N,P,I,R,T,k,A,G,B,E,Y,M,O,z,q,H,Q,K,X,V,U,W,$,J,Z,ee,te,re,ne,ae,se,oe,ie,le,ce,de,ue,ge,xe,me,he,je,ye,fe,be,pe,we,De,_e,ve,Ce,Le,Fe,Se,Ne,Pe,Ie,Re,Te,ke,Ae,Ge,Be,Ee,Ye,Me,Oe,ze,qe,He,Qe,Ke,Xe,Ve,Ue,We;return{setters:[e=>{r=e.a3,n=e.ex,a=e.a6,s=e.ey,o=e.a4,i=e.ez,l=e.eA,c=e.cN,d=e.eB,u=e.w,g=e.eC,x=e.bR,m=e.k,h=e.be,j=e.dq,y=e.c0,f=e.c1,b=e.dL,p=e.eD,w=e.R,D=e.ds,_=e.am,v=e.r,C=e.b6,L=e.bh,F=e.Z,S=e.bD,N=e.M,P=e.bd,I=e.b1,R=e.c,T=e.t,k=e.e,A=e.bp,G=e.aS,B=e.bX,E=e.bu,Y=e.bm,M=e.br,O=e.bQ,z=e.by,q=e.bS,H=e.P,Q=e.b4,K=e.eE,X=e.dE,V=e.eF,U=e.ci,W=e.c6,$=e.eG,J=e.eH,Z=e.eI,ee=e.dn,te=e.eJ,re=e.eK,ne=e.eL,ae=e.bv,se=e.bY,oe=e.N,ie=e.c4,le=e.c5,ce=e.c3,de=e.eM,ue=e.eN,ge=e.eO},e=>{xe=e.u},e=>{me=e.F},e=>{he=e.F,je=e.a,ye=e.b,fe=e.c},e=>{be=e.t,pe=e.g},e=>{we=e.d},e=>{De=e.u},e=>{_e=e.f},e=>{ve=e.S},e=>{Ce=e.P,Le=e.d,Fe=e.D,Se=e.F},e=>{Ne=e.g,Pe=e.t},e=>{Ie=e.D},e=>{Re=e.m,Te=e.a,ke=e.f,Ae=e.w},e=>{Ge=e.T},e=>{Be=e.F},e=>{Ee=e.h},e=>{Ye=e.F},e=>{Me=e.u},e=>{Oe=e.B},e=>{ze=e.R,qe=e.C},e=>{He=e.F},e=>{Qe=e.F},e=>{Ke=e.R},e=>{Xe=e.u},e=>{Ve=e.a},e=>{Ue=e.D},e=>{We=e.T}],execute:function(){e("a",(function(e){const t=r();return De((()=>n(t,e)))}));const $e=(e,t,r)=>u.jsx(m,{icon:"add",text:h.get("list.create",{value:`"${e}"`}),active:t,onClick:r}),Je=e=>({label:e,value:e,text:e,id:0,name:e,code:e});function Ze({items:e,allowCreate:t,filterByRootTypes:r,filterByParentTypes:n,filterByTypes:a,filterByNormal:s,...o}){const{openDialog:i}=c(),l=d(e,{filterByParentTypes:n||[],filterByTypes:a||[],filterByNormal:s||[],filterByRootTypes:r||[]}),m=t?$e:void 0,h=t?Je:void 0;return u.jsx(g,{...o,items:l,valueAccessor:"id",textAccessor:"name",labelAccessor:"code",tagAccessor:"name",popoverProps:{minimal:!0},itemPredicate:Ve,createNewItemRenderer:m,createNewItemFromQuery:h,onCreateItemSelect:()=>{i(x.AccountForm)}})}const et=[{key:"all-accounts",name:h.get("all_accounts"),hint:h.get("all_accounts_including_with_zero_balance")},{key:"with-transactions",name:h.get("accounts_with_transactions"),hint:h.get("include_accounts_once_has_transactions_on_given_date_period")}],tt=()=>({fromDate:j().startOf("month").format("YYYY-MM-DD"),toDate:j().format("YYYY-MM-DD"),basis:"accrual",filterByOption:"with-transactions",branchesIds:[],accountsIds:[]}),rt=()=>{const[e,t]=xe();return{query:w.useMemo((()=>(e=>{const t=tt(),r={...t,...D(e,t)};return{...r,branchesIds:_.castArray(r.branchesIds),accountsIds:_.castArray(r.accountsIds)}})(e)),[e]),locationQuery:e,setLocationQuery:t}},nt=v.createContext(void 0);function at({query:e,...t}){const n=v.useMemo((()=>be(e)),[e]),{data:o,isFetching:i,isLoading:l,refetch:c}=function(e,t){const n=r({enableCamelCaseTransform:!0});return a({...t,queryKey:_e.generalLedger(e),queryFn:()=>s(n,e)})}(n,{placeholderData:e=>e}),d={generalLedger:o,sheetRefresh:c,isFetching:i,isLoading:l,httpQuery:n};return u.jsx(he,{name:"general-ledger-sheet",children:u.jsx(nt.Provider,{value:d,...t})})}const st=e("u",(()=>{const e=v.useContext(nt);if(!e)throw new Error("useGeneralLedgerContext must be used within a GeneralLedgerProvider");return e}));function ot(){const{generalLedger:e,isLoading:t,sheetRefresh:r}=st();if(t)return null;const n=e?.meta;return n?.isCostComputeRunning?u.jsxs(je,{children:[u.jsx(C,{icon:"info-block",iconSize:12}),u.jsx(L,{id:"just_a_moment_we_re_calculating_your_cost_transactions"}),u.jsx(F,{onClick:()=>{r()},minimal:!0,small:!0,children:u.jsx(L,{id:"refresh"})})]}):null}function it(){const{isFetching:e}=st();return u.jsx(S,{condition:e,children:u.jsx(me,{})})}const lt=()=>{const e={isCloseButtonShown:!0,timeout:2e3},{httpQuery:t}=st(),n=e=>u.jsxs(ve,{spacing:8,children:[u.jsx(I,{children:e?"The report has been exported successfully.":"Exporting the report…"}),u.jsx(Ce,{className:R("toast-progress",{[T]:e}),intent:e?k.SUCCESS:k.PRIMARY,value:e?1:void 0})]}),{mutateAsync:a}=function(e,t){const n=r();return o({...t,mutationFn:()=>i(n,e).then((e=>we(e,"general_ledger.xlsx")))})}(t),{mutateAsync:s}=function(e,t){const n=r();return o({...t,mutationFn:()=>l(n,e).then((e=>we(e,"general_ledger.csv")))})}(t),c=async t=>{const r=P.show({message:n(!1),...e,timeout:0});try{await t(),P.show({message:n(!0),...e},r)}catch{P.dismiss(r)}};return u.jsxs(N,{children:[u.jsx(m,{text:"XLSX (Microsoft Excel)",onClick:()=>c(a)}),u.jsx(m,{text:"CSV",onClick:()=>c(s)})]})},ct=v.lazy((()=>A((()=>t.import("./GeneralLedgerPdfDialogContent-legacy-BbrJJ84G.js")),void 0).then((e=>({default:e.GeneralLedgerPdfDialogContent}))))),dt=G((function({dialogName:e,payload:t,isOpen:r}){return u.jsx(B,{name:e,title:"General Ledger PDF Preview",className:R(E.DIALOG_PDF_PREVIEW),autoFocus:!0,canEscapeKeyClose:!0,isOpen:r,style:{width:"1000px"},children:u.jsx(Fe,{children:u.jsx(ct,{})})})}),Le()),ut=e=>{const t=(t,r)=>{const n={generalLedgerFilterDrawer:Ne(t)};return e?e(n,t,r):n};return function(e){return Y(t)(e)}},gt=e=>({toggleGeneralLedgerFilterDrawer:t=>e(Pe(t))});function xt(e){return Y(null,gt)(e)}const mt=G((function({isFilterDrawerOpen:e,toggleGeneralLedgerFilterDrawer:t,openDialog:r}){const{sheetRefresh:n}=st();return u.jsx(Ie,{children:u.jsxs(O,{children:[u.jsx(F,{className:R(z,"button--gray-highlight"),text:u.jsx(L,{id:"recalc_report"}),onClick:()=>{n()},icon:u.jsx(C,{icon:"refresh-16",iconSize:16})}),u.jsx(q,{}),u.jsx(F,{className:R(z,"button--table-views"),icon:u.jsx(C,{icon:"cog-16",iconSize:16}),text:e?u.jsx(L,{id:"hide_customizer"}):u.jsx(L,{id:"customize_report"}),onClick:()=>{t()},active:e}),u.jsx(q,{}),u.jsx(F,{className:z,icon:u.jsx(C,{icon:"print-16",iconSize:16}),text:u.jsx(L,{id:"print"}),onClick:()=>{r(x.GeneralLedgerPdfPreview)}}),u.jsx(H,{content:u.jsx(lt,{}),interactionKind:Q.CLICK,placement:"bottom-start",minimal:!0,children:u.jsx(F,{className:z,icon:u.jsx(C,{icon:"file-export-16",iconSize:16}),text:u.jsx(L,{id:"export"})})})]})})}),M,xt,ut((({generalLedgerFilterDrawer:e})=>({isFilterDrawerOpen:e}))));function ht({cell:{value:e}}){return w.createElement("div",{className:`cell ${E.TEXT_MUTED}`},e)}const jt=e=>`cells[${e}].value`,yt=e=>t=>t.key===e,ft=e=>t=>{const r=jt(t.cellIndex),n=((e,t,r)=>V(e,t,{magicSpacing:10,minWidth:100},r))(e,r,t.label);return{...t,align:X.Right,width:n,money:!0}},bt=e=>({...e,width:120}),pt=e=>t=>({...t,width:125,Cell:wt(e)}),wt=e=>function({cell:t}){const{value:r,row:n}=t,{referenceType:a,referenceId:s}=n?.original?.meta??{};return a&&s?w.createElement("a",{className:E.TEXT_LINK,onClick:t=>{t.preventDefault(),t.stopPropagation(),e?.(a,s)}},r):w.createElement("span",null,r)},Dt=e=>t=>({...t,width:80,Cell:wt(e)}),_t=e=>({...e,Cell:ht}),vt=e=>t=>r=>{const n=(e=>{const t=jt(e.cellIndex);return{key:e.key,Header:e.label,accessor:t,className:e.key,textOverview:!0}})(r);return G(n,ke(((e,t)=>[Ae(yt("date"),bt),Ae(yt("reference_type"),pt(e)),Ae(yt("reference_number"),Dt(e)),Ae(yt("description"),_t),Ae(yt("credit"),ft(t)),Ae(yt("debit"),ft(t)),Ae(yt("amount"),ft(t)),Ae(yt("running_balance"),ft(t))])(e,t)),Te((()=>n),K))},Ct=e=>{const{generalLedger:t}=st();if(!t)throw new Error("General ledger data is not available");const r=t?.table;return((e,t,r)=>G(r,Re(vt(e)(t))))(e,r.rows,r.columns)},Lt=G((function({companyName:e,openDrawer:t}){const{generalLedger:r}=st(),n=r?.table,a=r?.meta,s=Ct(((e,r)=>{Ee({referenceType:e,referenceId:r},t)})),o=v.useMemo((()=>J(n?.rows??[],1)),[n?.rows]);return u.jsx(Be,{companyName:e,sheetType:h.get("general_ledger_sheet"),dateText:a?.formattedDateRange??a?.formattedAsDate,fullWidth:!0,children:u.jsx(Ft,{noResults:h.get("this_report_does_not_contain_any_data_between_date_period"),columns:s,data:n?.rows??[],rowClassNames:Z,rowTestId:pe("general-ledger"),expanded:o,virtualizedRows:!0,fixedItemSize:30,fixedSizeHeight:1e3,expandable:!0,expandToggleColumn:1,sticky:!0,TableRowsRenderer:Ge,vListrowHeight:28,vListOverscanRowCount:0,TableCellRenderer:ee,styleName:te.Constrant})})}),U),Ft=W($)`
  --color-table-text-color: #252a31;
  --color-table-total-text-color: #000;
  --color-table-border-color: #ececec;
  --color-table-total-border-color: #ddd;

  .bp4-dark & {
    --color-table-text-color: var(--color-light-gray1);
    --color-table-total-text-color: var(--color-light-gray4);
    --color-table-border-color: var(--color-dark-gray4);
    --color-table-total-border-color: var(--color-dark-gray4);
  }

  .tbody {
    .tr .td {
      padding-top: 0.2rem;
      padding-bottom: 0.2rem;
    }
    .tr.is-expanded {
      .td:not(.date) .cell-inner {
        opacity: 0;
      }
    }
    .tr:not(.no-results) .td:not(:first-of-type) {
      border-left: 1px solid var(--color-table-border-color);
    }
    .tr:last-child .td {
      border-bottom: 1px solid var(--color-table-border-color);
    }
    .tr.row_type {
      &--ACCOUNT {
        .td {
          &.date {
            font-weight: 500;

            .cell-inner {
              position: absolute;
            }
          }
        }
      }
      &--OPENING_BALANCE,
      &--CLOSING_BALANCE {
        .td {
          color: var(--color-table-total-text-color);
        }
        .date {
          font-weight: 500;

          .cell-inner {
            position: absolute;
          }
        }
        .amount {
          font-weight: 500;
        }
      }
      &--CLOSING_BALANCE {
        .name {
          font-weight: 500;
        }
        .td {
          border-top: 1px solid var(--color-table-total-border-color);
        }
      }
    }
  }
`,St=function(){const e=re(),{isLoading:t}=st();return u.jsx(ye,{children:t?u.jsx(ne,{}):u.jsx(Lt,{companyName:e})})},Nt=v.createContext(void 0);function Pt({...e}){const{featureCan:t}=ae(),r=t(Se.Branches),{isLoading:n,data:a}=Me(void 0,{enabled:r,placeholderData:e=>e}),s={branches:a,isBranchesLoading:n};return n?u.jsx(Ye,{}):u.jsx(Nt.Provider,{value:s,...e})}const It=()=>{const e=v.useContext(Nt);if(!e)throw new Error("useGeneralLedgerHeaderDimensionsContext must be used within a GeneralLedgerHeaderDimensionsPanelProvider");return e};function Rt(){return u.jsx(Pt,{children:u.jsx(Tt,{})})}function Tt(){const{branches:e}=It(),{featureCan:t}=ae(),r=t(Se.Branches);return u.jsx(ze,{children:u.jsx(qe,{xs:4,children:r&&u.jsx(se,{label:h.get("branches_multi_select.label"),className:oe,children:u.jsx(Oe,{name:"branchesIds",branches:e})})})})}const kt=v.createContext(void 0);function At({...e}){const{data:t,isLoading:r}=Xe(),n={accounts:t,isAccountsLoading:r};return r?u.jsx(Ye,{}):u.jsx(kt.Provider,{value:n,...e})}const Gt=()=>{const e=v.useContext(kt);if(!e)throw new Error("useGLGeneralPanelContext must be used within a GLHeaderGeneralPanelProvider");return e};function Bt(){return u.jsx(At,{children:u.jsx(Et,{})})}function Et(){const{accounts:e}=Gt();return e?u.jsxs(w.Fragment,{children:[u.jsx(He,{}),u.jsx(ze,{children:u.jsx(qe,{xs:4,children:u.jsx(Qe,{items:et,initialSelectedItem:"with-transactions"})})}),u.jsx(ze,{children:u.jsx(qe,{xs:4,children:u.jsx(ie,{label:h.get("specific_accounts"),name:"accountsIds",className:oe,children:u.jsx(Ze,{name:"accountsIds",items:e})})})}),u.jsx(Ke,{},"basis")]}):null}const Yt=G((function({onSubmitFilter:e,pageFilter:t,toggleGeneralLedgerFilterDrawer:r,generalLedgerFilterDrawer:n}){const a=tt(),s=D({...a,...t,fromDate:j(t.fromDate).toDate(),toDate:j(t.toDate).toDate()},a),o=y().shape({dateRange:f().optional(),fromDate:b().required(),toDate:b().min(p("fromDate")).required()}),{featureCan:i}=ae(),l=i(Se.Branches);return u.jsx(Mt,{isOpen:n,drawerProps:{onClose:()=>{r(!1)}},children:u.jsx(le,{validationSchema:o,initialValues:s,onSubmit:(t,n)=>{e(t),r(!1),n.setSubmitting(!1)},children:u.jsxs(ce,{children:[u.jsxs(de,{animate:!0,vertical:!0,renderActiveTabPanelOnly:!0,children:[u.jsx(ue,{id:"general",title:u.jsx(L,{id:"general"}),panel:u.jsx(Bt,{})}),l&&u.jsx(ue,{id:"dimensions",title:u.jsx(L,{id:"dimensions"}),panel:u.jsx(Rt,{})})]}),u.jsxs("div",{className:"financial-header-drawer__footer",children:[u.jsx(F,{className:"mr1",intent:k.PRIMARY,type:"submit",children:u.jsx(L,{id:"calculate_report"})}),u.jsx(F,{onClick:()=>{r(!1)},minimal:!0,children:u.jsx(L,{id:"cancel"})})]})]})})})}),xt,ut((({generalLedgerFilterDrawer:e})=>({generalLedgerFilterDrawer:e})))),Mt=W(fe)`
  .bp4-drawer {
    max-height: 520px;
  }
`,Ot=G((function({toggleGeneralLedgerFilterDrawer:e}){const{query:t,setLocationQuery:r}=rt(),n=v.useCallback((e=>{const t={...e,fromDate:j(e.fromDate).format("YYYY-MM-DD"),toDate:j(e.toDate).format("YYYY-MM-DD")};r(t)}),[r]);return v.useEffect((()=>()=>e(!1)),[e]),u.jsxs(at,{query:t,children:[u.jsx(mt,{}),u.jsx(Ue,{children:u.jsxs(ge,{children:[u.jsx(Yt,{pageFilter:t,onSubmitFilter:n}),u.jsx(it,{}),u.jsx(ot,{}),u.jsx(St,{})]})}),u.jsx(dt,{dialogName:x.GeneralLedgerPdfPreview}),u.jsx(We,{})]})}),xt),zt=Object.freeze(Object.defineProperty({__proto__:null,GeneralLedger:Ot},Symbol.toStringTag,{value:"Module"}));e("G",zt)}}}));
