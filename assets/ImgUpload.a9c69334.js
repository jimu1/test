import{a as p}from"./service.08958120.js";import{d as m,o as g,c as f,aw as h,T as r}from"./vendor.e75d5d18.js";const v=m({emits:["success","showCropper"],setup(w,{expose:n,emit:l}){const i=s=>{const{wx:o}=window;o.chooseImage({count:1,sizeType:["original","compressed"],defaultCameraMode:"normal",success:e=>{o.getLocalImgData({localId:e.localIds[0],success:c=>{var a=c.localData;a.indexOf("data:image")!=0&&(a="data:image/png;base64,"+a);let t=[];t.push(a),t.push(s),l("showCropper",t)}})}})},u=async s=>{r.loading({duration:0});const o=d(s);try{const e=await p(o);r.clear(),e.key?(r("\u4E0A\u4F20\u6210\u529F"),l("success",e.fileDownloadUrl,e==null?void 0:e.fileKey)):r(e.message)}catch{r("\u4E0A\u4F20\u5931\u8D25")}},d=s=>{for(var o=s.split(","),e=o[0].match(/:(.*?);/)[1],c=atob(o[1]),a=c.length,t=new Uint8Array(a);a--;)t[a]=c.charCodeAt(a);return new File([t],"pic.png",{type:e})};return n({uploadImage:u,onPhotoSelect:i}),(s,o)=>(g(),f("div",null,[h(s.$slots,"default")]))}});export{v as _};
