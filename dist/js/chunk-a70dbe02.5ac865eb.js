(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-a70dbe02"],{5630:function(a,t,e){},"56d7":function(a,t,e){"use strict";e("5630")},"9fd3":function(a,t,e){"use strict";e("fd01")},a849:function(a,t,e){"use strict";e.r(t);var l=function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("div",{staticClass:"g-body"},[e("div",{staticClass:"condition"},[e("el-form",{staticClass:"demo-form-inline",attrs:{inline:!0,model:a.formInline}},[e("el-form-item",{attrs:{label:"币种"}},[e("el-select",{model:{value:a.formInline.coin_name,callback:function(t){a.$set(a.formInline,"coin_name",t)},expression:"formInline.coin_name"}},a._l(a.coin_list,(function(a){return e("el-option",{key:a.value,attrs:{label:a.label,value:a.value}})})),1)],1),e("el-form-item",{attrs:{label:"收款方式"}},[e("el-select",{attrs:{clearable:""},model:{value:a.formInline.pay_type,callback:function(t){a.$set(a.formInline,"pay_type",t)},expression:"formInline.pay_type"}},a._l(a.paywayList,(function(a){return e("el-option",{key:a.value,attrs:{label:a.label,value:a.value}})})),1)],1),e("el-form-item",{attrs:{label:"吞吐量"}},[e("el-select",{attrs:{clearable:""},model:{value:a.formInline.number,callback:function(t){a.$set(a.formInline,"number",t)},expression:"formInline.number"}},a._l(a.speedList,(function(a){return e("el-option",{key:a.value,attrs:{label:a.label,value:a.value}})})),1)],1),e("el-form-item",{attrs:{label:"蓝盾"}},[e("el-switch",{model:{value:a.formInline.landun,callback:function(t){a.$set(a.formInline,"landun",t)},expression:"formInline.landun"}})],1),e("el-form-item",[e("el-button",{attrs:{disabled:a.origin_loading||a.summary_loading,type:"primary",icon:"el-icon-search"},on:{click:a.search}},[a._v("开始查询")])],1)],1)],1),e("div",{staticClass:"custom-tabel"},[e("div",{staticClass:"custom-tabel-item"},[e("otc-out-summary",{attrs:{tableData:a.summary_out,loading:a.summary_loading,"out-rank-data":a.outRankData,rankLoading:a.rank_loading,"speed-out":a.speed_out}}),e("otc-out",{attrs:{tableData:a.origin_out,loading:a.origin_loading}})],1),e("div",{staticClass:"custom-tabel-item"},[e("otc-in-summary",{attrs:{tableData:a.summary_in,loading:a.summary_loading,"in-rank-data":a.inRankData,rankLoading:a.rank_loading,"speed-in":a.speed_in}}),e("otc-in",{attrs:{tableData:a.origin_in,loading:a.origin_loading}})],1)])])},n=[],i=function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("div",{staticClass:"tab-col"},[e("div",{staticClass:"tab-title"},[a._v("OTC出售原始数据")]),e("div",{directives:[{name:"loading",rawName:"v-loading",value:a.loading,expression:"loading"}],staticClass:"tab-containt"},[e("el-table",{staticStyle:{width:"100%"},attrs:{data:a.tableData,border:"",height:"600"}},[e("el-table-column",{attrs:{label:"序号",width:"50"},scopedSlots:a._u([{key:"default",fn:function(t){return[e("span",[a._v(" "+a._s(t.row.rank_cnt)+" ")])]}}])}),e("el-table-column",{attrs:{prop:"user_name",label:"广告方"}}),e("el-table-column",{attrs:{prop:"trade_month_times",label:"月报"}}),e("el-table-column",{attrs:{prop:"order_complete_rate",label:"完成率"}}),e("el-table-column",{attrs:{prop:"trade_count",label:"数量"}}),e("el-table-column",{attrs:{prop:"price",label:"单价"}}),e("el-table-column",{attrs:{label:"限额",width:"200"},scopedSlots:a._u([{key:"default",fn:function(t){return[e("span",[a._v(" "+a._s(t.row.min_trade_limit)+" - "+a._s(t.row.max_trade_limit)+" CNY ")])]}}])})],1)],1)])},o=[],r={props:["tableData","loading"]},s=r,u=e("5d22"),c=Object(u["a"])(s,i,o,!1,null,"d7e89b48",null),d=c.exports,m=function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("div",{staticClass:"tab-col"},[e("div",{staticClass:"tab-title"},[a._v("OTC出售")]),e("div",{staticClass:"tab-containt"},[e("el-table",{directives:[{name:"loading",rawName:"v-loading",value:a.rankLoading,expression:"rankLoading"}],staticStyle:{width:"100%"},attrs:{data:a.outRankData,border:"",height:"100"}},[e("el-table-column",{attrs:{prop:"price",label:"我的金额"}}),e("el-table-column",{attrs:{prop:"trade_count",label:"数量"}}),e("el-table-column",{attrs:{prop:"rank_cnt",label:"我的排名"}}),e("el-table-column",{attrs:{prop:"number",label:"前10预计"}})],1),e("div",{staticClass:"tab-title"},[a._v(" OTC出售汇总 "),e("span",{staticClass:"speed"},[a._v(" 吞吐速度: "+a._s(a.speedOut)+" ")])]),e("el-table",{directives:[{name:"loading",rawName:"v-loading",value:a.loading,expression:"loading"}],staticStyle:{width:"100%"},attrs:{data:a.tableData,border:"",height:"200"}},[e("el-table-column",{attrs:{prop:"price",label:"汇总单价"}}),e("el-table-column",{attrs:{prop:"price_cnt",label:"单价数量"}}),e("el-table-column",{attrs:{prop:"trade_count_sum",label:"总币数"}}),e("el-table-column",{attrs:{prop:"trade_count_avg",label:"平均币数"}})],1)],1)])},b=[],p={props:["tableData","tableSummary","loading","rankLoading","outRankData","speedOut"]},_=p,g=Object(u["a"])(_,m,b,!1,null,"0ea9e91a",null),v=g.exports,f=function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("div",{staticClass:"tab-col"},[e("div",{staticClass:"tab-title"},[a._v("OTC买入原始数据")]),e("div",{directives:[{name:"loading",rawName:"v-loading",value:a.loading,expression:"loading"}],staticClass:"tab-containt"},[e("el-table",{staticStyle:{width:"100%"},attrs:{data:a.tableData,border:"",height:"600"}},[e("el-table-column",{attrs:{label:"序号",width:"50"},scopedSlots:a._u([{key:"default",fn:function(t){return[e("span",[a._v(" "+a._s(t.row.rank_cnt)+" ")])]}}])}),e("el-table-column",{attrs:{prop:"user_name",label:"广告方"}}),e("el-table-column",{attrs:{prop:"trade_month_times",label:"月报"}}),e("el-table-column",{attrs:{prop:"order_complete_rate",label:"完成率"}}),e("el-table-column",{attrs:{prop:"trade_count",label:"数量"}}),e("el-table-column",{attrs:{prop:"price",label:"单价"}}),e("el-table-column",{attrs:{label:"限额",width:"200"},scopedSlots:a._u([{key:"default",fn:function(t){return[e("span",[a._v(" "+a._s(t.row.min_trade_limit)+" - "+a._s(t.row.max_trade_limit)+" CNY ")])]}}])})],1)],1)])},h=[],y={props:["tableData","loading"]},k=y,w=Object(u["a"])(k,f,h,!1,null,"098ba3d8",null),C=w.exports,D=function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("div",{staticClass:"tab-col"},[e("div",{staticClass:"tab-title"},[a._v("OTC买入")]),e("div",{staticClass:"tab-containt"},[e("el-table",{directives:[{name:"loading",rawName:"v-loading",value:a.rankLoading,expression:"rankLoading"}],staticStyle:{width:"100%"},attrs:{data:a.outRankData,border:"",height:"100"}},[e("el-table-column",{attrs:{prop:"price",label:"我的金额"}}),e("el-table-column",{attrs:{prop:"trade_count",label:"数量"}}),e("el-table-column",{attrs:{prop:"rank_cnt",label:"我的排名"}}),e("el-table-column",{attrs:{prop:"number",label:"前10预计"}})],1),e("div",{staticClass:"tab-title"},[a._v(" OTC买入汇总 "),e("span",{staticClass:"speed"},[a._v(" 吞吐速度: "+a._s(a.speedIn)+" ")])]),e("el-table",{directives:[{name:"loading",rawName:"v-loading",value:a.loading,expression:"loading"}],staticStyle:{width:"100%"},attrs:{data:a.tableData,border:"",height:"200"}},[e("el-table-column",{attrs:{prop:"price",label:"汇总单价"}}),e("el-table-column",{attrs:{prop:"price_cnt",label:"单价数量"}}),e("el-table-column",{attrs:{prop:"trade_count_sum",label:"总币数"}}),e("el-table-column",{attrs:{prop:"trade_count_avg",label:"平均币数"}})],1)],1)])},S=[],I={props:["tableData","tableSummary","loading","rankLoading","outRankData","speedIn"],data:function(){return{}}},O=I,R=Object(u["a"])(O,D,S,!1,null,"632ebea5",null),T=R.exports,x=e("a7fe"),L={api_sumary:function(a){return Object(x["a"])({url:"/otc/sumary",method:"post",data:a})},api_origin:function(a){return Object(x["a"])({url:"/otc/origin",method:"post",data:a})},api_rank:function(a){return Object(x["a"])({url:"/otc/rank",method:"post",data:a})},api_speed:function(a){return Object(x["a"])({url:"/otc/tuntu",method:"post",data:a})}},$={components:{otcOut:d,otcOutSummary:v,otcIn:C,otcInSummary:T},computed:{nickname:function(){return this.$store.getters.GTE_NICKNAME}},data:function(){return{origin_loading:!1,summary_loading:!1,rank_loading:!1,coin_list:[{label:"USDT",value:"USDT"},{label:"BTC",value:"BTC"},{label:"ETH",value:"ETH"},{label:"EOS",value:"EOS"},{label:"XRP",value:"XRP"},{label:"LTC",value:"LTC"},{label:"HT",value:"HT"},{label:"HUSD",value:"HUSD"}],paywayList:[{label:"银行卡",value:"1"},{label:"微信",value:"2"},{label:"支付宝",value:"3"}],autoRenewList:[{label:"10秒",value:10},{label:"20秒",value:20},{label:"30秒",value:30},{label:"不自动刷新",value:-1}],summary_out:[],origin_out:[],summary_in:[],origin_in:[],outRankData:[],inRankData:[],formInline:{coin_name:"USDT",pay_type:"",autoRenew:"",landun:!1,number:10},speedList:[{label:"10行",value:10},{label:"30行",value:30},{label:"50行",value:50},{label:"80行",value:80},{label:"100行",value:100}],speed_in:0,speed_out:0}},methods:{search:function(){var a=new FormData;a.append("coin_name",this.formInline.coin_name),a.append("landun",this.formInline.landun?1:0),a.append("pay_type",this.formInline.pay_type),a.append("nickname",this.nickname),a.append("number",this.formInline.number),this.origin_loading=!0,this.summary_loading=!0,this.rank_loading=!0,this.summary_out=[],this.origin_out=[],this.summary_in=[],this.origin_in=[],this.outRankData=[],this.inRankData=[],this.speed_in=0,this.speed_out=0,this.getOringin(a),this.getSummary(a),this.getRank(a),this.getSpeed(a)},getSpeed:function(a){var t=this;L.api_speed(a).then((function(a){a.data.buy&&(t.speed_in=a.data.buy),a.data.sell&&(t.speed_out=a.data.sell)})).catch((function(a){t.$message({message:"查询吞吐量数据失败",type:"warning"})}))},getRank:function(a){var t=this;L.api_rank(a).then((function(a){a.data.buy&&(t.inRankData=a.data.buy),a.data.sell&&(t.outRankData=a.data.sell),t.rank_loading=!1})).catch((function(a){t.$message({message:"查询排名数据失败",type:"warning"}),t.rank_loading=!1}))},getSummary:function(a){var t=this;L.api_sumary(a).then((function(a){a.data.buy&&(t.summary_in=a.data.buy),a.data.sell&&(t.summary_out=a.data.sell),t.summary_loading=!1})).catch((function(a){t.$message({message:"查询汇总数据失败",type:"warning"}),t.summary_loading=!1}))},getOringin:function(a){var t=this;L.api_origin(a).then((function(a){a.data.buy&&(t.origin_in=a.data.buy),a.data.sell&&(t.origin_out=a.data.sell),t.origin_loading=!1})).catch((function(a){t.$message({message:"查询源数据失败",type:"warning"}),t.origin_loading=!1}))}}},E=$,N=(e("56d7"),e("9fd3"),Object(u["a"])(E,l,n,!1,null,"70075895",null));t["default"]=N.exports},fd01:function(a,t,e){}}]);