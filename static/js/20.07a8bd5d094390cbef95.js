webpackJsonp([20],{"8Vd+":function(t,e,n){"use strict";(function(t){
/*!
 * vue-qrcode v1.0.0
 * https://xkeshi.github.io/vue-qrcode
 *
 * Copyright 2017-present Chen Fengyuan
 * Released under the MIT license
 *
 * Date: 2018-06-20T03:42:27.281Z
 */
"undefined"!=typeof window?window:void 0!==t||"undefined"!=typeof self&&self;var n,i=(function(t,e){t.exports=function(){var t=function(){},e=Object.prototype.hasOwnProperty,n=Array.prototype.slice;function i(t,i,s){for(var r,a,o=0,c=(s=n.call(arguments,2)).length;o<c;o++)for(r in a=s[o])t&&!e.call(a,r)||(i[r]=a[r])}var s=function(e,n,s,r){var a=this;return"string"!=typeof e&&(r=s,s=n,n=e,e=null),"function"!=typeof n&&(r=s,s=n,n=function(){return a.apply(this,arguments)}),i(!1,n,a,r),n.prototype=function(e,n){var s;return"function"==typeof Object.create?s=Object.create(e):(t.prototype=e,s=new t,t.prototype=null),n&&i(!0,s,n),s}(a.prototype,s),n.prototype.constructor=n,n.class_=e||a.class_,n.super_=a,n};function r(){}r.class_="Nevis",r.super_=Object,r.extend=s;var a=r,o=a.extend(function(t,e,n){this.qrious=t,this.element=e,this.element.qrious=t,this.enabled=Boolean(n)},{draw:function(t){},getElement:function(){return this.enabled||(this.enabled=!0,this.render()),this.element},getModuleSize:function(t){var e=this.qrious,n=e.padding||0,i=Math.floor((e.size-2*n)/t.width);return Math.max(1,i)},getOffset:function(t){var e=this.qrious,n=e.padding;if(null!=n)return n;var i=this.getModuleSize(t),s=Math.floor((e.size-i*t.width)/2);return Math.max(0,s)},render:function(t){this.enabled&&(this.resize(),this.reset(),this.draw(t))},reset:function(){},resize:function(){}}),c=o.extend({draw:function(t){var e,n,i=this.qrious,s=this.getModuleSize(t),r=this.getOffset(t),a=this.element.getContext("2d");for(a.fillStyle=i.foreground,a.globalAlpha=i.foregroundAlpha,e=0;e<t.width;e++)for(n=0;n<t.width;n++)t.buffer[n*t.width+e]&&a.fillRect(s*e+r,s*n+r,s,s)},reset:function(){var t=this.qrious,e=this.element.getContext("2d"),n=t.size;e.lineWidth=1,e.clearRect(0,0,n,n),e.fillStyle=t.background,e.globalAlpha=t.backgroundAlpha,e.fillRect(0,0,n,n)},resize:function(){var t=this.element;t.width=t.height=this.qrious.size}}),h=a.extend(null,{BLOCK:[0,11,15,19,23,27,31,16,18,20,22,24,26,28,20,22,24,24,26,28,28,22,24,24,26,26,28,28,24,24,26,26,26,28,28,24,26,26,26,28,28]}),f=a.extend(null,{BLOCKS:[1,0,19,7,1,0,16,10,1,0,13,13,1,0,9,17,1,0,34,10,1,0,28,16,1,0,22,22,1,0,16,28,1,0,55,15,1,0,44,26,2,0,17,18,2,0,13,22,1,0,80,20,2,0,32,18,2,0,24,26,4,0,9,16,1,0,108,26,2,0,43,24,2,2,15,18,2,2,11,22,2,0,68,18,4,0,27,16,4,0,19,24,4,0,15,28,2,0,78,20,4,0,31,18,2,4,14,18,4,1,13,26,2,0,97,24,2,2,38,22,4,2,18,22,4,2,14,26,2,0,116,30,3,2,36,22,4,4,16,20,4,4,12,24,2,2,68,18,4,1,43,26,6,2,19,24,6,2,15,28,4,0,81,20,1,4,50,30,4,4,22,28,3,8,12,24,2,2,92,24,6,2,36,22,4,6,20,26,7,4,14,28,4,0,107,26,8,1,37,22,8,4,20,24,12,4,11,22,3,1,115,30,4,5,40,24,11,5,16,20,11,5,12,24,5,1,87,22,5,5,41,24,5,7,24,30,11,7,12,24,5,1,98,24,7,3,45,28,15,2,19,24,3,13,15,30,1,5,107,28,10,1,46,28,1,15,22,28,2,17,14,28,5,1,120,30,9,4,43,26,17,1,22,28,2,19,14,28,3,4,113,28,3,11,44,26,17,4,21,26,9,16,13,26,3,5,107,28,3,13,41,26,15,5,24,30,15,10,15,28,4,4,116,28,17,0,42,26,17,6,22,28,19,6,16,30,2,7,111,28,17,0,46,28,7,16,24,30,34,0,13,24,4,5,121,30,4,14,47,28,11,14,24,30,16,14,15,30,6,4,117,30,6,14,45,28,11,16,24,30,30,2,16,30,8,4,106,26,8,13,47,28,7,22,24,30,22,13,15,30,10,2,114,28,19,4,46,28,28,6,22,28,33,4,16,30,8,4,122,30,22,3,45,28,8,26,23,30,12,28,15,30,3,10,117,30,3,23,45,28,4,31,24,30,11,31,15,30,7,7,116,30,21,7,45,28,1,37,23,30,19,26,15,30,5,10,115,30,19,10,47,28,15,25,24,30,23,25,15,30,13,3,115,30,2,29,46,28,42,1,24,30,23,28,15,30,17,0,115,30,10,23,46,28,10,35,24,30,19,35,15,30,17,1,115,30,14,21,46,28,29,19,24,30,11,46,15,30,13,6,115,30,14,23,46,28,44,7,24,30,59,1,16,30,12,7,121,30,12,26,47,28,39,14,24,30,22,41,15,30,6,14,121,30,6,34,47,28,46,10,24,30,2,64,15,30,17,4,122,30,29,14,46,28,49,10,24,30,24,46,15,30,4,18,122,30,13,32,46,28,48,14,24,30,42,32,15,30,20,4,117,30,40,7,47,28,43,22,24,30,10,67,15,30,19,6,118,30,18,31,47,28,34,34,24,30,20,61,15,30],FINAL_FORMAT:[30660,29427,32170,30877,26159,25368,27713,26998,21522,20773,24188,23371,17913,16590,20375,19104,13663,12392,16177,14854,9396,8579,11994,11245,5769,5054,7399,6608,1890,597,3340,2107],LEVELS:{L:1,M:2,Q:3,H:4}}),u=a.extend(null,{EXPONENT:[1,2,4,8,16,32,64,128,29,58,116,232,205,135,19,38,76,152,45,90,180,117,234,201,143,3,6,12,24,48,96,192,157,39,78,156,37,74,148,53,106,212,181,119,238,193,159,35,70,140,5,10,20,40,80,160,93,186,105,210,185,111,222,161,95,190,97,194,153,47,94,188,101,202,137,15,30,60,120,240,253,231,211,187,107,214,177,127,254,225,223,163,91,182,113,226,217,175,67,134,17,34,68,136,13,26,52,104,208,189,103,206,129,31,62,124,248,237,199,147,59,118,236,197,151,51,102,204,133,23,46,92,184,109,218,169,79,158,33,66,132,21,42,84,168,77,154,41,82,164,85,170,73,146,57,114,228,213,183,115,230,209,191,99,198,145,63,126,252,229,215,179,123,246,241,255,227,219,171,75,150,49,98,196,149,55,110,220,165,87,174,65,130,25,50,100,200,141,7,14,28,56,112,224,221,167,83,166,81,162,89,178,121,242,249,239,195,155,43,86,172,69,138,9,18,36,72,144,61,122,244,245,247,243,251,235,203,139,11,22,44,88,176,125,250,233,207,131,27,54,108,216,173,71,142,0],LOG:[255,0,1,25,2,50,26,198,3,223,51,238,27,104,199,75,4,100,224,14,52,141,239,129,28,193,105,248,200,8,76,113,5,138,101,47,225,36,15,33,53,147,142,218,240,18,130,69,29,181,194,125,106,39,249,185,201,154,9,120,77,228,114,166,6,191,139,98,102,221,48,253,226,152,37,179,16,145,34,136,54,208,148,206,143,150,219,189,241,210,19,92,131,56,70,64,30,66,182,163,195,72,126,110,107,58,40,84,250,133,186,61,202,94,155,159,10,21,121,43,78,212,229,172,115,243,167,87,7,112,192,247,140,128,99,13,103,74,222,237,49,197,254,24,227,165,153,119,38,184,180,124,17,68,146,217,35,32,137,46,55,63,209,91,149,188,207,205,144,135,151,178,220,252,190,97,242,86,211,171,20,42,93,158,132,60,57,83,71,109,65,162,31,45,67,216,183,123,164,118,196,23,73,236,127,12,111,246,108,161,59,82,41,157,85,170,251,96,134,177,187,204,62,90,203,89,95,176,156,169,160,81,11,245,22,235,122,117,44,215,79,174,213,233,230,231,173,232,116,214,244,234,168,80,88,175]}),l=a.extend(null,{BLOCK:[3220,1468,2713,1235,3062,1890,2119,1549,2344,2936,1117,2583,1330,2470,1667,2249,2028,3780,481,4011,142,3098,831,3445,592,2517,1776,2234,1951,2827,1070,2660,1345,3177]}),_=a.extend(function(t){var e,n,i,s,r,a=t.value.length;for(this._badness=[],this._level=f.LEVELS[t.level],this._polynomial=[],this._value=t.value,this._version=0,this._stringBuffer=[];this._version<40&&(this._version++,i=4*(this._level-1)+16*(this._version-1),s=f.BLOCKS[i++],r=f.BLOCKS[i++],e=f.BLOCKS[i++],n=f.BLOCKS[i],i=e*(s+r)+r-3+(this._version<=9),!(a<=i)););this._dataBlock=e,this._eccBlock=n,this._neccBlock1=s,this._neccBlock2=r;var o=this.width=17+4*this._version;this.buffer=_._createArray(o*o),this._ecc=_._createArray(e+(e+n)*(s+r)+r),this._mask=_._createArray((o*(o+1)+1)/2),this._insertFinders(),this._insertAlignments(),this.buffer[8+o*(o-8)]=1,this._insertTimingGap(),this._reverseMask(),this._insertTimingRowAndColumn(),this._insertVersion(),this._syncMask(),this._convertBitStream(a),this._calculatePolynomial(),this._appendEccToData(),this._interleaveBlocks(),this._pack(),this._finish()},{_addAlignment:function(t,e){var n,i=this.buffer,s=this.width;for(i[t+s*e]=1,n=-2;n<2;n++)i[t+n+s*(e-2)]=1,i[t-2+s*(e+n+1)]=1,i[t+2+s*(e+n)]=1,i[t+n+1+s*(e+2)]=1;for(n=0;n<2;n++)this._setMask(t-1,e+n),this._setMask(t+1,e-n),this._setMask(t-n,e-1),this._setMask(t+n,e+1)},_appendData:function(t,e,n,i){var s,r,a,o=this._polynomial,c=this._stringBuffer;for(r=0;r<i;r++)c[n+r]=0;for(r=0;r<e;r++){if(255!==(s=u.LOG[c[t+r]^c[n]]))for(a=1;a<i;a++)c[n+a-1]=c[n+a]^u.EXPONENT[_._modN(s+o[i-a])];else for(a=n;a<n+i;a++)c[a]=c[a+1];c[n+i-1]=255===s?0:u.EXPONENT[_._modN(s+o[0])]}},_appendEccToData:function(){var t,e=0,n=this._dataBlock,i=this._calculateMaxLength(),s=this._eccBlock;for(t=0;t<this._neccBlock1;t++)this._appendData(e,n,i,s),e+=n,i+=s;for(t=0;t<this._neccBlock2;t++)this._appendData(e,n+1,i,s),e+=n+1,i+=s},_applyMask:function(t){var e,n,i,s,r=this.buffer,a=this.width;switch(t){case 0:for(s=0;s<a;s++)for(i=0;i<a;i++)i+s&1||this._isMasked(i,s)||(r[i+s*a]^=1);break;case 1:for(s=0;s<a;s++)for(i=0;i<a;i++)1&s||this._isMasked(i,s)||(r[i+s*a]^=1);break;case 2:for(s=0;s<a;s++)for(e=0,i=0;i<a;i++,e++)3===e&&(e=0),e||this._isMasked(i,s)||(r[i+s*a]^=1);break;case 3:for(n=0,s=0;s<a;s++,n++)for(3===n&&(n=0),e=n,i=0;i<a;i++,e++)3===e&&(e=0),e||this._isMasked(i,s)||(r[i+s*a]^=1);break;case 4:for(s=0;s<a;s++)for(e=0,n=s>>1&1,i=0;i<a;i++,e++)3===e&&(e=0,n=!n),n||this._isMasked(i,s)||(r[i+s*a]^=1);break;case 5:for(n=0,s=0;s<a;s++,n++)for(3===n&&(n=0),e=0,i=0;i<a;i++,e++)3===e&&(e=0),(i&s&1)+!(!e|!n)||this._isMasked(i,s)||(r[i+s*a]^=1);break;case 6:for(n=0,s=0;s<a;s++,n++)for(3===n&&(n=0),e=0,i=0;i<a;i++,e++)3===e&&(e=0),(i&s&1)+(e&&e===n)&1||this._isMasked(i,s)||(r[i+s*a]^=1);break;case 7:for(n=0,s=0;s<a;s++,n++)for(3===n&&(n=0),e=0,i=0;i<a;i++,e++)3===e&&(e=0),(e&&e===n)+(i+s&1)&1||this._isMasked(i,s)||(r[i+s*a]^=1)}},_calculateMaxLength:function(){return this._dataBlock*(this._neccBlock1+this._neccBlock2)+this._neccBlock2},_calculatePolynomial:function(){var t,e,n=this._eccBlock,i=this._polynomial;for(i[0]=1,t=0;t<n;t++){for(i[t+1]=1,e=t;e>0;e--)i[e]=i[e]?i[e-1]^u.EXPONENT[_._modN(u.LOG[i[e]]+t)]:i[e-1];i[0]=u.EXPONENT[_._modN(u.LOG[i[0]]+t)]}for(t=0;t<=n;t++)i[t]=u.LOG[i[t]]},_checkBadness:function(){var t,e,n,i,s,r=0,a=this._badness,o=this.buffer,c=this.width;for(s=0;s<c-1;s++)for(i=0;i<c-1;i++)(o[i+c*s]&&o[i+1+c*s]&&o[i+c*(s+1)]&&o[i+1+c*(s+1)]||!(o[i+c*s]||o[i+1+c*s]||o[i+c*(s+1)]||o[i+1+c*(s+1)]))&&(r+=_.N2);var h=0;for(s=0;s<c;s++){for(n=0,a[0]=0,t=0,i=0;i<c;i++)e=o[i+c*s],t===e?a[n]++:a[++n]=1,h+=(t=e)?1:-1;r+=this._getBadness(n)}h<0&&(h=-h);var f=0,u=h;for(u+=u<<2,u<<=1;u>c*c;)u-=c*c,f++;for(r+=f*_.N4,i=0;i<c;i++){for(n=0,a[0]=0,t=0,s=0;s<c;s++)e=o[i+c*s],t===e?a[n]++:a[++n]=1,t=e;r+=this._getBadness(n)}return r},_convertBitStream:function(t){var e,n,i=this._ecc,s=this._version;for(n=0;n<t;n++)i[n]=this._value.charCodeAt(n);var r=this._stringBuffer=i.slice(),a=this._calculateMaxLength();t>=a-2&&(t=a-2,s>9&&t--);var o=t;if(s>9){for(r[o+2]=0,r[o+3]=0;o--;)e=r[o],r[o+3]|=255&e<<4,r[o+2]=e>>4;r[2]|=255&t<<4,r[1]=t>>4,r[0]=64|t>>12}else{for(r[o+1]=0,r[o+2]=0;o--;)e=r[o],r[o+2]|=255&e<<4,r[o+1]=e>>4;r[1]|=255&t<<4,r[0]=64|t>>4}for(o=t+3-(s<10);o<a;)r[o++]=236,r[o++]=17},_getBadness:function(t){var e,n=0,i=this._badness;for(e=0;e<=t;e++)i[e]>=5&&(n+=_.N1+i[e]-5);for(e=3;e<t-1;e+=2)i[e-2]===i[e+2]&&i[e+2]===i[e-1]&&i[e-1]===i[e+1]&&3*i[e-1]===i[e]&&(0===i[e-3]||e+3>t||3*i[e-3]>=4*i[e]||3*i[e+3]>=4*i[e])&&(n+=_.N3);return n},_finish:function(){var t,e;this._stringBuffer=this.buffer.slice();var n=0,i=3e4;for(e=0;e<8&&(this._applyMask(e),(t=this._checkBadness())<i&&(i=t,n=e),7!==n);e++)this.buffer=this._stringBuffer.slice();n!==e&&this._applyMask(n),i=f.FINAL_FORMAT[n+(this._level-1<<3)];var s=this.buffer,r=this.width;for(e=0;e<8;e++,i>>=1)1&i&&(s[r-1-e+8*r]=1,e<6?s[8+r*e]=1:s[8+r*(e+1)]=1);for(e=0;e<7;e++,i>>=1)1&i&&(s[8+r*(r-7+e)]=1,e?s[6-e+8*r]=1:s[7+8*r]=1)},_interleaveBlocks:function(){var t,e,n=this._dataBlock,i=this._ecc,s=this._eccBlock,r=0,a=this._calculateMaxLength(),o=this._neccBlock1,c=this._neccBlock2,h=this._stringBuffer;for(t=0;t<n;t++){for(e=0;e<o;e++)i[r++]=h[t+e*n];for(e=0;e<c;e++)i[r++]=h[o*n+t+e*(n+1)]}for(e=0;e<c;e++)i[r++]=h[o*n+t+e*(n+1)];for(t=0;t<s;t++)for(e=0;e<o+c;e++)i[r++]=h[a+t+e*s];this._stringBuffer=i},_insertAlignments:function(){var t,e,n,i=this._version,s=this.width;if(i>1)for(t=h.BLOCK[i],n=s-7;;){for(e=s-7;e>t-3&&(this._addAlignment(e,n),!(e<t));)e-=t;if(n<=t+9)break;n-=t,this._addAlignment(6,n),this._addAlignment(n,6)}},_insertFinders:function(){var t,e,n,i,s=this.buffer,r=this.width;for(t=0;t<3;t++){for(e=0,i=0,1===t&&(e=r-7),2===t&&(i=r-7),s[i+3+r*(e+3)]=1,n=0;n<6;n++)s[i+n+r*e]=1,s[i+r*(e+n+1)]=1,s[i+6+r*(e+n)]=1,s[i+n+1+r*(e+6)]=1;for(n=1;n<5;n++)this._setMask(i+n,e+1),this._setMask(i+1,e+n+1),this._setMask(i+5,e+n),this._setMask(i+n+1,e+5);for(n=2;n<4;n++)s[i+n+r*(e+2)]=1,s[i+2+r*(e+n+1)]=1,s[i+4+r*(e+n)]=1,s[i+n+1+r*(e+4)]=1}},_insertTimingGap:function(){var t,e,n=this.width;for(e=0;e<7;e++)this._setMask(7,e),this._setMask(n-8,e),this._setMask(7,e+n-7);for(t=0;t<8;t++)this._setMask(t,7),this._setMask(t+n-8,7),this._setMask(t,n-8)},_insertTimingRowAndColumn:function(){var t,e=this.buffer,n=this.width;for(t=0;t<n-14;t++)1&t?(this._setMask(8+t,6),this._setMask(6,8+t)):(e[8+t+6*n]=1,e[6+n*(8+t)]=1)},_insertVersion:function(){var t,e,n,i,s=this.buffer,r=this._version,a=this.width;if(r>6)for(t=l.BLOCK[r-7],e=17,n=0;n<6;n++)for(i=0;i<3;i++,e--)1&(e>11?r>>e-12:t>>e)?(s[5-n+a*(2-i+a-11)]=1,s[2-i+a-11+a*(5-n)]=1):(this._setMask(5-n,2-i+a-11),this._setMask(2-i+a-11,5-n))},_isMasked:function(t,e){var n=_._getMaskBit(t,e);return 1===this._mask[n]},_pack:function(){var t,e,n,i=1,s=1,r=this.width,a=r-1,o=r-1,c=(this._dataBlock+this._eccBlock)*(this._neccBlock1+this._neccBlock2)+this._neccBlock2;for(e=0;e<c;e++)for(t=this._stringBuffer[e],n=0;n<8;n++,t<<=1){128&t&&(this.buffer[a+r*o]=1);do{s?a--:(a++,i?0!==o?o--:(i=!i,6==(a-=2)&&(a--,o=9)):o!==r-1?o++:(i=!i,6==(a-=2)&&(a--,o-=8))),s=!s}while(this._isMasked(a,o))}},_reverseMask:function(){var t,e,n=this.width;for(t=0;t<9;t++)this._setMask(t,8);for(t=0;t<8;t++)this._setMask(t+n-8,8),this._setMask(8,t);for(e=0;e<7;e++)this._setMask(8,e+n-7)},_setMask:function(t,e){var n=_._getMaskBit(t,e);this._mask[n]=1},_syncMask:function(){var t,e,n=this.width;for(e=0;e<n;e++)for(t=0;t<=e;t++)this.buffer[t+n*e]&&this._setMask(t,e)}},{_createArray:function(t){var e,n=[];for(e=0;e<t;e++)n[e]=0;return n},_getMaskBit:function(t,e){var n;return t>e&&(n=t,t=e,e=n),n=e,n+=e*e,n>>=1,n+=t},_modN:function(t){for(;t>=255;)t=((t-=255)>>8)+(255&t);return t},N1:3,N2:3,N3:40,N4:10}),d=_,v=o.extend({draw:function(){this.element.src=this.qrious.toDataURL()},reset:function(){this.element.src=""},resize:function(){var t=this.element;t.width=t.height=this.qrious.size}}),p=a.extend(function(t,e,n,i){this.name=t,this.modifiable=Boolean(e),this.defaultValue=n,this._valueTransformer=i},{transform:function(t){var e=this._valueTransformer;return"function"==typeof e?e(t,this):t}}),g=a.extend(null,{abs:function(t){return null!=t?Math.abs(t):null},hasOwn:function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},noop:function(){},toUpperCase:function(t){return null!=t?t.toUpperCase():null}}),m=a.extend(function(t){this.options={},t.forEach(function(t){this.options[t.name]=t},this)},{exists:function(t){return null!=this.options[t]},get:function(t,e){return m._get(this.options[t],e)},getAll:function(t){var e,n=this.options,i={};for(e in n)g.hasOwn(n,e)&&(i[e]=m._get(n[e],t));return i},init:function(t,e,n){var i,s;for(i in"function"!=typeof n&&(n=g.noop),this.options)g.hasOwn(this.options,i)&&(s=this.options[i],m._set(s,s.defaultValue,e),m._createAccessor(s,e,n));this._setAll(t,e,!0)},set:function(t,e,n){return this._set(t,e,n)},setAll:function(t,e){return this._setAll(t,e)},_set:function(t,e,n,i){var s=this.options[t];if(!s)throw new Error("Invalid option: "+t);if(!s.modifiable&&!i)throw new Error("Option cannot be modified: "+t);return m._set(s,e,n)},_setAll:function(t,e,n){if(!t)return!1;var i,s=!1;for(i in t)g.hasOwn(t,i)&&this._set(i,t[i],e,n)&&(s=!0);return s}},{_createAccessor:function(t,e,n){var i={get:function(){return m._get(t,e)}};t.modifiable&&(i.set=function(i){m._set(t,i,e)&&n(i,t)}),Object.defineProperty(e,t.name,i)},_get:function(t,e){return e["_"+t.name]},_set:function(t,e,n){var i="_"+t.name,s=n[i],r=t.transform(null!=e?e:t.defaultValue);return n[i]=r,r!==s}}),k=m,w=a.extend(function(){this._services={}},{getService:function(t){var e=this._services[t];if(!e)throw new Error("Service is not being managed with name: "+t);return e},setService:function(t,e){if(this._services[t])throw new Error("Service is already managed with name: "+t);e&&(this._services[t]=e)}}),M=new k([new p("background",!0,"white"),new p("backgroundAlpha",!0,1,g.abs),new p("element"),new p("foreground",!0,"black"),new p("foregroundAlpha",!0,1,g.abs),new p("level",!0,"L",g.toUpperCase),new p("mime",!0,"image/png"),new p("padding",!0,null,g.abs),new p("size",!0,100,g.abs),new p("value",!0,"")]),b=new w,B=a.extend(function(t){M.init(t,this,this.update.bind(this));var e=M.get("element",this),n=b.getService("element"),i=e&&n.isCanvas(e)?e:n.createCanvas(),s=e&&n.isImage(e)?e:n.createImage();this._canvasRenderer=new c(this,i,!0),this._imageRenderer=new v(this,s,s===e),this.update()},{get:function(){return M.getAll(this)},set:function(t){M.setAll(t,this)&&this.update()},toDataURL:function(t){return this.canvas.toDataURL(t||this.mime)},update:function(){var t=new d({level:this.level,value:this.value});this._canvasRenderer.render(t),this._imageRenderer.render(t)}},{use:function(t){b.setService(t.getName(),t)}});Object.defineProperties(B.prototype,{canvas:{get:function(){return this._canvasRenderer.getElement()}},image:{get:function(){return this._imageRenderer.getElement()}}});var y=B,O=a.extend({getName:function(){}}).extend({createCanvas:function(){},createImage:function(){},getName:function(){return"element"},isCanvas:function(t){},isImage:function(t){}}).extend({createCanvas:function(){return document.createElement("canvas")},createImage:function(){return document.createElement("img")},isCanvas:function(t){return t instanceof HTMLCanvasElement},isImage:function(t){return t instanceof HTMLImageElement}});return y.use(new O),y}()}(n={exports:{}},n.exports),n.exports),s=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},r={name:"qrcode",props:{options:Object,tag:{type:String,default:"canvas"},value:{type:null,default:""}},render:function(t){return t(this.tag,this.$slots.default)},watch:{value:function(){this.generate()},options:function(){this.generate()}},methods:{generate:function(){this.$el&&new i(s({element:this.$el,value:String(this.value)},this.options))}},mounted:function(){this.generate()}};e.a=r}).call(e,n("DuR2"))},YmFh:function(t,e){},Z1ZF:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n("mvHQ"),s=n.n(i),r=n("8Vd+"),a={name:"walletInfoQrcode",props:{qrAddress:String},components:{qrcode:r.a},data:function(){return{walletQr:""}},created:function(){var t={address:this.qrAddress,value:0,type:0};this.walletQr=s()(t)},methods:{createWallet:function(){this.$emit("createMask")}}},o={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("main",{staticClass:"info-qrcode"},[n("figcaption",[n("qrcode",{attrs:{value:t.walletQr,options:{size:93}}}),t._v(" "),n("p",[t._v(t._s(t.$t("walletInfo.qrCode")))])],1),t._v(" "),n("span",{on:{click:t.createWallet}},[t._v(t._s(t.$t("walletInfo.newKeyStore")))])])},staticRenderFns:[]};var c=n("VU/8")(a,o,!1,function(t){n("YmFh")},"data-v-536d2d8a",null);e.default=c.exports}});