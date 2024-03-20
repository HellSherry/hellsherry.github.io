import{_ as D,u as T,b,H as $,e as a,o as q,c as I,f as t,w as l,s as p,M as d,a as w,g as s,t as N,G as P}from"./index-a5253b46.js";const M={style:{position:"relative",height:"102vh"}},A={style:{display:"inline-block",float:"right",width:"200px","margin-left":"10px"}},E={__name:"Schedule",setup(G){T();const u=b(),r=b({records:[{id:1,title:"这是一条通知",details:"这是通知详情",addtime:"2024-01-10T11:15:42.000+00:00"}],total:1,size:10,current:1,pages:1}),e=$({isUpdate:!1,selectedRowKeys:[],visible:!1,page:1,search:"",pojo:{id:"",name:"",startTime:"",endTime:"",description:""},options1:[{label:"同意",value:"同意"},{label:"审批中",value:"审批中"},{label:"拒绝",value:"拒绝"}]});function m(){p.get("/schedule/selectAll").then(i=>{r.value=i.data,console.log(i)})}m();async function V(){typeof await u.value.validate()=="boolean"&&p.post(`/schedule/${e.isUpdate?"update":"insert"}`,e.pojo).then(i=>{console.log(i),m(),i.data>0?d.success((e.isUpdate?"修改":"新增")+"成功"):d.error((e.isUpdate?"修改":"新增")+"失败"),e.pojo.id="",e.visible=!1})}function k(){if(e.selectedRowKeys.length>0){const i=P({header:"提示",body:"您确认删除所选 "+e.selectedRowKeys.length+" 项数据吗？",confirmBtn:{content:"删除",theme:"danger"},cancelBtn:{content:"取消",variant:"outline"},onConfirm:({e:o})=>{_(e.selectedRowKeys),i.hide()}})}else d.error("请选择要删除的项")}function _(i){p.post("/schedule/delete?ids="+i.toString()).then(o=>{console.log(o),m(),o.data>0?d.success("删除成功"):d.error("删除失败")})}return(i,o)=>{const f=a("t-input"),c=a("t-form-item"),g=a("t-time-picker"),K=a("t-form"),j=a("t-dialog"),h=a("t-icon"),v=a("t-button"),x=a("t-tag"),C=a("t-space"),U=a("t-pagination"),y=a("t-link"),S=a("t-popconfirm"),z=a("t-table"),B=a("t-card");return q(),I("div",M,[t(j,{placement:"center",header:e.isUpdate?"编辑课表信息":"新增课表",visible:e.visible,"on-confirm":()=>V(),"on-close":()=>e.visible=!1},{default:l(()=>[t(K,{layout:"inline",ref_key:"form",ref:u,rules:{name:[{required:!0,message:"课节不能为空"}],startTime:[{required:!0,message:"开始时间不能为空"}],endTime:[{required:!0,message:"结束时间不能为空"}]},data:e.pojo,colon:!0},{default:l(()=>[t(c,{style:{width:"96%",margin:"8px 0"},label:"课节",name:"name"},{default:l(()=>[t(f,{modelValue:e.pojo.name,"onUpdate:modelValue":o[0]||(o[0]=n=>e.pojo.name=n),placeholder:"请输入课节"},null,8,["modelValue"])]),_:1}),t(c,{style:{width:"96%",margin:"8px 0"},label:"开始时间",name:"starttime"},{default:l(()=>[t(g,{modelValue:e.pojo.starttime,"onUpdate:modelValue":o[1]||(o[1]=n=>e.pojo.starttime=n),placeholder:"请输入开始时间"},null,8,["modelValue"])]),_:1}),t(c,{style:{width:"96%",margin:"8px 0"},label:"结束时间",name:"endtime"},{default:l(()=>[t(g,{modelValue:e.pojo.endtime,"onUpdate:modelValue":o[2]||(o[2]=n=>e.pojo.endtime=n),placeholder:"请输入结束时间"},null,8,["modelValue"])]),_:1}),t(c,{style:{width:"96%",margin:"8px 0"},label:"描述",name:"description"},{default:l(()=>[t(f,{modelValue:e.pojo.description,"onUpdate:modelValue":o[3]||(o[3]=n=>e.pojo.description=n),placeholder:"请输入描述"},null,8,["modelValue"])]),_:1})]),_:1},8,["data"])]),_:1},8,["header","visible","on-confirm","on-close"]),t(B,{bordered:!1,hoverShadow:"",style:{width:"96%",margin:"0 auto","margin-top":"30px","min-height":"94vh"}},{default:l(()=>[w("div",null,[t(C,{size:6},{default:l(()=>[t(v,{size:"small",onClick:o[4]||(o[4]=n=>{e.visible=!0,e.isUpdate=!1,i.$refs.form.reset()}),theme:"primary"},{icon:l(()=>[t(h,{name:"add"})]),default:l(()=>[s(" 新建 ")]),_:1}),t(v,{size:"small",onClick:k,theme:"danger"},{icon:l(()=>[t(h,{name:"delete"})]),default:l(()=>[s(" 删除 ")]),_:1}),t(x,{variant:"light-outline",theme:"primary",shape:"round",size:"small"},{default:l(()=>[s(" 共有"+N(r.value.total)+"条记录 ",1)]),_:1})]),_:1}),w("div",A,[t(U,{totalContent:!1,onChange:m,modelValue:e.page,"onUpdate:modelValue":o[5]||(o[5]=n=>e.page=n),theme:"simple",showPageSize:!1,pageSize:8,size:"small",total:r.value.total},null,8,["modelValue","total"])])]),t(z,{size:"small","row-key":"id","selected-row-keys":e.selectedRowKeys,"onUpdate:selectedRowKeys":o[6]||(o[6]=n=>e.selectedRowKeys=n),data:r.value.records,columns:[{colKey:"row-select",type:"multiple",width:60},{colKey:"id",title:"ID"},{colKey:"name",title:"课节",ellipsis:!0},{colKey:"starttime",title:"开始时间"},{colKey:"endtime",title:"结束时间"},{colKey:"description",title:"描述"},{title:"操作",colKey:"operation"}]},{operation:l(({row:n})=>[t(y,{onClick:R=>{e.visible=!0,e.isUpdate=!0,e.pojo={...n}},theme:"primary",hover:"color"},{default:l(()=>[s(" 修改 ")]),_:2},1032,["onClick"]),s("  "),t(S,{theme:"danger",confirmBtn:{theme:"danger"},onConfirm:R=>_(n.id),cancelBtn:{variant:"outline"},content:"确认删除吗"},{default:l(()=>[t(y,{theme:"danger",hover:"color"},{default:l(()=>[s(" 删除 ")]),_:1})]),_:2},1032,["onConfirm"])]),_:1},8,["selected-row-keys","data"])]),_:1})])}}},F=D(E,[["__scopeId","data-v-2ed3e1bf"]]);export{F as default};