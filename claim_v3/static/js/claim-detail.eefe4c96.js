(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["claim-detail"],{1252:function(t,e,a){},2022:function(t,e,a){"use strict";a.r(e);var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("pdf-demo",{attrs:{src:t.url}})],1)},s=[],n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"pdf-preview"},[a("div",{staticClass:"pdf-wrap"},[a("pdf",{staticClass:"pdf-set",style:t.scaleFun,attrs:{src:t.src,page:t.state.pageNum}})],1),a("div",{staticClass:"pdf_box"},[a("div",{staticClass:"page-tool"},[a("div",{staticClass:"page-tool-item",on:{click:t.lastPage}},[t._v("上一页")]),a("div",{staticClass:"page-tool-item",on:{click:t.nextPage}},[t._v("下一页")]),a("div",{staticClass:"page-tool-item"},[t._v(" "+t._s(t.state.pageNum)+"/"+t._s(t.state.numPages)+" ")]),a("div",{staticClass:"page-tool-item",on:{click:t.pageZoomOut}},[t._v("放大")]),a("div",{staticClass:"page-tool-item",on:{click:t.pageZoomIn}},[t._v("缩小")])])])])},o=[],i=a("858e"),c={name:"pdfDemo",props:["src"],components:{pdf:i["a"]},data:function(){return{state:{pageNum:1,scale:1,numPages:0}}},mounted:function(){this.getPageNum()},computed:{scaleFun:function(){return"transform:scale(".concat(this.state.scale,")")}},methods:{getPageNum:function(){var t=this,e=i["a"].createLoadingTask(this.src);e.promise.then((function(e){t.state.numPages=e.numPages})).catch((function(t){}))},lastPage:function(){this.state.pageNum>1&&(this.state.pageNum-=1)},nextPage:function(){this.state.pageNum<this.state.numPages&&(this.state.pageNum+=1)},pageZoomOut:function(){this.state.scale<2&&(this.state.scale+=.1)},pageZoomIn:function(){this.state.scale>1&&(this.state.scale-=.1)}}},l=c,u=(a("ab58"),a("2877")),p=Object(u["a"])(l,n,o,!1,null,"1b9db865",null),d=p.exports,m={name:"bookList",components:{pdfDemo:d},data:function(){return{url:this.$route.query.url}},mounted:function(){}},A=m,v=(a("5e1c"),Object(u["a"])(A,r,s,!1,null,"5fdce08c",null));e["default"]=v.exports},"2d34":function(t,e,a){"use strict";a.r(e);var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return t.imageInfoList?a("div",[t._l(t.imageInfoList,(function(e,r){return a("van-cell-group",{key:r,attrs:{title:e.materialName}},[a("div",{staticClass:"picList"},t._l(e.materialAddress,(function(e,s){return a("img",{key:e.fileId,attrs:{src:e.address},on:{click:function(e){return t.showPreview(r,s)}}})})),0)])})),a("ImagePreview",{attrs:{images:t.preview.images,startPosition:t.preview.startPosition},model:{value:t.preview.show,callback:function(e){t.$set(t.preview,"show",e)},expression:"preview.show"}})],2):t._e()},s=[],n=a("1da1"),o=(a("96cf"),a("d3b7"),a("9a9c")),i=a("73d8"),c=a("ed08"),l={components:{ImagePreview:i["a"]},data:function(){return{docuno:this.$route.query.docuno,query:this.$route.query,imageInfoList:null,preview:{show:!1,images:[],startPosition:0}}},mounted:function(){this.getPics()},methods:{showPreview:function(t,e){var a=Object(c["c"])(t,e,this.imageInfoList),r=a.images,s=a.startPosition;this.preview.show=!0,this.preview.images=r,this.preview.startPosition=s},getPics:function(){var t=this;return Object(n["a"])(regeneratorRuntime.mark((function e(){var a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.$loading.show(),e.next=3,Object(o["C"])({claimCode:t.docuno,materialType:"01"}).finally((function(){return t.$loading.hide()}));case 3:a=e.sent,t.imageInfoList=a.imageInfoList;case 5:case"end":return e.stop()}}),e)})))()}}},u=l,p=(a("5da9"),a("2877")),d=Object(p["a"])(u,r,s,!1,null,"57ceaf44",null);e["default"]=d.exports},"2d42":function(t,e,a){"use strict";a.r(e);var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"page"},[a("div",{staticClass:"content"},[a("van-pull-refresh",{on:{refresh:t.onRefresh},model:{value:t.isLoading,callback:function(e){t.isLoading=e},expression:"isLoading"}},[t.progress?a("HeaderProgress",{attrs:{title:"理赔进度条",status:t.progress,detail:t.detail,init:t.init,trace:t.trace}}):t._e(),t.progress&&t.detail?a("ReportCase",{staticClass:"mb8",attrs:{title:"报案信息",progress:t.progress,docuno:t.query.docuno,docList:t.docList}}):t._e(),t.detail&&t.detail.examAmt&&"02"==t.detail.operateType?a("PaidResult",{staticClass:"mb8",attrs:{title:"赔付结论",data:t.detail.examAmt}}):t._e(),t.detail&&t.detail.fileUrl&&"02"==t.detail.operateType?a("ItemRow",{staticClass:"mb8",attrs:{title:"理赔通知书"},on:{click:function(e){return t.onShowPdf(t.detail.fileUrl)}}}):t._e(),t.progress&&Array.isArray(t.progress.claimStatusList)&&t.progress.claimStatusList.length>=2&&t.detail&&"02"==t.detail.operateType?a("ItemRow",{staticClass:"mb8",attrs:{title:"理赔影像材料"},on:{click:t.jumpPicList}}):t._e(),t.detail&&t.detail.modifyAccountFlag&&"02"==t.detail.operateType&&t.detail.newCaseType?a("ItemRow",{staticClass:"mb8",attrs:{title:"修改账户"},on:{click:t.editBank}}):t._e(),t.detail&&t.detail.antiMoneyLaunderingFlag&&"02"==t.detail.operateType&&t.detail.newCaseType?a("ItemRow",{staticClass:"mb8",attrs:{title:"补录信息"}},[a("span",{staticClass:"btn record",on:{click:function(e){return t.onAMLShow(t.query)}}},[t._v("补录信息")])]):t._e(),t.detail&&(t.detail.materialReceiptFlag||t.detail.materialReceiptRecordFlag)&&"02"==t.detail.operateType&&t.detail.newCaseType?a("ItemRow",{staticClass:"mb8",attrs:{title:"邮寄信息"}},[t.detail&&t.detail.materialReceiptFlag?a("span",{staticClass:"btn record",on:{click:function(e){return t.sendMaterial(t.query)}}},[t._v("去填写")]):t._e(),t.detail&&t.detail.materialReceiptRecordFlag?a("span",{staticClass:"btn record",on:{click:function(e){return t.queryDetail(t.query.docuno)}}},[t._v("查看")]):t._e()]):t._e(),t.detail&&(t.detail.materialReturnFlag||t.detail.materialReturnRecordFlag)&&"02"==t.detail.operateType&&t.detail.newCaseType?a("ItemRow",{staticClass:"mb8",attrs:{title:"回退材料信息"}},[t.detail&&t.detail.materialReturnFlag?a("span",{staticClass:"btn record",on:{click:function(e){return t.materialReturn(t.query.docuno)}}},[t._v("去填写")]):t._e(),t.detail&&t.detail.materialReturnRecordFlag?a("span",{staticClass:"btn record",on:{click:function(e){return t.returnDetail(t.query.docuno)}}},[t._v("查看")]):t._e()]):t._e(),t.detail&&t.detail.appealRecordFlag&&"02"==t.detail.operateType?a("ItemRow",{staticClass:"mb8",attrs:{title:"申诉记录"},on:{click:function(e){return t.jumpAppealRecords()}}}):t._e(),t.detail||t.report?a("ClaimDetail",{staticClass:"mb8",attrs:{title:"理赔详情",detail:t.detail,report:t.report}}):t._e()],1)],1),t.detail&&"01"==t.detail.operateType?a("div",{staticClass:"button_p"},[t._v("该理赔案件为客户自行报案，请协助客户在平安健康保险小程序上传材料。")]):t._e(),a("div",{staticClass:"button"},[a("van-button",{attrs:{type:"primary",block:"",round:"",plain:"",color:t.$root.primaryColor},on:{click:function(e){return t.jumpBack()}}},[t._v("返回我的理赔")]),t.detail&&t.detail.reportUploadFlag&&"02"==t.detail.operateType?a("van-button",{attrs:{type:"primary",block:"",round:"",color:t.$root.primaryColor},on:{click:function(e){return t.jumpUpload()}}},[t._v("上传材料")]):t._e(),t.detail&&"01"==t.detail.operateType?a("van-button",{staticClass:"disable_button",attrs:{type:"primary",block:"",round:""}},[t._v("上传材料")]):t._e(),t.detail&&t.detail.needReUploadFlag&&"02"==t.detail.operateType?a("van-button",{attrs:{type:"primary",block:"",round:"",color:t.$root.primaryColor},on:{click:function(e){return t.jumpClaimsExtraUpload()}}},[t._v("补充材料")]):t._e()],1)])},s=[],n=a("5530"),o=a("b1f8"),i=a("1da1"),c=(a("d3b7"),a("3ca3"),a("ddb0"),a("d81d"),a("99af"),a("96cf"),function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"header"},[r("h2",{staticClass:"status"},[t._v(" "+t._s(t.status.mapStatusName)+" "),t.detail&&t.detail.appealFlag&&"02"==t.detail.operateType?r("a",{attrs:{href:"javascript:;"},on:{click:t.goUploadAppeal}},[t._v("我要申诉")]):t._e(),t.detail&&t.detail.reportUploadFlag&&"02"==t.detail.operateType?r("a",{attrs:{href:"javascript:;"},on:{click:t.cancelApply}},[t._v("取消理赔")]):t._e()]),r("p",{staticClass:"status-desc"},[t._v(t._s(t.status.mapStatusDesc))]),r("ul",{staticClass:"list"},t._l(t.progressData,(function(e,s){return r("li",{key:e,class:{curr:s==t.curr,leftAll:s<=t.curr,rightAll:s>t.curr}},[r("div",{staticClass:"progress-bar"},[r("span",{staticClass:"l-line"}),s<=t.curr&&t.status.claimStatusList[s].isFinalState?r("img",{staticClass:"dotImg",attrs:{src:a("57b4")}}):r("span",{staticClass:"dot"}),r("span",{staticClass:"r-line"})]),r("div",{staticClass:"txt"},[r("span",[t._v(" "+t._s(e)+" ")])]),s<=t.curr&&t.status.claimStatusList[s].isFinalState?r("div",{staticClass:"date",domProps:{innerHTML:t._s(t.format(t.status.claimStatusList[s].updateDate))}}):t._e()])})),0)])}),l=[],u=(a("ac1f"),a("5319"),a("c1df")),p=a.n(u),d=a("9a9c"),m={props:{status:Object,detail:Object,init:Function,trace:Function},data:function(){return{progressData:["报案","受理","审核","结案","赔付"]}},computed:{curr:function(){var t,e;return(null===(t=this.status)||void 0===t||null===(e=t.claimStatusList)||void 0===e?void 0:e.length)-1}},methods:{format:function(t){return t?p()(t).format("MM月DD日")+"<br/>"+p()(t).format("HH:mm:ss"):""},cancelApply:function(){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function e(){var a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.trace("取消理赔"),a=t.detail.docuno,e.next=4,t.$dialog.confirm({message:"确定取消理赔？"});case 4:return t.$loading.show(),e.next=7,Object(d["m"])({claimCode:a}).finally((function(){return t.$loading.hide()}));case 7:t.$router.replace({path:"/claim/v3/detail",query:{docuno:a,step:"cancel",source:t.$route.query.source}});case 9:case"end":return e.stop()}}),e)})))()},goUploadAppeal:function(){this.trace("我要申诉");var t=this.detail,e=t.docuno,a=t.applyCustomerNo;this.$router.push({path:"/claim/v3/appeal/upload",query:{docuno:e,applyCustomerNo:a}})}}},A=m,v=(a("36a8"),a("2877")),f=Object(v["a"])(A,c,l,!1,null,"6b28e918",null),h=f.exports,g=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"box"},[a("h2",{staticClass:"title"},[t._v("报案信息")]),a("ul",{staticClass:"row"},[a("li",[t._v("报案号：")]),a("li",[t._v(t._s(t.docuno)),a("a",{staticClass:"copy",attrs:{href:"javascript:;","data-clipboard-text":t.docuno},on:{click:t.onCopy}},[t._v("复制")])])]),"01"==t.progress.claimStatus&&t.docList&&t.docList.length>0?a("MaterialTips",{attrs:{title:"请您尽快上传以下材料",docList:t.docList}}):t._e()],1)},y=[],C=a("b311"),_=a.n(C),b=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"m-box"},[a("div",{staticClass:"title"},[t._v("请您尽快上传以下材料")]),a("ul",t._l(t.docList,(function(e,r){return a("li",{key:r},[t._v(t._s(e))])})),0)])},w=[],N={props:["docList"],components:{},data:function(){return{}}},R=N,k=(a("d4cc"),Object(v["a"])(R,b,w,!1,null,"a5cb5318",null)),x=k.exports,T={components:{MaterialTips:x},props:{docuno:{type:String,default:""},progress:Object,docList:Array},data:function(){return{}},methods:{onCopy:function(){var t=this,e=new _.a(".copy");e.on("success",(function(){t.$toast({message:"复制成功",duration:300})})),e.on("error",(function(t){}))}}},j=T,O=(a("51b5"),Object(v["a"])(j,g,y,!1,null,"cceb83c4",null)),q=O.exports,L=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"box"},[a("div",{staticClass:"title"},[t._v(t._s(t.title)+" "),t._t("lable")],2),a("div",{staticClass:"value",on:{click:t.onClick}},[t.value?a("span",{staticClass:"txt"},[t._v(t._s(t.value))]):a("span",{staticClass:"txt"},[t._t("default")],2),a("van-icon",{attrs:{name:"arrow",size:"15",color:"#AFAFAF"}})],1)])},D=[],P={props:["title","value"],components:{},data:function(){return{}},methods:{download:function(t){var e=document.createElement("a");e.href=t,e.download="",e.click()},onClick:function(){this.$emit("click")}}},I=P,E=(a("76b8"),Object(v["a"])(I,L,D,!1,null,"8ce0fee2",null)),B=E.exports,U=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"box"},[a("div",{staticClass:"title"},[t._v(" "+t._s(t.title)+" ")]),t._l(t.list,(function(e,r){return a("ul",{key:r,staticClass:"list"},[a("li",{staticClass:"row"},[a("span",[t._v("收款账户 ")]),a("span",[t._v(t._s(e.accountName))])]),a("li",{staticClass:"row"},[a("span",[t._v("收款银行 ")]),a("span",[t._v(t._s(e.bankTypeName))])]),a("li",{staticClass:"row"},[a("span",[t._v("赔付金额 ")]),a("span",[t._v(t._s(Number(e.tradeAmount).toFixed(2))+t._s("RMB"==e.tradeCurrency?"元":e.tradeCurrency))])]),a("li",{staticClass:"row"},[a("span",[t._v("赔付时间 ")]),a("span",[t._v(t._s(e.tradeDate))])])])})),t.payRecords.length>1?[t.more?a("div",{staticClass:"more",on:{click:function(e){t.more=!1}}},[t._v("收起 "),a("van-icon",{attrs:{name:"arrow-up"}})],1):a("div",{staticClass:"more",on:{click:function(e){t.more=!0}}},[t._v("展开 "),a("van-icon",{attrs:{name:"arrow-down"}})],1)]:t._e()],2)},G=[],F=(a("e9c4"),a("fb6a"),{components:{},props:{title:String,payRecords:Array},data:function(){return{more:!1,moreAccount:!1}},computed:{list:function(){return this.more?JSON.parse(JSON.stringify(this.payRecords)):JSON.parse(JSON.stringify(this.payRecords.slice(0,1)))}},methods:{}}),M=F,S=(a("60db"),Object(v["a"])(M,U,G,!1,null,"931205c8",null)),Q=S.exports,$=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"box"},[r("div",{staticClass:"title"},[t._v(" 理赔详情 "),t.detail.reportUploadFlag&&"02"==t.detail.operateType?r("a",{staticClass:"modify",attrs:{href:"javascript:;"},on:{click:function(e){return t.goChangeInfo()}}},[t._v("修改")]):t._e()]),"00"==t.detail.operateType?r("div",{staticClass:"privacy"},[r("img",{staticClass:"icon",attrs:{src:a("b59d")}}),t._v("客户信息隐私保护中，您无法查看 ")]):t._e(),r("dl",{staticClass:"info-box"},[r("dt",{staticClass:"title"},[t._v("就诊信息")]),r("dd",{staticClass:"row"},[r("span",[t._v("申请人 ")]),"00"==t.detail.operateType?r("span",{staticClass:"provacyText"},[t._v("客户信息隐私保护中")]):r("span",[t._v(t._s(t.report.applyName))])]),r("dd",{staticClass:"row"},[r("span",[t._v("手机号 ")]),"00"==t.detail.operateType?r("span",{staticClass:"provacyText"},[t._v("客户信息隐私保护中")]):r("span",[t._v(t._s(t.report.applyPhone||t.report.applyMobile))])]),r("dd",{staticClass:"row"},[r("span",[t._v("就诊人 ")]),"00"==t.detail.operateType?r("span",{staticClass:"provacyText"},[t._v("客户信息隐私保护中")]):r("span",[t._v(t._s(t.report.accidentCustomerName||t.report.accidentName))])]),t.more?[r("div",{staticClass:"row"},[r("span",[t._v("就诊日期")]),"00"==t.detail.operateType?r("span",{staticClass:"provacyText"},[t._v("客户信息隐私保护中")]):r("span",[t._v(t._s(t.report.accidentTime))])]),t.report&&t.report.accidentHospitalName?r("div",{staticClass:"row"},[r("span",[t._v("就诊医院 ")]),"00"==t.detail.operateType?r("span",{staticClass:"provacyText"},[t._v("客户信息隐私保护中")]):r("span",[t._v(t._s(t.report.accidentHospitalName))])]):t._e(),t.report&&t.report.accidentCausesName?r("div",{staticClass:"row"},[r("span",[t._v("事故类型 ")]),"00"==t.detail.operateType?r("span",{staticClass:"provacyText"},[t._v("客户信息隐私保护中")]):r("span",[t._v(t._s(t.report.accidentCausesName||""))])]):t._e(),t.report&&t.report.accidentTherapyName?r("div",{staticClass:"row"},[r("span",[t._v("治疗类型 ")]),"00"==t.detail.operateType?r("span",{staticClass:"provacyText"},[t._v("客户信息隐私保护中")]):r("span",[t._v(t._s(t.report.accidentTherapyName||""))])]):t._e(),t.report&&t.report.accidentMainDiagnosis?r("div",{staticClass:"row"},[r("span",[t._v("病情描述 ")]),"00"==t.detail.operateType?r("span",{staticClass:"provacyText"},[t._v("客户信息隐私保护中")]):r("span",{staticStyle:{"word-break":"break-all !important"}},[t._v(t._s(t.report.accidentMainDiagnosis||""))])]):t._e()]:t._e(),t.more?r("div",{staticClass:"more",on:{click:function(e){t.more=!1}}},[t._v(" 收起 "),r("van-icon",{attrs:{name:"arrow-up"}})],1):r("div",{staticClass:"more",on:{click:function(e){t.more=!0}}},[t._v(" 展开 "),r("van-icon",{attrs:{name:"arrow-down"}})],1)],2),r("dl",{staticClass:"info-box"},[r("dt",{staticClass:"title"},[t._v("收款信息")]),r("div",{staticClass:"row"},[r("span",[t._v("收款方式 ")]),"00"==t.detail.operateType?r("span",{staticClass:"provacyText"},[t._v("客户信息隐私保护中")]):r("span",[t._v("银行卡")])]),r("div",{staticClass:"row"},[r("span",[t._v("账户名 ")]),"00"==t.detail.operateType?r("span",{staticClass:"provacyText"},[t._v("客户信息隐私保护中")]):r("span",[t._v(t._s(t.report.payeeName))])]),r("div",{staticClass:"row"},[r("span",[t._v("支付币种 ")]),"00"==t.detail.operateType?r("span",{staticClass:"provacyText"},[t._v("客户信息隐私保护中")]):r("span",[t._v(t._s(t.report.payeeCurrencyName))])]),t.moreAccount?[r("div",{staticClass:"row"},[r("span",[t._v("银行名称 ")]),"00"==t.detail.operateType?r("span",{staticClass:"provacyText"},[t._v("客户信息隐私保护中")]):r("span",[t._v(t._s(t.report.bankName))])]),t.report&&t.report.bankProviceName?r("div",{staticClass:"row"},[r("span",[t._v("开户省/市 ")]),"00"==t.detail.operateType?r("span",{staticClass:"provacyText"},[t._v("客户信息隐私保护中")]):r("span",[t._v(t._s(t.report.bankProviceName))])]):t._e(),r("div",{staticClass:"row"},[r("span",[t._v("银行卡号 ")]),"00"==t.detail.operateType?r("span",{staticClass:"provacyText"},[t._v("客户信息隐私保护中")]):r("span",[t._v(t._s(t.report.payeeAccount))])])]:t._e(),t.moreAccount?r("div",{staticClass:"more",on:{click:function(e){t.moreAccount=!1}}},[t._v(" 收起 "),r("van-icon",{attrs:{name:"arrow-up"}})],1):r("div",{staticClass:"more",on:{click:function(e){t.moreAccount=!0}}},[t._v(" 展开 "),r("van-icon",{attrs:{name:"arrow-down"}})],1)],2)])},H=[],K=a("ea91"),V={components:{},props:{detail:{type:Object,default:function(){return{}}},docuno:{type:String,default:""},report:Object},data:function(){return{more:!1,moreAccount:!1,reportCache:null}},methods:{goChangeInfo:function(){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:t.$sensors.track("page_click",{page_url:window.location.href,page_name:"上传材料页",agent_code:t.hCode||t.$route.query.hCode||Object(K["g"])(),channel_code:"EKB-MINI",customer_no:t.detail.applyCustomerNo||t.$route.query.applyCustomerNo||Object(K["e"])(),report_no:t.detail.docuno||"",module_name:"修改理赔详情",element_name:"修改理赔详情"}),t.$router.push({path:"/claim/v3/report",query:{docuno:t.detail.docuno,accidentCustomerNo:t.detail.accidentCustomerNo,unionId:t.unionId,hCode:t.hCode,accidentCustomerName:t.detail.accidentCustomerName,adultFlag:Object(K["i"])(),isDirect:Object(K["j"])()||"N",mpnative:"1",formPage:"detail",applyCustomerNo:t.detail.applyCustomerNo,source:t.$route.query.source}});case 2:case"end":return e.stop()}}),e)})))()}}},J=V,Y=(a("a3da"),Object(v["a"])(J,$,H,!1,null,"3091dc09",null)),W=Y.exports,X=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"box"},[t._m(0),a("div",{staticClass:"desc"},[t._v("赔付金额"),a("span",[t._v(t._s(t.data)+"元")])])])},Z=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"title"},[t._v("赔付结论"),r("span",[r("img",{staticClass:"icon",attrs:{src:a("bc1e")}}),t._v("结案")])])}],z={props:["data"]},tt=z,et=(a("cd63"),Object(v["a"])(tt,X,Z,!1,null,"1c36da95",null)),at=et.exports,rt={components:{HeaderProgress:h,ReportCase:q,ItemRow:B,PaidHistory:Q,ClaimDetail:W,PaidResult:at},data:function(){return{docuno:this.$route.query.docuno,query:this.$route.query,progress:null,detail:null,report:null,payRecords:null,docList:null,step:this.$route.query.step,isLoading:!1,applyCustomerNo:this.$route.query.applyCustomerNo||Object(K["e"])()}},mounted:function(){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:t.$loading.hide(),t.init(),t.$sensors.track("page_view",{page_url:window.location.href,page_name:document.title,agent_code:Object(K["g"])(),channel_code:"EKB-MINI",customer_no:t.applyCustomerNo,report_no:t.docuno||t.$route.query.docuno||""});case 3:case"end":return e.stop()}}),e)})))()},methods:{trace:function(t,e){this.$sensors.track("page_click",{agent_code:this.$route.query.hCode||Object(K["g"])(),channel_code:"EKB-MINI",customer_no:this.applyCustomerNo,report_no:this.docuno,module_name:e||document.title,element_name:t})},editBank:function(){this.trace("修改账户"),this.$router.push({path:"/claim/v3/binkinfoEdit",query:{docuno:this.docuno,applyCustomerNo:this.detail.applyCustomerNo}})},onRefresh:function(){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:t.init().finally((function(){t.isLoading=!1}));case 1:case"end":return e.stop()}}),e)})))()},init:function(){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.$loading.show(),e.next=3,Promise.all([t.queryProgress(),t.queryClaimDetailIO()]).finally(Object(i["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:t.$loading.hide();case 1:case"end":return e.stop()}}),e)}))));case 3:if(!t.detail.reportUploadFlag||"02"!=t.detail.operateType){e.next=6;break}return e.next=6,t.getDocList();case 6:"cancel"==t.step?(t.$store.commit("resetData",{docuno:t.docuno}),t.noticeWxMiniprogramReload()):"apply"==t.step&&t.noticeWxMiniprogramReload();case 7:case"end":return e.stop()}}),e)})))()},jumpBack:function(){this.trace("返回我的理赔"),this.$router.push({path:"/claim/v3/records",query:{docuno:this.$route.query.docuno||this.docuno,source:this.$route.query.source,applyCustomerNo:this.$route.query.applyCustomerNo||this.detail.applyCustomerNo||Object(K["e"])()}})},jumpUpload:function(){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if("02"!=t.detail.operateType){e.next=4;break}return t.trace("上传材料"),e.next=4,t.gotoApplByInfo(t.query.docuno,!1);case 4:case"end":return e.stop()}}),e)})))()},queryProgress:function(){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:Object(d["M"])({docuno:t.query.docuno,channel:"H5",clientType:"a",customerNo:t.applyCustomerNo,hCode:t.$route.query.hCode||Object(K["g"])()}).then((function(e){t.progress=e})).catch((function(t){}));case 1:case"end":return e.stop()}}),e)})))()},jumpClaimsExtraUpload:function(){this.trace("补充材料"),this.$router.push({path:"/claim/v3/extraUpload",query:{docuno:this.docuno}})},queryClaimDetailIO:function(){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function e(){var a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(d["N"])({docuno:t.query.docuno,applyCustomerNo:t.applyCustomerNo,channel:"H5",clientType:"a"});case 2:a=e.sent,t.detail=a,a.reportInfo?t.report=a.reportInfo:t.report=a;case 5:case"end":return e.stop()}}),e)})))()},onQueryClaimTradeRecord:function(){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(d["Q"])({claimCode:t.docuno,channel:"EKB-MINI"});case 2:t.payRecords=e.sent;case 3:case"end":return e.stop()}}),e)})))()},getDocList:function(){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function e(){var a,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return a={docuno:t.docuno,materialType:"01",accidentCauses:t.report.accidentCauses,accidentTherapy:t.report.accidentTherapy,customerNo:t.applyCustomerNo},e.next=3,Object(d["W"])(a);case 3:r=e.sent,t.docList=r.materialFrom.map((function(t){return t.materialName}));case 5:case"end":return e.stop()}}),e)})))()},onShowPdf:function(t){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function a(){return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:e.trace("理赔通知书"),e.$router.push({path:"/claim/v3/detail/book",query:{url:t}});case 2:case"end":return a.stop()}}),a)})))()},noticeWxMiniprogramReload:function(){var t,e=Object(K["a"])(),a=Object(K["f"])(),r=Object(K["k"])()||"",s=Object(K["l"])()||"",n=Object(K["o"])()||"",i="".concat(location.origin,"/claim_v3/index.html#/claim/v3/records?token=").concat(e,"&openId=").concat(r,"&c=").concat(a,"&policyNo=").concat(s,"&userId=").concat(n);this.$route.query.source&&("&source=".concat(this.$route.query.source),Object(o["a"])("url")),null===(t=window.wx)||void 0===t||t.miniProgram.postMessage({data:{claimRecordsUrl:i}})},jumpPicList:function(){this.trace("理赔影像材料"),this.$router.push({path:"/claim/v3/detail/picList",query:{docuno:this.docuno,source:this.$route.query.source}})},sendMaterial:function(){this.trace("填写","邮寄信息");var t=this.detail,e=t.regionCode,a=t.docuno,r=t.applyCustomerNo,s=t.applyChannel;this.$router.push({path:"/claim/v3/mailing/index/1",query:{regionCode:e,docuno:a,applyCustomerNo:r,applyChannel:s}})},queryDetail:function(t){this.trace("查看","邮寄信息");var e=this.detail,a=e.applyChannel,r=e.applyCustomerNo,s=e.regionCode;this.$router.push({path:"/claim/v3/mailing/info/1",query:{docuno:t,applyChannel:a,applyCustomerNo:r,regionCode:s}})},materialReturn:function(t){this.trace("去填写","回退材料信息");var e=this.detail,a=e.applyChannel,r=e.applyCustomerNo,s=e.regionCode;this.$router.push({path:"/claim/v3/mailing/index/2",query:{applyChannel:a,applyCustomerNo:r,docuno:t,regionCode:s}})},onAMLShow:function(t){this.trace("补录信息"),this.$router.push({path:"/claim/v3/amlPage",query:t})},returnDetail:function(t){this.trace("查看","回退材料信息");var e=this.detail,a=e.applyChannel,r=e.applyCustomerNo,s=e.regionCode;this.$router.push({path:"/claim/v3/mailing/info/2",query:{docuno:t,applyChannel:a,applyCustomerNo:r,regionCode:s}})},jumpAppealRecords:function(){this.trace("申诉记录"),this.$router.push({path:"/claim/v3/appeal/list",query:{docuno:this.docuno}})},secondaryCheck:function(t){var e=this.detail,a=e.secondaryCheckUrl,r=e.policyHolder;r?(sessionStorage.setItem("secondaryCheckUrl",a),this.$router.push({path:"/claim/v3/secondaryCheck",query:Object(n["a"])(Object(n["a"])({},this.detail),{},{fromPage:"detail"})})):this.$toast("投保人姓名缺失")}}},st=rt,nt=(a("54b4"),Object(v["a"])(st,r,s,!1,null,"23b5ab4e",null));e["default"]=nt.exports},"2e0e":function(t,e,a){},"36a8":function(t,e,a){"use strict";a("4069")},4069:function(t,e,a){},"4a4e":function(t,e,a){},"51b5":function(t,e,a){"use strict";a("ab7d")},"54b4":function(t,e,a){"use strict";a("4a4e")},"57b4":function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAFMN540AAAABGdBTUEAALGPC/xhBQAAADhlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAAqACAAQAAAABAAAAHqADAAQAAAABAAAAHgAAAADpiRU/AAAEGUlEQVRIDa1XXWxURRT+5u4NYLctRQUtfynBv4QHEykvRoyJ8kI0gaigr8grqEBLUrrlli0mUokGn0ggERKiJJgYJcEnNZGQgMCDDyYKJUpD1aKkul0gpHvHc2buzJ279+7dpfE+7Jw55zvnzJyZc84sEH2yVPyZScE/crBN8sifpyQLeoAdPylGCqG4crD4rQwCjyfC1YcQuxUXL+1VSEj5fgIhRm6LyGjxM3K+WcPiXwZ47CAl3H5ZodifB7/vRavTtZxWXgAOPaNZQkwqFzyjDfXzIpSEBeXqIxoV/cqg4zlZaqvIoeIHRpC9a5aWq15iO0bDjHrzZmbGNW8pKhaWq1o0cAP44aiik2YZUCoa/fRBxRLvvXivzknCX/SACH69a4WsIYfaX0UYnrLaaWKc4k/h1J+OQ3Mlg7ejPkSKbBNvVgGbjluaD9hHrXbGcpiYQ9EozAXu3IrZ7/wITP0GfPJKzCPKp2t4mA59p+Xeo3AuWAQMjFuWG96YGefEdWIucwVNaY64AUkpBXkIzbzhKOj8ytN7WG6VDVilWDh6ABK0QbkYUlyE75VEUDlrMGZMKFME85fvea+JfdOfJ5RbXrLSEifFSPUNJpXnRBEwZvPGaAVccPrzcJmy6AonUyYTGTGLC4En1wOXj2mGX1jr5+GtrP1RYPdYIhcxE5bjTDbIVRsNpcfOJVpxb2eSL2RvWnn9KDBc0UWMi1nfL8BHTwNhLakMMZFe9uhjwC4q58P/avDpHcDfV+sU1fRLQdH+kxKDMqHu23YJuHUNOPF6nSCa+v0FIYOeeZiZvJONaMhVFcXjWgS67A1hGQJTilTAVJa0aoDKtLFnCWWAcpSKw6QRJkbqXVy36LP9MJFVCTBNVDxqN7cTuTMzqPUKPNfOD6Kw8JAKSRaGYfV8lZ1DHSOQ4UC9bFZzDuW+yqC7W7aTcCxL7fv/N4f1q3Qqn3UcXTG6/vdZe+uNN5+PU4d8QnVIVWZro7+3fIbNjecj+A4U+ro9qNqekY356o2lRUrsbReB4B+gZ20ax5lPPn3dUNLy++Z0dANbqE8//Dhw/jDwcW9jE9TEqHhRF8v7nt8FrBsGKn8Ap7YC1+gZ6H7zl5LDr4EHVwB/XQH2U5m9O+Ui0rREN3UK9aB8IS11OA+t1MY7ozXepHt4g8L51MvAPKrjXI6PbwDGvnGU8kjxHRVNegTN1L7Pg1kZP7x5d13LLAsXjgBfvR3PW6Govak8Tjx+W1FkDDegqeutomMcl89y9YAtIC08NmPl2VLOQ8Y6Zlv6MdP+KVGbZ2s7W0+cRHn6TbdsJhy7SlEEPiSec6Auoik9Ds97132quRoNHbsg/T/t4LP0Et+AEKupwtP1NmkoJqgWTMDDJXL0BTWycyIIQlc/i/4PqxNp+MXowvMAAAAASUVORK5CYII="},"5aab":function(t,e,a){},"5da9":function(t,e,a){"use strict";a("9a8a")},"5e1c":function(t,e,a){"use strict";a("de72")},"60db":function(t,e,a){"use strict";a("d328")},"76b8":function(t,e,a){"use strict";a("2e0e")},"810d":function(t,e,a){},"9a8a":function(t,e,a){},a3da:function(t,e,a){"use strict";a("5aab")},ab58:function(t,e,a){"use strict";a("f761")},ab7d:function(t,e,a){},b59d:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAAEEfUpiAAAABGdBTUEAALGPC/xhBQAAADhlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAAqACAAQAAAABAAAAIKADAAQAAAABAAAAIAAAAACPTkDJAAADtElEQVRYCd1XS0iUURT+rpY9TBlx0QOhWtRGd9GLojblIrAwI2JGqZVBj01PWqltWlRGRGXZSpqpCBKLgiIoxEJ6LSoJK7BVLyzNVxbO3M75x/v/9/5z/2lGgqIL89/z+M6555577vnnB2wjHJVyYFRKnnMUoGBKknIFkRggBK4rgDsLtlNcLCKEa6KEOSxVDM8uQ6aLiH8yruybUYiS8xViZBILlN/TlUBoGkARFA0NYJhUyTXoWcvAna38NIe7BIvDMfkSEqUiF0uiW8RjExrAuR4iMdlEO9zOONrb1osR0cK0A1BB7loBXH0OfBpkFZCSiOVzgcaKpFI9jUx9GXG2qHTObAAMzTjjxFBP5/Y6hrgO8Kfc0XGwKmAdHEhHLslKSt6rQAAp3DxVx+SehMTxdGBdp0J0DpsVfuM9q4BFJZ4Jl6BtBGbp9EMP3v3Zo/2U50Dgq678MQbwufA4fDc5256ug1hYFFNG3PvA4KEfNhNK3CSsVBo3iUqw7Z6c+vM9viten+kytUbDYqMu+8dpLiIupnRhGjmovSGnjwxgE2XyJP1CuiHt/xxdyGYqoKeGXDHZ1HiOwN6LYdHItu4xKkdqnlkANFUBfMv9Q69at5T9IHXzuQtMzgVOtPsRST4wAh0+v0jnTDrQwdteD3jgpkf7qUAHdXeS0H6qyVG6F0Ej0EGQgSPXLt6EHJDRQbWA60C/YUrJ86D/RtKNpRq4oDBGJVL7b6NqW6+UtnlhGLn1QiSUzo2ABXRVN/CVVUr/nDcH03Rj1hsRKIPIZblYxvFI8YTqooZT5vL/FWFNQdAOd9+SU/r6sYFOYAd139U6jnJ/n5ydLQqh7dQ64T97HWrQ1gCoie1EwvkzUEp9yThowzoDhhbgiumic2yiIjnjN0kJgLpoD+1unh/4R3iBd1RM83Vfqe3sN4vPLgQayoH8PN0NMPwT4P7xYcCUG5zFd9bptS3Oi3BA9WuN5TJisg6goyfYb3saXZBV1gG00Cux5hLwbdRzyf2OZdFnnixTKusA2DG9EzHmdkMgTjTLJjJSAxDomIijjGwsvlMCKA5hDd3N7owcZgFin+zbb0Jy+6iOyqOU2X12LVA2C6hdSlry0NwJvPgYhHQ62TH6stlvQwQGwOCa2zI/0YvbdLyWf0c2d6aMnD/IL0Q5f/eZGo9LG4CC8WfQmxgapMAh6pL0LyvNEIgLiSMLwqjzv3ttVhkFoBuOf5NV0ctnMwWzzNEJdNJRXFmwBdcyWVT399fpX041C5hDEjKjAAAAAElFTkSuQmCC"},bc1e:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAERlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAA6ABAAMAAAABAAEAAKACAAQAAAABAAAAGKADAAQAAAABAAAAGAAAAADiNXWtAAABcElEQVRIDc1WsUoDQRCdt1Ym1oJgYy1WFvZ2Jr2VnZKfEDUq/oQoFooW1sbOHxBLEbQNCNYmghDHmc1F93B2j8AGHDhub96b9+Zmb+FAiWBm0F59i5g2hbZYUB8JdEr7vRMAnCj3EGIEPqrN0QcuiHjV5uCOpnkD2/1XGx9mnQX6zpPiWiXGwvFcS6TImQZ+LNHOQzUx0REmwjYYzjxRFkAVXNvgd0MDpehytPkmIWKAT5NtJtPciAE/mVpmMs21DUBnppaVrODaBm7hXA7TvaVXyilHuYmIH7T2zCwNvjpyipfNetADTbkG2u9vJl4k7TcQ0BcuNVcIuPwrgCsSrEpc66IGCmL9eiAGL7ouhcOzx0pJ+yFpYJeMlwXv1tZkzsdyzY9XGmGDuvKBtHDQv1WGyyquitqoNlyEGuTpfKSo90Bz4nvgZF7d0DzLOtBUg1ZWk2KTszT6L0TAO/UbYm5k7Qbo4LDXVM1JfUU/vzPfyE9ifyudHPkAAAAASUVORK5CYII="},cd63:function(t,e,a){"use strict";a("1252")},d328:function(t,e,a){},d4cc:function(t,e,a){"use strict";a("810d")},de72:function(t,e,a){},f761:function(t,e,a){}}]);