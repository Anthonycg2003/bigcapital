System.register(["./index-legacy-DIiV7_Ij.js","./FinancialLoadingBar-legacy-BGBR9DV-.js","./reportTestIds-legacy-Cni8Cj2U.js","./FinancialStatementHeader-legacy-CXlLOamZ.js","./useDownloadFile-legacy-C4yfv5jg.js","./useRequestPdf-legacy-WU4tb0ef.js","./query-keys-legacy-8S6IFNCn.js","./Stack-legacy-3Pb6llei.js","./PrivatePages-legacy-D_3nSDfL.js","./financial-statements.actions-legacy-3imPffcJ.js","./DashboardActionsBar-legacy-CuVdhJUr.js","./index-legacy-_DTdO8yJ.js","./fp-legacy-P3k02yrm.js","./useQueryString-legacy-BjVMr3RS.js","./FinancialSheet-legacy-BCzgjxeS.js","./FinancialStatementDateRange-legacy-CLFyRsj-.js","./RadiosAccountingBasis-legacy-3CewPIaw.js","./DashboardPageContent-legacy-rJcfap5z.js"],(function(e,t){"use strict";var a,i,r,o,s,n,l,c,m,d,u,x,b,y,j,g,h,S,f,p,D,F,T,L,w,v,C,P,_,N,Y,k,R,M,I,O,E,q,A,B,z,K,H,V,X,G,Q,W,Z,$,J,U,ee,te,ae,ie,re,oe,se,ne,le,ce,me,de,ue,xe,be,ye,je,ge,he,Se,fe,pe,De,Fe,Te,Le,we,ve,Ce,Pe,_e;return{setters:[e=>{a=e.a3,i=e.jY,r=e.a6,o=e.jZ,s=e.a4,n=e.j_,l=e.j$,c=e.r,m=e.w,d=e.M,u=e.k,x=e.bd,b=e.b1,y=e.c,j=e.t,g=e.e,h=e.bp,S=e.aS,f=e.bX,p=e.bu,D=e.bm,F=e.br,T=e.bQ,L=e.Z,w=e.by,v=e.bh,C=e.b6,P=e.bS,_=e.P,N=e.b4,Y=e.m,k=e.dR,R=e.bR,M=e.eE,I=e.eF,O=e.dE,E=e.dq,q=e.c0,A=e.c1,B=e.dL,z=e.be,K=e.eD,H=e.ds,V=e.c6,X=e.eG,G=e.eK,Q=e.R,W=e.eH,Z=e.eI,$=e.eJ,J=e.eL,U=e.bv,ee=e.c5,te=e.c3,ae=e.eM,ie=e.eN,re=e.eO},e=>{oe=e.F},e=>{se=e.t,ne=e.g},e=>{le=e.F,ce=e.b,me=e.c},e=>{de=e.d},e=>{ue=e.u},e=>{xe=e.f},e=>{be=e.S},e=>{ye=e.P,je=e.d,ge=e.D},e=>{he=e.R,Se=e.S},e=>{fe=e.D},e=>{pe=e.N},e=>{De=e.m,Fe=e.a,Te=e.f,Le=e.w},e=>{we=e.u},e=>{ve=e.F},e=>{Ce=e.F},e=>{Pe=e.R},e=>{_e=e.D}],execute:function(){e("a",(function(e){const t=a();return ue((()=>i(t,e)))}));const Ne=c.createContext(void 0);function Ye({filter:e,...t}){const i=c.useMemo((()=>se(e)),[e]),{data:s,isFetching:n,isLoading:l,refetch:d}=function(e,t){const i=a({enableCamelCaseTransform:!0});return r({...t,queryKey:xe.salesTaxLiability(e),queryFn:()=>o(i,e)})}(i,{placeholderData:e=>e}),u={salesTaxLiabilitySummary:s,refetchSalesTaxLiabilitySummary:d,isFetching:n,isLoading:l,query:i,filter:e};return m.jsx(le,{name:"sales-tax-liability-summary",children:m.jsx(Ne.Provider,{value:u,...t})})}const ke=e("u",(()=>{const e=c.useContext(Ne);if(!e)throw new Error("useSalesTaxLiabilitySummaryContext must be used within a SalesTaxLiabilitySummaryBoot");return e}));function Re(){const{isFetching:e}=ke();return e?m.jsx(oe,{}):null}function Me(){const e={isCloseButtonShown:!0,timeout:2e3},{query:t}=ke(),i=e=>m.jsxs(be,{spacing:8,children:[m.jsx(b,{children:e?"The report has been exported successfully.":"Exporting the report…"}),m.jsx(ye,{className:y("toast-progress",{[j]:e}),intent:e?g.SUCCESS:g.PRIMARY,value:e?1:void 0})]}),{mutateAsync:r}=function(e,t){const i=a();return s({...t,mutationFn:()=>n(i,e).then((e=>de(e,"sales_tax_liability_summary.xlsx")))})}(t),{mutateAsync:o}=function(e,t){const i=a();return s({...t,mutationFn:()=>l(i,e).then((e=>de(e,"sales_tax_liability_summary.csv")))})}(t),c=async t=>{const a=x.show({message:i(!1),...e,timeout:0});try{await t(),x.show({message:i(!0),...e},a)}catch{x.dismiss(a)}};return m.jsxs(d,{children:[m.jsx(u,{text:"XLSX (Microsoft Excel)",onClick:()=>c(r)}),m.jsx(u,{text:"CSV",onClick:()=>c(o)})]})}const Ie=c.lazy((()=>h((()=>t.import("./SalesTaxLiabilityPdfDialogContent-legacy-Du4AH4FJ.js")),void 0).then((e=>({default:e.SalesTaxLiabilityPdfDialogContent}))))),Oe=S((function({dialogName:e,payload:t,isOpen:a}){return m.jsx(f,{name:e,title:"Sales Tax Liability Print Preview",className:y(p.DIALOG_PDF_PREVIEW),autoFocus:!0,canEscapeKeyClose:!0,isOpen:a,style:{width:"1000px"},children:m.jsx(ge,{children:m.jsx(Ie,{})})})}),je()),Ee=e=>{const t=(t,a)=>{const i={salesTaxLiabilitySummaryFilter:he(t)};return e?e(i,t,a):i};return function(e){return D(t)(e)}},qe=e=>({toggleSalesTaxLiabilitySummaryFilterDrawer:t=>e(Se(t))});function Ae(e){return D(null,qe)(e)}const Be=S((function({salesTaxLiabilitySummaryFilter:e,toggleSalesTaxLiabilitySummaryFilterDrawer:t,openDialog:a,numberFormat:i,onNumberFormatSubmit:r}){const{isLoading:o,refetchSalesTaxLiabilitySummary:s}=ke();return m.jsx(fe,{children:m.jsxs(T,{children:[m.jsx(L,{className:y(w,"button--gray-highlight"),text:m.jsx(v,{id:"recalc_report"}),onClick:()=>{s()},icon:m.jsx(C,{icon:"refresh-16",iconSize:16})}),m.jsx(P,{}),m.jsx(L,{className:y(w,"button--table-views"),icon:m.jsx(C,{icon:"cog-16",iconSize:16}),text:e?m.jsx(v,{id:"hide_customizer"}):m.jsx(v,{id:"customize_report"}),onClick:()=>{t()},active:e}),m.jsx(P,{}),m.jsx(_,{content:m.jsx(pe,{numberFormat:i,onSubmit:e=>{k(r,e)},submitDisabled:o}),minimal:!0,interactionKind:N.CLICK,position:Y.BOTTOM_LEFT,children:m.jsx(L,{className:y(w,"button--filter"),text:m.jsx(v,{id:"format"}),icon:m.jsx(C,{icon:"numbers",width:23,height:16})})}),m.jsx(P,{}),m.jsx(L,{className:w,icon:m.jsx(C,{icon:"print-16",iconSize:16}),text:m.jsx(v,{id:"print"}),onClick:()=>{a(R.SalesTaxLiabilitySummaryPdfPreview)}}),m.jsx(_,{content:m.jsx(Me,{}),interactionKind:N.CLICK,placement:"bottom-start",minimal:!0,children:m.jsx(L,{className:w,icon:m.jsx(C,{icon:"file-export-16",iconSize:16}),text:m.jsx(v,{id:"export"})})})]})})}),F,Ae,Ee((({salesTaxLiabilitySummaryFilter:e})=>({salesTaxLiabilitySummaryFilter:e})))),ze=e=>t=>t.key===e,Ke=e=>`cells[${e}].value`,He=e=>t=>{const a=Ke(t.cellIndex);return{Header:t.label,id:t.key,accessor:Ke(t.cellIndex),className:t.key,width:I(e,a,{minWidth:120}),align:O.Right,disableSortBy:!0,money:!0}},Ve=e=>t=>S(t,Te((e=>[Le(ze("taxName"),(e=>({key:e.key,Header:e.label,accessor:Ke(e.cellIndex),sticky:"left",width:300,textOverview:!0,disableSortBy:!0}))),Le(ze("taxableAmount"),He(e)),Le(ze("taxRate"),He(e)),Le(ze("taxPercentage"),He(e)),Le(ze("collectedTax"),He(e))])(e)),Fe((()=>t),M)),Xe=()=>({fromDate:E().startOf("month").format("YYYY-MM-DD"),toDate:E().format("YYYY-MM-DD"),basis:"cash",numberFormat:{}}),Ge=()=>{const[e,t]=we();return[c.useMemo((()=>(e=>{const t=Xe();return{...{...t,...H(e,t)}}})(e)),[e]),t]},Qe=()=>{const{salesTaxLiabilitySummary:e}=ke(),t=e?.table;return a=t?.columns,i=t?.rows,S(a,De(Ve(i)));var a,i},We=V(X)`
  --color-table-total-border-top: #bbb;
  --color-table-total-border-bottom: #333;
  --color-table-tax-rate-text-color: #444;

  .bp4-dark & {
    --color-table-total-border-top: var(--color-dark-gray5);
    --color-table-total-border-bottom: var(--color-dark-gray5);
    --color-table-tax-rate-text-color: var(--color-light-gray2);
  }
  .table {
    .tbody .tr {
      .td {
        border-bottom: 0;
        padding-top: 0.32rem;
        padding-bottom: 0.32rem;
      }
      &:not(.no-results) {
        .td {
          border-bottom: 0;
          padding-top: 0.4rem;
          padding-bottom: 0.4rem;
        }
        &:not(:first-child) .td {
          border-top: 1px solid transparent;
        }
        &.row_type--Total {
          font-weight: 500;

          .td {
            border-top: 1px solid var(--color-table-total-border-top);
            border-bottom: 3px double var(--color-table-total-border-bottom);
          }
        }
        &.row_type--TaxRate {
          .td {
            &.td-taxPercentage,
            &.td-taxableAmount,
            &.td-collectedTax,
            &.td-taxRate {
              color: var(--color-table-tax-rate-text-color);
            }
          }
        }
      }
    }
  }
`,Ze=function(){const e=G(),{salesTaxLiabilitySummary:t}=ke(),a=t?.table,i=t?.meta,r=Qe(),o=Q.useMemo((()=>W(a?.rows,3)),[a]);return m.jsx(ve,{companyName:e,sheetType:"Sales Tax Liability Summary",dateText:i?.formattedDateRange,children:m.jsx(We,{columns:r,data:a?.rows,rowClassNames:Z,rowTestId:ne("sales-tax-liability"),noInitialFetch:!0,expandable:!0,expanded:o,expandToggleColumn:1,expandColumnSpace:.8,headerLoading:!0,sticky:!0,styleName:$.Constrant})})};function $e(){const{isLoading:e}=ke();return m.jsx(ce,{children:e?m.jsx(J,{}):m.jsx(Ze,{})})}function Je(){return m.jsxs("div",{children:[m.jsx(Ce,{}),m.jsx(Pe,{},"basis")]})}const Ue=S((function({onSubmitFilter:e,pageFilter:t,salesTaxLiabilitySummaryFilter:a,toggleSalesTaxLiabilitySummaryFilterDrawer:i}){const r=Xe(),o=q().shape({dateRange:A().optional(),fromDate:B().required().label(z.get("fromDate")),toDate:B().min(K("fromDate")).required().label(z.get("toDate"))}),s=H({...r,...t,fromDate:E(t.fromDate).toDate(),toDate:E(t.toDate).toDate()},r);return U(),m.jsx(et,{isOpen:a,drawerProps:{onClose:()=>{i(!1)}},children:m.jsx(ee,{initialValues:s,validationSchema:o,onSubmit:(t,a)=>{e(t),i(!1),a.setSubmitting(!1)},children:m.jsxs(te,{children:[m.jsx(ae,{animate:!0,vertical:!0,renderActiveTabPanelOnly:!0,children:m.jsx(ie,{id:"general",title:m.jsx(v,{id:"general"}),panel:m.jsx(Je,{})})}),m.jsxs("div",{className:"financial-header-drawer__footer",children:[m.jsx(L,{className:"mr1",intent:g.PRIMARY,type:"submit",children:m.jsx(v,{id:"calculate_report"})}),m.jsx(L,{onClick:()=>{i(!1)},minimal:!0,children:m.jsx(v,{id:"cancel"})})]})]})})})}),Ae,Ee((({salesTaxLiabilitySummaryFilter:e})=>({salesTaxLiabilitySummaryFilter:e})))),et=V(me)`
  .bp4-drawer {
    max-height: 320px;
  }
`,tt=S((function({toggleSalesTaxLiabilitySummaryFilterDrawer:e}){const[t,a]=Ge();return c.useEffect((()=>()=>{e(!1)}),[e]),m.jsxs(Ye,{filter:t,children:[m.jsx(Be,{numberFormat:t.numberFormat??{},onNumberFormatSubmit:e=>{a({...t,numberFormat:e})}}),m.jsx(Re,{}),m.jsx(_e,{children:m.jsxs(re,{numberFormat:t.numberFormat??{},children:[m.jsx(Ue,{pageFilter:t,onSubmitFilter:e=>{const t={...e,fromDate:E(e.fromDate).format("YYYY-MM-DD"),toDate:E(e.toDate).format("YYYY-MM-DD")};a({...t})}}),m.jsx($e,{})]})}),m.jsx(Oe,{dialogName:R.SalesTaxLiabilitySummaryPdfPreview})]})}),Ae),at=Object.freeze(Object.defineProperty({__proto__:null,SalesTaxLiabilitySummary:tt},Symbol.toStringTag,{value:"Module"}));e("S",at)}}}));
