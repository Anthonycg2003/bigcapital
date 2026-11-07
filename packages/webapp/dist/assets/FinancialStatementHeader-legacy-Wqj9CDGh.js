System.register(["./index-legacy-D5XI0zpp.js","./DashboardInsider-legacy-DDgSdkhO.js"],(function(r,a){"use strict";var e,o,t,i,d,n,c,l;return{setters:[r=>{e=r.c9,o=r.w,t=r.c,i=r.bx,d=r.r,n=r.ik,c=r.m},r=>{l=r.D}],execute:function(){var a=document.createElement("style");a.textContent=".financial-header-drawer{--x-color-background: #fff;--x-color-backdrop-background: rgba(2, 9, 19, .65);--x-color-tabs-border: #c3cdd5;--x-color-tabs-tab-item-background: var(--color-dark-gray3);--x-color-tabs-indicator-background: #edf5ff;--x-color-tabs-indicator-border: #0350f8;--x-color-footer-background: #ecf0f3;--x-color-footer-border: #c3cdd5;padding:25px 26px;position:absolute;top:101px;bottom:0;left:0;right:0;overflow:hidden}.bp4-dark .financial-header-drawer{--x-color-background: var(--color-dark-gray1);--x-color-backdrop-background: rgba(2, 9, 19, .65);--x-color-tabs-border: var(--color-dark-gray2);--x-color-tabs-tab-item-background: var(--color-dark-gray3);--x-color-tabs-indicator-background: var(--color-dark-gray2);--x-color-tabs-indicator-border: var(--color-primary);--x-color-footer-background: var(--color-dark-gray3);--x-color-footer-border: var(--color-dark-gray1)}.financial-header-drawer.is-hidden{visibility:hidden}.financial-header-drawer .bp4-drawer{box-shadow:0 0 0 transparent;max-height:550px;height:100%;padding-bottom:49px}.financial-header-drawer .bp4-drawer,.bp4-dark .financial-header-drawer .bp4-drawer{background-color:var(--x-color-background)}.financial-header-drawer .bp4-drawer>form{display:flex;flex-direction:column;flex:1 0 0;height:100%}.financial-header-drawer .bp4-drawer .bp4-drawer-backdrop{background-color:var(--x-color-backdrop-background)}.financial-header-drawer .bp4-button.button--submit-filter{min-height:34px;padding-left:16px;padding-right:16px}.financial-header-drawer .radio-group---accounting-basis .bp4-label{margin-bottom:12px}.financial-header-drawer .bp4-tabs{height:100%}.financial-header-drawer .bp4-tabs.bp4-vertical>.bp4-tab-panel{flex:1 0 0;border-top:24px solid transparent;padding-left:20px;padding-right:20px;padding-bottom:24px;overflow:auto}.financial-header-drawer .bp4-tabs.bp4-vertical{flex:1 0 0}.financial-header-drawer .bp4-tabs.bp4-vertical .bp4-tab-list{width:220px;border-right:1px solid var(--color-dark-gray2);padding-top:10px}.financial-header-drawer .bp4-tabs.bp4-vertical .bp4-tab-list>*:not(:last-child){margin-right:0}.financial-header-drawer .bp4-tabs.bp4-vertical .bp4-tab-list .bp4-tab-indicator-wrapper{width:100%}.financial-header-drawer .bp4-tabs.bp4-vertical .bp4-tab-list .bp4-tab-indicator-wrapper .bp4-tab-indicator{border-left:3px solid var(--x-color-tabs-indicator-border);background-color:var(--x-color-tabs-indicator-background);border-radius:0}.financial-header-drawer .bp4-tabs.bp4-vertical .bp4-tab-list .bp4-tab{color:var(--color-financial-report-drawer-tab-text);line-height:45px;border-radius:0;padding-left:14px;padding-right:14px;font-weight:500}.financial-header-drawer__footer{background-color:var(--x-color-footer-background);border-top:1px solid var(--x-color-footer-border);padding:8px 8px 8px 230px;position:absolute;bottom:0;width:100%}.financial-header-drawer .row{margin-left:-.85rem;margin-right:-.85rem}.financial-header-drawer .row .col{padding-left:.85rem;padding-right:.85rem}.financial-header-drawer .bp4-popover-target .bp4-tag-input{height:auto}\n/*$vite$:1*/",document.head.appendChild(a),r({F:function(r){return o.jsx(b,{...r,className:t(i.FINANCIAL_REPORT_INSIDER,r.className)})},c:function({children:r,isOpen:a,drawerProps:e,className:i}){const l=d.useRef(),[b,p]=d.useState(!1);return d.useEffect((()=>{const r=document.querySelector("body");return r?.classList.toggle("hide-scrollbar",a),a&&document.querySelector(".Pane2")?.scrollTo(0,0),()=>{r?.classList.remove("hide-scrollbar")}}),[a]),d.useEffect((()=>{clearTimeout(l.current),a?p(a):l.current=setTimeout((()=>p(a)),300)}),[a]),o.jsx("div",{"data-testId":"financial-report-drawer",className:t("financial-statement__header","financial-header-drawer",{"is-hidden":!b},i),children:o.jsx(n,{isOpen:a,usePortal:!1,hasBackdrop:!0,position:c.TOP,canOutsideClickClose:!0,canEscapeKeyClose:!0,...e,children:r})})}}),r("a",e.div`
  --x-background-color: #fdecda;
  --x-text-color: #342515;
  --x-button-text-color: #824400;

  .bp4-dark & {
    --x-background-color: rgba(200, 118, 25, 0.2);
    --x-text-color: rgba(255, 255, 255, 0.8);
    --x-button-text-color: rgba(255, 255, 255, 0.8);
  }
  position: relative;
  padding: 8px 20px;
  border-radius: 2px;
  background-color: var(--x-background-color);
  color: var(--x-text-color);
  font-size: 13px;

  button {
    font-size: 12px;
    min-height: 16px;
    padding: 0 4px;

    &,
    &:hover {
      color: var(--x-button-text-color);
      text-decoration: underline;
    }
  }
  svg {
    margin-right: 6px;
    position: relative;
    top: -2px;
    fill: var(--x-text-color);
  }
`),e.div`
  .progress-materializecss {
    top: -2px;
  }
`;const b=e(l)``;r("b",e.div`
  padding-left: 15px;
  padding-right: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
`)}}}));
