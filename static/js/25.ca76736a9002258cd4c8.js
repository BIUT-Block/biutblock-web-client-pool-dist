webpackJsonp([25],{"+c3h":function(e,s,t){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var n={name:"transferAccountsSlider",props:{feeVal:Number},components:{publicTips:function(){return t.e(9).then(t.bind(null,"fSaJ"))}},computed:{ststs:function(){return this.$store.getters.walletMoneyN}},data:function(){return{feeIpt:this.feeVal,minFee:.01,maxFee:.1,stepFee:.00818182,fastTips:!1,slowTips:!1,moneyTxtN:"transfer.transferMoneyN",moneyShowN:!1}},methods:{resetSlider:function(){this.feeIpt=.02}},watch:{feeIpt:function(e,s){this.$emit("getFee",e),Number(e)>.02636364?(this.fastTips=!0,this.slowTips=!1):Number(e)<.02636364?(this.slowTips=!0,this.fastTips=!1):(this.fastTips=!1,this.slowTips=!1),Number(e)>Number(this.ststs)?this.moneyShowN=!0:this.moneyShowN=!1}}},i={render:function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("main",[t("section",{staticClass:"trading-list"},[t("span",[e._v(e._s(e.$t("transfer.transferPoundage")))]),e._v(" "),t("span",[t("public-tips",{directives:[{name:"show",rawName:"v-show",value:e.moneyShowN,expression:"moneyShowN"}],attrs:{tipsTxt:e.moneyTxtN}})],1)]),e._v(" "),t("section",{staticClass:"transfer-slider"},[t("el-slider",{attrs:{max:e.maxFee,step:e.stepFee,min:e.minFee},model:{value:e.feeIpt,callback:function(s){e.feeIpt=s},expression:"feeIpt"}}),e._v(" "),t("section",{staticClass:"silder-list"},[t("span",{class:e.slowTips?"slow-color":""},[e._v("\n        "+e._s(e.$t("transfer.transferSlow"))+"\n      ")]),e._v(" "),t("span",[e._v(e._s(e.feeIpt)+" BIU")]),e._v(" "),t("span",{class:e.fastTips?"fast-color":""},[e._v("\n        "+e._s(e.$t("transfer.transferFast"))+"\n      ")])])],1)])},staticRenderFns:[]};var a=t("VU/8")(n,i,!1,function(e){t("cPd7")},"data-v-1ff05684",null);s.default=a.exports},cPd7:function(e,s){}});