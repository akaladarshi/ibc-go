"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[9752],{53995:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>d,contentTitle:()=>c,default:()=>h,frontMatter:()=>r,metadata:()=>i,toc:()=>a});var l=s(85893),n=s(11151);const r={title:"Events",sidebar_label:"Events",sidebar_position:4,slug:"/middleware/callbacks/events"},c="Events",i={id:"middleware/callbacks/events",title:"Events",description:'An overview of all events related to the callbacks middleware. There are two types of events, "ibcsrccallback" and "ibcdestcallback".',source:"@site/versioned_docs/version-v8.1.x/04-middleware/02-callbacks/04-events.md",sourceDirName:"04-middleware/02-callbacks",slug:"/middleware/callbacks/events",permalink:"/v8/middleware/callbacks/events",draft:!1,unlisted:!1,tags:[],version:"v8.1.x",sidebarPosition:4,frontMatter:{title:"Events",sidebar_label:"Events",sidebar_position:4,slug:"/middleware/callbacks/events"},sidebar:"defaultSidebar",previous:{title:"Interfaces",permalink:"/v8/middleware/callbacks/interfaces"},next:{title:"End Users",permalink:"/v8/middleware/callbacks/end-users"}},d={},a=[{value:"Shared Attributes",id:"shared-attributes",level:2},{value:"<code>ibc_src_callback</code> Attributes",id:"ibc_src_callback-attributes",level:2},{value:"<code>ibc_dest_callback</code> Attributes",id:"ibc_dest_callback-attributes",level:2}];function x(e){const t={code:"code",h1:"h1",h2:"h2",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,n.a)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(t.h1,{id:"events",children:"Events"}),"\n",(0,l.jsxs)(t.p,{children:["An overview of all events related to the callbacks middleware. There are two types of events, ",(0,l.jsx)(t.code,{children:'"ibc_src_callback"'})," and ",(0,l.jsx)(t.code,{children:'"ibc_dest_callback"'}),"."]}),"\n",(0,l.jsx)(t.h2,{id:"shared-attributes",children:"Shared Attributes"}),"\n",(0,l.jsx)(t.p,{children:"Both of these event types share the following attributes:"}),"\n",(0,l.jsxs)(t.table,{children:[(0,l.jsx)(t.thead,{children:(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.th,{style:{textAlign:"center"},children:(0,l.jsx)(t.strong,{children:"Attribute Key"})}),(0,l.jsx)(t.th,{style:{textAlign:"center"},children:(0,l.jsx)(t.strong,{children:"Attribute Values"})}),(0,l.jsx)(t.th,{style:{textAlign:"center"},children:(0,l.jsx)(t.strong,{children:"Optional"})})]})}),(0,l.jsxs)(t.tbody,{children:[(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"module"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:'"ibccallbacks"'}),(0,l.jsx)(t.td,{style:{textAlign:"center"}})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"callback_type"}),(0,l.jsxs)(t.td,{style:{textAlign:"center"},children:[(0,l.jsx)(t.strong,{children:"One of"}),': "send_packet", "acknowledgement_packet", "timeout_packet", "receive_packet"']}),(0,l.jsx)(t.td,{style:{textAlign:"center"}})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"callback_address"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"string"}),(0,l.jsx)(t.td,{style:{textAlign:"center"}})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"callback_exec_gas_limit"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"string (parsed from uint64)"}),(0,l.jsx)(t.td,{style:{textAlign:"center"}})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"callback_commit_gas_limit"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"string (parsed from uint64)"}),(0,l.jsx)(t.td,{style:{textAlign:"center"}})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"packet_sequence"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"string (parsed from uint64)"}),(0,l.jsx)(t.td,{style:{textAlign:"center"}})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"callback_result"}),(0,l.jsxs)(t.td,{style:{textAlign:"center"},children:[(0,l.jsx)(t.strong,{children:"One of"}),': "success", "failure"']}),(0,l.jsx)(t.td,{style:{textAlign:"center"}})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"callback_error"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"string (parsed from callback err)"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"Yes, if err != nil"})]})]})]}),"\n",(0,l.jsxs)(t.h2,{id:"ibc_src_callback-attributes",children:[(0,l.jsx)(t.code,{children:"ibc_src_callback"})," Attributes"]}),"\n",(0,l.jsxs)(t.table,{children:[(0,l.jsx)(t.thead,{children:(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.th,{style:{textAlign:"center"},children:(0,l.jsx)(t.strong,{children:"Attribute Key"})}),(0,l.jsx)(t.th,{style:{textAlign:"center"},children:(0,l.jsx)(t.strong,{children:"Attribute Values"})})]})}),(0,l.jsxs)(t.tbody,{children:[(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"packet_src_port"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"string (sourcePortID)"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"packet_src_channel"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"string (sourceChannelID)"})]})]})]}),"\n",(0,l.jsxs)(t.h2,{id:"ibc_dest_callback-attributes",children:[(0,l.jsx)(t.code,{children:"ibc_dest_callback"})," Attributes"]}),"\n",(0,l.jsxs)(t.table,{children:[(0,l.jsx)(t.thead,{children:(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.th,{style:{textAlign:"center"},children:(0,l.jsx)(t.strong,{children:"Attribute Key"})}),(0,l.jsx)(t.th,{style:{textAlign:"center"},children:(0,l.jsx)(t.strong,{children:"Attribute Values"})})]})}),(0,l.jsxs)(t.tbody,{children:[(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"packet_dest_port"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"string (destPortID)"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"packet_dest_channel"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"string (destChannelID)"})]})]})]})]})}function h(e={}){const{wrapper:t}={...(0,n.a)(),...e.components};return t?(0,l.jsx)(t,{...e,children:(0,l.jsx)(x,{...e})}):x(e)}},11151:(e,t,s)=>{s.d(t,{Z:()=>i,a:()=>c});var l=s(67294);const n={},r=l.createContext(n);function c(e){const t=l.useContext(r);return l.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:c(e.components),l.createElement(r.Provider,{value:t},e.children)}}}]);