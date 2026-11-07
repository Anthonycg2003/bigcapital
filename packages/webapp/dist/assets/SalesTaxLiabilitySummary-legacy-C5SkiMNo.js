System.register(["./index-legacy-D5XI0zpp.js","./FinancialLoadingBar-legacy-DNg2RMev.js","./reportTestIds-legacy-jhMLLzkJ.js","./FinancialStatementHeader-legacy-Wqj9CDGh.js","./useDownloadFile-legacy-C4yfv5jg.js","./useRequestPdf-legacy-DAYX3bRL.js","./query-keys-legacy-8S6IFNCn.js","./Stack-legacy-Cw-5jWUp.js","./PrivatePages-legacy-4pET6Xu4.js","./financial-statements.actions-legacy-BGp-9B47.js","./DashboardActionsBar-legacy-BAD8uqAY.js","./index-legacy-bBI-6HA4.js","./fp-legacy-sRAVxmeo.js","./useQueryString-legacy-BEJuTV76.js","./FinancialSheet-legacy-C26THVKs.js","./FinancialStatementDateRange-legacy-MvnU9I41.js","./RadiosAccountingBasis-legacy-vA2t_LAf.js","./DashboardPageContent-legacy-OZk9UtxT.js"],(function(e,t){"use strict";var a,i,r,o,s,n,l,c,m,d,u,x,b,y,j,g,h,S,f,p,D,F,T,L,w,v,C,P,_,k,N,M,R,Y,I,O,A,E,q,B,z,K,V,H,Q,G,J,U,W,X,$,Z,ee,te,ae,ie,re,oe,se,ne,le,ce,me,de,ue,xe,be,ye,je,ge,he,Se,fe,pe,De,Fe,Te,Le,we,ve,Ce,Pe,_e;return{setters:[e=>{a=e.a4,i=e.jQ,r=e.a7,o=e.jR,s=e.a5,n=e.jS,l=e.jT,c=e.r,m=e.w,d=e.M,u=e.k,x=e.bg,b=e.b4,y=e.c,j=e.t,g=e.e,h=e.bs,S=e.aT,f=e.b_,p=e.bx,D=e.bp,F=e.bu,T=e.bT,L=e.$,w=e.bB,v=e.bk,C=e.b9,P=e.bV,_=e.P,k=e.b7,N=e.m,M=e.dP,R=e.bU,Y=e.eE,I=e.eF,O=e.dC,A=e.dn,E=e.c3,q=e.c4,B=e.dJ,z=e.bh,K=e.eD,V=e.dq,H=e.c9,Q=e.eG,G=e.eK,J=e.R,U=e.eH,W=e.eI,X=e.eJ,$=e.eL,Z=e.by,ee=e.c8,te=e.c6,ae=e.eM,ie=e.eN,re=e.eO},e=>{oe=e.F},e=>{se=e.t,ne=e.g},e=>{le=e.F,ce=e.b,me=e.c},e=>{de=e.d},e=>{ue=e.u},e=>{xe=e.f},e=>{be=e.S},e=>{ye=e.P,je=e.d,ge=e.D},e=>{he=e.R,Se=e.S},e=>{fe=e.D},e=>{pe=e.N},e=>{De=e.m,Fe=e.a,Te=e.f,Le=e.w},e=>{we=e.u},e=>{ve=e.F},e=>{Ce=e.F},e=>{Pe=e.R},e=>{_e=e.D}],execute:function(){e("a",(function(e){const t=a();return ue((()=>i(t,e)))}));const ke=c.createContext(void 0);function Ne({filter:e,...t}){const i=c.useMemo((()=>se(e)),[e]),{data:s,isFetching:n,isLoading:l,refetch:d}=function(e,t){const i=a({enableCamelCaseTransform:!0});return r({...t,queryKey:xe.salesTaxLiability(e),queryFn:()=>o(i,e)})}(i,{placeholderData:e=>e}),u={salesTaxLiabilitySummary:s,refetchSalesTaxLiabilitySummary:d,isFetching:n,isLoading:l,query:i,filter:e};return m.jsx(le,{name:"sales-tax-liability-summary",children:m.jsx(ke.Provider,{value:u,...t})})}const Me=e("u",(()=>{const e=c.useContext(ke);if(!e)throw new Error("useSalesTaxLiabilitySummaryContext must be used within a SalesTaxLiabilitySummaryBoot");return e}));function Re(){const{isFetching:e}=Me();return e?m.jsx(oe,{}):null}function Ye(){const e={isCloseButtonShown:!0,timeout:2e3},{query:t}=Me(),i=e=>m.jsxs(be,{spacing:8,children:[m.jsx(b,{children:e?"The report has been exported successfully.":"Exporting the report…"}),m.jsx(ye,{className:y("toast-progress",{[j]:e}),intent:e?g.SUCCESS:g.PRIMARY,value:e?1:void 0})]}),{mutateAsync:r}=function(e,t){const i=a();return s({...t,mutationFn:()=>n(i,e).then((e=>de(e,"sales_tax_liability_summary.xlsx")))})}(t),{mutateAsync:o}=function(e,t){const i=a();return s({...t,mutationFn:()=>l(i,e).then((e=>de(e,"sales_tax_liability_summary.csv")))})}(t),c=async t=>{const a=x.show({message:i(!1),...e,timeout:0});try{await t(),x.show({message:i(!0),...e},a)}catch{x.dismiss(a)}};return m.jsxs(d,{children:[m.jsx(u,{text:"XLSX (Microsoft Excel)",onClick:()=>c(r)}),m.jsx(u,{text:"CSV",onClick:()=>c(o)})]})}const Ie=c.lazy((()=>h((()=>t.import("./SalesTaxLiabilityPdfDialogContent-legacy-Cih9IVj7.js")),void 0).then((e=>({default:e.SalesTaxLiabilityPdfDialogContent}))))),Oe=S((function({dialogName:e,payload:t,isOpen:a}){return m.jsx(f,{name:e,title:"Sales Tax Liability Print Preview",className:y(p.DIALOG_PDF_PREVIEW),autoFocus:!0,canEscapeKeyClose:!0,isOpen:a,style:{width:"1000px"},children:m.jsx(ge,{children:m.jsx(Ie,{})})})}),je()),Ae=e=>{const t=(t,a)=>{const i={salesTaxLiabilitySummaryFilter:he(t)};return e?e(i,t,a):i};return function(e){return D(t)(e)}},Ee=e=>({toggleSalesTaxLiabilitySummaryFilterDrawer:t=>e(Se(t))});function qe(e){return D(null,Ee)(e)}const Be=S((function({salesTaxLiabilitySummaryFilter:e,toggleSalesTaxLiabilitySummaryFilterDrawer:t,openDialog:a,numberFormat:i,onNumberFormatSubmit:r}){const{isLoading:o,refetchSalesTaxLiabilitySummary:s}=Me();return m.jsx(fe,{children:m.jsxs(T,{children:[m.jsx(L,{className:y(w,"button--gray-highlight"),text:m.jsx(v,{id:"recalc_report"}),onClick:()=>{s()},icon:m.jsx(C,{icon:"refresh-16",iconSize:16})}),m.jsx(P,{}),m.jsx(L,{className:y(w,"button--table-views"),icon:m.jsx(C,{icon:"cog-16",iconSize:16}),text:e?m.jsx(v,{id:"hide_customizer"}):m.jsx(v,{id:"customize_report"}),onClick:()=>{t()},active:e}),m.jsx(P,{}),m.jsx(_,{content:m.jsx(pe,{numberFormat:i,onSubmit:e=>{M(r,e)},submitDisabled:o}),minimal:!0,interactionKind:k.CLICK,position:N.BOTTOM_LEFT,children:m.jsx(L,{className:y(w,"button--filter"),text:m.jsx(v,{id:"format"}),icon:m.jsx(C,{icon:"numbers",width:23,height:16})})}),m.jsx(P,{}),m.jsx(L,{className:w,icon:m.jsx(C,{icon:"print-16",iconSize:16}),text:m.jsx(v,{id:"print"}),onClick:()=>{a(R.SalesTaxLiabilitySummaryPdfPreview)}}),m.jsx(_,{content:m.jsx(Ye,{}),interactionKind:k.CLICK,placement:"bottom-start",minimal:!0,children:m.jsx(L,{className:w,icon:m.jsx(C,{icon:"file-export-16",iconSize:16}),text:m.jsx(v,{id:"export"})})})]})})}),F,qe,Ae((({salesTaxLiabilitySummaryFilter:e})=>({salesTaxLiabilitySummaryFilter:e})))),ze=e=>t=>t.key===e,Ke=e=>`cells[${e}].value`,Ve=e=>t=>{const a=Ke(t.cellIndex);return{Header:t.label,id:t.key,accessor:Ke(t.cellIndex),className:t.key,width:I(e,a,{minWidth:120}),align:O.Right,disableSortBy:!0,money:!0}},He=e=>t=>S(t,Te((e=>[Le(ze("taxName"),(e=>({key:e.key,Header:e.label,accessor:Ke(e.cellIndex),sticky:"left",width:300,textOverview:!0,disableSortBy:!0}))),Le(ze("taxableAmount"),Ve(e)),Le(ze("taxRate"),Ve(e)),Le(ze("taxPercentage"),Ve(e)),Le(ze("collectedTax"),Ve(e))])(e)),Fe((()=>t),Y)),Qe=()=>({fromDate:A().startOf("month").format("YYYY-MM-DD"),toDate:A().format("YYYY-MM-DD"),basis:"cash",numberFormat:{}}),Ge=()=>{const[e,t]=we();return[c.useMemo((()=>(e=>{const t=Qe();return{...{...t,...V(e,t)}}})(e)),[e]),t]},Je=()=>{const{salesTaxLiabilitySummary:e}=Me(),t=e?.table;return a=t?.columns,i=t?.rows,S(a,De(He(i)));var a,i},Ue=H(Q)`
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
`,We=function(){const e=G(),{salesTaxLiabilitySummary:t}=Me(),a=t?.table,i=t?.meta,r=Je(),o=J.useMemo((()=>U(a?.rows,3)),[a]);return m.jsx(ve,{companyName:e,sheetType:"Sales Tax Liability Summary",dateText:i?.formattedDateRange,children:m.jsx(Ue,{columns:r,data:a?.rows,rowClassNames:W,rowTestId:ne("sales-tax-liability"),noInitialFetch:!0,expandable:!0,expanded:o,expandToggleColumn:1,expandColumnSpace:.8,headerLoading:!0,sticky:!0,styleName:X.Constrant})})};function Xe(){const{isLoading:e}=Me();return m.jsx(ce,{children:e?m.jsx($,{}):m.jsx(We,{})})}function $e(){return m.jsxs("div",{children:[m.jsx(Ce,{}),m.jsx(Pe,{},"basis")]})}const Ze=S((function({onSubmitFilter:e,pageFilter:t,salesTaxLiabilitySummaryFilter:a,toggleSalesTaxLiabilitySummaryFilterDrawer:i}){const r=Qe(),o=E().shape({dateRange:q().optional(),fromDate:B().required().label(z.get("fromDate")),toDate:B().min(K("fromDate")).required().label(z.get("toDate"))}),s=V({...r,...t,fromDate:A(t.fromDate).toDate(),toDate:A(t.toDate).toDate()},r);return Z(),m.jsx(et,{isOpen:a,drawerProps:{onClose:()=>{i(!1)}},children:m.jsx(ee,{initialValues:s,validationSchema:o,onSubmit:(t,a)=>{e(t),i(!1),a.setSubmitting(!1)},children:m.jsxs(te,{children:[m.jsx(ae,{animate:!0,vertical:!0,renderActiveTabPanelOnly:!0,children:m.jsx(ie,{id:"general",title:m.jsx(v,{id:"general"}),panel:m.jsx($e,{})})}),m.jsxs("div",{className:"financial-header-drawer__footer",children:[m.jsx(L,{className:"mr1",intent:g.PRIMARY,type:"submit",children:m.jsx(v,{id:"calculate_report"})}),m.jsx(L,{onClick:()=>{i(!1)},minimal:!0,children:m.jsx(v,{id:"cancel"})})]})]})})})}),qe,Ae((({salesTaxLiabilitySummaryFilter:e})=>({salesTaxLiabilitySummaryFilter:e})))),et=H(me)`
  .bp4-drawer {
    max-height: 320px;
  }
`,tt=S((function({toggleSalesTaxLiabilitySummaryFilterDrawer:e}){const[t,a]=Ge();return c.useEffect((()=>()=>{e(!1)}),[e]),m.jsxs(Ne,{filter:t,children:[m.jsx(Be,{numberFormat:t.numberFormat??{},onNumberFormatSubmit:e=>{a({...t,numberFormat:e})}}),m.jsx(Re,{}),m.jsx(_e,{children:m.jsxs(re,{numberFormat:t.numberFormat??{},children:[m.jsx(Ze,{pageFilter:t,onSubmitFilter:e=>{const t={...e,fromDate:A(e.fromDate).format("YYYY-MM-DD"),toDate:A(e.toDate).format("YYYY-MM-DD")};a({...t})}}),m.jsx(Xe,{})]})}),m.jsx(Oe,{dialogName:R.SalesTaxLiabilitySummaryPdfPreview})]})}),qe),at=Object.freeze(Object.defineProperty({__proto__:null,SalesTaxLiabilitySummary:tt},Symbol.toStringTag,{value:"Module"}));e("S",at)}}}));
