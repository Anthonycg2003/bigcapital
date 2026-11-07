System.register(["./index-legacy-D5XI0zpp.js","./useQueryString-legacy-BEJuTV76.js","./FinancialLoadingBar-legacy-DNg2RMev.js","./FinancialStatementHeader-legacy-Wqj9CDGh.js","./reportTestIds-legacy-jhMLLzkJ.js","./useDownloadFile-legacy-C4yfv5jg.js","./useRequestPdf-legacy-DAYX3bRL.js","./query-keys-legacy-8S6IFNCn.js","./Stack-legacy-Cw-5jWUp.js","./PrivatePages-legacy-4pET6Xu4.js","./financial-statements.actions-legacy-BGp-9B47.js","./DashboardActionsBar-legacy-BAD8uqAY.js","./fp-legacy-sRAVxmeo.js","./TableVirtualizedRows-legacy-D53ApRip.js","./FinancialSheet-legacy-C26THVKs.js","./transactionDrawer-legacy-DJX6-4lV.js","./FinancialHeaderLoadingSkeleton-legacy-vkIX0vHp.js","./queries-legacy-DwydrPFR.js","./BranchMultiSelect-legacy-BDjYSFhc.js","./Row-legacy-DfeDrUO-.js","./FinancialStatementDateRange-legacy-MvnU9I41.js","./FinancialStatementsFilter-legacy-CIfmZne7.js","./RadiosAccountingBasis-legacy-vA2t_LAf.js","./queries-legacy-CPhkHnvW.js","./_components-legacy-DSKaTdQ-.js","./DashboardPageContent-legacy-OZk9UtxT.js","./TransactionDetailDrawers-legacy-BfTuuoHF.js"],(function(e,t){"use strict";var r,n,a,s,o,i,l,c,d,u,g,x,m,h,j,y,f,b,p,w,_,D,v,C,L,F,P,S,N,I,T,R,k,G,A,B,E,M,O,Y,z,q,H,Q,V,K,$,U,X,W,J,Z,ee,te,re,ne,ae,se,oe,ie,le,ce,de,ue,ge,xe,me,he,je,ye,fe,be,pe,we,_e,De,ve,Ce,Le,Fe,Pe,Se,Ne,Ie,Te,Re,ke,Ge,Ae,Be,Ee,Me,Oe,Ye,ze,qe,He,Qe,Ve,Ke,$e,Ue,Xe;return{setters:[e=>{r=e.a4,n=e.ex,a=e.a7,s=e.ey,o=e.a5,i=e.ez,l=e.eA,c=e.cQ,d=e.eB,u=e.w,g=e.eC,x=e.bU,m=e.k,h=e.bh,j=e.dn,y=e.c3,f=e.c4,b=e.dJ,p=e.eD,w=e.R,_=e.dq,D=e.an,v=e.r,C=e.b9,L=e.bk,F=e.$,P=e.bG,S=e.M,N=e.bg,I=e.b4,T=e.c,R=e.t,k=e.e,G=e.bs,A=e.aT,B=e.b_,E=e.bx,M=e.bp,O=e.bu,Y=e.bT,z=e.bB,q=e.bV,H=e.P,Q=e.b7,V=e.eE,K=e.dC,$=e.eF,U=e.cl,X=e.c9,W=e.eG,J=e.eH,Z=e.eI,ee=e.dl,te=e.eJ,re=e.eK,ne=e.eL,ae=e.by,se=e.b$,oe=e.O,ie=e.c7,le=e.c8,ce=e.c6,de=e.eM,ue=e.eN,ge=e.eO},e=>{xe=e.u},e=>{me=e.F},e=>{he=e.F,je=e.a,ye=e.b,fe=e.c},e=>{be=e.t,pe=e.g},e=>{we=e.d},e=>{_e=e.u},e=>{De=e.f},e=>{ve=e.S},e=>{Ce=e.P,Le=e.d,Fe=e.D,Pe=e.F},e=>{Se=e.g,Ne=e.t},e=>{Ie=e.D},e=>{Te=e.m,Re=e.a,ke=e.f,Ge=e.w},e=>{Ae=e.T},e=>{Be=e.F},e=>{Ee=e.h},e=>{Me=e.F},e=>{Oe=e.u},e=>{Ye=e.B},e=>{ze=e.R,qe=e.C},e=>{He=e.F},e=>{Qe=e.F},e=>{Ve=e.R},e=>{Ke=e.u},e=>{$e=e.a},e=>{Ue=e.D},e=>{Xe=e.T}],execute:function(){e("a",(function(e){const t=r();return _e((()=>n(t,e)))}));const We=(e,t,r)=>u.jsx(m,{icon:"add",text:h.get("list.create",{value:`"${e}"`}),active:t,onClick:r}),Je=e=>({label:e,value:e,text:e,id:0,name:e,code:e});function Ze({items:e,allowCreate:t,filterByRootTypes:r,filterByParentTypes:n,filterByTypes:a,filterByNormal:s,...o}){const{openDialog:i}=c(),l=d(e,{filterByParentTypes:n||[],filterByTypes:a||[],filterByNormal:s||[],filterByRootTypes:r||[]}),m=t?We:void 0,h=t?Je:void 0;return u.jsx(g,{...o,items:l,valueAccessor:"id",textAccessor:"name",labelAccessor:"code",tagAccessor:"name",popoverProps:{minimal:!0},itemPredicate:$e,createNewItemRenderer:m,createNewItemFromQuery:h,onCreateItemSelect:()=>{i(x.AccountForm)}})}const et=[{key:"all-accounts",name:h.get("all_accounts"),hint:h.get("all_accounts_including_with_zero_balance")},{key:"with-transactions",name:h.get("accounts_with_transactions"),hint:h.get("include_accounts_once_has_transactions_on_given_date_period")}],tt=()=>({fromDate:j().startOf("month").format("YYYY-MM-DD"),toDate:j().format("YYYY-MM-DD"),basis:"accrual",filterByOption:"with-transactions",branchesIds:[],accountsIds:[]}),rt=()=>{const[e,t]=xe();return{query:w.useMemo((()=>(e=>{const t=tt(),r={...t,..._(e,t)};return{...r,branchesIds:D.castArray(r.branchesIds),accountsIds:D.castArray(r.accountsIds)}})(e)),[e]),locationQuery:e,setLocationQuery:t}},nt=v.createContext(void 0);function at({query:e,...t}){const n=v.useMemo((()=>be(e)),[e]),{data:o,isFetching:i,isLoading:l,refetch:c}=function(e,t){const n=r({enableCamelCaseTransform:!0});return a({...t,queryKey:De.generalLedger(e),queryFn:()=>s(n,e)})}(n,{placeholderData:e=>e}),d={generalLedger:o,sheetRefresh:c,isFetching:i,isLoading:l,httpQuery:n};return u.jsx(he,{name:"general-ledger-sheet",children:u.jsx(nt.Provider,{value:d,...t})})}const st=e("u",(()=>{const e=v.useContext(nt);if(!e)throw new Error("useGeneralLedgerContext must be used within a GeneralLedgerProvider");return e}));function ot(){const{generalLedger:e,isLoading:t,sheetRefresh:r}=st();if(t)return null;const n=e?.meta;return n?.isCostComputeRunning?u.jsxs(je,{children:[u.jsx(C,{icon:"info-block",iconSize:12}),u.jsx(L,{id:"just_a_moment_we_re_calculating_your_cost_transactions"}),u.jsx(F,{onClick:()=>{r()},minimal:!0,small:!0,children:u.jsx(L,{id:"refresh"})})]}):null}function it(){const{isFetching:e}=st();return u.jsx(P,{condition:e,children:u.jsx(me,{})})}const lt=()=>{const e={isCloseButtonShown:!0,timeout:2e3},{httpQuery:t}=st(),n=e=>u.jsxs(ve,{spacing:8,children:[u.jsx(I,{children:e?"The report has been exported successfully.":"Exporting the report…"}),u.jsx(Ce,{className:T("toast-progress",{[R]:e}),intent:e?k.SUCCESS:k.PRIMARY,value:e?1:void 0})]}),{mutateAsync:a}=function(e,t){const n=r();return o({...t,mutationFn:()=>i(n,e).then((e=>we(e,"general_ledger.xlsx")))})}(t),{mutateAsync:s}=function(e,t){const n=r();return o({...t,mutationFn:()=>l(n,e).then((e=>we(e,"general_ledger.csv")))})}(t),c=async t=>{const r=N.show({message:n(!1),...e,timeout:0});try{await t(),N.show({message:n(!0),...e},r)}catch{N.dismiss(r)}};return u.jsxs(S,{children:[u.jsx(m,{text:"XLSX (Microsoft Excel)",onClick:()=>c(a)}),u.jsx(m,{text:"CSV",onClick:()=>c(s)})]})},ct=v.lazy((()=>G((()=>t.import("./GeneralLedgerPdfDialogContent-legacy-CAl9vHm-.js")),void 0).then((e=>({default:e.GeneralLedgerPdfDialogContent}))))),dt=A((function({dialogName:e,payload:t,isOpen:r}){return u.jsx(B,{name:e,title:"General Ledger PDF Preview",className:T(E.DIALOG_PDF_PREVIEW),autoFocus:!0,canEscapeKeyClose:!0,isOpen:r,style:{width:"1000px"},children:u.jsx(Fe,{children:u.jsx(ct,{})})})}),Le()),ut=e=>{const t=(t,r)=>{const n={generalLedgerFilterDrawer:Se(t)};return e?e(n,t,r):n};return function(e){return M(t)(e)}},gt=e=>({toggleGeneralLedgerFilterDrawer:t=>e(Ne(t))});function xt(e){return M(null,gt)(e)}const mt=A((function({isFilterDrawerOpen:e,toggleGeneralLedgerFilterDrawer:t,openDialog:r}){const{sheetRefresh:n}=st();return u.jsx(Ie,{children:u.jsxs(Y,{children:[u.jsx(F,{className:T(z,"button--gray-highlight"),text:u.jsx(L,{id:"recalc_report"}),onClick:()=>{n()},icon:u.jsx(C,{icon:"refresh-16",iconSize:16})}),u.jsx(q,{}),u.jsx(F,{className:T(z,"button--table-views"),icon:u.jsx(C,{icon:"cog-16",iconSize:16}),text:e?u.jsx(L,{id:"hide_customizer"}):u.jsx(L,{id:"customize_report"}),onClick:()=>{t()},active:e}),u.jsx(q,{}),u.jsx(F,{className:z,icon:u.jsx(C,{icon:"print-16",iconSize:16}),text:u.jsx(L,{id:"print"}),onClick:()=>{r(x.GeneralLedgerPdfPreview)}}),u.jsx(H,{content:u.jsx(lt,{}),interactionKind:Q.CLICK,placement:"bottom-start",minimal:!0,children:u.jsx(F,{className:z,icon:u.jsx(C,{icon:"file-export-16",iconSize:16}),text:u.jsx(L,{id:"export"})})})]})})}),O,xt,ut((({generalLedgerFilterDrawer:e})=>({isFilterDrawerOpen:e}))));function ht({cell:{value:e}}){return w.createElement("div",{className:`cell ${E.TEXT_MUTED}`},e)}const jt=e=>`cells[${e}].value`,yt=e=>t=>t.key===e,ft=e=>t=>{const r=jt(t.cellIndex),n=((e,t,r)=>$(e,t,{magicSpacing:10,minWidth:100},r))(e,r,t.label);return{...t,align:K.Right,width:n,money:!0}},bt=e=>({...e,width:120}),pt=e=>t=>({...t,width:125,Cell:wt(e)}),wt=e=>function({cell:t}){const{value:r,row:n}=t,{referenceType:a,referenceId:s}=n?.original?.meta??{};return a&&s?w.createElement("a",{className:E.TEXT_LINK,onClick:t=>{t.preventDefault(),t.stopPropagation(),e?.(a,s)}},r):w.createElement("span",null,r)},_t=e=>t=>({...t,width:80,Cell:wt(e)}),Dt=e=>({...e,Cell:ht}),vt=e=>t=>r=>{const n=(e=>{const t=jt(e.cellIndex);return{key:e.key,Header:e.label,accessor:t,className:e.key,textOverview:!0}})(r);return A(n,ke(((e,t)=>[Ge(yt("date"),bt),Ge(yt("reference_type"),pt(e)),Ge(yt("reference_number"),_t(e)),Ge(yt("description"),Dt),Ge(yt("credit"),ft(t)),Ge(yt("debit"),ft(t)),Ge(yt("amount"),ft(t)),Ge(yt("running_balance"),ft(t))])(e,t)),Re((()=>n),V))},Ct=e=>{const{generalLedger:t}=st();if(!t)throw new Error("General ledger data is not available");const r=t?.table;return((e,t,r)=>A(r,Te(vt(e)(t))))(e,r.rows,r.columns)},Lt=A((function({companyName:e,openDrawer:t}){const{generalLedger:r}=st(),n=r?.table,a=r?.meta,s=Ct(((e,r)=>{Ee({referenceType:e,referenceId:r},t)})),o=v.useMemo((()=>J(n?.rows??[],1)),[n?.rows]);return u.jsx(Be,{companyName:e,sheetType:h.get("general_ledger_sheet"),dateText:a?.formattedDateRange??a?.formattedAsDate,fullWidth:!0,children:u.jsx(Ft,{noResults:h.get("this_report_does_not_contain_any_data_between_date_period"),columns:s,data:n?.rows??[],rowClassNames:Z,rowTestId:pe("general-ledger"),expanded:o,virtualizedRows:!0,fixedItemSize:30,fixedSizeHeight:1e3,expandable:!0,expandToggleColumn:1,sticky:!0,TableRowsRenderer:Ae,vListrowHeight:28,vListOverscanRowCount:0,TableCellRenderer:ee,styleName:te.Constrant})})}),U),Ft=X(W)`
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
`,Pt=function(){const e=re(),{isLoading:t}=st();return u.jsx(ye,{children:t?u.jsx(ne,{}):u.jsx(Lt,{companyName:e})})},St=v.createContext(void 0);function Nt({...e}){const{featureCan:t}=ae(),r=t(Pe.Branches),{isLoading:n,data:a}=Oe(void 0,{enabled:r,placeholderData:e=>e}),s={branches:a,isBranchesLoading:n};return n?u.jsx(Me,{}):u.jsx(St.Provider,{value:s,...e})}const It=()=>{const e=v.useContext(St);if(!e)throw new Error("useGeneralLedgerHeaderDimensionsContext must be used within a GeneralLedgerHeaderDimensionsPanelProvider");return e};function Tt(){return u.jsx(Nt,{children:u.jsx(Rt,{})})}function Rt(){const{branches:e}=It(),{featureCan:t}=ae(),r=t(Pe.Branches);return u.jsx(ze,{children:u.jsx(qe,{xs:4,children:r&&u.jsx(se,{label:h.get("branches_multi_select.label"),className:oe,children:u.jsx(Ye,{name:"branchesIds",branches:e})})})})}const kt=v.createContext(void 0);function Gt({...e}){const{data:t,isLoading:r}=Ke(),n={accounts:t,isAccountsLoading:r};return r?u.jsx(Me,{}):u.jsx(kt.Provider,{value:n,...e})}const At=()=>{const e=v.useContext(kt);if(!e)throw new Error("useGLGeneralPanelContext must be used within a GLHeaderGeneralPanelProvider");return e};function Bt(){return u.jsx(Gt,{children:u.jsx(Et,{})})}function Et(){const{accounts:e}=At();return e?u.jsxs(w.Fragment,{children:[u.jsx(He,{}),u.jsx(ze,{children:u.jsx(qe,{xs:4,children:u.jsx(Qe,{items:et,initialSelectedItem:"with-transactions"})})}),u.jsx(ze,{children:u.jsx(qe,{xs:4,children:u.jsx(ie,{label:h.get("specific_accounts"),name:"accountsIds",className:oe,children:u.jsx(Ze,{name:"accountsIds",items:e})})})}),u.jsx(Ve,{},"basis")]}):null}const Mt=A((function({onSubmitFilter:e,pageFilter:t,toggleGeneralLedgerFilterDrawer:r,generalLedgerFilterDrawer:n}){const a=tt(),s=_({...a,...t,fromDate:j(t.fromDate).toDate(),toDate:j(t.toDate).toDate()},a),o=y().shape({dateRange:f().optional(),fromDate:b().required(),toDate:b().min(p("fromDate")).required()}),{featureCan:i}=ae(),l=i(Pe.Branches);return u.jsx(Ot,{isOpen:n,drawerProps:{onClose:()=>{r(!1)}},children:u.jsx(le,{validationSchema:o,initialValues:s,onSubmit:(t,n)=>{e(t),r(!1),n.setSubmitting(!1)},children:u.jsxs(ce,{children:[u.jsxs(de,{animate:!0,vertical:!0,renderActiveTabPanelOnly:!0,children:[u.jsx(ue,{id:"general",title:u.jsx(L,{id:"general"}),panel:u.jsx(Bt,{})}),l&&u.jsx(ue,{id:"dimensions",title:u.jsx(L,{id:"dimensions"}),panel:u.jsx(Tt,{})})]}),u.jsxs("div",{className:"financial-header-drawer__footer",children:[u.jsx(F,{className:"mr1",intent:k.PRIMARY,type:"submit",children:u.jsx(L,{id:"calculate_report"})}),u.jsx(F,{onClick:()=>{r(!1)},minimal:!0,children:u.jsx(L,{id:"cancel"})})]})]})})})}),xt,ut((({generalLedgerFilterDrawer:e})=>({generalLedgerFilterDrawer:e})))),Ot=X(fe)`
  .bp4-drawer {
    max-height: 520px;
  }
`,Yt=A((function({toggleGeneralLedgerFilterDrawer:e}){const{query:t,setLocationQuery:r}=rt(),n=v.useCallback((e=>{const t={...e,fromDate:j(e.fromDate).format("YYYY-MM-DD"),toDate:j(e.toDate).format("YYYY-MM-DD")};r(t)}),[r]);return v.useEffect((()=>()=>e(!1)),[e]),u.jsxs(at,{query:t,children:[u.jsx(mt,{}),u.jsx(Ue,{children:u.jsxs(ge,{children:[u.jsx(Mt,{pageFilter:t,onSubmitFilter:n}),u.jsx(it,{}),u.jsx(ot,{}),u.jsx(Pt,{})]})}),u.jsx(dt,{dialogName:x.GeneralLedgerPdfPreview}),u.jsx(Xe,{})]})}),xt),zt=Object.freeze(Object.defineProperty({__proto__:null,GeneralLedger:Yt},Symbol.toStringTag,{value:"Module"}));e("G",zt)}}}));
