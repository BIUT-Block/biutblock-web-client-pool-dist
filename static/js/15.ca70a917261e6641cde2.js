webpackJsonp([15],{NCbv:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i={name:"",components:{publicInput:function(){return n.e(14).then(n.bind(null,"a1zZ"))},publicTips:function(){return n.e(10).then(n.bind(null,"fSaJ"))}},props:{iptTitle:String,iptPlc:String,iptLength:Number,errorShow:Boolean,errorTxt:String,iptRd:Boolean,iptVal:String},data:function(){return{mappingVal:this.iptVal}},computed:{},created:function(){},methods:{inputChange:function(){var t=this;this.$nextTick(function(){t.mappingVal=t.inputNull(t.mappingVal)})},clearIpt:function(){this.mappingVal=""}},watch:{mappingVal:function(t,e){this.$emit("change",t.replace(/\s+/g,""))}}},a={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("main",[n("section",{staticClass:"tit-list"},[n("p",[t._v(t._s(t.$t(t.iptTitle))),n("label",{directives:[{name:"show",rawName:"v-show",value:!t.iptRd,expression:"!iptRd"}]},[t._v("*")])]),t._v(" "),n("public-tips",{directives:[{name:"show",rawName:"v-show",value:t.errorShow,expression:"errorShow"}],attrs:{tipsTxt:t.errorTxt}})],1),t._v(" "),n("public-input",{class:t.errorShow?"error-border":"",attrs:{value:"iptVal",readonly:t.iptRd,placeholder:t.$t(t.iptPlc),maxlength:t.iptLength},on:{input:t.inputChange},model:{value:t.mappingVal,callback:function(e){t.mappingVal=e},expression:"mappingVal"}})],1)},staticRenderFns:[]};var r=n("VU/8")(i,a,!1,function(t){n("hoS2")},"data-v-ac5cf65c",null);e.default=r.exports},hoS2:function(t,e){}});