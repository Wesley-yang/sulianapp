webpackJsonp([453],{"8hhA":function(n,e,t){var a=t("siUG");"string"==typeof a&&(a=[[n.i,a,""]]),a.locals&&(n.exports=a.locals);t("rjj0")("c15c1f8a",a,!0,{})},JznH:function(n,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=t("Pexp"),i=t("Tg7E"),l={data:function(){return{module1:[]}},activated:function(){this.getData()},methods:{getData:function(){var n=this,e={supplier_id:this.$route.params.id};$http.get("plugin.merchant.frontend.supplier-detail",e,"获取中").then(function(e){console.log(e.data),1==e.result?n.module1=e.data:Object(i.Toast)(e.msg)},function(n){console.log(n)})}},components:{cTitle:a.a}},o={render:function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("div",{attrs:{id:"share"}},[t("div",[t("c-title",{attrs:{hide:!1,text:"供应商详情"}}),n._v(" "),t("div",{staticStyle:{height:"40px"}}),n._v(" "),t("div",{staticClass:"middle"},[n._l(n.module1,function(e,a){return[t("div",{staticClass:"lrest"},[n._v(n._s(e.name))]),n._v(" "),t("div",{staticClass:"resot"},[n._v(n._s(e.value))])]})],2)],1)])},staticRenderFns:[]};var s=t("VU/8")(l,o,!1,function(n){t("8hhA")},"data-v-3ee2388a",null);e.default=s.exports},siUG:function(n,e,t){(n.exports=t("FZ+f")(!1)).push([n.i,"\n#share[data-v-3ee2388a] {\n  /*.top {\n        text-align: left;\n        height: 95px;\n        padding: 15px;\n        background: #fff;\n        position: relative;\n        text-align: center;\n        margin: 15px 0;\n        i {\n\n            font-style: normal;\n            font-size: 16px;\n            display: block;\n        }\n        .content {\n\n            width: 120px;\n            margin: 0 auto;\n            font-size: 16px;\n            text-align: center;\n            span {\n                font-size: 28px;\n                color: green;\n                display: inline-block;\n                padding-top: 12px;\n                margin-bottom: 5px;\n            }\n            b {\n                line-height: 24px;\n                font-weight: normal;\n                color: #fff;\n                background: #f15353;\n                width: 60px;\n                height: 24px;\n                display: inline-block;\n            }\n        }\n    }*/\n}\n#share .middle[data-v-3ee2388a],\n  #share .bott[data-v-3ee2388a] {\n    text-align: left;\n    padding: 0.9375rem 0.75rem;\n    line-height: 1.875rem;\n    color: #333;\n    background: #fff;\n    margin-bottom: 0.5rem;\n    font-size: 14px;\n}\n#share .middle[data-v-3ee2388a] {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -ms-flex-wrap: wrap;\n        flex-wrap: wrap;\n}\n#share .middle .lrest[data-v-3ee2388a] {\n      -webkit-box-flex: 50%;\n          -ms-flex: 50%;\n              flex: 50%;\n      color: #8c8c8c;\n}\n#share .middle .resot[data-v-3ee2388a] {\n      -webkit-box-flex: 50%;\n          -ms-flex: 50%;\n              flex: 50%;\n      text-align: right;\n}\n",""])}});