webpackJsonp([2],{"4nlc":function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAGCAYAAAD+Bd/7AAAABHNCSVQICAgIfAhkiAAAAGNJREFUCJltjrEJgDAURF9SOJdOoJAqVhnNzirw3SAj6QDmLIQgkivfwbtzU1jN4WY6ETq87iGBrk596R6SL7adFaV/XVEqtp0eoOTdhI6vuuTdAHyDbepV9z4xhriMIS5f9gBvNS4IQzqjowAAAABJRU5ErkJggg=="},"9RS1":function(module,__webpack_exports__,__webpack_require__){"use strict";var contentFooter=function(){return __webpack_require__.e(10).then(__webpack_require__.bind(null,"4LSl"))},publicButton=function(){return __webpack_require__.e(11).then(__webpack_require__.bind(null,"NPxM"))},publicPass=function(){return __webpack_require__.e(12).then(__webpack_require__.bind(null,"CR0n"))},publicTips=function(){return __webpack_require__.e(9).then(__webpack_require__.bind(null,"fSaJ"))},walletTransparent=function(){return __webpack_require__.e(14).then(__webpack_require__.bind(null,"VGzS"))},SECUtil=__webpack_require__("96Ie"),CryptoJS=__webpack_require__("Av7u"),dataCenterHandler=__webpack_require__("101K");__webpack_exports__.a={name:"walletEntren",components:{contentFooter:contentFooter,publicButton:publicButton,publicPass:publicPass,publicTips:publicTips,walletTransparent:walletTransparent},props:{},data:function(){return{passVal:"",privateKeyVal:"",KeyStoreUrl:"",showPass:!1,privateKeyError:!1,walletPassError:!1,privateKeyErrorTxt:"walletInfo.invalidPrivateKey",walletPassErrorTxt:"passTips.passError",KeyStoreVal:"walletInfo.checkKeyStore2",radioPages:0,keystoreUnlockBtn:"walletInfo.unlockBtn",keyUnlockBtn:"walletInfo.unlockBtn",radioList:[{id:"0",value:"Keystore",isChecked:!0},{id:"1",value:"walletInfo.privateKey",isChecked:!1}],transparentShow:!1,systemErrorTxt:""}},computed:{keyStoreActive:function(){var t=this.passVal.replace(/\s+/g,"");return t.length>0&&!_const.passReg.test(t)?this.walletPassError=!0:this.walletPassError=!1,!!_const.passReg.test(t)},privateKeyActive:function(){var t=this.privateKeyVal.replace(/\s+/g,"");return t.length>0&&t.length<64?this.privateKeyError=!0:_const.priverKeyReg.test(t)||64!=t.length?this.privateKeyError=!1:this.privateKeyError=!0,!(64!=t.length||!_const.priverKeyReg.test(t))}},created:function(){},mounted:function(){},destroyed:function(){},methods:{passChange:function(){var t=this;this.$nextTick(function(){t.passVal=t.inputNull(t.passVal)})},privateChange:function(){var t=this;this.$nextTick(function(){t.privateKeyVal=t.inputNull(t.privateKeyVal)})},walletInfoForm:function walletInfoForm(){var _this3=this;if(1===this.radioPages){this.keyUnlockBtn="walletInfo.unlockBtns";var privateVal=this.privateKeyVal.replace(/\s+/g,""),privateKeyBuffer=SECUtil.privateToBuffer(privateVal),extractAddress=SECUtil.privateToAddress(privateKeyBuffer).toString("hex"),extractPublicKey=SECUtil.privateToPublic(privateKeyBuffer).toString("hex"),extractPhrase=SECUtil.entropyToMnemonic(privateKeyBuffer),parm=void 0;this._getWalletFromDB(extractAddress,function(t){void 0===t||""===t?(_this3.systemErrorTxt="public.systemError",_this3._keyError()):t.status?(parm={walletAddress:"0x"+extractAddress,privateKey:privateVal,englishWords:extractPhrase,publicKey:extractPublicKey,invitationCode:t.doc[0].invitationCode,ownInvitationCode:t.doc[0].ownInvitationCode,mortgagePoolAddress:t.doc[0].mortgagePoolAddress,ownPoolAddress:t.doc[0].ownPoolAddress,mortgageValue:t.doc[0].mortgageValue,role:t.doc[0].role},_this3.$emit("login",parm),_this3.keyUnlockBtn="walletInfo.unlockBtn"):(_this3.systemErrorTxt="pool.poolInvailidError",_this3._keyError())})}else{var passVal=this.passVal.replace(/\s+/g,"");this.keystoreUnlockBtn="walletInfo.unlockBtns";var that=this;this.$axios.get(""+this.KeyStoreUrl).then(function(response){var jsonstr=response.data,keyData=CryptoJS.AES.decrypt(jsonstr.toString(),passVal).toString(CryptoJS.enc.Utf8);if(200==response.status){var walletData=keyData.split(":{"),arrData1="{"+walletData[1].replace("}}","")+"}",arrData=eval("("+arrData1+")"),_parm=void 0;_this3._getWalletFromDB(arrData.walletAddress,function(t){void 0===t||""===t?(_this3.systemErrorTxt="public.systemError",_this3._keystoreError()):t.status?(_parm={walletAddress:"0x"+arrData.walletAddress,privateKey:arrData.privateKey,englishWords:arrData.englishWords,publicKey:arrData.publicKey,invitationCode:t.doc[0].invitationCode,ownInvitationCode:t.doc[0].ownInvitationCode,mortgagePoolAddress:t.doc[0].mortgagePoolAddress,ownPoolAddress:t.doc[0].ownPoolAddress,mortgageValue:t.doc[0].mortgageValue,role:t.doc[0].role},_this3.$emit("login",_parm),_this3.keystoreUnlockBtn="walletInfo.unlockBtn"):(_this3.systemErrorTxt="pool.poolInvailidError",_this3._keystoreError())})}else _this3.systemErrorTxt="public.systemError",_this3._keystoreError()}).catch(function(t){_this3.systemErrorTxt="passTips.passError",_this3._keystoreError()})}},_keyError:function(){var t=this;this.transparentShow=!0,this.keyUnlockBtn="walletInfo.unlockBtn",setTimeout(function(){t.transparentShow=!1},3e3)},_keystoreError:function(){var t=this;this.transparentShow=!0,this.keystoreUnlockBtn="walletInfo.unlockBtn",setTimeout(function(){t.transparentShow=!1},3e3)},tirggerFile:function(t){var e=t.target.files;1===e.length?(this.KeyStoreUrl=this.getObjectURL(e[0]),this.KeyStoreVal=e[0].name,this.showPass=!0):(this.KeyStoreVal="walletInfo.checkKeyStore2",this.passVal="",this.walletPassError=!1,this.showPass=!1)},checkTab:function(t){this.radioPages=t,this.radioList.forEach(function(t){t.isChecked=!1}),this.radioList[t].isChecked=!0},_getWalletFromDB:function(t,e){dataCenterHandler.findOutWallet({address:t},function(t){e(t)})}}}},EgER:function(t,e,r){"use strict";var a=r("9RS1"),n={render:function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("main",{staticClass:"wallet-background"},[r("el-row",[r("el-col",{attrs:{xs:24,sm:24,md:24}},[r("h2",[t._v(t._s(t.$t("walletInfo.accessWallet")))]),t._v(" "),r("section",{staticClass:"radio-arr"},t._l(t.radioList,function(e,a){return r("section",{key:e.id,staticClass:"radio-box"},[r("label",{staticClass:"radio",class:{on:e.isChecked}}),t._v(" "),r("input",{staticClass:"ipt-radio",attrs:{type:"radio"},domProps:{checked:e.isChecked},on:{click:function(e){return t.checkTab(a)}}}),t._v(" "),r("span",[t._v(t._s(t.$t(e.value)))])])}),0),t._v(" "),r("section",{directives:[{name:"show",rawName:"v-show",value:0==t.radioPages,expression:"radioPages == 0"}],staticClass:"key-store"},[r("p",[t._v(t._s(t.$t("walletInfo.checkKeyStore1")))]),t._v(" "),r("input",{attrs:{type:"file",placeholder:t.$t("walletInfo.checkKeyStore2")},on:{change:function(e){return t.tirggerFile(e)}}}),t._v(" "),r("section",[r("span",[t._v(t._s(t.$t(t.KeyStoreVal)))])]),t._v(" "),t.showPass?r("public-pass",{class:t.walletPassError?"error-border":"",attrs:{maxlength:"30",placeholder:t.$t("passTips.passEncryption")},on:{input:t.passChange},model:{value:t.passVal,callback:function(e){t.passVal=e},expression:"passVal"}}):t._e(),t._v(" "),r("public-tips",{directives:[{name:"show",rawName:"v-show",value:t.walletPassError,expression:"walletPassError"}],attrs:{tipsTxt:t.walletPassErrorTxt}}),t._v(" "),r("public-button",{staticClass:"key-store-btn",class:t.keyStoreActive?"btn-active":"",attrs:{disabled:!t.keyStoreActive,text:t.$t(t.keystoreUnlockBtn)},nativeOn:{click:function(e){return t.walletInfoForm(e)}}})],1),t._v(" "),r("section",{directives:[{name:"show",rawName:"v-show",value:1==t.radioPages,expression:"radioPages == 1"}],staticClass:"private-key"},[r("p",[t._v(t._s(t.$t("walletInfo.inputPrivateKey1")))]),t._v(" "),r("public-pass",{class:t.privateKeyError?"error-border":"",attrs:{maxlength:"64",placeholder:t.$t("walletInfo.inputPrivateKey2")},on:{input:t.privateChange},model:{value:t.privateKeyVal,callback:function(e){t.privateKeyVal=e},expression:"privateKeyVal"}}),t._v(" "),r("public-tips",{directives:[{name:"show",rawName:"v-show",value:t.privateKeyError,expression:"privateKeyError"}],attrs:{tipsTxt:t.privateKeyErrorTxt}}),t._v(" "),r("public-button",{staticClass:"private-key-btn",class:t.privateKeyActive?"btn-active":"",attrs:{disabled:!t.privateKeyActive,text:t.$t(t.keyUnlockBtn)},nativeOn:{click:function(e){return t.walletInfoForm(e)}}})],1)])],1),t._v(" "),r("content-footer"),t._v(" "),r("wallet-transparent",{directives:[{name:"show",rawName:"v-show",value:t.transparentShow,expression:"transparentShow"}],attrs:{txt:t.systemErrorTxt}})],1)},staticRenderFns:[]};var s=function(t){r("G6TV")},i=r("VU/8")(a.a,n,!1,s,"data-v-0e85731a",null);e.a=i.exports},G6TV:function(t,e){},H3Ea:function(t,e){},OQF6:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABHNCSVQICAgIfAhkiAAAANNJREFUOI3l0L8OwWAUhvHnozSR2CTEZlEuwmywG8RgqkXDJVhcQf1JiN3GDRgkwi20i9EmMRkkHEMJRYeO4t1OTn5vcg78YVwzhdsqPMZIaCz6GmHJ3kwAaKExGIiyyI5PACo8xqJo9x8rr0DMGK4+BbYU7JEP79ppztcVSB6lmhj25HX9/IFIBhjiWB0/vmzuuPGO/SeIGcPR5ygqID3iUdvD5FBSwxjMvl3n/4F0NZzDwivhCJJEST0Ifxa8lkCZyLWKMZgH4eBIV8O1SuHhT+YG2X9KvNNNClEAAAAASUVORK5CYII="},al3Q:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=r("Xxa5"),n=r.n(a),s=r("exGp"),i=r.n(s),o=r("Dd8w"),l=r.n(o),c=r("EgER"),u=r("OQF6"),d=r.n(u),h={name:"transferAccountsCheck",props:{tradingMoney:String},components:{publicInput:function(){return r.e(13).then(r.bind(null,"a1zZ"))},publicTips:function(){return r.e(9).then(r.bind(null,"fSaJ"))}},computed:{amountBiut:function(){return this.$store.getters.availibleAmount},amountBiu:function(){return this.$store.getters.walletMoneyN}},data:function(){return{imgUrl:d.a,moneyTxt:"transfer.transferMoney",moneyShow:!1,walletMoney:"",transferListShow:!1,transferCurrency:"BIUT",transferIdx:0,itemList:[{id:"01",cnt:"BIUT"},{id:"02",cnt:"BIU"}]}},methods:{clearAmount:function(){var t=this;this.$nextTick(function(){t.walletMoney=t.walletMoney.replace(/[^\d.]/g,""),t.walletMoney=t.walletMoney.replace(/\.{2,}/g,"."),t.walletMoney=t.walletMoney.replace(".","$#$").replace(/\./g,"").replace("$#$","."),t.walletMoney=t.walletMoney.replace(/^(\-)*(\d+)\.(\d\d\d\d\d\d\d\d).*$/,"$1$2.$3")}),String(this.walletMoney.length)>10&&this.walletMoney.indexOf(".")<0&&this.$nextTick(function(){t.walletMoney=String(t.walletMoney).substring(0,10)}),0==this.walletMoney.indexOf(".")&&this.$nextTick(function(){t.walletMoney=String(t.walletMoney).substring(0,9)})},allTranferMoney:function(){0==this.transferIdx?this.walletMoney=this.getPointNum(this.amountBiut):this.tradingMoney<=0?this.walletMoney=this.getPointNum(this.amountBiu):this.walletMoney=this.tradingMoney},openTransferList:function(){this.transferListShow=!this.transferListShow},tabTransfer:function(t,e){this.walletMoney="",this.transferIdx=t,this.transferCurrency=e,this.transferListShow=!1},clearIpt:function(){this.walletMoney=""}},watch:{walletMoney:function(t,e){var r={amount:t,idx:this.transferIdx};this.$emit("getAmount",r);var a=t.length>0&&Number(t)>Number(this.amountBiut)&&0===this.transferIdx,n=t.length>0&&Number(t)>Number(this.tradingMoney)&&1===this.transferIdx;this.moneyShow=!(!a&&!n)}}},p={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("main",[a("section",{staticClass:"trading-list"},[a("p",[t._v(t._s(t.$t("transfer.transferNumber"))+" "),a("label",[t._v("*")])]),t._v(" "),a("span",[a("public-tips",{directives:[{name:"show",rawName:"v-show",value:t.moneyShow,expression:"moneyShow"}],attrs:{tipsTxt:t.moneyTxt}})],1)]),t._v(" "),a("section",{staticClass:"money-arr"},[a("public-input",{attrs:{maxlength:"19",placeholder:t.$t("transfer.transferNumber")},on:{input:t.clearAmount},model:{value:t.walletMoney,callback:function(e){t.walletMoney=e},expression:"walletMoney"}}),t._v(" "),a("section",[a("span",{attrs:{id:"amountListImg"},on:{click:t.openTransferList}},[t._v("\n        "+t._s(t.transferCurrency)+"\n        "),a("img",{attrs:{src:r("4nlc")}})]),t._v(" "),a("ul",{directives:[{name:"show",rawName:"v-show",value:t.transferListShow,expression:"transferListShow"}]},t._l(t.itemList,function(e,r){return a("li",{key:r,class:t.transferIdx==r?"list-active":"",on:{click:function(a){return t.tabTransfer(r,e.cnt)}}},[a("span",[t._v(t._s(e.cnt))]),t._v(" "),a("img",{directives:[{name:"show",rawName:"v-show",value:t.transferIdx==r,expression:"transferIdx == index"}],attrs:{src:t.transferIdx==r?""+t.imgUrl:""}})])}),0)])],1),t._v(" "),a("section",{staticClass:"money-list"},[a("span",[t._v(t._s(t.$t("transfer.balance"))+"：")]),t._v(" "),a("label",[t._v(t._s(0==t.transferIdx?t.getPointNum(t.amountBiut):t.getPointNum(t.amountBiu)))]),t._v(" "),a("span",[t._v(t._s(t.transferCurrency))]),t._v(" "),a("span",{on:{click:t.allTranferMoney}},[t._v(t._s(t.$t("transfer.all")))])])])},staticRenderFns:[]};var f=r("VU/8")(h,p,!1,function(t){r("H3Ea")},"data-v-3407b21a",null).exports,v=r("NYxO"),w=(r("4PV6"),{name:"transferAccounts",components:{contentFooter:function(){return r.e(10).then(r.bind(null,"4LSl"))},walletEntren:c.a,publicButton:function(){return r.e(11).then(r.bind(null,"NPxM"))},transferMask:function(){return r.e(16).then(r.bind(null,"N1l/"))},inputList:function(){return r.e(15).then(r.bind(null,"NCbv"))},transferSlider:function(){return r.e(24).then(r.bind(null,"+c3h"))},transferCheck:f},props:{},data:function(){return{tradingPages:1,maskShow:!1,tradingMoney:"0.02",walletAddress:"",walletMoney:"",feeVal:.02,transferIdx:0,addressTxt:"transfer.transferAddressError",addressError:!1,inputData:""}},computed:l()({loginStatus:function(){return this.$store.getters.isLogin},address:function(){return"0x"+this.$store.getters.walletAddress},allMoneyN:function(){var t=this.cal.accSub(this.$store.getters.walletMoneyN,.02);return this.tradingMoney=String(this.getPointNum(t)),this.$store.getters.walletMoneyN}},Object(v.b)({allMoneyC:"availibleAmount",privateKey:"walletKey",nonce:"nonce",wallet:"wallet"}),{tradingInfo:function(){return[{fromAddress:this.address,toAddress:this.walletAddress,privateKey:this.privateKey,transferType:this.transferIdx,transferAmount:this.walletMoney,transferFee:this.feeVal,nonce:this.nonce,inputData:this.inputData}]},transferActive:function(){var t=this.walletAddress.replace(/\s+/g,"");return t.length>0&&t.length<42?(this.addressError=!0,this.addressTxt="transfer.transferAddressError",!1):_const.addressReg.test(t)||42!=t.length?_const.addressReg.test(t)&&t==this.address?(this.addressError=!0,this.addressTxt="transfer.transferAddressError2",!1):(this.addressError=!1,0===this.transferIdx?!!(42==t.length&&Number(this.walletMoney.toString().replace(",",""))>0&&t!=this.address&&Number(this.walletMoney.toString().replace(",",""))<=Number(this.allMoneyC.toString().replace(",",""))&&_const.addressReg.test(t)&&Number(this.feeVal)<=Number(this.allMoneyN)):!!(42==t.length&&Number(this.walletMoney.toString().replace(",",""))>0&&t!=this.address&&Number(this.walletMoney.toString().replace(",",""))<=Number(this.allMoneyN.toString().replace(",",""))&&Number(this.walletMoney.toString().replace(",",""))+Number(this.feeVal.toString().replace(",",""))<=Number(this.allMoneyN.toString().replace(",",""))&&_const.addressReg.test(t))):(this.addressError=!0,this.addressTxt="transfer.transferAddressError",!1)}}),created:function(){},mounted:function(){},destroyed:function(){this.$store.commit("logoff")},methods:{loginWallet:function(t){var e=this;return i()(n.a.mark(function r(){var a;return n.a.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return e.tradingPages=2,e.$store.commit("login",t),r.next=4,e.updateWalletBalance(t);case 4:a=r.sent,e.$store.commit("updateWalletBalance",{walletBalance:a.walletBalance,freezeAmount:a.freezeAmount,availibleAmount:a.availibleAmount,walletBalanceSEN:a.walletBalanceSEN,nonce:a.nonce});case 6:case"end":return r.stop()}},r,e)}))()},addressChange:function(t){this.walletAddress=t},inputDataChange:function(t){this.inputData=t},getFee:function(t){this.feeVal=t;var e=this.cal.accSub(this.allMoneyN,t);this.tradingMoney=String(this.getPointNum(e))},getAmount:function(t){this.walletMoney=t.amount,this.transferIdx=t.idx},closeAmountList:function(t){var e=document.getElementById("amountListImg");this.transferListShow&&!e.contains(t.target)&&(this.transferListShow=!1)},closeMask:function(t){var e=this;1===t?this.maskShow=!1:(this.$refs.addressModel.clearIpt(),this.$refs.moneyModel.clearIpt(),this.$refs.feeModel.resetSlider(),this.maskShow=!1,this.$nextTick(i()(n.a.mark(function t(){var r;return n.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.updateWalletBalance(e.wallet);case 2:r=t.sent,e.$store.commit("updateWalletBalance",{walletBalance:r.walletBalance,freezeAmount:r.freezeAmount,availibleAmount:r.availibleAmount,walletBalanceSEN:r.walletBalanceSEN,nonce:r.nonce});case 4:case"end":return t.stop()}},t,e)}))))}}}),m={render:function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("main",{staticClass:"el-container",on:{click:t.closeAmountList}},[r("wallet-entren",{directives:[{name:"show",rawName:"v-show",value:!t.loginStatus,expression:"!loginStatus"}],on:{login:t.loginWallet}}),t._v(" "),t.loginStatus?r("main",{staticClass:"wallet-background"},[r("section",{staticClass:"transfer-content"},[r("input-list",{ref:"",staticClass:"ipt-m",attrs:{iptTitle:t.$t("transfer.youAddress"),iptPlc:t.$t("transfer.youAddress"),iptRd:!0,isOptional:!1,strictFormat:!0,iptVal:t.address}}),t._v(" "),r("input-list",{ref:"addressModel",staticClass:"ipt-m",attrs:{iptTitle:t.$t("transfer.transferAdddress"),iptPlc:t.$t("transfer.transferAdddress"),iptLength:42,errorShow:t.addressError,errorTxt:t.addressTxt,strictFormat:!0,isOptional:!1},on:{change:t.addressChange}}),t._v(" "),r("transfer-check",{ref:"moneyModel",attrs:{amountBiut:t.allMoneyC,amountBiu:t.allMoneyN,tradingMoney:t.tradingMoney},on:{getAmount:t.getAmount}}),t._v(" "),r("input-list",{ref:"addressModel",staticClass:"ipt-m",attrs:{iptTitle:t.$t("transfer.transferInputData"),iptPlc:t.$t("transfer.transferInputData"),iptLength:42,isOptional:!0,strictFormat:!1},on:{change:t.inputDataChange}}),t._v(" "),r("transfer-slider",{ref:"feeModel",attrs:{ststs:t.allMoneyN,feeVal:t.feeVal},on:{getFee:t.getFee}}),t._v(" "),r("public-button",{staticClass:"transfer_btn",class:t.transferActive?"btn-active":"",attrs:{disabled:!t.transferActive,text:t.$t("transfer.generateTrading")},nativeOn:{click:function(e){t.maskShow=!0}}})],1),t._v(" "),r("content-footer")],1):t._e(),t._v(" "),r("transfer-mask",{directives:[{name:"show",rawName:"v-show",value:t.maskShow,expression:"maskShow"}],attrs:{maskInfo:t.tradingInfo},on:{close:t.closeMask}})],1)},staticRenderFns:[]};var _=r("VU/8")(w,m,!1,function(t){r("viQB")},"data-v-3694ef9a",null);e.default=_.exports},viQB:function(t,e){}});