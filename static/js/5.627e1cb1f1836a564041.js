webpackJsonp([5],{"2XZK":function(e,t){},"9RS1":function(module,__webpack_exports__,__webpack_require__){"use strict";var contentFooter=function(){return __webpack_require__.e(11).then(__webpack_require__.bind(null,"4LSl"))},publicButton=function(){return __webpack_require__.e(12).then(__webpack_require__.bind(null,"NPxM"))},publicPass=function(){return __webpack_require__.e(13).then(__webpack_require__.bind(null,"CR0n"))},publicTips=function(){return __webpack_require__.e(10).then(__webpack_require__.bind(null,"fSaJ"))},SECUtil=__webpack_require__("96Ie"),CryptoJS=__webpack_require__("Av7u"),dataCenterHandler=__webpack_require__("101K");__webpack_exports__.a={name:"walletEntren",components:{contentFooter:contentFooter,publicButton:publicButton,publicPass:publicPass,publicTips:publicTips},props:{},data:function(){return{passVal:"",privateKeyVal:"",KeyStoreUrl:"",showPass:!1,privateKeyError:!1,walletPassError:!1,privateKeyErrorTxt:"walletInfo.invalidPrivateKey",walletPassErrorTxt:"passTips.passError",KeyStoreVal:"walletInfo.checkKeyStore2",radioPages:0,keystoreUnlockBtn:"walletInfo.unlockBtn",keyUnlockBtn:"walletInfo.unlockBtn",radioList:[{id:"0",value:"Keystore",isChecked:!0},{id:"1",value:"walletInfo.privateKey",isChecked:!1}]}},computed:{keyStoreActive:function(){var e=this.passVal.replace(/\s+/g,"");return e.length>0&&!_const.passReg.test(e)?this.walletPassError=!0:this.walletPassError=!1,!!_const.passReg.test(e)},privateKeyActive:function(){var e=this.privateKeyVal.replace(/\s+/g,"");return e.length>0&&e.length<64?this.privateKeyError=!0:_const.priverKeyReg.test(e)||64!=e.length?this.privateKeyError=!1:this.privateKeyError=!0,!(64!=e.length||!_const.priverKeyReg.test(e))}},created:function(){},mounted:function(){},destroyed:function(){},methods:{passChange:function(){var e=this;this.$nextTick(function(){e.passVal=e.inputNull(e.passVal)})},privateChange:function(){var e=this;this.$nextTick(function(){e.privateKeyVal=e.inputNull(e.privateKeyVal)})},walletInfoForm:function walletInfoForm(){var _this3=this;if(1===this.radioPages){this.keyUnlockBtn="walletInfo.unlockBtns";var privateVal=this.privateKeyVal.replace(/\s+/g,""),privateKeyBuffer=SECUtil.privateToBuffer(privateVal),extractAddress=SECUtil.privateToAddress(privateKeyBuffer).toString("hex"),extractPublicKey=SECUtil.privateToPublic(privateKeyBuffer).toString("hex"),extractPhrase=SECUtil.entropyToMnemonic(privateKeyBuffer),parm=void 0;this._getWalletFromDB(extractAddress,function(e){void 0===e||""===e?(alert($("public.systemError")),_this3.keyUnlockBtn="walletInfo.unlockBtn"):e.status?(parm={address:"0x"+extractAddress,privateKey:privateVal,englishWords:extractPhrase,publicKey:extractPublicKey,invitationCode:e.doc[0].invitationCode,ownInvitationCode:e.doc[0].ownInvitationCode,mortgagePoolAddress:e.doc[0].mortgagePoolAddress,ownPoolAddress:e.doc[0].ownPoolAddress,mortgageValue:e.doc[0].mortgageValue,role:e.doc[0].role},_this3.$emit("login",parm),_this3.keyUnlockBtn="walletInfo.unlockBtn"):(_this3.walletPassError=!0,_this3.walletPassErrorTxt="passTips.inviteCodeError",_this3.keyUnlockBtn="walletInfo.unlockBtn")})}else{var passVal=this.passVal.replace(/\s+/g,"");this.keystoreUnlockBtn="walletInfo.unlockBtns";var that=this;this.$axios.get(""+this.KeyStoreUrl).then(function(response){var jsonstr=response.data,keyData=CryptoJS.AES.decrypt(jsonstr.toString(),passVal).toString(CryptoJS.enc.Utf8);if(200==response.status){var walletData=keyData.split(":{"),arrData1="{"+walletData[1].replace("}}","")+"}",arrData=eval("("+arrData1+")"),_parm=void 0;_this3._getWalletFromDB(arrData.walletAddress,function(e){void 0===e||""===e?(alert($("public.systemError")),_this3.keystoreUnlockBtn="walletInfo.unlockBtn"):e.status?(_parm={address:"0x"+arrData.walletAddress,privateKey:arrData.privateKey,englishWords:arrData.englishWords,publicKey:arrData.publicKey,invitationCode:e.doc[0].invitationCode,ownInvitationCode:e.doc[0].ownInvitationCode,mortgagePoolAddress:e.doc[0].mortgagePoolAddress,ownPoolAddress:e.doc[0].ownPoolAddress,mortgageValue:e.doc[0].mortgageValue,role:e.doc[0].role},_this3.$emit("login",_parm),_this3.keystoreUnlockBtn="walletInfo.unlockBtn"):(_this3.walletPassError=!0,_this3.walletPassErrorTxt="passTips.inviteCodeError",_this3.keystoreUnlockBtn="walletInfo.unlockBtn")})}}).catch(function(e){_this3.walletPassError=!0,_this3.keystoreUnlockBtn="walletInfo.unlockBtn"})}},tirggerFile:function(e){var t=e.target.files;1===t.length?(this.KeyStoreUrl=this.getObjectURL(t[0]),this.KeyStoreVal=t[0].name,this.showPass=!0):(this.KeyStoreVal="walletInfo.checkKeyStore2",this.passVal="",this.walletPassError=!1,this.showPass=!1)},checkTab:function(e){this.radioPages=e,this.radioList.forEach(function(e){e.isChecked=!1}),this.radioList[e].isChecked=!0},_getWalletFromDB:function(e,t){dataCenterHandler.findOutWallet({address:e},function(e){t(e)})}}}},EgER:function(e,t,a){"use strict";var r=a("9RS1"),n={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("main",{staticClass:"wallet-background"},[a("el-row",[a("el-col",{attrs:{xs:24,sm:24,md:24}},[a("h2",[e._v(e._s(e.$t("walletInfo.accessWallet")))]),e._v(" "),a("section",{staticClass:"radio-arr"},e._l(e.radioList,function(t,r){return a("section",{key:t.id,staticClass:"radio-box"},[a("label",{staticClass:"radio",class:{on:t.isChecked}}),e._v(" "),a("input",{staticClass:"ipt-radio",attrs:{type:"radio"},domProps:{checked:t.isChecked},on:{click:function(t){return e.checkTab(r)}}}),e._v(" "),a("span",[e._v(e._s(e.$t(t.value)))])])}),0),e._v(" "),a("section",{directives:[{name:"show",rawName:"v-show",value:0==e.radioPages,expression:"radioPages == 0"}],staticClass:"key-store"},[a("p",[e._v(e._s(e.$t("walletInfo.checkKeyStore1")))]),e._v(" "),a("input",{attrs:{type:"file",placeholder:e.$t("walletInfo.checkKeyStore2")},on:{change:function(t){return e.tirggerFile(t)}}}),e._v(" "),a("section",[a("span",[e._v(e._s(e.$t(e.KeyStoreVal)))])]),e._v(" "),e.showPass?a("public-pass",{class:e.walletPassError?"error-border":"",attrs:{maxlength:"30",placeholder:e.$t("passTips.passEncryption")},on:{input:e.passChange},model:{value:e.passVal,callback:function(t){e.passVal=t},expression:"passVal"}}):e._e(),e._v(" "),a("public-tips",{directives:[{name:"show",rawName:"v-show",value:e.walletPassError,expression:"walletPassError"}],attrs:{tipsTxt:e.walletPassErrorTxt}}),e._v(" "),a("public-button",{staticClass:"key-store-btn",class:e.keyStoreActive?"btn-active":"",attrs:{disabled:!e.keyStoreActive,text:e.$t(e.keystoreUnlockBtn)},nativeOn:{click:function(t){return e.walletInfoForm(t)}}})],1),e._v(" "),a("section",{directives:[{name:"show",rawName:"v-show",value:1==e.radioPages,expression:"radioPages == 1"}],staticClass:"private-key"},[a("p",[e._v(e._s(e.$t("walletInfo.inputPrivateKey1")))]),e._v(" "),a("public-pass",{class:e.privateKeyError?"error-border":"",attrs:{maxlength:"64",placeholder:e.$t("walletInfo.inputPrivateKey2")},on:{input:e.privateChange},model:{value:e.privateKeyVal,callback:function(t){e.privateKeyVal=t},expression:"privateKeyVal"}}),e._v(" "),a("public-tips",{directives:[{name:"show",rawName:"v-show",value:e.privateKeyError,expression:"privateKeyError"}],attrs:{tipsTxt:e.privateKeyErrorTxt}}),e._v(" "),a("public-button",{staticClass:"private-key-btn",class:e.privateKeyActive?"btn-active":"",attrs:{disabled:!e.privateKeyActive,text:e.$t(e.keyUnlockBtn)},nativeOn:{click:function(t){return e.walletInfoForm(t)}}})],1)])],1),e._v(" "),a("content-footer")],1)},staticRenderFns:[]};var o=function(e){a("H3NV")},s=a("VU/8")(r.a,n,!1,o,"data-v-f1c88e28",null);t.a=s.exports},H3NV:function(e,t){},cb0b:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=a("BO1k"),n=a.n(r),o={name:"walletInformation",components:{contentFooter:function(){return a.e(11).then(a.bind(null,"4LSl"))},walletEntren:a("EgER").a,infoMask:function(){return a.e(17).then(a.bind(null,"bYBY"))},walletInfo:function(){return a.e(18).then(a.bind(null,"J1Ad"))},walletQrcode:function(){return a.e(20).then(a.bind(null,"Z1ZF"))}},props:{},data:function(){return{walletAddress:"",walletKey:"",walletPublicKey:"",walletWords:"",walletMoneyC:"0",walletMoneyN:"0",availableAmount:0,freezeAmount:0,inviteCode:"",infoPages:1,maskShow:!1}},computed:{},created:function(){},mounted:function(){},destroyed:function(){},methods:{closeMask:function(){this.maskShow=!1},createdMask:function(){this.maskShow=!0},loginWallet:function(e){var t=this;this.infoPages=2,this.walletAddress=e.address,this.walletKey=e.privateKey,this.walletWords=e.englishWords,this.walletPublicKey=e.publicKey,this.inviteCode=e.ownInvitationCode;var a=e.address.replace("0x","");this.getWalletBalance(a,"biut").then(function(a){t.walletMoneyC=t.scientificNotationToString(a);var r=[],o=!0,s=!1,i=void 0;try{for(var l,c=n()(e.mortgagePoolAddress);!(o=(l=c.next()).done);o=!0){var u=l.value;r.push(u.replace("0x",""))}}catch(e){s=!0,i=e}finally{try{!o&&c.return&&c.return()}finally{if(s)throw i}}var d=!0,p=!1,v=void 0;try{for(var f,h=n()(e.ownPoolAddress);!(d=(f=h.next()).done);d=!0){var w=f.value;r.push(w.replace("0x",""))}}catch(e){p=!0,v=e}finally{try{!d&&h.return&&h.return()}finally{if(p)throw v}}t.getContractInfoSync(r).then(function(e){var r=0,o=[],s=!0,i=!1,l=void 0;try{for(var c,u=n()(e);!(s=(c=u.next()).done);s=!0){var d=c.value;d.timeLock&&o.push(d.timeLock)}}catch(e){i=!0,l=e}finally{try{!s&&u.return&&u.return()}finally{if(i)throw l}}var p=!0,v=!1,f=void 0;try{for(var h,w=n()(o);!(p=(h=w.next()).done);p=!0){var _=h.value;if(t.walletAddress in _&&t.walletAddress in _[t.walletAddress]){var y=_[t.selectedWallet.walletAddress][t.selectedWallet.walletAddress],k=!0,g=!1,b=void 0;try{for(var m,K=n()(y);!(k=(m=K.next()).done);k=!0){var P=m.value;r+=Number(P.lockAmount)}}catch(e){g=!0,b=e}finally{try{!k&&K.return&&K.return()}finally{if(g)throw b}}}}}catch(e){v=!0,f=e}finally{try{!p&&w.return&&w.return()}finally{if(v)throw f}}t.availableAmount=t.scientificNotationToString(a),t.walletMoneyC=t.scientificNotationToString(Number(a)+r),t.freezeAmount=t.scientificNotationToString(r)})}),this.getWalletBalance(a,"biu").then(function(e){t.walletMoneyN=t.scientificNotationToString(e)})}}},s={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("main",{staticClass:"el-container"},[1===e.infoPages?a("wallet-entren",{on:{login:e.loginWallet}}):e._e(),e._v(" "),2===e.infoPages?a("main",{staticClass:"wallet-background"},[a("section",{staticClass:"wallet-info-content"},[a("wallet-info",{attrs:{infoAddress:e.walletAddress,infoKey:e.walletKey,infoMoneyC:e.walletMoneyC,infoMoneyN:e.walletMoneyN,availableAmount:e.availableAmount,freezeAmount:e.freezeAmount,inviteCode:e.inviteCode}}),e._v(" "),a("wallet-qrcode",{attrs:{qrAddress:e.walletAddress},on:{createMask:e.createdMask}})],1),e._v(" "),a("content-footer")],1):e._e(),e._v(" "),a("info-mask",{directives:[{name:"show",rawName:"v-show",value:e.maskShow,expression:"maskShow"}],attrs:{infoAddress:e.walletAddress,infoKey:e.walletKey,infoWord:e.walletWords,infoPublicKey:e.walletPublicKey},on:{close:e.closeMask}})],1)},staticRenderFns:[]};var i=a("VU/8")(o,s,!1,function(e){a("2XZK")},"data-v-00b163d2",null);t.default=i.exports}});