webpackJsonp([6],{272:function(e,t,a){a(806);var s=a(2)(a(475),a(867),null,null);s.options.__file="/Users/lizhigang/Documents/TD/iview-admin/src/views/advanced-router/component/order-info.vue",s.esModule&&Object.keys(s.esModule).some(function(e){return"default"!==e&&"__esModule"!==e})&&console.error("named exports are not supported in *.vue files."),s.options.functional&&console.error("[vue-loader] order-info.vue: functional components are not supported with templates, they should use render functions."),e.exports=s.exports},474:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={props:{row:Object}}},475:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=a(818),n=function(e){return e&&e.__esModule?e:{default:e}}(s);t.default={name:"order-info",components:{expandRow:n.default},data:function(){return{showInfo:!1,order_col:[{title:"订单号",key:"order_id",align:"center"},{title:"买家",key:"buyer",align:"center"},{title:"地址",key:"addr",align:"center"},{title:"下单时间",key:"time",align:"center"},{title:"交易状态",key:"state",align:"center"}],order_data:[],columns10:[{type:"expand",width:50,render:function(e,t){return e(n.default,{props:{row:t.row}})}},{title:"姓名",key:"name"},{title:"年龄",key:"age"},{title:"地址",key:"address"}],data9:[{name:"王小明",age:18,address:"北京市朝阳区芍药居",job:"数据工程师",interest:"羽毛球",birthday:"1991-05-14",book:"乔布斯传",movie:"致命魔术",music:"I Cry"},{name:"张小刚",age:25,address:"北京市海淀区西二旗",job:"数据科学家",interest:"排球",birthday:"1989-03-18",book:"我的奋斗",movie:"罗马假日",music:"My Heart Will Go On"},{name:"李小红",age:30,address:"上海市浦东新区世纪大道",job:"数据产品经理",interest:"网球",birthday:"1992-01-31",book:"赢",movie:"乔布斯",music:"Don’t Cry"},{name:"周小伟",age:26,address:"深圳市南山区深南大道",job:"数据分析师",interest:"桌球，跑步",birthday:"1988-7-25",book:"红楼梦",movie:"倩女幽魂",music:"演员"}]}},methods:{init:function(){var e=parseInt(this.$route.params.order_id.toString().substr(-1,1)),t="",a="",s="",n="";switch(e){case 1:t="Arasn",a="北京市东直门外大街39号院2号楼航空服务大厦",s="2017年10月20日 13：33：24",n="已付款";break;case 2:t="Lison",a="北京市东直门外大街39号院2号楼航空服务大厦",s="2017年10月21日 19：13：24",n="已付款";break;case 3:t="lili",a="TalkingData总部",s="2017年10月12日 10：39：24",n="待收货";break;case 4:t="lala",a="国家统计局",s="2017年8月20日 11：45：24",n="已收货"}var o={order_id:this.$route.params.order_id,buyer:t,addr:a,time:s,state:n};this.order_data=[o]}},mounted:function(){this.init()},watch:{$route:function(){this.init()}}}},791:function(e,t){},806:function(e,t){},818:function(e,t,a){a(791);var s=a(2)(a(474),a(845),null,null);s.options.__file="/Users/lizhigang/Documents/TD/iview-admin/src/views/advanced-router/component/expandRow.vue",s.esModule&&Object.keys(s.esModule).some(function(e){return"default"!==e&&"__esModule"!==e})&&console.error("named exports are not supported in *.vue files."),s.options.functional&&console.error("[vue-loader] expandRow.vue: functional components are not supported with templates, they should use render functions."),e.exports=s.exports},845:function(e,t,a){e.exports={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("Row",{staticClass:"advanced-router"},[a("Col",{attrs:{span:"8"}},[a("span",{staticClass:"expand-key"},[e._v("职业：")]),e._v(" "),a("span",{staticClass:"expand-value"},[e._v(e._s(e.row.job))])]),e._v(" "),a("Col",{attrs:{span:"8"}},[a("span",{staticClass:"expand-key"},[e._v("兴趣：")]),e._v(" "),a("span",{staticClass:"expand-value"},[e._v(e._s(e.row.interest))])]),e._v(" "),a("Col",{attrs:{span:"8"}},[a("span",{staticClass:"expand-key"},[e._v("生日：")]),e._v(" "),a("span",{staticClass:"expand-value"},[e._v(e._s(e.row.birthday))])])],1),e._v(" "),a("Row",[a("Col",{attrs:{span:"8"}},[a("span",{staticClass:"expand-key"},[e._v("最喜欢的书：")]),e._v(" "),a("span",{staticClass:"expand-value"},[e._v("《"+e._s(e.row.book)+"》")])]),e._v(" "),a("Col",{attrs:{span:"8"}},[a("span",{staticClass:"expand-key"},[e._v("最喜欢的电影：")]),e._v(" "),a("span",{staticClass:"expand-value"},[e._v(e._s(e.row.movie))])]),e._v(" "),a("Col",{attrs:{span:"8"}},[a("span",{staticClass:"expand-key"},[e._v("最喜欢的音乐：")]),e._v(" "),a("span",{staticClass:"expand-value"},[e._v(e._s(e.row.music))])])],1)],1)},staticRenderFns:[]},e.exports.render._withStripped=!0},867:function(e,t,a){e.exports={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("Row",[a("Card",[a("p",{attrs:{slot:"title"},slot:"title"},[a("Icon",{attrs:{type:"compose"}}),e._v("\n                订单详情\n            ")],1),e._v(" "),a("Table",{attrs:{columns:e.order_col,data:e.order_data}}),e._v(" "),a("Modal",{attrs:{width:"700",title:"订单信息"},model:{value:e.showInfo,callback:function(t){e.showInfo=t},expression:"showInfo"}},[a("Table",{attrs:{columns:e.order_col,data:e.order_data}})],1)],1)],1),e._v(" "),a("Row",{staticClass:"margin-top-10"},[a("Card",[a("Row",[a("p",{staticClass:"advanced-router-tip-p"},[e._v("虽然iview-admin支持打开带参数的页面，但是类似于这种需求，还是建议用iview的Modal或者使用表格直接在表格内展开数据")]),e._v(" "),a("p",[a("Button",{attrs:{type:"primary"},on:{click:function(t){e.showInfo=!0}}},[e._v("点击按钮弹出Modal")])],1)]),e._v(" "),a("div",{staticClass:"margin-top-10"},[a("p",{staticClass:"advanced-router-tip-p"},[e._v("iview官方示例"),a("a",{attrs:{href:"https://www.iviewui.com/components/table"}},[e._v("表格")])]),e._v(" "),a("Table",{attrs:{columns:e.columns10,data:e.data9}})],1)],1)],1)],1)},staticRenderFns:[]},e.exports.render._withStripped=!0}});