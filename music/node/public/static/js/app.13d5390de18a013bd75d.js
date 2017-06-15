webpackJsonp([1],{34:function(t,e,i){function s(t){i(76)}var n=i(7)(i(36),i(86),s,null,null);t.exports=n.exports},36:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=i(20),n=i.n(s),a=i(84),r=i.n(a),c=i(83),o=i.n(c),u=i(81),l=i.n(u),d=i(82),p=i.n(d);e.default={name:"app",created:function(){var t=this;console.log("main"),this.logOn(),this.createAudio(),this.$nextTick(function(){t.$el.addEventListener("click",function(e){-1===e.target.className.indexOf("header-music-list")&&(t.showClassify=!1),-1===e.target.className.indexOf("header-play-list")&&(t.showPlayList=!1)})})},data:function(){return{showLoginPanel:!1,loginMessage:"login",loginData:{username:""},isLogin:!1,isAdmin:!1,showSpaner:!1,showClassify:!1,playList:[],currentMusic:0,showPlayList:!1,showLyric:!1}},methods:{createAudio:function(){var t=document.createElement("audio");t.setAttribute("autoplay",""),t.setAttribute("id","audio"),document.body.appendChild(t)},logOn:function(){var t=this,e=new XMLHttpRequest;e.open("GET","/api/",!0),e.send(),new n.a(function(t,i){e.onreadystatechange=function(i){4===e.readyState&&200===e.status&&t(JSON.parse(e.responseText))}}).then(function(e){e.isLogged&&(t.loginData.username=e.username,t.isLogin=!0,t.isAdmin=e.isAdmin)})},toLogin:function(){this.loginMessage="login",this.showLoginPanel=!0},toRegister:function(){this.loginMessage="register",this.showLoginPanel=!0},getLoginData:function(t){this.isLogin=!0,this.loginData=t},logout:function(){var t=new XMLHttpRequest;t.open("GET","/api/api/user/logout",!0),t.send(),t.onreadystatechange=function(e){4===t.readyState&&200===t.status&&(t.responseText.code||window.location.reload())}},pushId:function(t){for(var e=0;e<this.playList.length;e++)if(this.playList[e].id===t.id)return void(this.currentMusic=e);this.playList.unshift(t),this.currentMusic=0},pushItem:function(t){for(var e=0;e<this.playList.length;e++)if(this.playList[e].id===t.id)return;this.playList.push(t)},prevMusic:function(){this.playList.length<2||--this.currentMusic<0&&(this.currentMusic+=this.playList.length)},nextMusic:function(){this.playList.length<2||++this.currentMusic>=this.playList.length&&(this.currentMusic=this.playList.length%this.currentMusic)},clearPlayList:function(){this.playList=[],this.currentMusic=0},switchMusic:function(t){this.currentMusic=t},delItem:function(t){this.playList.splice(t,1)},toggleLyric:function(){this.showLyric=!this.showLyric}},components:{Container:r.a,MusicPanel:o.a,Login:l.a,Lyric:p.a}}},37:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=i(20),n=i.n(s);e.default={name:"login",props:["todo"],created:function(){},data:function(){return{loginData:{username:"",password:""},registerData:{username:"",password:"",confirmPassword:""}}},methods:{validator:function(){if(""===this.loginData.username||""===this.loginData.password)alert("用户名和密码不能为空");else{var t=new XMLHttpRequest;t.open("POST","/api/api/user/login",!0),t.setRequestHeader("Content-type","application/x-www-form-urlencoded"),t.setRequestHeader("withCredentials",!0),t.send("username="+this.loginData.username+"&password="+this.loginData.password);new n.a(function(e,i){t.onreadystatechange=function(i){4===t.readyState&&200===t.status&&e(JSON.parse(t.responseText))}}).then(function(t){if(t.code)return void alert(t.message);alert(t.message),window.location.reload()})}},registerValidator:function(){var t=this;if(""===this.registerData.username||""===this.registerData.password||""===this.registerData.confirmPassword)alert("用户名和密码不能为空");else if(this.registerData.password!==this.registerData.confirmPassword)alert("两次密码输入不一致");else{var e=new XMLHttpRequest;e.open("POST","/api/api/user/register",!0),e.setRequestHeader("Content-type","application/x-www-form-urlencoded"),e.send("username="+this.registerData.username+"&password="+this.registerData.password+"&repassword="+this.registerData.confirmPassword);var i=new n.a(function(t,i){e.onreadystatechange=function(i){4===e.readyState&&200===e.status&&t(JSON.parse(e.responseText))}});i.then(function(e){if(e.code)return void alert(e.message);setTimeout(function(){alert("注册成功"),t.todo="login"})})}},hidePanel:function(t){t.target===this.$el&&this.$emit("hide")}}}},38:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=void 0,n=void 0,a=void 0;e.default={name:"Lyric",props:["current"],created:function(){var t=this;this.$nextTick(function(){t.bindWatch(),t.getLyric()})},data:function(){return{lyric:[],currentTime:0,currentLine:0}},methods:{bindWatch:function(){s||(s=document.getElementById("audio")),this.$watch("current",function(){this.currentTime=0,this.currentLine=0,this.current&&(s||(s=document.getElementById("audio")),this.getLyric())}),this.$watch("currentLine",function(t,e){this.switchLine()})},getLyric:function(){var t=this,e=new XMLHttpRequest;e.open("GET","/api/lyric?id="+this.current.id,!0),e.send(),e.onreadystatechange=function(i){4===e.readyState&&200===e.status&&(t.lyric=[],t.resetLyric(JSON.parse(e.responseText)))}},switchLine:function(){a||(a=this.$el.querySelector(".lyric-wrap")),a.style.top=2*-this.currentLine+"em"},resetLyric:function(t){if(!t.nolyric){var e=t.lrc.lyric.split("\n"),i=/\[\d*:\d*.\d*\]/g,s=[];e.forEach(function(t){var e=t.match(i);if(!e){var n=t.match(/\[ti:(.*?)\]/);if(n)return void(s.ti=n[1]);var a=t.match(/\[ar:(.*?)\]/);return void(a&&(s.ar=a[1]))}e=e[0];var r=e.match(/\[(\d*)/)[1]-0,c=e.match(/\:(\d*)./)[1]-0;s.push({time:60*r+c,lyric:t.replace(i,"")})}),this.lyric=s,this.setInterval()}},setInterval:function(t){function e(){return t.apply(this,arguments)}return e.toString=function(){return t.toString()},e}(function(){var t=this;clearInterval(n),this.lyric&&s&&(n=setInterval(function(){var e=t.lyric,i=void 0;for(t.currentTime=s.currentTime,i=e.length;--i>=0;)if(e[i].time<t.currentTime){t.currentLine=i;break}i||(t.currentLine=0)},200))})}}},39:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=null,n=null;e.default={name:"MusicPanel",props:["current"],created:function(){var t=this;this.$nextTick(function(){t.bingWatcher()})},data:function(){return{currentUrl:"",isPause:!1,picSrc:"",currentTime:"00:00",duration:"00:00",currentPercentage:0,musicBar:null}},methods:{bingWatcher:function(){var t=this;this.$watch("current",function(e){if(!this.current)return clearInterval(n),void s.pause();t.loadMusic(),t.loadPic()}),this.$watch("currentPercentage",function(t){if(this.current)return t>=100?void this.next():void(this.$el.querySelector(".play-btn").style.width=t+"%")})},loadMusic:function(){var t=this;if(s||this.getAudio(),"number"!=typeof m||isNaN(-m)){var e=new XMLHttpRequest;e.open("GET","/api/music/url?id="+this.current.id,!0),e.send(),e.onreadystatechange=function(i){if(4===e.readyState&&200===e.status){var n=JSON.parse(e.responseText);t.currentUrl=n.data[0].url,s.src=t.currentUrl,t.setInterval()}}}},setInterval:function(t){function e(){return t.apply(this,arguments)}return e.toString=function(){return t.toString()},e}(function(){var t=this;clearInterval(n),n=setInterval(function(){t.duration=t.getTime(Math.floor(s.duration)),t.currentTime=t.getTime(Math.floor(s.currentTime)),t.currentPercentage=s.currentTime/s.duration*100},200)}),getTime:function(t){if("number"!=typeof t||isNaN(-t))return"00:00";var e=Math.floor(t/60);e<10&&(e="0"+e);var t=t%60;return t<10&&(t="0"+t),e+":"+t},pauseMusic:function(){this.isPause=!this.isPause,this.isPause?s.pause():s.play()},getAudio:function(){s=document.getElementById("audio")},loadPic:function(){this.picSrc=this.current.al.picUrl},prev:function(){this.$emit("prev")},next:function(){this.$emit("next")},switchProgress:function(t){if(this.musicBar||(this.musicBar=this.$el.querySelector(".music-play")),this.current){var e=this.musicBar.getBoundingClientRect();s.currentTime=Math.floor((t.pageX-e.left)/e.width*s.duration)}},showLyric:function(){this.$emit("showLyric")}}}},40:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"container",created:function(){this.getTypeList()},props:["showClassify"],data:function(){return{singerList:[],musicData:[],nowActive:0,isLogin:!1,isAdmin:!1,now:0,typeList:[],list:[],showLyric:!1}},methods:{renderMusicList:function(){this.musicData[this.now]||this.getMusicList()},getMusicList:function(){var t=this,e=this.now,i=new XMLHttpRequest;i.open("GET","/api/playlist/detail?id="+this.typeList.playlists[this.now].id,!0),i.send(),i.onreadystatechange=function(s){if(4===i.readyState&&200===i.status){var n=JSON.parse(i.responseText);t.musicData[e]={names:n.playlist.tracks,ids:n.playlist.trackIds},t.musicData=t.musicData.slice()}}},getTypeList:function(){var t=this,e=new XMLHttpRequest;e.open("GET","/api/top/playlist/highquality?limit=10",!0),e.send(),e.onreadystatechange=function(i){4===e.readyState&&200===e.status&&(t.typeList=JSON.parse(e.responseText),t.renderMusicList())}},changeCurrentList:function(t){this.now=t,this.getMusicList()},saveMusicId:function(t){this.$emit("playMusic",t)},pushItem:function(t){this.$emit("pushItem",t)}}}},41:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=i(35),n=i(34),a=i.n(n),r=i(33),c=i.n(r);s.a.config.productionTip=!1,s.a.prototype.$http=c.a,new s.a({el:"#app",template:"<App/>",components:{App:a.a}})},75:function(t,e){},76:function(t,e){},77:function(t,e){},78:function(t,e){},79:function(t,e){},81:function(t,e,i){function s(t){i(79)}var n=i(7)(i(37),i(89),s,"data-v-b49f83e0",null);t.exports=n.exports},82:function(t,e,i){function s(t){i(75)}var n=i(7)(i(38),i(85),s,"data-v-0c74eff4",null);t.exports=n.exports},83:function(t,e,i){function s(t){i(78)}var n=i(7)(i(39),i(88),s,"data-v-658aeec8",null);t.exports=n.exports},84:function(t,e,i){function s(t){i(77)}var n=i(7)(i(40),i(87),s,"data-v-5f2b3fc8",null);t.exports=n.exports},85:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"Lyric"}},[t.lyric?i("div",{staticClass:"lyric-items"},[i("div",{staticClass:"wrap-side"},[i("div",{staticClass:"lyric-wrap"},[t.lyric.ti?i("div",{staticClass:"ti"},[t._v(t._s(t.lyric.ti))]):t._e(),t._v(" "),t.lyric.ar?i("div",{staticClass:"ar"},[t._v(t._s(t.lyric.ar))]):t._e(),t._v(" "),t._l(t.lyric,function(e,s){return i("div",{class:{on:s===t.currentLine,blank:!e.lyric.length}},[t._v("\n          "+t._s(e.lyric)+"\n        ")])})],2)])]):i("div",{staticClass:"lyric-items"},[t._v("无歌词")]),t._v(" "),i("img",{staticClass:"img",attrs:{src:t.current.al.picUrl}})])},staticRenderFns:[]}},86:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"app"}},[i("header",{staticClass:"header"},[i("div",{staticClass:"logo"},[t._v("我的音乐")]),t._v(" "),t.showLyric?t._e():i("div",{staticClass:"header-music-list",on:{click:function(e){t.showClassify=!0}}},[t._v("分类列表")]),t._v(" "),i("div",{staticClass:"header-play-list",on:{click:function(e){t.showPlayList=!0}}},[t._v("播放列表")]),t._v(" "),t.isLogin?t._e():i("div",{staticClass:"login-box"},[i("span",{on:{click:function(e){t.toLogin()}}},[t._v("登录")]),t._v(" "),i("span",[t._v("/")]),t._v(" "),i("span",{on:{click:function(e){t.toRegister()}}},[t._v("注册")])]),t._v(" "),t.isLogin?i("div",{staticClass:"login-box",on:{mouseover:function(e){t.showSpaner=!0},mouseleave:function(e){t.showSpaner=!1}}},[i("span",[t._v("你好  ")]),t._v(" "),i("span",[t._v(" "+t._s(t.loginData.username))]),t._v(" "),t.isAdmin?i("span",[t._v("/")]):t._e(),t._v(" "),i("span",{on:{click:function(e){t.logout()}}},[t._v("退出")]),t._v(" "),t.showSpaner?i("div",{staticClass:"spinner"},[i("li",[t._v("上传")]),t._v(" "),t.isAdmin?i("li",[t._v("审核")]):t._e(),t._v(" "),t.isAdmin?i("li",[t._v("管理")]):t._e()]):t._e()]):t._e()]),t._v(" "),t.showLyric?i("Lyric",{attrs:{current:t.playList[t.currentMusic],showLyric:t.showLyric}}):i("container",{attrs:{showClassify:t.showClassify},on:{playMusic:t.pushId,pushItem:t.pushItem}}),t._v(" "),i("MusicPanel",{attrs:{current:t.playList[t.currentMusic]},on:{prev:t.prevMusic,next:t.nextMusic,showLyric:t.toggleLyric}}),t._v(" "),t.showLoginPanel?i("Login",{attrs:{todo:t.loginMessage},on:{hide:function(e){t.showLoginPanel=!1},loginSuccess:t.getLoginData}}):t._e(),t._v(" "),i("div",{staticClass:"playList",class:{show:t.showPlayList}},[i("div",{staticClass:"listhd"},[t._v("播放列表("+t._s(t.playList.length)+")\n      "),i("span",{staticClass:"clear",attrs:{title:"清空"},on:{click:t.clearPlayList}},[t._v("清空")])]),t._v(" "),t._l(t.playList,function(e,s){return i("div",{staticClass:"playList-item"},[i("span",{staticClass:"wrap"},[i("span",{attrs:{title:"移除"},on:{click:t.delItem}},[t._v("×")]),t._v(" "),s===t.currentMusic?i("span",{staticClass:"currentPlay"},[t._v("▶")]):t._e()]),t._v(" "),i("span",{staticClass:"details",on:{click:function(e){t.switchMusic(s)}}},[i("span",[t._v(t._s(e.name))]),t._v(" "),i("span",[t._v(t._s(e.ar[0].name))])])])})],2)],1)},staticRenderFns:[]}},87:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"container"}},[i("nav",{staticClass:"classify-list",class:{entered:t.showClassify}},t._l(t.typeList.playlists,function(e,s){return i("div",{staticClass:"classify-item",class:{select:s===t.now},on:{click:function(e){t.changeCurrentList(s)}}},[t._v(t._s(e.name))])})),t._v(" "),i("nav",{staticClass:"music-list"},[t._m(0),t._v(" "),t.musicData[t.now]?i("div",{staticClass:"music-list-items"},t._l(t.musicData[t.now].names,function(e,s){return i("div",{staticClass:"music-list-item"},[i("span",[t._v(t._s(s+1))]),t._v(" \n        "),i("span",{on:{click:function(i){t.saveMusicId(e)}}},[t._v(t._s(e.name))]),t._v(" \n        "),i("span",[t._v(t._s(e.ar[0].name))]),t._v(" \n        "),i("span",[i("span",{attrs:{title:"加入播放列表"},on:{click:function(i){t.pushItem(e)}}},[t._v("+")])])])})):t._e()])])},staticRenderFns:[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"list-head"},[i("span"),t._v(" \n      "),i("span",[t._v("歌曲")]),t._v(" \n      "),i("span",[t._v("歌手")]),t._v(" \n      "),i("span",[t._v("操作")])])}]}},88:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return t.current?i("div",{attrs:{id:"MusicPanel"}},[i("div",{staticClass:"wrap"},[i("div",{staticClass:"btns"},[i("span",{staticClass:"last",on:{click:t.prev}}),t._v(" "),i("span",{class:{play:t.isPause,stop:!t.isPause},on:{click:function(e){t.pauseMusic()}}}),t._v(" "),i("span",{staticClass:"next",on:{click:t.next}})]),t._v(" "),i("div",{staticClass:"pic"},[i("img",{attrs:{src:t.picSrc},on:{click:t.showLyric}})]),t._v(" "),i("div",{staticClass:"progress"},[i("div",{staticClass:"music-word"},[t._v(t._s(t.current.name)+" "+t._s(t.current.ar[0].name))]),t._v(" "),i("div",{staticClass:"music-play",on:{click:function(e){t.switchProgress(e)}}},[t._m(0)])]),t._v(" "),i("div",{staticClass:"progress-num"},[i("span",[t._v(t._s(t.currentTime))]),t._v(" "),i("span",[t._v("/")]),t._v(" "),i("span",[t._v(t._s(t.duration))])])]),t._v(" "),i("div",{staticClass:"lyric-btn"},[t.current?i("img",{staticClass:"btn-pic",attrs:{src:t.picSrc},on:{click:t.showLyric}}):t._e()])]):t._e()},staticRenderFns:[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"play-btn"},[i("span",{staticClass:"now"})])}]}},89:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"login"},on:{click:function(e){t.hidePanel(e)}}},[i("div",{staticClass:"login-panel"},["login"===t.todo?i("div",[t._m(0),t._v(" "),i("form",{staticClass:"login-form"},[t._v("\n        用户名:"),i("br"),t._v(" "),i("input",{directives:[{name:"model",rawName:"v-model",value:t.loginData.username,expression:"loginData.username"}],attrs:{type:"text",id:"user",name:"username"},domProps:{value:t.loginData.username},on:{input:function(e){e.target.composing||(t.loginData.username=e.target.value)}}}),i("br"),t._v("\n        密码:"),i("br"),t._v(" "),i("input",{directives:[{name:"model",rawName:"v-model",value:t.loginData.password,expression:"loginData.password"}],attrs:{type:"password",id:"psd",name:"password"},domProps:{value:t.loginData.password},on:{input:function(e){e.target.composing||(t.loginData.password=e.target.value)}}}),i("br"),t._v(" "),i("input",{attrs:{type:"button",id:"submit",value:"登录"},on:{click:function(e){t.validator()}}}),t._v(" "),i("input",{attrs:{type:"button",id:"register",value:"去注册"},on:{click:function(e){t.todo="register"}}})])]):i("div",[i("div",{staticClass:"title"},[i("h4",[t._v("注册")])]),t._v(" "),i("form",{staticClass:"login-form"},[t._v("\n        用户名:"),i("br"),t._v(" "),i("input",{directives:[{name:"model",rawName:"v-model",value:t.registerData.username,expression:"registerData.username"}],attrs:{type:"text",id:"adduser",name:"username"},domProps:{value:t.registerData.username},on:{input:function(e){e.target.composing||(t.registerData.username=e.target.value)}}}),i("br"),t._v("\n        密码:"),i("br"),t._v(" "),i("input",{directives:[{name:"model",rawName:"v-model",value:t.registerData.password,expression:"registerData.password"}],attrs:{type:"password",id:"addpsd",name:"password"},domProps:{value:t.registerData.password},on:{input:function(e){e.target.composing||(t.registerData.password=e.target.value)}}}),i("br"),t._v("\n        确认密码:"),i("br"),t._v(" "),i("input",{directives:[{name:"model",rawName:"v-model",value:t.registerData.confirmPassword,expression:"registerData.confirmPassword"}],attrs:{type:"password",id:"confirmPsd",name:"password"},domProps:{value:t.registerData.confirmPassword},on:{input:function(e){e.target.composing||(t.registerData.confirmPassword=e.target.value)}}}),i("br"),t._v(" "),i("input",{attrs:{type:"button",id:"registerSubmit",value:"注册"},on:{click:function(e){t.registerValidator()}}}),t._v(" "),i("input",{attrs:{type:"button",id:"tologin",value:"去登录"},on:{click:function(e){t.todo="login"}}})])])])])},staticRenderFns:[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"title"},[i("h4",[t._v("登录")])])}]}}},[41]);
//# sourceMappingURL=app.13d5390de18a013bd75d.js.map