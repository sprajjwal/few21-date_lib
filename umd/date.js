!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(t="undefined"!=typeof globalThis?globalThis:t||self).D=e()}(this,(function(){"use strict";const t=["January","February","March","April","May","June","July","August","September","October","November","December"],e=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];function o(t){return t<10?`0${t}`:`${t}`}return class{constructor(...s){this.date=new Date(...s),this.chars={Y:this.year,y:this.year%100,M:t[this.month],m:e[this.month],D:o(this.day),d:this.day,H:o(this.hour),h:this.hour,I:o(this.min),i:this.min,S:o(this.secs),s:this.secs}}get year(){return this.date.getFullYear()}get month(){return this.date.getMonth()}get day(){return this.date.getDate()}get hour(){return this.date.getHours()}get min(){return this.date.getMinutes()}get secs(){return this.date.getSeconds()}format(e=!1){if(!1===e)return`${this.year} ${t[this.month]} ${this.day}`;{let t="";for(let o=0;o<e.length;o+=1)e[o]in this.chars?t+=this.chars[e[o]]:t+=e[o];return t}}when(){let t=(new Date).getTime()-this.date.getTime();return 0===t?"today":(t/=1e3,Math.abs(t)<60?`${t.toFixed(0)} second${t.toFixed(0)>1?"s":""}`+(t<0?" from now":" ago"):(t/=60,Math.abs(t)<60?`${t.toFixed(0)} minute${t.toFixed(0)>1?"s":""}`+(t<0?" from now":" ago"):(t/=60,Math.abs(t)<24?`${t.toFixed(0)} hour${t.toFixed(0)>1?"s":""}`+(t<0?" from now":" ago"):(t/=24,Math.abs(t)<30?`${t.toFixed(0)} day${t.toFixed(0)>1?"s":""}`+(t<0?" from now":" ago"):(t/=30,t-=1,Math.abs(t)<12?`${t.toFixed(0)} month${t.toFixed(0)>1?"s":""}`+(t<0?" from now":" ago"):(t/=12,t-=1,`${t.toFixed(0)} year${t.toFixed(0)>1?"s":""}`+(t<0?" from now":" ago")))))))}}}));