import{_}from"./ToHtml-a707d649.js";import{b as c,d as I,u as S,e as l,o as s,c as i,a as d,f as e,w as r,F as v,a5 as k,r as A,n as h,g,t as V,h as L}from"./index-a5253b46.js";/* empty css                                               */const N={style:{width:"94%",margin:"20px auto  100px auto"}},C=["id"],B={key:0,id:"aimsgLast",style:{height:"100px"}},D={style:{width:"100%",position:"fixed",bottom:"54px"}},O={style:{"text-align":"right","margin-top":"-38px","margin-right":"8px"}},E={__name:"AIView",setup(z){const t=c([{msg:"你好！我是GPT，一个由OpenAI创建的人工智能语言模型。我可以回答你关于各种主题的问题，帮助你解决问题或者提供信息。有什么我可以帮助你的吗？",type:"AI",time:new Date().toLocaleString()}]);localStorage.getItem("messages")!=null&&(t.value=JSON.parse(localStorage.getItem("messages"))),I(()=>{localStorage.setItem("messages",JSON.stringify(t.value))});const a=c(),n=c(!1);S();function f(){n.value||(n.value=!0,t.value.push({msg:a.value,type:"Me",time:new Date().toLocaleString()}),k.get("http://7d9fe8e2.r5.cpolar.top/public/bing?apitype=sql&q="+a.value).then(async p=>{t.value.push({msg:p.data.ChatGPT_Answer,type:"AI",time:new Date().toLocaleString()}),console.log(p),localStorage.setItem("messages",JSON.stringify(t.value))}).finally(()=>{a.value="",document.getElementById("aimsgLast").scrollIntoView({behavior:"smooth",block:"end"}),n.value=!1}))}return(p,u)=>{const m=l("t-avatar"),x=l("t-space"),y=l("nut-textarea"),b=l("t-button");return s(),i(v,null,[d("div",N,[e(x,{style:{width:"100%","min-height":"80vh"},direction:"vertical"},{default:r(()=>[(s(!0),i(v,null,A(t.value,(o,w)=>(s(),i("div",{id:"aimsg"+w},[e(m,{size:"large",style:h(o.type=="AI"?"":"float: right")},{default:r(()=>[g(V(o.type),1)]),_:2},1032,["style"]),e(_,{style:h("vertical-align: top;max-width: 72%;margin-top: 2px;display: inline-block;margin-left:6px;margin-right:6px;padding: 10px;border-radius: 8px;background-color: var(--td-bg-color-container); width:fit-content;"+(o.type=="AI"?"":"float: right;")),value:o.msg.replace(/\n\n```/g,"<pre>").replace(/```\n\n/g,"</pre>").replace(/\n/g,"<br>")},null,8,["style","value"])],8,C))),256)),n.value?(s(),i("div",B,[e(m,null,{default:r(()=>[g("AI")]),_:1}),e(_,{style:{"vertical-align":"top","max-width":"80%","margin-top":"2px",display:"inline-block","margin-left":"6px","margin-right":"6px",padding:"10px","border-radius":"8px","background-color":"var(--td-bg-color-container)",width:"fit-content"},value:"正在加载..."})])):L("",!0)]),_:1})]),d("div",D,[e(y,{modelValue:a.value,"onUpdate:modelValue":u[0]||(u[0]=o=>a.value=o),placeholder:"请输入内容",rows:1,autosize:""},null,8,["modelValue"]),d("div",O,[e(b,{onClick:f,disabled:a.value==""},{default:r(()=>[g("发送")]),_:1},8,["disabled"])])])],64)}}};export{E as default};