import{_ as p,a6 as g,e as s,o as m,c as _,a as t,f as o,w as r,n as w,u as y,g as l,t as a}from"./index-a5253b46.js";import{a as c}from"./axios1-7085e467.js";const b={data(){return{FillAnswers:0,FillAnswersAll:0,id:this.$route.query.id,name:this.$route.query.name,password:this.$route.query.password,count:0}},methods:{goToTopic(){this.$router.push({name:"topic",query:{user:this.name,password:this.password}})}},computed:{...g(y,["loginUser"]),countTwo(){return 100/this.FillAnswersAll*this.FillAnswers}},async created(){console.log(this.id);try{const e=await c.get("/getFill",{params:{groupId:this.id,userId:this.loginUser.sub.userId,username:this.loginUser.sub.username}});this.FillAnswers=e.data.result[0].count,console.log(e.data.result)}catch(e){console.error(e)}try{const e=await c.get("/getFillAll",{params:{groupId:this.id,userId:this.loginUser.sub.userId,username:this.loginUser.sub.username}});this.FillAnswersAll=e.data.result[0].count,console.log(e.data.result)}catch(e){console.error(e)}}},f={style:{"min-height":"100vh","backdrop-filter":"blur(20px)","padding-top":"1.6vh","padding-bottom":"10px"}},x={style:{"font-size":"20PX",width:"460px",margin:"0 auto","margin-top":"20vh"}},A={style:{"margin-right":"60px"}},k={style:{"text-align":"right",width:"80%","margin-top":"10px"}};function v(e,F,T,I,n,i){const d=s("H2"),u=s("t-button"),h=s("t-card");return m(),_("div",{style:w([{"background-position":"center"},`background-image: url(' //pic.sherry.games/assets/image/mobileback/th (${Math.round(Math.random()*30)}).jpg');background-repeat: no-repeat;background-size: cover;  `])},[t("div",f,[o(h,{bordered:!1,hoverShadow:"",style:{width:"96%",margin:"0 auto","min-height":"90vh"}},{default:r(()=>[t("div",x,[o(d,{style:{"margin-right":"100px"}},{default:r(()=>[l("题卷共"+a(n.FillAnswersAll)+"题/你答对了:"+a(n.FillAnswers)+"题",1)]),_:1}),t("span",A," 你的题测成绩是："+a(i.countTwo)+"分 ",1),t("div",k,[o(u,{class:"history_but",onClick:i.goToTopic},{default:r(()=>[l("确定")]),_:1},8,["onClick"])])])]),_:1})])],4)}const U=p(b,[["render",v]]);export{U as default};