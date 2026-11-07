System.register(["./index-legacy-D5XI0zpp.js","./Stack-legacy-Cw-5jWUp.js","./Textarea-legacy-B-sG4xXI.js"],(function(e,t){"use strict";var r,o,a,l,i,n,s,c,d,p,m,g,u,x,b,h,f,v,j,y,w;return{setters:[e=>{r=e.oJ,o=e.bS,a=e.cf,l=e.w,i=e.er,n=e.cb,s=e.$,c=e.oN,d=e.b9,p=e.eM,m=e.cc,g=e.r,u=e.c5,x=e.c7,b=e.ci,h=e.m,f=e.I,v=e.eC,j=e.k},e=>{y=e.S},e=>{w=e.T}],execute:function(){e({S:function({children:e}){return l.jsx(p,{id:"preview",defaultSelectedTabId:"payment-page",className:m`
        --x-color-background: var(--color-white);
        --x-color-border: #dcdcdd;
        --x-color-tab-text: #5f6b7c;

        .bp4-dark & {
          --x-color-background: var(--color-dark-gray2);
          --x-color-border: rgba(255, 255, 255, 0.2);
          --x-color-tab-text: rgba(255, 255, 255, 0.6);
        }
        overflow: hidden;
        flex: 1 1;
        display: flex;
        flex-direction: column;

        .bp4-tab-list {
          padding: 0 20px;
          background: var(--x-color-background);
          border-bottom: 1px solid var(--x-color-border);
        }
        .bp4-tab {
          line-height: 40px;
        }
        .bp4-tab:not([aria-selected='true']) {
          color: var(--x-color-tab-text);
        }
        .bp4-tab-indicator-wrapper .bp4-tab-indicator {
          height: 2px;
        }
        .bp4-tab-panel {
          margin: 0;
          overflow: auto;
        }
      `,children:e})},a:function({formGroupProps:e,toMultiSelectProps:r,ccMultiSelectProps:o,bccMultiSelectProps:a}){const{values:n,setFieldValue:c}=u(),[d,p]=g.useState(!1),[m,b]=g.useState(!1),h=e=>{e.preventDefault(),e.stopPropagation(),p(!0)},f=e=>{e.preventDefault(),e.stopPropagation(),b(!0)},j=e=>{"Enter"===e.key&&e.preventDefault()},w=g.useMemo((()=>l.jsxs(i,{spacing:0,paddingRight:"7px",paddingTop:"7px",fontWeight:500,color:"#000",children:[l.jsx(s,{onClick:h,minimal:!0,small:!0,className:P,children:"CC"}),l.jsx(s,{onClick:f,minimal:!0,small:!0,className:P,children:"BCC"})]})),[]);return l.jsx(x,{label:"To",name:"to",...e,children:l.jsxs(y,{spacing:0,className:t,children:[l.jsx(v,{items:[],name:"to",placeholder:"To",popoverProps:{minimal:!0,fill:!0},tagInputProps:{tagProps:{round:!0,minimal:!0,large:!0},rightElement:w,large:!0,inputProps:{onKeyDown:j}},createNewItemRenderer:S,createNewItemFromQuery:I,onCreateItemSelect:e=>{c("to",[...n?.to,e?.text])},resetOnQuery:!0,resetOnSelect:!0,fill:!0,fastField:!0,...r}),d&&l.jsx(v,{items:[],name:"cc",placeholder:"Cc",popoverProps:{minimal:!0,fill:!0},tagInputProps:{tagProps:{round:!0,minimal:!0,large:!0},large:!0,inputProps:{onKeyDown:j}},createNewItemRenderer:S,createNewItemFromQuery:I,onCreateItemSelect:e=>{c("cc",[...n?.cc,e?.text])},resetOnQuery:!0,resetOnSelect:!0,fill:!0,fastField:!0,...o}),m&&l.jsx(v,{items:[],name:"bcc",placeholder:"Bcc",popoverProps:{minimal:!0,fill:!0},tagInputProps:{tagProps:{round:!0,minimal:!0,large:!0},large:!0,inputProps:{onKeyDown:j}},createNewItemRenderer:S,createNewItemFromQuery:I,onCreateItemSelect:e=>{c("bcc",[...n?.bcc,e?.text])},resetOnQuery:!0,resetOnSelect:!0,fill:!0,fastField:!0,...a})]})})},b:function({argsOptions:e,formGroupProps:t,textareaProps:r}){const o=g.useRef(null),{setFieldValue:n}=u(),c=a(),d=g.useCallback((e=>{const t=o.current;if(!t)return;const{selectionStart:r,selectionEnd:a,value:l}=t,i=`{${e.value}}`,s=l.substring(0,r)+i+l.substring(a);n("message",s),setTimeout((()=>{t.selectionStart=t.selectionEnd=r+i.length,t.focus()}),0)}),[n]);return l.jsx(x,{label:"Message",name:"message",...t,children:l.jsxs(y,{spacing:0,children:[l.jsx(i,{border:"1px solid "+(c?"rgba(255, 255, 255, 0.2)":"#ced4da"),borderBottom:0,borderRadius:"3px 3px 0 0",children:l.jsx(b,{selectedItem:"customerName",name:"item",items:e,onItemChange:d,popoverProps:{fill:!1,position:h.BOTTOM_LEFT,minimal:!0,inputProps:{onKeyDown:e=>{"Enter"===e.key&&e.preventDefault()}}},input:()=>l.jsx(s,{minimal:!0,rightIcon:l.jsx(f,{icon:"caret-down",color:"#8F99A8"}),children:"Insert Variable"}),fill:!1,fastField:!0})}),l.jsx(w,{inputRef:o,name:"message",large:!0,fill:!0,fastField:!0,className:m`
            resize: vertical;
            min-height: 300px;
            border-top-right-radius: 0px;
            border-top-left-radius: 0px;
          `,...r})]})})},c:function({header:e,fields:t,preview:r}){const o=a();return l.jsxs(y,{spacing:0,flex:1,overflow:"hidden",children:[e,l.jsxs(i,{flex:1,overflow:"auto",spacing:0,alignItems:"stretch",children:[l.jsx(y,{bg:o?"var(--color-dark-gray2)":"white",flex:"1",maxWidth:"720px",maxHeight:"100%",spacing:0,borderRightWidth:1,borderRightStyle:"solid",borderRightColor:o?"rgba(255, 255, 255, 0.2)":"#dcdcdd",children:t}),l.jsx(y,{bg:o?"var(--color-dark-gray2)":"#F5F5F5",flex:"1",maxHeight:"100%",minWidth:"850px",children:r})]})]})},d:function({label:e,closeButton:t=!0}){const{name:p}=r(),{closeDrawer:m}=o(),g=a();return l.jsxs(i,{p:"10px",pl:"30px",bg:g?"var(--color-dark-gray2)":"white",alignItems:"center",boxShadow:"0 1px 0 "+(g?"rgba(255, 255, 255, 0.2)":"rgba(17, 20, 24, .15)"),zIndex:1,style:{position:"relative"},children:[e&&l.jsx(n.h1,{margin:0,fontSize:20,fontWeight:500,color:g?"rgba(255, 255, 255, 0.75)":"#666",children:e}),t&&l.jsx(s,{"aria-label":"Close",className:c,icon:l.jsx(d,{icon:"smallCross",color:g?"rgba(255, 255, 255, 0.85)":"#000"}),minimal:!0,onClick:()=>{m(p)},style:{marginLeft:"auto"}})]})}});const t=m`
  > :not(:first-of-type) .bp4-input {
    border-top-color: transparent;
    border-top-right-radius: 0;
    border-top-left-radius: 0;
  }
  > :not(:last-of-type) .bp4-input {
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
  }
`,P=m`
  &.bp4-button.bp4-small {
    width: auto;
    margin: 0;
    min-height: 26px;
    line-height: 26px;
    padding-top: 0;
    padding-bottom: 0;
    font-size: 12px;
  }
`,S=(e,t,r)=>l.jsx(j,{icon:"add",text:"Now contact address",active:t,onClick:r}),I=e=>({text:e})}}}));
