System.register(["./index-legacy-DIiV7_Ij.js","./utils-legacy-C10RHFy_.js","./dataTypes-legacy-Ba6DsCIw.js","./InputGroup-legacy-CF5nXE0t.js","./Textarea-legacy-DrQOTPsD.js","./useAutofocus-legacy-BJFXrAvc.js","./FieldRequiredHint-legacy-DsnyBJ-n.js","./PreferencesPageLoader-legacy-B5UQa63D.js","./PrivatePages-legacy-D_3nSDfL.js","./textArea-legacy-CLfjS4Tj.js","./queries-legacy-DoGbuOYf.js","./popover2-legacy-vMO8H1RU.js","./index-legacy-CR2XlTxQ.js","./withDrawers-legacy-ZeT-fD45.js","./index-legacy-BBFNWTQZ.js","./Row-legacy-BK7WrKsL.js","./queries-legacy-KwrWT7KM.js"],(function(e,s){"use strict";var t,i,n,r,o,l,c,a,d,m,u,p,b,g,y,h,f,k,x,j,v,E,_,C,w,N,A,D,R,O,S,V,F,I,T,P,M,$,L,U,Y,B,G,H,z,W,q,J,K,X,Z,Q,ee,se,te,ie,ne,re,oe;return{setters:[e=>{t=e.c0,i=e.c1,n=e.be,r=e.dM,o=e.bI,l=e.cx,c=e.bM,a=e.bN,d=e.bJ,m=e.cz,u=e.cA,p=e.mj,b=e.cB,g=e.cC,y=e.ni,h=e.cD,f=e.bK,k=e.cE,x=e.bL,j=e.cH,v=e.am,E=e.R,_=e.c6,C=e.gn,w=e.hr,N=e.mk,A=e.w,D=e.ed,R=e.bD,O=e.e0,S=e.a0,V=e.P,F=e.c2,I=e.bs,T=e.Z,P=e.e,M=e.bh,$=e.c4,L=e.ep,U=e.c3,Y=e.c,B=e.bu,G=e.aS,H=e.bq,z=e.ds,W=e.c5,q=e.bd,J=e.d9},e=>{K=e.h},e=>{X=e.D},e=>{Z=e.I},e=>{Q=e.T},e=>{ee=e.u},e=>{se=e.F},e=>{te=e.P},e=>{ie=e.y,ne=e.z,re=e.A,oe=e.B},null,null,null,null,null,null,null,null],execute:function(){var s=document.createElement("style");s.textContent=".preferences-page__inside-content--roles-form{padding-bottom:60px}.preferences-page__inside-content--roles-form .card{padding:25px}.preferences-page__inside-content--roles-form .card .card__footer{padding-top:16px;border-top:1px solid var(--color-role-form-footer-border, #e0e7ea);margin-top:30px}.bp4-dark .preferences-page__inside-content--roles-form .card .card__footer{--color-role-form-footer-border: rgba(255, 255, 255, .1)}.preferences-page__inside-content--roles-form .card .card__footer .bp4-button{min-width:65px}.preferences-page__inside-content--roles-form .card .card__footer .bp4-button+.bp4-button{margin-left:10px}.preferences-page__inside-content--roles-form .bp4-form-group{max-width:600px;margin-bottom:14px}.preferences-page__inside-content--roles-form .bp4-form-group.bp4-inline .bp4-label{min-width:150px}.preferences-page__inside-content--roles-form .bp4-form-group .bp4-form-content{width:100%}.preferences-page__inside-content--roles-form .bp4-form-group:last-of-type{margin-bottom:0}.preferences-page__inside-content--roles-form .form-group--description textarea{width:100%;min-width:100%;font-size:14px}\n/*$vite$:1*/",document.head.appendChild(s),e("RolesFormPage",(function(){const{id:e}=J(),s=e?parseInt(e,10):NaN;return A.jsx(gs,{roleId:Number.isNaN(s)?void 0:s,children:A.jsx(hs,{})})}));const le=t().shape({roleName:i().required().label(n.get("roles.label.role_name_")),roleDescription:i().nullable().max(X.TEXT),permissions:t().shape({subject:i(),ability:i(),value:r()})}),ce=le,ae=le;var de;function me(e,s,t,i){var n={};return function(r){if(!n[r]){var o={},l=[],c=[];for(c.push({node:r,processed:!1});c.length>0;){var a=c[c.length-1],d=a.processed,m=a.node;if(d)c.pop(),l.pop(),o[m]=!1,n[m]=!0,s&&0!==e[m].length||t.push(m);else{if(n[m]){c.pop();continue}if(o[m]){if(i){c.pop();continue}throw l.push(m),new pe(l)}o[m]=!0,l.push(m);for(var u=e[m],p=u.length-1;p>=0;p--)c.push({node:u[p],processed:!1});a.processed=!0}}}}}var ue=de=function(e){this.nodes={},this.outgoingEdges={},this.incomingEdges={},this.circular=e&&!!e.circular};ue.prototype={size:function(){return Object.keys(this.nodes).length},addNode:function(e,s){this.hasNode(e)||(this.nodes[e]=2===arguments.length?s:e,this.outgoingEdges[e]=[],this.incomingEdges[e]=[])},removeNode:function(e){this.hasNode(e)&&(delete this.nodes[e],delete this.outgoingEdges[e],delete this.incomingEdges[e],[this.incomingEdges,this.outgoingEdges].forEach((function(s){Object.keys(s).forEach((function(t){var i=s[t].indexOf(e);i>=0&&s[t].splice(i,1)}),this)})))},hasNode:function(e){return this.nodes.hasOwnProperty(e)},getNodeData:function(e){if(this.hasNode(e))return this.nodes[e];throw new Error("Node does not exist: "+e)},setNodeData:function(e,s){if(!this.hasNode(e))throw new Error("Node does not exist: "+e);this.nodes[e]=s},addDependency:function(e,s){if(!this.hasNode(e))throw new Error("Node does not exist: "+e);if(!this.hasNode(s))throw new Error("Node does not exist: "+s);return-1===this.outgoingEdges[e].indexOf(s)&&this.outgoingEdges[e].push(s),-1===this.incomingEdges[s].indexOf(e)&&this.incomingEdges[s].push(e),!0},removeDependency:function(e,s){var t;this.hasNode(e)&&(t=this.outgoingEdges[e].indexOf(s))>=0&&this.outgoingEdges[e].splice(t,1),this.hasNode(s)&&(t=this.incomingEdges[s].indexOf(e))>=0&&this.incomingEdges[s].splice(t,1)},clone:function(){var e=this,s=new ue;return Object.keys(e.nodes).forEach((function(t){s.nodes[t]=e.nodes[t],s.outgoingEdges[t]=e.outgoingEdges[t].slice(0),s.incomingEdges[t]=e.incomingEdges[t].slice(0)})),s},directDependenciesOf:function(e){if(this.hasNode(e))return this.outgoingEdges[e].slice(0);throw new Error("Node does not exist: "+e)},directDependantsOf:function(e){if(this.hasNode(e))return this.incomingEdges[e].slice(0);throw new Error("Node does not exist: "+e)},dependenciesOf:function(e,s){if(this.hasNode(e)){var t=[];me(this.outgoingEdges,s,t,this.circular)(e);var i=t.indexOf(e);return i>=0&&t.splice(i,1),t}throw new Error("Node does not exist: "+e)},dependantsOf:function(e,s){if(this.hasNode(e)){var t=[];me(this.incomingEdges,s,t,this.circular)(e);var i=t.indexOf(e);return i>=0&&t.splice(i,1),t}throw new Error("Node does not exist: "+e)},overallOrder:function(e){var s=this,t=[],i=Object.keys(this.nodes);if(0===i.length)return t;if(!this.circular){var n=me(this.outgoingEdges,!1,[],this.circular);i.forEach((function(e){n(e)}))}var r=me(this.outgoingEdges,e,t,this.circular);return i.filter((function(e){return 0===s.incomingEdges[e].length})).forEach((function(e){r(e)})),this.circular&&i.filter((function(e){return-1===t.indexOf(e)})).forEach((function(e){r(e)})),t},entryNodes:function(){var e=this;return Object.keys(this.nodes).filter((function(s){return 0===e.incomingEdges[s].length}))}},ue.prototype.directDependentsOf=ue.prototype.directDependantsOf,ue.prototype.dependentsOf=ue.prototype.dependantsOf;var pe=function(e){var s="Dependency Cycle Found: "+e.join(" -> "),t=new Error(s);return t.cyclePath=e,Object.setPrototypeOf(t,Object.getPrototypeOf(this)),Error.captureStackTrace&&Error.captureStackTrace(t,pe),t};pe.prototype=Object.create(Error.prototype,{constructor:{value:Error,enumerable:!1,writable:!0,configurable:!0}}),Object.setPrototypeOf(pe,Error);const be={Columns:"columns",Vertical:"vertical"},ge="view",ye="create",he="delete",fe="edit",ke=()=>[{label:n.get("permissions.items_inventory"),type:be.Columns,serviceFullAccess:!0,columns:[{label:n.get("permissions.column.view"),key:"view"},{label:n.get("permissions.column.create"),key:"create"},{label:n.get("permissions.column.edit"),key:"edit"},{label:n.get("permissions.column.delete"),key:"delete"}],services:[{label:n.get("permissions.items"),subject:o.Item,permissions:[{label:n.get("permissions.column.view"),key:l.View,relatedColumn:ge},{label:n.get("permissions.column.create"),key:l.Create,relatedColumn:ye,depend:[{key:l.View}]},{label:n.get("permissions.column.edit"),key:l.Edit,relatedColumn:fe,depend:[{key:l.Create}]},{label:n.get("permissions.column.delete"),key:l.Delete,relatedColumn:he,depend:[{key:l.Edit}]}]},{label:n.get("permissions.inventory_adjustment"),subject:o.InventoryAdjustment,permissions:[{label:"View",key:l.View,relatedColumn:ge},{label:"Create",key:l.Create,relatedColumn:ye,depend:[{key:l.View}]},{label:"Edit",key:l.Edit,relatedColumn:fe,depend:[{key:l.Create}]},{label:"Delete",key:l.Delete,relatedColumn:he,depend:[{key:l.Edit}]}]}]},{label:n.get("permissions.contacts"),type:be.Columns,serviceFullAccess:!0,moduleFullAccess:!0,columns:[{label:n.get("permissions.column.view"),key:"view"},{label:n.get("permissions.column.create"),key:"create"},{label:n.get("permissions.column.edit"),key:"edit"},{label:n.get("permissions.column.delete"),key:"delete"}],services:[{label:n.get("permissions.customers"),subject:o.Customer,permissions:[{label:n.get("permissions.column.view"),key:c.View,relatedColumn:ge},{label:n.get("permissions.column.create"),key:c.Create,relatedColumn:ye,depend:[{key:c.View}]},{label:n.get("permissions.column.edit"),key:c.Edit,relatedColumn:fe,depend:[{key:c.Create}]},{label:n.get("permissions.column.delete"),key:c.Delete,relatedColumn:he,depend:[{key:c.Edit}]}]},{label:n.get("permissions.vendors"),subject:o.Vendor,permissions:[{label:n.get("permissions.column.view"),key:a.View,relatedColumn:ge},{label:n.get("permissions.column.create"),key:a.Create,relatedColumn:ye,depend:[{key:a.View}]},{label:n.get("permissions.column.edit"),key:a.Edit,relatedColumn:fe,depend:[{key:a.Create}]},{label:n.get("permissions.column.delete"),key:a.Delete,relatedColumn:he,depend:[{key:a.Edit}]}]}]},{label:n.get("permissions.sales"),type:be.Columns,serviceFullAccess:!0,moduleFullAccess:!0,columns:[{label:n.get("permissions.column.view"),key:"view"},{label:n.get("permissions.column.create"),key:"create"},{label:n.get("permissions.column.edit"),key:"edit"},{label:n.get("permissions.column.delete"),key:"delete"}],services:[{label:n.get("permissions.sale_invoice"),subject:o.Invoice,permissions:[{label:n.get("permissions.column.view"),key:d.View,relatedColumn:ge},{label:n.get("permissions.column.create"),key:d.Create,relatedColumn:ye,depend:[{key:d.View}]},{label:n.get("permissions.column.edit"),key:d.Edit,relatedColumn:fe,depend:[{key:d.Create}]},{label:n.get("permissions.column.delete"),key:d.Delete,relatedColumn:he,depend:[{key:d.Edit}]},{label:n.get("permissions.column.written_off_invoice"),key:d.Writeoff,depend:[{key:d.Edit}]}]},{label:n.get("permissions.sale_estimate"),subject:o.Estimate,permissions:[{label:n.get("permissions.column.view"),key:m.View,relatedColumn:ge},{label:n.get("permissions.column.create"),key:m.Create,relatedColumn:ye,depend:[{key:m.View}]},{label:n.get("permissions.column.edit"),key:m.Edit,relatedColumn:fe,depend:[{key:m.Create}]},{label:n.get("permissions.column.delete"),key:m.Delete,relatedColumn:he,depend:[{key:m.Edit}]}]},{label:n.get("permissions.sale_receipt"),subject:o.Receipt,permissions:[{label:n.get("permissions.column.view"),key:u.View,relatedColumn:ge},{label:n.get("permissions.column.create"),key:u.Create,relatedColumn:ye,depend:[{key:u.View}]},{label:n.get("permissions.column.edit"),key:u.Edit,relatedColumn:fe,depend:[{key:u.Create}]},{label:n.get("permissions.column.delete"),key:u.Delete,relatedColumn:he,depend:[{key:u.Edit}]}]},{label:n.get("permissions.credit_note"),subject:o.CreditNote,permissions:[{label:n.get("permissions.column.view"),key:p.View,relatedColumn:ge},{label:n.get("permissions.column.create"),key:p.Create,relatedColumn:ye,depend:[{key:p.View}]},{label:n.get("permissions.column.edit"),key:p.Edit,relatedColumn:fe,depend:[{key:p.Create}]},{label:n.get("permissions.column.delete"),key:p.Delete,relatedColumn:he,depend:[{key:p.Edit}]},{label:n.get("permissions.column.refund_credit_note"),key:p.Refund,depend:[{key:p.View}]}]},{label:n.get("permissions.payment_receive"),subject:o.PaymentReceive,permissions:[{label:n.get("permissions.column.view"),key:b.View,relatedColumn:ge},{label:n.get("permissions.column.create"),key:b.Create,relatedColumn:ye,depend:[{key:b.View}]},{label:n.get("permissions.column.edit"),key:b.Edit,relatedColumn:fe,depend:[{key:b.Create}]},{label:n.get("permissions.column.delete"),key:b.Delete,relatedColumn:he,depend:[{key:b.Edit}]}]}]},{label:n.get("permissions.purchases"),type:be.Columns,serviceFullAccess:!0,moduleFullAccess:!0,columns:[{label:n.get("permissions.column.view"),key:"view"},{label:n.get("permissions.column.create"),key:"create"},{label:n.get("permissions.column.edit"),key:"edit"},{label:n.get("permissions.column.delete"),key:"delete"}],services:[{label:n.get("permissions.bills"),subject:o.Bill,permissions:[{label:n.get("permissions.column.view"),key:g.View,relatedColumn:ge},{label:n.get("permissions.column.create"),key:g.Create,relatedColumn:ye,depend:[{key:g.View}]},{label:n.get("permissions.column.edit"),key:g.Edit,relatedColumn:fe,depend:[{key:g.Create}]},{label:n.get("permissions.column.delete"),key:g.Delete,relatedColumn:he,depend:[{key:g.Edit}]}]},{label:n.get("permissions.vendor_credits"),subject:o.VendorCredit,permissions:[{label:n.get("permissions.column.view"),key:y.View,relatedColumn:ge},{label:n.get("permissions.column.create"),key:y.Create,relatedColumn:ye,depend:[{key:y.View}]},{label:n.get("permissions.column.edit"),key:y.Edit,relatedColumn:fe,depend:[{key:y.Create}]},{label:n.get("permissions.column.delete"),key:y.Delete,relatedColumn:he,depend:[{key:y.Edit}]},{label:n.get("permissions.column.refund_vendor_credit"),key:y.Refund,depend:[{key:y.View}]}]},{label:n.get("permissions.payment_made"),subject:o.PaymentMade,permissions:[{label:n.get("permissions.column.view"),key:h.View,relatedColumn:ge},{label:n.get("permissions.column.create"),key:h.Create,relatedColumn:ye,depend:[{key:h.View}]},{label:n.get("permissions.column.edit"),key:h.Edit,relatedColumn:fe,depend:[{key:h.Create}]},{label:n.get("permissions.column.delete"),key:h.Delete,relatedColumn:he,depend:[{key:h.Edit}]}]}]},{label:n.get("permissions.financial_accounting"),type:be.Columns,serviceFullAccess:!0,moduleFullAccess:!0,columns:[{label:n.get("permissions.column.view"),key:"view"},{label:n.get("permissions.column.create"),key:"create"},{label:n.get("permissions.column.edit"),key:"edit"},{label:n.get("permissions.column.delete"),key:"delete"}],services:[{label:n.get("permissions.manual_journals"),subject:o.ManualJournal,permissions:[{label:n.get("permissions.column.view"),key:f.View,relatedColumn:ge},{label:n.get("permissions.column.create"),key:f.Create,relatedColumn:ye,depend:[{key:f.View}]},{label:n.get("permissions.column.edit"),key:f.Edit,relatedColumn:fe,depend:[{key:f.Create}]},{label:n.get("permissions.column.delete"),key:f.Delete,relatedColumn:he,depend:[{key:f.Edit}]}]},{label:n.get("permissions.chart_of_accounts"),subject:o.Account,permissions:[{label:n.get("permissions.column.view"),key:k.View,relatedColumn:ge},{label:n.get("permissions.column.create"),key:k.Create,relatedColumn:ye,depend:[{key:k.View}]},{label:n.get("permissions.column.edit"),key:k.Edit,relatedColumn:fe,depend:[{key:k.Create}]},{label:n.get("permissions.column.delete"),key:k.Delete,relatedColumn:he,depend:[{key:k.Edit}]},{label:n.get("permissions.column.transactions_locking"),key:k.TransactionsLocking}]},{label:n.get("permissions.expenses"),subject:o.Expense,permissions:[{label:n.get("permissions.column.view"),key:x.View,relatedColumn:ge},{label:n.get("permissions.column.create"),key:x.Create,relatedColumn:ye,depend:[{key:x.View}]},{label:n.get("permissions.column.edit"),key:x.Edit,relatedColumn:fe,depend:[{key:x.Create}]},{label:n.get("permissions.column.delete"),key:x.Delete,relatedColumn:he,depend:[{key:x.Edit}]}]}]},{label:n.get("permissions.reports"),type:be.Vertical,serviceFullAccess:!0,moduleFullAccess:!0,services:[{label:n.get("permissions.financial_reports"),subject:o.Report,permissions:[{label:n.get("permissions.balance_sheet"),key:j.READ_BALANCE_SHEET},{label:n.get("permissions.trial_balance_sheet"),key:j.READ_TRIAL_BALANCE_SHEET},{label:n.get("permissions.profit_loss_sheet"),key:j.READ_PROFIT_LOSS},{label:n.get("permissions.cash_flow_sheet"),key:j.READ_CASHFLOW},{label:n.get("permissions.journal_sheet"),key:j.READ_JOURNAL},{label:n.get("permissions.general_ledger"),key:j.READ_GENERAL_LEDGET},{label:n.get("permissions.a_r_aging_summary_report"),key:j.READ_AR_AGING_SUMMARY},{label:n.get("permissions.a_p_aging_summary_report"),key:j.READ_AP_AGING_SUMMARY},{label:n.get("permissions.purchases_by_items"),key:j.READ_PURCHASES_BY_ITEMS},{label:n.get("permissions.sales_by_items"),key:j.READ_SALES_BY_ITEMS},{label:n.get("permissions.customers_transactions"),key:j.READ_CUSTOMERS_TRANSACTIONS},{label:n.get("permissions.vendors_transactions"),key:j.READ_VENDORS_TRANSACTIONS},{label:n.get("permissions.customers_summary_balance"),key:j.READ_CUSTOMERS_SUMMARY_BALANCE},{label:n.get("permissions.vendors_summary_balance"),key:j.READ_VENDORS_SUMMARY_BALANCE},{label:n.get("permissions.inventory_valuation_summary"),key:j.READ_INVENTORY_VALUATION_SUMMARY},{label:n.get("permissions.inventory_items_details"),key:j.READ_INVENTORY_ITEM_DETAILS},{label:n.get("permissions.cashflow_account_transactions"),key:j.READ_CASHFLOW_ACCOUNT_TRANSACTION},{label:n.get("permissions.sales_tax_liability_summary"),key:j.READ_SALES_TAX_LIABILITY_SUMMARY}]}]}];function xe(e){const s=ke();return v.chain(s).map((e=>e.services)).flatten().find((s=>s.subject===e)).value()}const je={INDETARMINE:-1,ON:!0,OFF:!1},ve=e=>{const s={};return e.forEach((e=>{s[`${e.subject}/${e.ability}`]=!!e.value})),s},Ee=e=>{const s=ve(e.permissions),t=_e(s);return{roleName:e.name,roleDescription:e.description,permissions:s,serviceFullAccess:t}},_e=e=>{const s=function(){const e=ke();return v.chain(e).map((e=>e.services)).flatten().value()}();return v.chain(s).map((s=>{const{subject:t}=s,i=Re(Ne(t,e),Ae(t,e));return[s.subject,i]})).fromPairs().value()},Ce=e=>{const s=ve((e=>e.map((e=>[...e.abilities||[],...e.extraAbilities||[]].filter((e=>e.default)).map((s=>({subject:e.subject,ability:s.key||"",value:!!s.default}))))).flat())(e));return{permissions:s,serviceFullAccess:_e(s)}};function we(e){return e.permissions.filter((e=>!e.relatedColumn))}function Ne(e,s){return xe(e).permissions.every((t=>s[`${e}/${t.key}`]))}function Ae(e,s){return xe(e).permissions.every((t=>!s[`${e}/${t.key}`]))}const De=(e,s,t)=>i=>{const{subject:n}=t,r=i.currentTarget.checked,o=`${n}/${s.key}`,l=Se(),c=r?l.dependenciesOf(o):l.dependantsOf(o),a=v.chain(c).map((e=>[e,r])).fromPairs().value(),d={...e.values.permissions,[o]:r,...a},m=Ne(n,d),u=Ae(n,d);e.setFieldValue(`permissions.${o}`,r),e.setFieldValue(`serviceFullAccess.${n}`,Re(m,u)),c.forEach((s=>{e.setFieldValue(`permissions.${s}`,r)}))};function Re(e,s){return e?je.ON:s?je.OFF:je.INDETARMINE}const Oe=(e,s)=>t=>{const i=t.currentTarget.checked,n=xe(r=e.subject).permissions.map((e=>`permissions.${r}/${e.key}`));var r;s.setFieldValue(`serviceFullAccess.${e.subject}`,i),n.forEach((e=>{s.setFieldValue(e,i?je.ON:je.OFF)}))},Se=v.memoize((()=>{const e=new de,s=function(){const e=ke();return v.chain(e).map((e=>e.services)).flatten().map((e=>e.permissions.map((s=>({...s,subject:e.subject}))))).flatten().value()}();return s.forEach((s=>{e.addNode(`${s.subject}/${s.key}`,s)})),e.overallOrder().forEach((s=>{const t=e.getNodeData(s);v.isEmpty(t.depend)||v.castArray(t.depend).forEach((i=>{const n=i.subject||t.subject;e.addDependency(s,`${n}/${i.key}`)}))})),e})),Ve=E.createContext(null),Fe=E.createContext(null),Ie=()=>E.useContext(Ve),Te=()=>E.useContext(Fe);function Pe({module:e,children:s}){return A.jsx(Ve.Provider,{value:{module:e},children:s})}function Me({service:e,children:s}){return A.jsx(Fe.Provider,{value:{service:e},children:s})}function $e({column:e}){const s=Te(),t=s?.service,i=function(e,s){return e.permissions.find((e=>e.relatedColumn===s))}(t,e.key);return i?A.jsx("td",{className:"permission-checkbox",children:A.jsx(S,{name:`permissions.${t.subject}/${i.key}`,type:"checkbox",children:({field:e,form:s})=>A.jsx(Ze,{inline:!0,...e,onChange:De(s,i,t)})})}):A.jsx("td",{className:"permission-checkbox"})}function Le({columns:e}){return A.jsx(A.Fragment,{children:e.map(((e,s)=>A.jsx($e,{column:e},e.key??s)))})}function Ue(){const e=Te(),s=e?.service,t=we(s);return A.jsxs(V,{children:[A.jsx(rs,{children:A.jsx(O,{id:"permissions.more_permissions"})}),A.jsx(os,{children:t.map((e=>A.jsx(S,{name:`permissions.${s.subject}/${e.key}`,type:"checkbox",children:({form:t,field:i})=>A.jsx(Ze,{inline:!0,label:e.label,...i,onChange:De(t,e,s)})},`${s.subject}/${e.key}`)))})]})}function Ye(){const e=Te(),s=e?.service,t=we(s);return A.jsx("td",{children:A.jsx(R,{condition:t.length>0,children:A.jsx(Ue,{})})})}function Be(){const e=Ie(),s=e?.module,{serviceFullAccess:t,columns:i}=s;return A.jsx("thead",{children:A.jsxs("tr",{children:[A.jsx("th",{}),A.jsx(R,{condition:!!t,children:A.jsx("th",{className:"full",children:A.jsx(O,{id:"permissions.column.full_access"})})}),i?.map(((e,s)=>A.jsx("th",{className:"permission",children:e.label},e.key??s))),A.jsx("th",{})]})})}function Ge(){const e=Ie(),s=e?.module,t=Te(),i=t?.service;return A.jsx(R,{condition:!!s.serviceFullAccess,children:A.jsx("td",{className:"full-access-permission",children:A.jsx(S,{name:`serviceFullAccess.${i.subject}`,type:"checkbox",children:({form:e,field:s})=>A.jsx(Ze,{inline:!0,...s,indeterminate:s.value===je.INDETARMINE,onChange:Oe(i,e)})})})})}function He(){const e=Ie(),s=e?.module,{services:t,columns:i}=s;return A.jsx("tbody",{children:t.map((e=>A.jsx(Me,{service:e,children:A.jsxs("tr",{children:[A.jsxs("td",{className:"service-label",children:[e.label," "]}),A.jsx(Ge,{}),A.jsx(Le,{columns:i??[]}),A.jsx(Ye,{})]})},e.subject)))})}function ze(){return A.jsxs(ns,{children:[A.jsx(Be,{}),A.jsx(He,{})]})}function We(){const e=Te(),s=e?.service;return A.jsx("td",{className:"permissions",children:s.permissions.map((e=>A.jsx("div",{children:A.jsx(S,{name:`permissions.${s.subject}/${e.key}`,type:"checkbox",children:({form:t,field:i})=>A.jsx(Ze,{inline:!0,label:e.label,...i,onChange:De(t,e,s)})})},`${s.subject}/${e.key}`)))})}function qe(){const e=Ie(),s=e?.module;return A.jsx(ls,{children:A.jsx(cs,{children:A.jsx("tbody",{children:s.services.map((e=>A.jsx(Me,{service:e,children:A.jsxs("tr",{children:[A.jsxs("td",{className:"service-label",children:[e.label," "]}),A.jsx(We,{})]})},e.subject)))})})})}function Je(){const e=Ie(),s=e?.module;return A.jsx(is,{children:A.jsxs(D,{children:[A.jsx(D.When,{condition:s.type===be.Vertical,children:A.jsx(qe,{})}),A.jsx(D.When,{condition:s.type===be.Columns,children:A.jsx(ze,{})})]})})}function Ke({module:e}){return A.jsx(es,{children:A.jsxs(Pe,{module:e,children:[A.jsx(ss,{children:A.jsxs(ts,{children:[e.label," "]})}),A.jsx(Je,{})]})})}const Xe=()=>{const e=ke();return A.jsx(Qe,{children:e.map(((e,s)=>A.jsx(Ke,{module:e},s)))})},Ze=_(C)`
  &.bp4-control.bp4-checkbox .bp4-control-indicator {
    border-radius: 2px;
    border-color: #555;

    &,
    &:before {
      width: 15px;
      height: 15px;
    }
  }
`,Qe=_.div``,es=_(w)`
  padding: 0 !important;
`,ss=_.div`
  border-bottom: 1px solid var(--color-role-module-header-border, #d9d9d9);
  height: 38px;
  padding: 0 15px;
  display: flex;

  .bp4-dark & {
    --color-role-module-header-border: rgba(255, 255, 255, 0.1);
  }
`,ts=_.div`
  font-weight: 500;
  font-size: 16px;
  line-height: 38px;
  color: var(--color-role-module-title, #878787);

  .bp4-dark & {
    --color-role-module-title: rgba(255, 255, 255, 0.6);
  }
`,is=_.div``,ns=_.table`
  border-spacing: 0;

  thead {
    tr th {
      font-weight: 400;
      vertical-align: top;

      &.full,
      &.permission {
        min-width: 70px;
      }
      &.full {
        background-color: var(--color-role-table-header-bg, #fcfcfc);
      }
    }
  }
  thead,
  tbody {
    tr td,
    tr th {
      border-bottom: 1px solid var(--color-role-table-border, #eee);
      border-left: 1px solid var(--color-role-table-border, #eee);
      padding: 10px;

      &:first-of-type {
        border-left: 0;
      }
    }

    tr:last-of-type td {
      border-bottom: 0;
    }

    tr td:last-of-type,
    tr th:last-of-type {
      width: 100%;
    }
  }

  tbody {
    tr td.service-label {
      min-width: 250px;
    }

    tr td {
      .bp4-control.bp4-inline {
        margin: 0;
      }

      &.full-access-permission {
        background-color: var(--color-role-table-header-bg, #fcfcfc);
      }

      &.full-access-permission,
      &.permission-checkbox {
        text-align: center;
      }
    }
  }

  .bp4-dark & {
    --color-role-table-header-bg: rgba(255, 255, 255, 0.05);
    --color-role-table-border: rgba(255, 255, 255, 0.1);
  }
`,rs=_(N)`
  font-size: 12px;
`,os=_.div`
  display: flex;
  flex-direction: column;
  padding: 15px;
`,ls=_.div``,cs=_.table`
  border-spacing: 0;

  tbody {
    tr td {
      padding: 10px;
      vertical-align: top;
      border-left: 1px solid var(--color-role-table-border, #eee);
      border-bottom: 1px solid var(--color-role-table-border, #eee);

      &.service-label {
        min-width: 250px;
        color: var(--color-role-service-label, #333);
      }

      &:first-of-type {
        border-left: 0;
      }

      &.permissions {
        width: 100%;
      }
    }

    tr:last-of-type td {
      border-bottom: 0;
    }
  }

  .bp4-dark & {
    --color-role-table-border: rgba(255, 255, 255, 0.1);
    --color-role-service-label: rgba(255, 255, 255, 0.85);
  }
`;function as(){const{isSubmitting:e}=F(),s=I();return A.jsxs(ds,{children:[A.jsx(T,{intent:P.PRIMARY,loading:e,type:"submit",style:{minWidth:"90px"},children:A.jsx(M,{id:"save"})}),A.jsx(T,{onClick:()=>{s.go(-1)},disabled:e,children:A.jsx(M,{id:"cancel"})})]})}const ds=_.div`
  --color-role-form-floating-bg: #fff;
  --color-role-form-floating-border: #d2dde2;

  .bp4-dark & {
    --color-role-form-floating-bg: var(--color-dark-gray1);
    --color-role-form-floating-border: rgba(255, 255, 255, 0.1);
  }
  position: fixed;
  bottom: 0;
  width: 100%;
  background: var(--color-role-form-floating-bg);
  padding: 14px 18px;
  border-top: 1px solid var(--color-role-form-floating-border);
  box-shadow: 0px -1px 4px 0px rgb(0 0 0 / 5%);

  .bp4-button {
    margin-right: 10px;
  }
`;function ms(){const e=ee();return A.jsxs(w,{children:[A.jsx($,{name:"roleName",label:A.jsx("strong",{children:A.jsx(M,{id:"roles.label.role_name"})}),labelInfo:A.jsx(se,{}),inline:!0,fastField:!0,children:A.jsx(Z,{name:"roleName",inputRef:s=>{e.current=s},fill:!0,fastField:!0})}),A.jsx($,{name:"roleDescription",label:n.get("description"),inline:!0,fastField:!0,children:A.jsx(Q,{name:"roleDescription",growVertically:!0,placeholder:"Max. 500 characters",fill:!0,fastField:!0})})]})}function us(){const{values:e}=F();return A.jsx(L,{onChange:()=>{},values:e})}function ps(){return A.jsxs(U,{children:[A.jsx(ms,{}),A.jsx(Xe,{}),A.jsx(as,{}),A.jsx(us,{})]})}const bs=E.createContext({});function gs({roleId:e,children:s}){const{mutateAsync:t}=ie(),{mutateAsync:i}=ne(),{data:n,isLoading:r,isFetching:o}=re(),{data:l,isLoading:c}=oe(e,{enabled:!!e}),a={isNewMode:!e,roleId:e??0,role:l,permissionsSchema:n,isPermissionsSchemaLoading:r,isPermissionsSchemaFetching:o,createRolePermissionMutate:t,editRolePermissionMutate:i};return A.jsx("div",{className:Y(B.PREFERENCES_PAGE_INSIDE_CONTENT,B.PREFERENCES_PAGE_INSIDE_CONTENT_ROLES_FORM),children:r||c?A.jsx(te,{}):A.jsx(bs.Provider,{value:a,children:s})})}const ys={roleName:"",roleDescription:"",permissions:{},serviceFullAccess:{}},hs=G((function({changePreferencesPageTitle:e}){const s=I(),{isNewMode:t,createRolePermissionMutate:i,editRolePermissionMutate:r,permissionsSchema:o,role:l,roleId:c}=E.useContext(bs),a={...ys,...v.isEmpty(l)?Ce(o||[]):z(Ee(l),ys)};return E.useEffect((()=>{e(n.get("roles.label"))}),[e]),A.jsx(W,{initialValues:a,validationSchema:t?ce:ae,onSubmit:(e,{setSubmitting:o})=>{const a=(({permissions:e},s)=>Object.keys(e).map((t=>{const[i,n]=t.split("/"),r=s?.permissions.find((e=>e.subject===i&&e.ability===n));return{subject:i,ability:n,value:e[t],...r?{permissionId:r.id}:{}}})))(e,l),d={roleName:e.roleName,roleDescription:e.roleDescription,permissions:a};o(!0);const m=()=>{q.show({message:n.get(t?"roles.permission_schema.success_message":"roles.permission_schema.upload_message"),intent:P.SUCCESS}),o(!1),s.push("/preferences/users")},u=({data:{errors:e}})=>{o(!1),K(e)};t?i(d).then(m).catch(u):r([c,d]).then(m).catch(u)},children:A.jsx(ps,{})})}),H)}}}));
