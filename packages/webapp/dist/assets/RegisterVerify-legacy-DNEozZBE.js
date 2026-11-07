System.register(["./index-legacy-D5XI0zpp.js","./AuthInsider-legacy-ChYvdBoO.js","./queries-legacy-Ct__8mSf.js","./Stack-legacy-Cw-5jWUp.js"],(function(e,i){"use strict";var n,t,s,r,c,l,a,o,g,h,d,x,m,j;return{setters:[e=>{n=e.c9,t=e.w,s=e.b9,r=e.bJ,c=e.c$,l=e.cf,a=e.cb,o=e.$,g=e.e,h=e.bg},e=>{d=e.A,x=e.a},e=>{m=e.b},e=>{j=e.S}],execute:function(){function i({children:e}){return t.jsx(u,{children:t.jsxs(f,{children:[t.jsx(b,{children:t.jsx(s,{icon:"bigcapital",height:37,width:214})}),e]})})}e("RegisterVerify",(function(){const{setLogout:e}=r(),{mutateAsync:n,isPending:s}=m(),u=c(),f=l();return t.jsx(i,{children:t.jsx(d,{children:t.jsxs(x,{textAlign:"center",children:[t.jsx(a.h2,{fontSize:"18px",fontWeight:600,mb:"0.5rem",color:f?"rgba(255, 255, 255, 0.85)":"#252A31",children:"Please verify your email"}),t.jsxs(a.p,{mb:"1rem",fontSize:"15px",lineHeight:"1.45",color:f?"rgba(255, 255, 255, 0.7)":"#404854",children:["We sent an email to ",t.jsx("strong",{children:u})," Click the link inside to get started."]}),t.jsxs(j,{spacing:4,children:[t.jsx(o,{large:!0,fill:!0,loading:s,intent:g.NONE,onClick:()=>{n().then((()=>{h.show({intent:g.SUCCESS,message:"The verification mail has sent successfully."})})).catch((()=>{h.show({intent:g.DANGER,message:"Something went wrong."})}))},children:"Resend email"}),t.jsx(o,{large:!0,fill:!0,minimal:!0,intent:g.DANGER,onClick:()=>{e()},children:"Not my email"})]})]})})})}));const u=n.div``,f=n.div`
  width: 384px;
  margin: 0 auto;
  margin-bottom: 40px;
  padding-top: 80px;
`,b=n.div`
  text-align: center;
  margin-bottom: 40px;
`}}}));
