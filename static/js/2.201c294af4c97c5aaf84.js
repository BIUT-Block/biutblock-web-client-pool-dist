webpackJsonp([2,12,13],{"0l4P":function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABEAAAAPCAMAAAA1b9QjAAAAflBMVEUAAAA0OjktNzU0Ojk0Ojk0OjkzOTgzODcyODg0Ojk1OjowOTcuMzAtLS00OTg0Ozk0OjkzOTgzOTgzOjg0OjgzOjcyNzcyNzcwMzA0Ojk0Ojk0Ozo0OTk0OTk0OTkzOjozOjczOjg1PDUrNTU3Nzc0Ojk1Ojo1Ojg0Ojo1OjjnmsRJAAAAKnRSTlMAqBbzwpw4KQ3t0iUaC7aurHNuZFlNRzIf+ufbyLyId15RIhEHuKKVkoNIbg5oAAAAo0lEQVQY0y2OVw7DIBBEB7AxGFzi3nva/S+YJWa1Gj09zcfAGgDJNxasgr9R4hBVxCXLlVdBbW6I4sSroaSwjuLuL6YofKDVWUvcXxQhNXKmYFMJRCnQvMnOawiogOhRgCWAYSgzanPSzEkguLC7BtkGeBpAphaNJrEtbq+gaHM9FwPO7R42ueT0fY37lB+Gjzi8OrOX5N2qa4wc/iomgsXBjh/V9Aen9yRfHwAAAABJRU5ErkJggg=="},"30vf":function(t,e,s){var i=s("Wdy1"),n=s("iANj"),r=s("zyKz");t.exports=function(t,e){var s=(n.Object||{})[t]||Object[t],a={};a[t]=e(s),i(i.S+i.F*r(function(){s(1)}),"Object",a)}},"4ajQ":function(t,e,s){var i=s("Wdy1");i(i.S+i.F*!s("qs+f"),"Object",{defineProperty:s("GCs6").f})},BO1k:function(t,e,s){t.exports={default:s("oY0/"),__esModule:!0}},C4MV:function(t,e,s){t.exports={default:s("rKx+"),__esModule:!0}},CR0n:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=s("0l4P"),n=s.n(i),r=s("Lop5"),a=s.n(r),o={name:"publicPass",props:["placeholder","value","maxlength"],data:function(){return{passUrl:n.a,typeIpt:"password",typeIdx:1}},methods:{checkImg:function(){1===this.typeIdx?(this.typeIpt="text",this.passUrl=a.a,this.typeIdx=0):(this.typeIpt="password",this.passUrl=n.a,this.typeIdx=1)},blur:function(){this.$emit("loseFocus")},focus:function(){this.$emit("getFocus")}}},c={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"ipt-arr"},[s("input",{ref:"input",attrs:{type:t.typeIpt,placeholder:t.placeholder,maxlength:t.maxlength},domProps:{value:t.value},on:{blur:t.blur,focus:t.focus,input:function(e){return t.$emit("input",e.target.value)}}}),t._v(" "),s("img",{attrs:{src:t.passUrl,alt:""},on:{click:t.checkImg}})])},staticRenderFns:[]};var l=s("VU/8")(o,c,!1,function(t){s("ix1u")},"data-v-4291d460",null);e.default=l.exports},F54d:function(t,e){},LHHK:function(t,e,s){"use strict";var i=s("mvHQ"),n=(s.n(i),s("BO1k")),r=(s.n(n),s("fZjL"));s.n(r),s("96Ie"),s("Av7u")},Lop5:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABEAAAAPCAMAAAA1b9QjAAAAe1BMVEUAAAA0Ojk0OTkqKio0Ojk0OTknKys0Ojk0Ozk0OTkwODg0Ozk0Ojk0Ojk0Ojk0OjkzOTkxODgiLS00Ojk0Ojk0Ozk1OjkzOTkzOjgzODg1ODczODgzOjgzODg1OTkyNzczODgsOTk0Ojk0OjkzOjozOzk1OjozOTk0OjpYWgrHAAAAKXRSTlMA1EcEuq4NwHw3HOTNvbZYLCQI/PLIopd0cWNdT0A8MzIU3KaIhoN5U4Rb40AAAACVSURBVBjTXY7ZDoMgFERHQEHc61K3qt37/1/YKcSY9Dycmzskw4XHBFk64GDVQ4n1peweXAPpZpSc4IhbELck1r00lLjX3QLIACQsGajCTjoGLmdgfDPVCzWH1HPCb1iK5BHrGowGQBtTIqceBdBxK5TAnAnfA1lTn1yFYv8LpRsS5Fb938xqT6XMhs1kFQ76VKc9HF9y1AZjdHnHOgAAAABJRU5ErkJggg=="},NPxM:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i={name:"publicButton",props:{text:String},data:function(){return{}}},n={render:function(){var t=this.$createElement;return(this._self._c||t)("button",{staticClass:"publicBtn"},[this._v(this._s(this.$t(this.text)))])},staticRenderFns:[]};var r=s("VU/8")(i,n,!1,function(t){s("buzz")},"data-v-8e113782",null);e.default=r.exports},Ot9j:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i={name:"tipsList",props:{tipsListKey:Array},data:function(){return{}}},n={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ul",t._l(t.tipsListKey,function(e,i){return s("li",{key:i},[s("img",{staticClass:"tips_img",attrs:{src:e.tips_img,alt:""}}),t._v(" "),s("span",[t._v(t._s(t.$t(e.tips_cnt)))])])}),0)},staticRenderFns:[]};var r=s("VU/8")(i,n,!1,function(t){s("drr9")},"data-v-2a9cbc7c",null);e.default=r.exports},P2IE:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAAAQlBMVEUAAADuHDjuGzjvGjjuGjjtHDj0FTX/DjPvGjfuHDjuGjjvGzjvGzfuGjjtGzjtHDntGjntGzfuGzbuHDf1FDPuGzkwlQxKAAAAFXRSTlMAwLZwV+cYBlz5sKyBSPXmfn1LShlBYlxgAAAAb0lEQVQY002OWw6AMAgEVyhgtfXd+1/VYEhkPkh2AmThWCMRaoZg3rirdq4l8opgnf88TT6XAtgGZww41dA4Cz5APYubIJqFiov/KZ7dTxIXoXHe4BNWs/BPJYpGMa+6pPxRKt/6XDwKAjtIdjrhvOCXA32y2G02AAAAAElFTkSuQmCC"},St71:function(t,e,s){var i=s("FKWp"),n=s("1yV6");t.exports=s("iANj").getIterator=function(t){var e=n(t);if("function"!=typeof e)throw TypeError(t+" is not iterable!");return i(e.call(t))}},ZhOs:function(t,e,s){s("rZAI"),t.exports=s("iANj").Object.keys},bOdI:function(t,e,s){"use strict";e.__esModule=!0;var i,n=s("C4MV"),r=(i=n)&&i.__esModule?i:{default:i};e.default=function(t,e,s){return e in t?(0,r.default)(t,e,{value:s,enumerable:!0,configurable:!0,writable:!0}):t[e]=s,t}},buzz:function(t,e){},drr9:function(t,e){},fZjL:function(t,e,s){t.exports={default:s("ZhOs"),__esModule:!0}},ix1u:function(t,e){},"oY0/":function(t,e,s){s("+3lO"),s("tz60"),t.exports=s("St71")},"rKx+":function(t,e,s){s("4ajQ");var i=s("iANj").Object;t.exports=function(t,e,s){return i.defineProperty(t,e,s)}},rZAI:function(t,e,s){var i=s("wXdB"),n=s("pEGt");s("30vf")("keys",function(){return function(t){return n(i(t))}})},s7Dz:function(t,e){},ynPe:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=s("mvHQ"),n=s.n(i),r=s("bOdI"),a=s.n(r),o=s("Ot9j"),c=s("CR0n"),l=s("NPxM"),u=(s("101K"),{name:"createWallet",props:{tipsListPass:Array,invailidCode:{type:Boolean,default:!1}},components:{publicPass:c.default,publicButton:l.default,publicTips:function(){return s.e(21).then(s.bind(null,"fSaJ"))},tipsList:o.default},data:function(){return{walletPass1:"",walletPass2:"",errorTxt1:!1,errorTxt2:!1,formatError:!1,dontAgree:!1,showFormat:!1,tipsTxt1:"passTips.passFormat",tipsTxt2:"passTips.passNoMatch",codeError:!1,inviteCode:"",tipsCode:"newWallet.codeIptError"}},created:function(){this.inviteCode=this.getQueryString("code")||""},computed:{createActive:function(){var t=this.walletPass1.replace(/\s+/g,""),e=this.walletPass2.replace(/\s+/g,""),s=this.inviteCode.replace(/\s+/g,"");if(t.length>0&&!_const.passReg.test(t))this.formatError=!0,this.errorTxt2=!0,this.tipsTxt2="passTips.passFormatError";else{if(!(e.length>0&&t!=e&&_const.passReg.test(t)))return this.formatError=!1,this.errorTxt2=!1,this.dontAgree=!1,!(!_const.passReg.test(t)||t!=e||8!==s.length);this.formatError=!1,this.dontAgree=!0,this.errorTxt2=!0,this.tipsTxt2="passTips.passNoMatch"}}},methods:{loseFocus:function(){this.showFormat=!1},getFocus:function(){this.showFormat=!0},passChange:function(){var t=this;this.$nextTick(function(){t.walletPass1=t.inputNull(t.walletPass1)})},confrimPassChange:function(){var t=this;this.$nextTick(function(){t.walletPass2=t.inputNull(t.walletPass2)})},codeChange:function(){var t=this;this.$nextTick(function(){t.inviteCode=t.inputNull(t.inviteCode)})},createFrom:function(){var t=this.walletPass1.replace(/\s+/g,""),e=this.inviteCode;this.$emit("created",t,e)}},watch:{inviteCode:function(t,e){t.length>0&&t.length<8?this.codeError=!0:this.codeError=!1}}}),p={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("main",{staticClass:"create-pages wallet-content"},[s("h2",[t._v(t._s(t.$t("newWallet.createWallet")))]),t._v(" "),s("public-pass",{class:t.formatError?"error-border":"",attrs:{maxlength:"30",placeholder:t.$t("newWallet.enterPass1")},on:{loseFocus:t.loseFocus,getFocus:t.getFocus,input:t.passChange},model:{value:t.walletPass1,callback:function(e){t.walletPass1=e},expression:"walletPass1"}}),t._v(" "),s("public-tips",{directives:[{name:"show",rawName:"v-show",value:t.showFormat,expression:"showFormat"}],attrs:{tipsTxt:t.tipsTxt1}}),t._v(" "),s("public-pass",{class:t.dontAgree?"error-border":"",attrs:{maxlength:"30",placeholder:t.$t("newWallet.enterPass2")},on:{input:t.confrimPassChange},model:{value:t.walletPass2,callback:function(e){t.walletPass2=e},expression:"walletPass2"}}),t._v(" "),s("public-tips",{directives:[{name:"show",rawName:"v-show",value:t.errorTxt2,expression:"errorTxt2"}],attrs:{tipsTxt:t.tipsTxt2}}),t._v(" "),s("section",{staticClass:"code-input",class:t.codeError?"error-border":""},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.inviteCode,expression:"inviteCode"}],attrs:{type:"text",placeholder:t.$t("newWallet.codeIpt"),maxlength:"8"},domProps:{value:t.inviteCode},on:{input:[function(e){e.target.composing||(t.inviteCode=e.target.value)},t.codeChange]}})]),t._v(" "),s("public-tips",{directives:[{name:"show",rawName:"v-show",value:t.codeError||t.invailidCode,expression:"codeError||invailidCode"}],attrs:{tipsTxt:t.tipsCode}}),t._v(" "),s("tips-list",{staticClass:"tips-list",attrs:{tipsListKey:t.tipsListPass}}),t._v(" "),s("public-button",{class:t.createActive?"btn-active":"",attrs:{type:"button",text:t.$t("newWallet.createWallet"),disabled:!t.createActive},nativeOn:{click:function(e){return t.createFrom(e)}}})],1)},staticRenderFns:[]};var d=s("VU/8")(u,p,!1,function(t){s("F54d")},"data-v-4e8c7c5e",null).exports,A=s("P2IE"),f=s.n(A),v=(s("LHHK"),s("96Ie")),h=s("Av7u"),g=s("101K"),O={name:"newWallet",components:{contentFooter:function(){return s.e(11).then(s.bind(null,"4LSl"))},createWallet:d,downKeystore:function(){return s.e(25).then(s.bind(null,"HS/4"))},savePriveate:function(){return s.e(23).then(s.bind(null,"UGOw"))}},props:{},data:function(){return{pages:1,privateKey:"",userAddress:"",keyData:"",inviteCodeError:!1,tipsListPass:[{id:"01",tips_img:f.a,tips_cnt:"tipsListPass.tipsCnt1"},{id:"02",tips_img:f.a,tips_cnt:"tipsListPass.tipsCnt2"},{id:"03",tips_img:f.a,tips_cnt:"tipsListPass.tipsCnt3"}],tipsListKey:[{id:"01",tips_img:f.a,tips_cnt:"tipsListKey.tipsCnt1"},{id:"02",tips_img:f.a,tips_cnt:"tipsListKey.tipsCnt2"},{id:"03",tips_img:f.a,tips_cnt:"tipsListKey.tipsCnt3"}]}},created:function(){},mounted:function(){},destroyed:function(){},methods:{createFrom:function(t,e){var s=this,i=v.generateSecKeys(),r=i.privKey,o=v.entropyToMnemonic(r),c=i.publicKey.toString("hex"),l=i.secAddress;this.userAddress=l,this.privateKey=r,g.createWallet({address:this.userAddress,invitationCode:e},function(e){if(e.status){var i=a()({},r,{walletName:"New Import",privateKey:r,publicKey:c,walletAddress:l,englishWords:o}),u=h.AES.encrypt(n()(i),t);s.keyData=u.toString(),s.pages=2}else s.inviteCodeError=!0})},continueKey:function(){this.pages=3},downUrlTxt:function(){var t="BIUT"+this.userAddress+".json";this.funDownload(t,""+this.keyData)}}},m={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("main",{staticClass:"el-container"},[s("main",{staticClass:"wallet-background"},[s("el-row",[s("el-col",{attrs:{xs:24,sm:24,md:24}},[1===t.pages?s("create-wallet",{attrs:{tipsListPass:t.tipsListPass,invailidCode:t.inviteCodeError},on:{created:t.createFrom}}):t._e(),t._v(" "),2===t.pages?s("down-keystore",{attrs:{tipsListKey:t.tipsListKey},on:{down:t.downUrlTxt,next:t.continueKey}}):t._e(),t._v(" "),3===t.pages?s("save-priveate",{attrs:{tipsListKey:t.tipsListKey,privateKey:t.privateKey}}):t._e()],1)],1),t._v(" "),s("content-footer")],1)])},staticRenderFns:[]};var j=s("VU/8")(O,m,!1,function(t){s("s7Dz")},"data-v-53865eb6",null);e.default=j.exports}});