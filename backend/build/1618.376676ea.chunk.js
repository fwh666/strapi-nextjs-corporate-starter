(self.webpackChunkcorporate_blog_template=self.webpackChunkcorporate_blog_template||[]).push([[1618],{79194:(T,u,e)=>{"use strict";e.d(u,{v:()=>n});var t=e(67294),o=e(86706);function n(l,i){const s=(0,o.oR)();(0,t.useEffect)(()=>{s.injectReducer(l,i)},[s,l,i])}},7761:(T,u,e)=>{"use strict";e.d(u,{pl:()=>c,aY:()=>D,q5:()=>d.q});var t=e(67294),o=e(26067),n=e(18172);const l={data:[],isLoading:!0},s=(S,L)=>(0,n.ZP)(S,R=>{switch(L.type){case"GET_DATA_SUCCEEDED":{R.data=L.data,R.isLoading=!1;break}case"GET_DATA_ERROR":{R.isLoading=!1;break}default:return R}}),c=({ssoEnabled:S})=>{const[L,R]=(0,t.useReducer)(s,l),O=(0,o.lm)(),{get:y}=(0,o.kY)();return(0,t.useEffect)(()=>{(async()=>{try{if(!S){R({type:"GET_DATA_SUCCEEDED",data:[]});return}const{data:M}=await y("/admin/providers");R({type:"GET_DATA_SUCCEEDED",data:M})}catch(M){console.error(M),R({type:"GET_DATA_ERROR"}),O({type:"warning",message:{id:"notification.error"}})}})()},[y,S,O]),L};var r=e(14293),a=e.n(r),f=e(86896),m=e(16550),d=e(71926);const v="strapi-notification-seat-limit",A="https://cloud.strapi.io/profile/billing",I="https://strapi.io/billing/request-seats",D=()=>{const{formatMessage:S}=(0,f.Z)();let{license:L,isError:R,isLoading:O}=(0,d.q)();const y=(0,o.lm)(),{pathname:p}=(0,m.TH)(),{enforcementUserCount:M,permittedSeats:W,licenseLimitStatus:C,isHostedOnStrapiCloud:U}=L;(0,t.useEffect)(()=>{if(R||O)return;const G=!a()(W)&&!window.sessionStorage.getItem(`${v}-${p}`)&&(C==="AT_LIMIT"||C==="OVER_LIMIT");let Z;C==="OVER_LIMIT"?Z="warning":C==="AT_LIMIT"&&(Z="softWarning"),G&&y({type:Z,message:S({id:"notification.ee.warning.over-.message",defaultMessage:"Add seats to {licenseLimitStatus, select, OVER_LIMIT {invite} other {re-enable}} Users. If you already did it but it's not reflected in Strapi yet, make sure to restart your app."},{licenseLimitStatus:C}),title:S({id:"notification.ee.warning.at-seat-limit.title",defaultMessage:"{licenseLimitStatus, select, OVER_LIMIT {Over} other {At}} seat limit ({enforcementUserCount}/{permittedSeats})"},{licenseLimitStatus:C,enforcementUserCount:M,permittedSeats:W}),link:{url:U?A:I,label:S({id:"notification.ee.warning.seat-limit.link",defaultMessage:"{isHostedOnStrapiCloud, select, true {ADD SEATS} other {CONTACT SALES}}"},{isHostedOnStrapiCloud:U})},blockTransition:!0,onClose(){window.sessionStorage.setItem(`${v}-${p}`,!0)}})},[y,L,p,S,O,W,C,M,U,R])}},71926:(T,u,e)=>{"use strict";e.d(u,{q:()=>l});var t=e(67294),o=e(26067),n=e(88767);function l({enabled:i}={enabled:!0}){const{get:s}=(0,o.kY)(),{data:h,isError:c,isLoading:r}=(0,n.useQuery)(["ee","license-limit-info"],async()=>{const{data:{data:m}}=await s("/admin/license-limit-information");return m},{enabled:i}),a=h??{},f=t.useCallback(m=>(a?.features??[]).find(v=>v.name===m)?.options??{},[a?.features]);return{license:a,getFeature:f,isError:c,isLoading:r}}},11984:(T,u,e)=>{"use strict";e.d(u,{CI:()=>l,FP:()=>s,Js:()=>c,_V:()=>n,fC:()=>o,rI:()=>h,xn:()=>i});var t=e(86978);function o({status:r,data:a}){return{type:t.qZ,payload:{status:r,workflow:a}}}function n(r){return{type:t.x4,payload:{stageId:r}}}function l(r={}){return{type:t.Ot,payload:r}}function i(r,a){return{type:t.Nj,payload:{stageId:r,...a}}}function s(r,a){return{type:t.$k,payload:{newIndex:a,oldIndex:r}}}function h(r){return{type:t.VS,payload:r}}function c(){return{type:t.gu}}},43390:(T,u,e)=>{"use strict";e.d(u,{eJ:()=>O,lx:()=>L,h4:()=>y,fC:()=>R});var t=e(67294),o=e(17034),n=e(185),l=e(49066),i=e(53979),s=e(26067),h=e(67109),c=e(86896),r=e(52713),a=e(86978),f=e(11047),m=e(75515),d=e(12645),v=e(45697),A=e.n(v),I=e(46449);const P=(0,I.ZP)(f.k)`
  svg path {
    fill: ${({theme:p})=>p.colors.neutral600};
  }
`;function D({name:p}){return t.createElement(f.k,{background:"primary100",borderStyle:"dashed",borderColor:"primary600",borderWidth:"1px",gap:3,hasRadius:!0,padding:3,shadow:"tableShadow",width:(0,s.Q1)(300)},t.createElement(P,{alignItems:"center",background:"neutral200",borderRadius:"50%",height:6,justifyContent:"center",width:6},t.createElement(d.Z,{width:`${8/16}rem`})),t.createElement(m.Z,{fontWeight:"bold"},p))}D.propTypes={name:A().string.isRequired};function S({type:p,item:M}){switch(p){case a.uL.STAGE:return t.createElement(D,{...M});default:return null}}function L(){return t.createElement(r.r,{renderItem:S})}function R({children:p}){return t.createElement(o.A,null,t.createElement(n.o,{tabIndex:-1},t.createElement(l.D,null,p)))}function O({href:p}){const{formatMessage:M}=(0,c.Z)();return t.createElement(s.rU,{startIcon:t.createElement(h.Z,null),to:p},M({id:"global.back",defaultMessage:"Back"}))}function y({title:p,subtitle:M,navigationAction:W,primaryAction:C}){return t.createElement(t.Fragment,null,t.createElement(s.SL,{name:p}),t.createElement(i.T,{navigationAction:W,primaryAction:C,title:p,subtitle:M}))}},38705:(T,u,e)=>{"use strict";e.d(u,{uT:()=>S,fC:()=>O,Dx:()=>D});var t=e(67294),o=e(75515),n=e(11047),l=e(42866),i=e(59946),s=e(41580),h=e(12028),c=e(80994),r=e(70968),a=e(45697),f=e.n(a),m=e(86896),d=e(46449);const v=e.p+"0cd5f8915b265d5b1856.png",A="limits-title",I="https://strapi.io/pricing-cloud",P="https://strapi.io/contact-sales";function D({children:y}){return t.createElement(o.Z,{variant:"alpha",id:A},y)}D.propTypes={children:f().node.isRequired};function S({children:y}){return t.createElement(o.Z,{variant:"omega"},y)}S.propTypes={children:f().node.isRequired};function L(){const{formatMessage:y}=(0,m.Z)();return t.createElement(n.k,{gap:2,paddingTop:4},t.createElement(c.Q,{variant:"default",isExternal:!0,href:I},y({id:"Settings.review-workflows.limit.cta.learn",defaultMessage:"Learn more"})),t.createElement(c.Q,{variant:"tertiary",isExternal:!0,href:P},y({id:"Settings.review-workflows.limit.cta.sales",defaultMessage:"Contact Sales"})))}const R=d.ZP.img`
  // Margin top|right reverse the padding of ModalBody
  margin-right: ${({theme:y})=>`-${y.spaces[7]}`};
  margin-top: ${({theme:y})=>`-${y.spaces[7]}`};
  width: 360px;
`;function O({children:y,isOpen:p,onClose:M}){const{formatMessage:W}=(0,m.Z)();return p?t.createElement(l.P,{labelledBy:A},t.createElement(i.f,null,t.createElement(n.k,{gap:2,paddingLeft:7,position:"relative"},t.createElement(n.k,{alignItems:"start",direction:"column",gap:2,width:"60%"},y,t.createElement(L,null)),t.createElement(n.k,{justifyContent:"end",height:"100%",width:"40%"},t.createElement(R,{src:v,"aria-hidden":!0,alt:"",loading:"lazy"}),t.createElement(s.x,{display:"flex",position:"absolute",right:0,top:0},t.createElement(h.h,{icon:t.createElement(r.Z,null),"aria-label":W({id:"global.close",defaultMessage:"Close"}),onClick:M})))))):null}O.defaultProps={isOpen:!1},O.propTypes={children:f().node.isRequired,isOpen:f().bool,onClose:f().func.isRequired}},68997:(T,u,e)=>{"use strict";e.d(u,{U:()=>x});var t=e(67294),o=e(41580),n=e(11047),l=e(26067),i=e(45697),s=e.n(i),h=e(86896),c=e(86706),r=e(46449),a=e(11984),f=e(75515),m=e(99782);const d=(0,r.ZP)(m.Z)`
  > circle {
    fill: ${({theme:g})=>g.colors.neutral150};
  }
  > path {
    fill: ${({theme:g})=>g.colors.neutral600};
  }
`,v=(0,r.ZP)(o.x)`
  border-radius: 26px;

  svg {
    height: ${({theme:g})=>g.spaces[6]};
    width: ${({theme:g})=>g.spaces[6]};

    > path {
      fill: ${({theme:g})=>g.colors.neutral600};
    }
  }

  &:hover {
    color: ${({theme:g})=>g.colors.primary600} !important;
    ${f.Z} {
      color: ${({theme:g})=>g.colors.primary600} !important;
    }

    ${d} {
      > circle {
        fill: ${({theme:g})=>g.colors.primary600};
      }
      > path {
        fill: ${({theme:g})=>g.colors.neutral100};
      }
    }
  }

  &:active {
    ${f.Z} {
      color: ${({theme:g})=>g.colors.primary600};
    }

    ${d} {
      > circle {
        fill: ${({theme:g})=>g.colors.primary600};
      }
      > path {
        fill: ${({theme:g})=>g.colors.neutral100};
      }
    }
  }
`;function A({children:g,...b}){return t.createElement(v,{as:"button",background:"neutral0",border:"neutral150",paddingBottom:3,paddingLeft:4,paddingRight:4,paddingTop:3,shadow:"filterShadow",...b},t.createElement(n.k,{gap:2},t.createElement(d,{"aria-hidden":!0}),t.createElement(f.Z,{variant:"pi",fontWeight:"bold",textColor:"neutral500"},g)))}A.propTypes={children:s().node.isRequired};var I=e(63237),P=e(48734),D=e(74756),S=e(12028),L=e(63081),R=e(11276),O=e(67819),y=e(16364),p=e(70642),M=e(20022),W=e(12814),C=e(41054),U=e(61080),G=e(21440),Z=e(21892),J=e(86978),K=e(5318);const q=(0,K.s)();function E(){return t.createElement(o.x,{background:"primary100",borderStyle:"dashed",borderColor:"primary600",borderWidth:"1px",display:"block",hasRadius:!0,padding:6,shadow:"tableShadow"})}function k({id:g,index:b,canDelete:$,canReorder:ee,canUpdate:F,isOpen:te=!1,stagesCount:j}){const V=w=>`${w+1} of ${j}`,Y=w=>{X(N({id:"dnd.grab-item",defaultMessage:"{item}, grabbed. Current position in list: {position}. Press up and down arrow to change position, Spacebar to drop, Escape to cancel."},{item:B.value,position:V(w)}))},ie=w=>{X(N({id:"dnd.drop-item",defaultMessage:"{item}, dropped. Final position in list: {position}."},{item:B.value,position:V(w)}))},ce=()=>{X(N({id:"dnd.cancel-item",defaultMessage:"{item}, dropped. Re-order cancelled."},{item:B.value}))},de=(w,H)=>{X(N({id:"dnd.reorder",defaultMessage:"{item}, moved. New position in list: {position}."},{item:B.value,position:V(w)})),Q((0,a.FP)(H,w))},[ne,X]=t.useState(null),{formatMessage:N}=(0,h.Z)(),{trackUsage:ue}=(0,l.rS)(),Q=(0,c.I0)(),[ae,me]=t.useState(te),[B,oe,ge]=(0,C.U$)(`stages.${b}.name`),[z,se,fe]=(0,C.U$)(`stages.${b}.color`),[{handlerId:pe,isDragging:ve,handleKeyDown:Ee},he,ye,Se,re]=(0,G.Y9)(ee,{index:b,item:{name:B.value},onGrabItem:Y,onDropItem:ie,onMoveItem:de,onCancel:ce,type:J.uL.STAGE}),we=(0,Z.FE)(he,ye),Te=q.map(({hex:w,name:H})=>({value:w,label:N({id:"Settings.review-workflows.stage.color.name",defaultMessage:"{name}"},{name:H}),color:w}));t.useEffect(()=>{re((0,U.rX)(),{captureDraggingState:!1})},[re,b]);const{themeColorName:Re}=(0,K.k)(z.value)??{};return t.createElement(o.x,{ref:we},ne&&t.createElement(I.T,{"aria-live":"assertive"},ne),ve?t.createElement(E,null):t.createElement(P.U,{size:"S",variant:"primary",onToggle:()=>{me(!ae),ae||ue("willEditStage")},expanded:ae,shadow:"tableShadow",error:oe.error??se?.error??!1,hasErrorMessage:!1},t.createElement(D.B,{title:B.value,togglePosition:"left",action:($||F)&&t.createElement(n.k,null,$&&t.createElement(S.h,{background:"transparent",icon:t.createElement(M.Z,null),label:N({id:"Settings.review-workflows.stage.delete",defaultMessage:"Delete stage"}),noBorder:!0,onClick:()=>Q((0,a._V)(g))}),F&&t.createElement(S.h,{background:"transparent",forwardedAs:"div",role:"button",noBorder:!0,tabIndex:0,"data-handler-id":pe,ref:Se,label:N({id:"Settings.review-workflows.stage.drag",defaultMessage:"Drag"}),onClick:w=>w.stopPropagation(),onKeyDown:Ee},t.createElement(W.Z,null)))}),t.createElement(L.v,{padding:6,background:"neutral0",hasRadius:!0},t.createElement(R.r,{gap:4},t.createElement(O.P,{col:6},t.createElement(y.o,{...B,id:B.name,disabled:!F,label:N({id:"Settings.review-workflows.stage.name.label",defaultMessage:"Stage name"}),error:oe.error??!1,onChange:w=>{ge.setValue(w.target.value),Q((0,a.xn)(g,{name:w.target.value}))},required:!0})),t.createElement(O.P,{col:6},t.createElement(p.q4,{disabled:!F,error:se?.error??!1,id:z.name,required:!0,label:N({id:"content-manager.reviewWorkflows.stage.color",defaultMessage:"Color"}),onChange:w=>{fe.setValue(w),Q((0,a.xn)(g,{color:w}))},value:z.value.toUpperCase(),startIcon:t.createElement(n.k,{as:"span",height:2,background:z.value,borderColor:Re==="neutral0"?"neutral150":"transparent",hasRadius:!0,shrink:0,width:2})},Te.map(({value:w,label:H,color:le})=>{const{themeColorName:Ae}=(0,K.k)(le);return t.createElement(p.ag,{value:w,key:w,startIcon:t.createElement(n.k,{as:"span",height:2,background:le,borderColor:Ae==="neutral0"?"neutral150":"transparent",hasRadius:!0,shrink:0,width:2})},H)})))))))}k.propTypes=s().shape({id:s().number.isRequired,color:s().string.isRequired,canDelete:s().bool.isRequired,canReorder:s().bool.isRequired,canUpdate:s().bool.isRequired,stagesCount:s().number.isRequired}).isRequired;const _=(0,r.ZP)(o.x)`
  transform: translateX(-50%);
`;function x({canDelete:g,canUpdate:b,stages:$}){const{formatMessage:ee}=(0,h.Z)(),F=(0,c.I0)(),{trackUsage:te}=(0,l.rS)();return t.createElement(n.k,{direction:"column",gap:6,width:"100%"},t.createElement(o.x,{position:"relative",spacing:4,width:"100%"},t.createElement(_,{background:"neutral200",height:"100%",left:"50%",position:"absolute",top:"0",width:2,zIndex:1}),t.createElement(n.k,{direction:"column",alignItems:"stretch",gap:6,zIndex:2,position:"relative",as:"ol"},$.map((j,V)=>{const Y=j?.id??j.__temp_key__;return t.createElement(o.x,{key:`stage-${Y}`,as:"li"},t.createElement(k,{id:Y,index:V,isOpen:!j.id,canDelete:$.length>1&&g,canReorder:$.length>1,canUpdate:b,stagesCount:$.length}))}))),b&&t.createElement(A,{type:"button",onClick:()=>{F((0,a.CI)({name:""})),te("willCreateStage")}},ee({id:"Settings.review-workflows.stage.add",defaultMessage:"Add new stage"})))}x.defaultProps={canDelete:!0,canUpdate:!0,stages:[]},x.propTypes={canDelete:s().bool,canUpdate:s().bool,stages:s().arrayOf(s().shape({id:s().number,__temp_key__:s().number,name:s().string.isRequired}))}},85230:(T,u,e)=>{"use strict";e.d(u,{Y:()=>P});var t=e(67294),o=e(67730),n=e(75515),l=e(11276),i=e(67819),s=e(16364),h=e(26067),c=e(41054),r=e(45697),a=e.n(r),f=e(86896),m=e(86706),d=e(46449),v=e(11984);const A=(0,d.ZP)(o.ML)`
  padding-left: ${({theme:S})=>S.spaces[7]};
`,I=(0,d.ZP)(n.Z)`
  font-style: italic;
`;function P({canUpdate:S,contentTypes:{collectionTypes:L,singleTypes:R},currentWorkflow:O,workflows:y}){const{formatMessage:p,locale:M}=(0,f.Z)(),W=(0,m.I0)(),[C,U,G]=(0,c.U$)("name"),[Z,J,K]=(0,c.U$)("contentTypes"),q=(0,h.Xe)(M,{sensitivity:"base"});return t.createElement(l.r,{background:"neutral0",hasRadius:!0,gap:4,padding:6,shadow:"tableShadow"},t.createElement(i.P,{col:6},t.createElement(s.o,{...C,id:C.name,disabled:!S,label:p({id:"Settings.review-workflows.workflow.name.label",defaultMessage:"Workflow Name"}),error:U.error??!1,onChange:E=>{W((0,v.rI)({name:E.target.value})),G.setValue(E.target.value)},required:!0})),t.createElement(i.P,{col:6},t.createElement(o.NU,{...Z,customizeContent:E=>p({id:"Settings.review-workflows.workflow.contentTypes.displayValue",defaultMessage:"{count} {count, plural, one {content type} other {content types}} selected"},{count:E.length}),disabled:!S,error:J.error??!1,id:Z.name,label:p({id:"Settings.review-workflows.workflow.contentTypes.label",defaultMessage:"Associated to"}),onChange:E=>{W((0,v.rI)({contentTypes:E})),K.setValue(E)},placeholder:p({id:"Settings.review-workflows.workflow.contentTypes.placeholder",defaultMessage:"Select"})},[...L.length>0?[{label:p({id:"Settings.review-workflows.workflow.contentTypes.collectionTypes.label",defaultMessage:"Collection Types"}),children:L.sort((E,k)=>q.compare(E.info.displayName,k.info.displayName)).map(E=>({label:E.info.displayName,value:E.uid}))}]:[],...R.length>0?[{label:p({id:"Settings.review-workflows.workflow.contentTypes.singleTypes.label",defaultMessage:"Single Types"}),children:R.map(E=>({label:E.info.displayName,value:E.uid}))}]:[]].map(E=>"children"in E?t.createElement(o.Ab,{key:E.label,label:E.label,values:E.children.map(k=>k.value.toString())},E.children.map(k=>{const{name:_}=y.find(x=>(O&&x.id!==O.id||!O)&&x.contentTypes.includes(k.value))??{};return t.createElement(A,{key:k.value,value:k.value},p({id:"Settings.review-workflows.workflow.contentTypes.assigned.notice",defaultMessage:"{label} {name, select, undefined {} other {<i>(assigned to <em>{name}</em> workflow)</i>}}"},{label:k.label,name:_,em:(...x)=>t.createElement(n.Z,{as:"em",fontWeight:"bold"},x),i:(...x)=>t.createElement(I,null,x)}))})):t.createElement(o.ML,{key:E.value,value:E.value},E.label)))))}const D=a().shape({uid:a().string.isRequired,info:a().shape({displayName:a().string.isRequired}).isRequired});P.defaultProps={canUpdate:!0,currentWorkflow:void 0},P.propTypes={canUpdate:a().bool,contentTypes:a().shape({collectionTypes:a().arrayOf(D).isRequired,singleTypes:a().arrayOf(D).isRequired}).isRequired,currentWorkflow:a().object,workflows:a().array.isRequired}},86978:(T,u,e)=>{"use strict";e.d(u,{$k:()=>c,Ef:()=>d,FT:()=>f,Nj:()=>h,Ot:()=>s,VS:()=>r,_X:()=>v,gu:()=>n,lv:()=>a,qZ:()=>l,sN:()=>o,uL:()=>m,x4:()=>i});var t=e(42675);const o="settings_review-workflows",n="Settings/Review_Workflows/RESET_WORKFLOW",l="Settings/Review_Workflows/SET_WORKFLOW",i="Settings/Review_Workflows/WORKFLOW_DELETE_STAGE",s="Settings/Review_Workflows/WORKFLOW_ADD_STAGE",h="Settings/Review_Workflows/WORKFLOW_UPDATE_STAGE",c="Settings/Review_Workflows/WORKFLOW_UPDATE_STAGE_POSITION",r="Settings/Review_Workflows/WORKFLOW_UPDATE",a={primary600:"Blue",primary200:"Lilac",alternative600:"Violet",alternative200:"Lavender",success600:"Green",success200:"Pale Green",danger500:"Cherry",danger200:"Pink",warning600:"Orange",warning200:"Yellow",secondary600:"Teal",secondary200:"Baby Blue",neutral400:"Gray",neutral0:"White"},f=t.W.colors.primary600,m={STAGE:"stage"},d="numberOfWorkflows",v="stagesPerWorkflow"},52258:(T,u,e)=>{"use strict";e.d(u,{n:()=>n});var t=e(26067),o=e(88767);function n(l={}){const{get:i}=(0,t.kY)(),{id:s="",...h}=l,c={populate:"stages"},{data:r,isLoading:a,status:f,refetch:m}=(0,o.useQuery)(["review-workflows","workflows",s],async()=>(await i(`/admin/review-workflows/workflows/${s}`,{params:{...c,...h}})).data);let d=[];return s&&r?.data?d=[r.data]:Array.isArray(r?.data)&&(d=r.data),{meta:r?.meta??{},workflows:d,isLoading:a,status:f,refetch:m}}},3848:(T,u,e)=>{"use strict";e.d(u,{E:()=>i,I:()=>s});var t=e(18172),o=e(18446),n=e.n(o),l=e(86978);const i={status:"loading",serverState:{workflow:null},clientState:{currentWorkflow:{data:{name:"",contentTypes:[],stages:[]},isDirty:!1,hasDeletedServerStages:!1}}};function s(c=i,r){return(0,t.Uy)(c,a=>{const{payload:f}=r;switch(r.type){case l.qZ:{const{status:m,workflow:d}=f;a.status=m,d&&(a.serverState.workflow=d,a.clientState.currentWorkflow.data={...d,stages:d.stages.map(v=>({...v,color:v?.color??l.FT}))}),a.clientState.currentWorkflow.hasDeletedServerStages=!1;break}case l.gu:{a.clientState.currentWorkflow.data=i.clientState.currentWorkflow.data,a.serverState=i.serverState;break}case l.x4:{const{stageId:m}=f,{currentWorkflow:d}=c.clientState;a.clientState.currentWorkflow.data.stages=d.data.stages.filter(v=>(v?.id??v.__temp_key__)!==m),d.hasDeletedServerStages||(a.clientState.currentWorkflow.hasDeletedServerStages=!!(c.serverState.workflow?.stages??[]).find(v=>v.id===m));break}case l.Ot:{const{currentWorkflow:m}=c.clientState;m.data||(a.clientState.currentWorkflow.data={stages:[]});const d=h(a.clientState.currentWorkflow.data.stages);a.clientState.currentWorkflow.data.stages.push({...f,color:f?.color??l.FT,__temp_key__:d});break}case l.Nj:{const{currentWorkflow:m}=c.clientState,{stageId:d,...v}=f;a.clientState.currentWorkflow.data.stages=m.data.stages.map(A=>(A.id??A.__temp_key__)===d?{...A,...v}:A);break}case l.$k:{const{currentWorkflow:{data:{stages:m}}}=c.clientState,{newIndex:d,oldIndex:v}=f;if(d>=0&&d<m.length){const A=m[v];let I=[...m];I.splice(v,1),I.splice(d,0,A),a.clientState.currentWorkflow.data.stages=I}break}case l.VS:{a.clientState.currentWorkflow.data={...a.clientState.currentWorkflow.data,...f};break}default:break}c.clientState.currentWorkflow.data&&a.serverState.workflow?a.clientState.currentWorkflow.isDirty=!n()((0,t.Vk)(a.clientState.currentWorkflow).data,a.serverState.workflow):a.clientState.currentWorkflow.isDirty=!0})}const h=(c=[])=>{const r=c.map(a=>a.id??a.__temp_key__);return Math.max(...r,-1)+1}},5318:(T,u,e)=>{"use strict";e.d(u,{k:()=>n,s:()=>l});var t=e(42675),o=e(86978);function n(i){if(!i)return null;const h=Object.entries(t.W.colors).filter(([,c])=>c.toUpperCase()===i.toUpperCase()).reduce((c,[r])=>(o.lv?.[r]&&(c=r),c),null);return h?{themeColorName:h,name:o.lv[h]}:null}function l(){return Object.entries(o.lv).map(([i,s])=>({hex:t.W.colors[i].toUpperCase(),name:s}))}},66578:(T,u,e)=>{"use strict";e.d(u,{V:()=>l});var t=e(36968),o=e.n(t),n=e(87561);async function l({values:i,formatMessage:s}){const h=n.Ry({contentTypes:n.IX().of(n.Z_()),name:n.Z_().max(255,s({id:"Settings.review-workflows.validation.name.max-length",defaultMessage:"Name can not be longer than 255 characters"})).required(),stages:n.IX().of(n.Ry().shape({name:n.Z_().required(s({id:"Settings.review-workflows.validation.stage.name",defaultMessage:"Name is required"})).max(255,s({id:"Settings.review-workflows.validation.stage.max-length",defaultMessage:"Name can not be longer than 255 characters"})).test("unique-name",s({id:"Settings.review-workflows.validation.stage.duplicate",defaultMessage:"Stage name must be unique"}),function(c){const{options:{context:r}}=this;return r.stages.filter(a=>a.name===c).length===1}),color:n.Z_().required(s({id:"Settings.review-workflows.validation.stage.color",defaultMessage:"Color is required"})).matches(/^#(?:[0-9a-fA-F]{3}){1,2}$/i)})).min(1)});try{return await h.validate(i,{abortEarly:!1,context:i}),!0}catch(c){let r={};return c instanceof n.p8&&c.inner.forEach(a=>{o()(r,a.path,a.message)}),r}}},51584:(T,u,e)=>{var t=e(44239),o=e(37005),n="[object Boolean]";function l(i){return i===!0||i===!1||o(i)&&t(i)==n}T.exports=l},7654:(T,u,e)=>{var t=e(81763);function o(n){return t(n)&&n!=+n}T.exports=o},81763:(T,u,e)=>{var t=e(44239),o=e(37005),n="[object Number]";function l(i){return typeof i=="number"||o(i)&&t(i)==n}T.exports=l},67109:(T,u,e)=>{"use strict";e.d(u,{Z:()=>n});var t=e(85893);const o=l=>(0,t.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1rem",height:"1rem",fill:"none",viewBox:"0 0 24 24",...l,children:(0,t.jsx)("path",{fill:"#212134",d:"M24 13.3a.2.2 0 0 1-.2.2H5.74l8.239 8.239a.2.2 0 0 1 0 .282L12.14 23.86a.2.2 0 0 1-.282 0L.14 12.14a.2.2 0 0 1 0-.282L11.86.14a.2.2 0 0 1 .282 0L13.98 1.98a.2.2 0 0 1 0 .282L5.74 10.5H23.8c.11 0 .2.09.2.2v2.6Z"})}),n=o},12814:(T,u,e)=>{"use strict";e.d(u,{Z:()=>n});var t=e(85893);const o=l=>(0,t.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1rem",height:"1rem",fill:"none",viewBox:"0 0 24 24",...l,children:[(0,t.jsx)("path",{fill:"#212134",d:"M16.563 5.587a2.503 2.503 0 1 0 0-5.007 2.503 2.503 0 0 0 0 5.007Z"}),(0,t.jsx)("path",{fill:"#212134",d:"M18.487 3.083c-.012.788-.487 1.513-1.229 1.797a1.954 1.954 0 0 1-2.184-.574A1.943 1.943 0 0 1 14.9 2.11c.4-.684 1.2-1.066 1.981-.927a1.954 1.954 0 0 1 1.606 1.9c.011.748 1.17.748 1.158 0A3.138 3.138 0 0 0 17.565.17c-1.176-.423-2.567-.03-3.36.933-.83 1.002-.968 2.45-.284 3.575.678 1.124 1.993 1.674 3.273 1.431 1.432-.272 2.428-1.593 2.451-3.019.012-.753-1.147-.753-1.158-.006ZM16.563 14.372a2.503 2.503 0 1 0 0-5.007 2.503 2.503 0 0 0 0 5.007Z"}),(0,t.jsx)("path",{fill:"#212134",d:"M18.487 11.867c-.012.789-.487 1.513-1.229 1.797a1.954 1.954 0 0 1-2.184-.574 1.943 1.943 0 0 1-.174-2.196c.4-.684 1.2-1.066 1.981-.927.928.156 1.588.968 1.606 1.9.011.748 1.17.748 1.158 0a3.138 3.138 0 0 0-2.08-2.914c-1.176-.423-2.567-.029-3.36.933-.83 1.002-.968 2.45-.284 3.575.678 1.124 1.993 1.675 3.273 1.431 1.432-.272 2.428-1.593 2.451-3.019.012-.753-1.147-.753-1.158-.005ZM16.563 23.392a2.503 2.503 0 1 0 0-5.006 2.503 2.503 0 0 0 0 5.006Z"}),(0,t.jsx)("path",{fill:"#212134",d:"M18.487 20.89c-.012.787-.487 1.512-1.229 1.796a1.954 1.954 0 0 1-2.184-.574 1.943 1.943 0 0 1-.174-2.196c.4-.684 1.2-1.066 1.981-.927.928.156 1.588.967 1.606 1.9.011.748 1.17.748 1.158 0a3.138 3.138 0 0 0-2.08-2.914c-1.176-.423-2.567-.03-3.36.933-.83 1.002-.968 2.45-.284 3.575.678 1.124 1.993 1.674 3.273 1.431 1.432-.272 2.428-1.593 2.451-3.019.012-.753-1.147-.753-1.158-.006ZM7.378 5.622a2.503 2.503 0 1 0 0-5.007 2.503 2.503 0 0 0 0 5.007Z"}),(0,t.jsx)("path",{fill:"#212134",d:"M9.302 3.119c-.011.788-.486 1.512-1.228 1.796a1.954 1.954 0 0 1-2.185-.574 1.943 1.943 0 0 1-.173-2.196c.4-.684 1.199-1.066 1.981-.927a1.943 1.943 0 0 1 1.605 1.9c.012.748 1.17.748 1.16 0A3.138 3.138 0 0 0 8.38.205c-1.176-.423-2.567-.029-3.36.933-.83 1.002-.968 2.45-.285 3.575.678 1.124 1.994 1.675 3.274 1.431 1.431-.272 2.428-1.593 2.451-3.019.012-.753-1.147-.753-1.159-.005ZM7.378 14.406a2.503 2.503 0 1 0 0-5.006 2.503 2.503 0 0 0 0 5.006Z"}),(0,t.jsx)("path",{fill:"#212134",d:"M9.302 11.902c-.011.788-.486 1.513-1.228 1.797a1.954 1.954 0 0 1-2.185-.574 1.943 1.943 0 0 1-.173-2.196c.4-.684 1.199-1.066 1.981-.927a1.943 1.943 0 0 1 1.605 1.9c.012.748 1.17.748 1.16 0A3.138 3.138 0 0 0 8.38 8.988c-1.176-.423-2.567-.03-3.36.933-.83 1.002-.968 2.45-.285 3.575.678 1.124 1.994 1.674 3.274 1.431 1.431-.272 2.428-1.593 2.451-3.019.012-.753-1.147-.753-1.159-.006ZM7.378 23.427a2.503 2.503 0 1 0 0-5.007 2.503 2.503 0 0 0 0 5.007Z"}),(0,t.jsx)("path",{fill:"#212134",d:"M9.302 20.924c-.011.788-.486 1.513-1.228 1.797a1.954 1.954 0 0 1-2.185-.574 1.943 1.943 0 0 1-.173-2.196c.4-.684 1.199-1.066 1.981-.927.933.156 1.594.967 1.605 1.9.012.748 1.17.748 1.16 0A3.139 3.139 0 0 0 8.38 18.01c-1.176-.423-2.567-.03-3.36.933-.83 1.002-.968 2.45-.285 3.569.678 1.124 1.994 1.675 3.274 1.431 1.431-.272 2.428-1.593 2.451-3.019.012-.747-1.147-.747-1.159 0Z"})]}),n=o},99782:(T,u,e)=>{"use strict";e.d(u,{Z:()=>n});var t=e(85893);const o=l=>(0,t.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1rem",height:"1rem",fill:"none",viewBox:"0 0 24 24",...l,children:[(0,t.jsx)("circle",{cx:12,cy:12,r:12,fill:"#212134"}),(0,t.jsx)("path",{fill:"#F6F6F9",d:"M17 12.569c0 .124-.1.224-.225.224h-3.981v3.982c0 .124-.101.225-.226.225h-1.136a.225.225 0 0 1-.226-.225v-3.981H7.226A.225.225 0 0 1 7 12.567v-1.136c0-.125.1-.226.225-.226h3.982V7.226c0-.124.1-.225.224-.225h1.138c.124 0 .224.1.224.225v3.982h3.982c.124 0 .225.1.225.224v1.138Z"})]}),n=o}}]);
