webpackJsonp([16],{270:function(e,s,t){t(807),t(779);var a=t(2)(t(472),t(868),null,null);a.options.__file="/Users/lizhigang/Documents/TD/iview-admin/src/views/access/access.vue",a.esModule&&Object.keys(a.esModule).some(function(e){return"default"!==e&&"__esModule"!==e})&&console.error("named exports are not supported in *.vue files."),a.options.functional&&console.error("[vue-loader] access.vue: functional components are not supported with templates, they should use render functions."),e.exports=a.exports},472:function(e,s,t){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var a=t(7),c=function(e){return e&&e.__esModule?e:{default:e}}(a);s.default={name:"access_index",data:function(){return{accessCode:parseInt(c.default.get("access")),switchValue:1===parseInt(c.default.get("access"))}},computed:{avatorPath:function(){return localStorage.avatorImgPath}},methods:{changeAccess:function(e){e?(this.accessCode=1,c.default.set("access",1)):(this.accessCode=0,c.default.set("access",0)),this.$store.commit("updateMenulist")}}}},779:function(e,s){},807:function(e,s){},868:function(e,s,t){e.exports={render:function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("div",{staticClass:"access"},[t("Row",[t("Col",{attrs:{span:"8"}},[t("Card",[t("p",{attrs:{slot:"title"},slot:"title"},[t("Icon",{attrs:{type:"android-contact"}}),e._v("\n                    当前用户\n                ")],1),e._v(" "),t("div",{staticClass:"access-user-con access-current-user-con"},[t("img",{attrs:{src:e.avatorPath,alt:""}}),e._v(" "),t("p",[e._v("当前用户权限值:"),t("b",[e._v(e._s(e.accessCode))])])])])],1),e._v(" "),t("Col",{staticClass:"padding-left-10",attrs:{span:"16"}},[t("Card",[t("p",{attrs:{slot:"title"},slot:"title"},[t("Icon",{attrs:{type:"android-contacts"}}),e._v("\n                    不同权限用户的不同菜单\n                ")],1),e._v(" "),t("div",{staticClass:"access-user-con access-change-access-con"},[t("Col",{attrs:{span:"8"}},[t("Row",{staticClass:"access-change-access-con-row",attrs:{type:"flex",justify:"center",align:"middle"}},[t("i-switch",{attrs:{value:e.switchValue,size:"large"},on:{"on-change":e.changeAccess}})],1)],1),e._v(" "),t("Col",{staticClass:"padding-left-10",attrs:{span:"16"}},[t("Row",{staticClass:"access-change-access-con-row",attrs:{type:"flex",justify:"center",align:"middle"}},[t("p",[e._v("您可以通过左侧的开关来切换当前用户的权限值，然后您可以观察左侧菜单栏的变化，如果当前用户的权限值是"),t("b",[e._v(" 0 ")]),e._v("，则左侧菜单栏会显示’权限测试页‘这一项('权限测试页'只用于测试，点击不会跳转)。")])])],1)],1)])],1)],1)],1)},staticRenderFns:[]},e.exports.render._withStripped=!0}});