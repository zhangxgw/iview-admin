webpackJsonp([17],{296:function(t,e,a){a(797);var o=a(2)(a(512),a(852),null,null);o.options.__file="/Users/lizhigang/Documents/TD/iview-admin/src/views/tables/table-to-image.vue",o.esModule&&Object.keys(o.esModule).some(function(t){return"default"!==t&&"__esModule"!==t})&&console.error("named exports are not supported in *.vue files."),o.options.functional&&console.error("[vue-loader] table-to-image.vue: functional components are not supported with templates, they should use render functions."),t.exports=o.exports},512:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=a(90),r=function(t){return t&&t.__esModule?t:{default:t}}(o);e.default={name:"table-to-image",data:function(){var t=this;return{tableData1:this.mockTableData1(),imageName:"",tableColumns1:[{title:"名称",key:"name"},{title:"状态",key:"status",render:function(t,e){var a=e.row;return t("Tag",{props:{type:"dot",color:1===a.status?"blue":2===a.status?"green":"red"}},1===a.status?"构建中":2===a.status?"构建完成":"构建失败")}},{title:"画像内容",key:"portrayal",render:function(e,a){return e("Poptip",{props:{trigger:"hover",title:a.row.portrayal.length+"个画像",placement:"bottom"}},[e("Tag",a.row.portrayal.length),e("div",{slot:"content"},[e("ul",t.tableData1[a.index].portrayal.map(function(t){return e("li",{style:{textAlign:"center",padding:"4px"}},t)}))])])}},{title:"选定人群数",key:"people",render:function(e,a){return e("Poptip",{props:{trigger:"hover",title:a.row.people.length+"个客群",placement:"bottom"}},[e("Tag",a.row.people.length),e("div",{slot:"content"},[e("ul",t.tableData1[a.index].people.map(function(t){return e("li",{style:{textAlign:"center",padding:"4px"}},t.n+"："+t.c+"人")}))])])}},{title:"取样时段",key:"time",render:function(t,e){return t("div","近"+e.row.time+"天")}},{title:"更新时间",key:"update",render:function(e,a){return e("div",t.formatDate(t.tableData1[a.index].update))}}]}},methods:{mockTableData1:function(){for(var t=[],e=0;e<10;e++)t.push({name:"商圈"+Math.floor(100*Math.random()+1),status:Math.floor(3*Math.random()+1),portrayal:["城市渗透","人群迁移","消费指数","生活指数","娱乐指数"],people:[{n:"客群"+Math.floor(100*Math.random()+1),c:Math.floor(1e6*Math.random()+1e5)},{n:"客群"+Math.floor(100*Math.random()+1),c:Math.floor(1e6*Math.random()+1e5)},{n:"客群"+Math.floor(100*Math.random()+1),c:Math.floor(1e6*Math.random()+1e5)}],time:Math.floor(7*Math.random()+1),update:new Date});return t},formatDate:function(t){var e=t.getFullYear(),a=t.getMonth()+1;a=a<10?"0"+a:a;var o=t.getDate();return o=o<10?"0"+o:o,e+"-"+a+"-"+o},exportImage:function(){var t=this,e=this.$refs.table2image.$el;(0,r.default)(e,{onrendered:function(e){var a=e.toDataURL();document.getElementById("exportedImage").src=a;var o=document.createElement("a");o.href=a,o.download=t.imageName?t.imageName:"未命名",document.body.appendChild(o),o.click(),document.body.removeChild(o)}})}}}},797:function(t,e){},852:function(t,e,a){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("Row",[a("Card",[a("p",{attrs:{slot:"title"},slot:"title"},[a("Icon",{attrs:{type:"images"}}),t._v("\n                将表格数据连同样式一起以图片形式导出\n            ")],1),t._v(" "),a("Row",[a("Col",{attrs:{span:"18"}},[a("Table",{ref:"table2image",attrs:{data:t.tableData1,columns:t.tableColumns1,stripe:""}})],1),t._v(" "),a("Col",{staticClass:"padding-left-20",attrs:{span:"6"}},[a("div",{staticClass:"margin-bottom-10",attrs:{id:"showImage"}},[a("span",[t._v("输入文件名：")]),t._v(" "),a("Input",{staticStyle:{width:"190px"},attrs:{icon:"document",placeholder:"请输入图片名"},model:{value:t.imageName,callback:function(e){t.imageName=e},expression:"imageName"}})],1),t._v(" "),a("Button",{attrs:{type:"primary"},on:{click:t.exportImage}},[t._v("导出表格为图片")]),t._v(" "),a("div",{staticClass:"show-image margin-top-20",attrs:{id:"showImage"}},[a("img",{attrs:{id:"exportedImage"}})])],1)],1)],1)],1)],1)},staticRenderFns:[]},t.exports.render._withStripped=!0}});