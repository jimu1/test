import{_ as F,T as S}from"./index.1eb004c8.js";import{d as A,ak as d,r as E,o as B,b as y,w as N,ad as _,a as D,am as R,ao as k,an as T,aj as I,c as x,ae as b,ai as V,s as $,ap as j,T as w,af as L,ay as z,f as O,ar as q}from"./vendor.e75d5d18.js";import{a as K}from"./service.c2b20cd8.js";const M={class:"wrap_form"},U=A({emits:["search"],setup(m,{emit:g}){const o=d(""),n=()=>{g("search",o.value)},r=d(),a=d(!1),c=()=>{a.value=!0},t=()=>{a.value=!1};return(v,p)=>{const f=E("van-search"),h=E("van-sticky");return B(),y(h,null,{default:N(()=>[_("div",M,[D(f,{ref:(l,e)=>{e.searchRef=l,r.value=l},class:R(a.value?"search_box search_box2":"search_box"),modelValue:o.value,"onUpdate:modelValue":p[0]||(p[0]=l=>o.value=l),"show-action":"",placeholder:"\u8BF7\u8F93\u5165\u5BA2\u6237\u59D3\u540D\u6216\u8BC1\u4EF6\u53F7",onSearch:n,onFocus:c,onBlur:t},{action:N(()=>[_("div",{class:"search_button",onClick:n},"\u641C\u7D22")]),_:1},8,["class","modelValue"])])]),_:1})}}});var G=F(U,[["__scopeId","data-v-0b79fdb0"]]);const P={class:"right_top"},H={class:"right_bottom"},J={class:"right_bottom_top"},Q=A({props:{data:{type:Object,default:()=>({})}},setup(m){const g=m,o=k(),n=new S;T();const r={"1":"\u8EAB\u4EFD\u8BC1","2":"\u62A4\u7167","3":"\u519B\u4EBA\u8BC1","4":"\u5C11\u513F\u8BC1","8":"\u8F6C\u6362\u4E0D\u8BE6","0":"\u5176\u4ED6",L:"\u6237\u53E3\u672C",A:"\u51FA\u751F\u8BC1","6":"\u6E2F\u6FB3\u53F0\u56DE\u4E61\u8BC1","7":"\u9A7E\u9A76\u8BC1","9":"\u4E0D\u8BE6","5":"\u5F02\u5E38\u8EAB\u4EFD\u8BC1",B:"\u7A0E\u52A1\u767B\u8BB0\u8BC1",C:"\u5DE5\u5546\u767B\u8BB0\u8BC1",D:"\u7EC4\u7EC7\u673A\u6784\u4EE3\u7801\u8BC1",E:"\u5F8B\u5E08\u8BC1",F:"\u623F\u4EA7\u8BC1",G:"\u884C\u9A76\u8BC1",K:"\u6E2F\u6FB3\u53F0\u5C45\u4F4F",O:"\u5916\u56FD\u4EBA\u6C38\u4E45\u5C45\u7559\u8EAB\u4EFD\u8BC1"},a=o.state.user.token,c=o.state.user.unionId,t=I(),{hCode:v,orgCode:p}=o.getters.userInfo.staffInfo,{adultFlag:f,customerName:h,customerNo:l}=g.data,e=()=>{$.track("page_click",{page_url:window.location.href,agent_code:v,attr_third_region_code:p,customer_no:l,customer_name:h,page_name:"\u9009\u62E9\u5BA2\u6237",element_name:"\u70B9\u51FB\u5BA2\u6237"});let u=`?unionId=${c}&hCode=${v}&accidentCustomerNo=${l}&accidentCustomerName=${h}&adultFlag=${f}&token=${a}`;t.query.source&&(u+=`&source=${t.query.source}`),console.log(u);let s=`${n.getEnvironmentClaims()}/claim_v3/index.html#/claim/v3/report${u}`;console.log(s,"url"),window.location.href=s};return(u,s)=>(B(),x("div",{class:"right_main",onClick:e},[_("div",P,b(m.data.customerName),1),_("div",H,[_("div",J,[_("span",null,b(r[m.data.customerCardType]||"\u8BC1\u4EF6\u53F7")+"\uFF1A",1),V(b(m.data.customerCardNo),1)])])]))}});var W=F(Q,[["__scopeId","data-v-96f13c56"]]);const X={class:"container_insured"},Y={class:"scroll_list"},Z=A({setup(m){const g=k();I();const{proxy:o}=q(),n=d(""),r=d(!1),a=d(!0),c=d(0),t=d([]),v=d("\u8BF7\u641C\u7D22");j(()=>{$.track("page_view",{page_url:window.location.href,page_name:"\u9009\u62E9\u5BA2\u6237\u9875",agent_code:g.getters.userInfo.staffInfo.hCode,channel_code:"EKB-MINI",channel_from:"\u8EAB\u4EFD\u786E\u8BA4\u9875"})});const p=e=>{n.value=e,a.value=!1,c.value=0,t.value=[],v.value="\u6682\u65E0\u6570\u636E",f()},f=()=>{r.value=!0,h()},h=async()=>{c.value=c.value+1;let e,u={pageNo:c.value,pageSize:20,customerName:n.value},s={pageNo:c.value,pageSize:20,customerCardNo:n.value};l(n.value)?e=s:e=u;try{w.loading({message:"\u52A0\u8F7D\u4E2D...",forbidClick:!0});const i=await K(e);w.clear(),i.code==="200"?i.data&&i.data.records?(t.value=t.value.concat(i.data.records),i.data.records.length<20&&(a.value=!0)):a.value=!0:(o.$toast(i.message),a.value=!0)}catch{a.value=!0}finally{r.value=!1}},l=e=>{if(!e)return!1;let u=e.split("");for(let s=0;s<u.length;s++)if(["0","1","2","3","4","5","6","7","8","9"].includes(u[s]))return!0;return!1};return(e,u)=>{const s=E("van-empty"),i=E("van-list");return B(),x("div",X,[D(G,{onSearch:p}),_("div",Y,[D(i,{class:"main_list",finished:a.value,"finished-text":t.value.length>0?"\u6CA1\u6709\u66F4\u591A\u4E86":"",loading:r.value,"onUpdate:loading":u[0]||(u[0]=C=>r.value=C),onLoad:f},{default:N(()=>[(B(!0),x(L,null,z(t.value,C=>(B(),y(W,{key:C.customerNo,data:C},null,8,["data"]))),128)),!r.value&&!t.value.length?(B(),y(s,{key:0,image:"search",description:v.value},null,8,["description"])):O("",!0)]),_:1},8,["finished","finished-text","loading"])])])}}});var te=F(Z,[["__scopeId","data-v-c50e3fac"]]);export{te as default};
