(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[1],{"013f":function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("q-layout",[a("q-page-container",[a("q-page",{staticClass:"flex flex-center login-page"},[a("div",{directives:[{name:"show",rawName:"v-show",value:!t.appUpdater.isUpdating&&!t.showLogin,expression:"!appUpdater.isUpdating && !showLogin"}]},[a("div",{staticClass:"spashscreen fullscreen"})]),a("div",{directives:[{name:"show",rawName:"v-show",value:t.showLogin,expression:"showLogin"}],staticClass:"form-wrap"},[a("q-form",{staticClass:"q-gutter-sm",on:{submit:t.onLogin}},[a("div",{staticClass:"logo"}),a("div",[a("q-input",{attrs:{dark:"",color:"white",label:"User Id",rules:[function(t){return t&&t.length>0||"Please enter your user id"}]},model:{value:t.userId,callback:function(e){t.userId=e},expression:"userId"}}),a("q-input",{attrs:{dark:"",color:"white",label:"Password",type:"password",rules:[function(t){return t&&t.length>0||"Please enter your password"}]},model:{value:t.password,callback:function(e){t.password=e},expression:"password"}}),a("q-input",{attrs:{dark:"",color:"white",label:"Group Id",type:"number",rules:[function(t){return t&&t>0||"Please enter put your groupId"}]},model:{value:t.groupId,callback:function(e){t.groupId=e},expression:"groupId"}})],1),a("div",[a("q-btn",{staticClass:"full-width",attrs:{label:"Login",type:"submit",color:"white","text-color":"black"}})],1)]),a("div",{staticClass:"version"},[a("p",[t._v(t._s("Version: "+t.appUpdater.version))])])],1),a("div",{directives:[{name:"show",rawName:"v-show",value:t.appUpdater.isUpdating,expression:"appUpdater.isUpdating"}]},[a("div",{directives:[{name:"show",rawName:"v-show",value:t.appUpdater.isAndroid,expression:"appUpdater.isAndroid"}],staticStyle:{"text-align":"center"}},[a("h5",{staticStyle:{"margin-bottom":"0"}},[t._v(t._s(t.appUpdater.updateTitle))]),a("q-linear-progress",{staticStyle:{height:"20px"},attrs:{value:t.appUpdater.downloadProcessValue/100,rounded:""}},[a("div",{staticClass:"absolute-full flex flex-center"},[a("q-badge",{attrs:{color:"white","text-color":"accent",label:t.appUpdater.downloadProcessValue+"%"}})],1)])],1),a("div",{directives:[{name:"show",rawName:"v-show",value:!t.appUpdater.isAndroid,expression:"!appUpdater.isAndroid"}],staticStyle:{"text-align":"center"}},[a("h5",{staticStyle:{"margin-bottom":"0"}},[t._v(t._s(t.appUpdater.updateTitle))]),a("q-linear-progress",{staticStyle:{height:"20px"},attrs:{value:t.appUpdater.downloadProcessValue/100,rounded:""}},[a("div",{staticClass:"absolute-full flex flex-center"},[a("q-badge",{attrs:{color:"white","text-color":"accent",label:t.appUpdater.downloadProcessValue+"%"}})],1)])],1)])])],1)],1)},s=[],r=a("2b0e"),o=a("bc3a"),n=a.n(o),l=a("2c75");class c{static Login(t,e,a){const i={userId:t,password:e,ticks:a};return l["a"].post("BizLogin_Login",i)}}var d=a("d257"),p=r["a"].extend({name:"Login",data(){return{userId:"",password:"",groupId:"",showLogin:!1,appUpdater:{isUpdating:!1,isAndroid:!1,updateTitle:"Checking new version ...",updateBaseUrl:"https://rciupdatetest.azurewebsites.net/RCAppsHome",appName:"DirectScan",version:"1.0.0",downloadProcessValue:0}}},methods:{notifyError(t){this.$q.notify({type:"negative",position:"top",message:t})},onLogin(){this.$q.loading.show();const t=d["a"].getTicks().toString(),e=d["a"].encryptPassword(t,this.password);c.Login(this.userId,e,t).then(t=>{this.$q.loading.hide(),t.data.ok?(d["a"].setAuthorization(t.data.authorization),d["a"].setRemeberMe(`${t.data.authorization}|${this.groupId}`),this.$store.commit("UserStore/SET_USER",{pk:t.data.result.pk,firstName:t.data.result.firstName,lastName:t.data.result.lastName,groupId:this.groupId}),this.$router.replace({name:"Dashboard"})):this.notifyError(t.data.message)}).catch(t=>{this.$q.loading.hide(),this.notifyError(t.message)})},autoLogin(){const t=d["a"].getRemeberMe();if(0===t.length)return void(this.showLogin=!0);const e=t.split("|");2==e.length?(d["a"].setAuthorization(e[0]),this.groupId=e[1],this.$q.loading.show(),c.Login("","","").then(t=>{this.$q.loading.hide(),t.data.ok?(this.$store.commit("UserStore/SET_USER",{pk:t.data.result.pk,firstName:t.data.result.firstName,lastName:t.data.result.lastName,groupId:this.groupId}),this.$router.replace({name:"Dashboard"})):(sessionStorage.clear(),localStorage.clear(),this.showLogin=!0)}).catch(t=>{this.$q.loading.hide(),this.showLogin=!0,this.notifyError(t.message)})):this.showLogin=!0},checkVersion(t){this.$q.platform.is.android?this.appUpdater.isAndroid=!0:this.appUpdater.isAndroid=!1,this.appUpdater.isAndroid?this.checkAndroidVersion(e=>{e?this.updateApp():t()}):this.checkIOSVersion(e=>{e?this.updateApp():t()})},checkAndroidVersion(t){const e=(new Date).getTime(),a=`${this.appUpdater.updateBaseUrl}/${this.appUpdater.appName}/${this.appUpdater.appName}.txt?timestamp=${e}`;n.a.get(a).then(e=>{const a=e.data.Version;a!=this.appUpdater.version?(this.appUpdater.updateTitle="Downloading new version...",t(!0)):t(!1)}).catch(t=>{this.showUpdateError(t.message)})},checkIOSVersion(t){const e=(new Date).getTime(),a=`${this.appUpdater.updateBaseUrl}/${this.appUpdater.appName}/${this.appUpdater.appName}.plist?timestamp=${e}`;n.a.get(a).then(e=>{let a="";const i=e.data.split(/\r\n|[\r\n]/);for(let t=0;t<i.length;t++){const e=i[t];if(e.endsWith("<key>bundle-version</key>")&&t+1<i.length){const e=i[t+1].indexOf("<string>");a=i[t+1].substring(e+8,e+8+5)}}a.length>0&&a!=this.appUpdater.version?(this.appUpdater.updateTitle="Updating the App, please wait...",t(!0)):t(!1)}).catch(t=>{this.showUpdateError(t.message)})},updateApp(){if(this.appUpdater.isUpdating=!0,this.appUpdater.isAndroid){const t=(new Date).getTime(),e=`${this.appUpdater.updateBaseUrl}/${this.appUpdater.appName}/${this.appUpdater.appName}.apk?v=${t}`;this.updateAndroid(e)}else{const t=`itms-services://?action=download-manifest&url=${this.appUpdater.updateBaseUrl}/${this.appUpdater.appName}/${this.appUpdater.appName}.plist`;this.updateIOS(t)}},updateAndroid(t){const e=this;window.resolveLocalFileSystemURL(cordova.file.externalDataDirectory,(function(a){a.getFile(e.appUpdater.appName+".apk",{create:!0,exclusive:!1},(function(a){n()({method:"GET",url:t,responseType:"blob",onDownloadProgress(t){t.lengthComputable&&e.$nextTick(()=>{e.appUpdater.downloadProcessValue=Math.round(t.loaded/t.total*100)})}}).then(t=>{const e=new Blob([t.data],{type:"application/vnd.android.package-archive"});a.createWriter((function(t){t.onwriteend=function(){cordova.plugins.fileOpener2.open(a.toInternalURL(),"application/vnd.android.package-archive")},t.write(e)}))}).catch(t=>{e.showUpdateError("download error: "+t.message)})}),t=>{e.showUpdateError("error getting file! "+t.message)})}),t=>{e.showUpdateError("error getting persistent fs! "+t.code)})},updateIOS(t){cordova.InAppBrowser.open(t,"_system","location=no"),this.simulateDownloadIOS()},simulateDownloadIOS(){setTimeout(()=>{this.appUpdater.downloadProcessValue>=100?cordova.plugins.exit():(this.$nextTick(()=>{this.appUpdater.downloadProcessValue+=10}),this.simulateDownloadIOS())},1e3)},showUpdateError(t){navigator.notification.alert(t,()=>{this.$q.dialog({title:"Confirm",message:"Would you like to continue?",cancel:!0,persistent:!0}).onOk(()=>{screen.orientation.lock("portrait"),this.autoLogin()}).onCancel(()=>{cordova.plugins.exit()})})}},mounted(){this.appUpdater.version=d["a"].getVersion(),this.$q.platform.is.cordova?this.checkVersion(()=>{screen.orientation.lock("portrait"),this.autoLogin()}):this.autoLogin()}}),u=p,h=(a("8dce"),a("2c53"),a("2877")),g=Object(h["a"])(u,i,s,!1,null,"544d41e6",null);e["default"]=g.exports},"12c5":function(t,e,a){},"1eaa":function(t,e,a){"use strict";var i=a("932e"),s=a.n(i);s.a},"2c53":function(t,e,a){"use strict";var i=a("b47d"),s=a.n(i);s.a},"2c75":function(t,e,a){"use strict";a.d(e,"a",(function(){return r}));var i=a("bc3a"),s=a.n(i);s.a.defaults.timeout=5e4,s.a.defaults.baseURL="https://d3000apitest.azurewebsites.net/api/VirtualScan/",s.a.interceptors.request.use((function(t){const e=sessionStorage.getItem("D3000_VirtualScan_authorization")||"";return e&&(t.headers.Authorization="Basic "+e),t.url=t.url+"?access_token=73FBF94A-3F5E-7190-9252-95924D4DBBD5",t}),(function(t){return Promise.reject(t)})),s.a.interceptors.response.use((function(t){return t}),(function(t){return Promise.reject(t)}));class r{static post(t,e,a){return s.a.post(t,e,a)}}},"86d0":function(t,e,a){},"88fb":function(t,e,a){"use strict";var i=a("e202"),s=a.n(i);s.a},"8dce":function(t,e,a){"use strict";var i=a("86d0"),s=a.n(i);s.a},"932e":function(t,e,a){},a1d1:function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("q-layout",[a("q-header",{attrs:{elevated:""}},[a("q-toolbar",[a("q-btn",{attrs:{flat:"",dense:"",round:"",icon:"keyboard_backspace"},on:{click:t.onBack}}),a("q-toolbar-title",[t._v(t._s(t.title))])],1)],1),a("q-page-container",[a("q-page",[a("div",{staticClass:"about"}),a("q-list",{staticClass:"flex justify-center"},[a("q-item",{staticClass:"text-blue-grey-3 text-h5"},[t._v(t._s("Version: "+t.version))])],1),a("q-list",{staticClass:"q-pt-lg text-center",attrs:{dense:""}},[a("q-item",[a("q-item-section",[a("q-item-label",{staticClass:"text-blue-7 text-subtitle2"},[t._v("Latitude:\n              "),a("span",{staticClass:"text-grey-8"},[t._v(t._s(t.latitude))])])],1)],1),a("q-item",[a("q-item-section",[a("q-item-label",{staticClass:"text-blue-7 text-subtitle2"},[t._v("Longitude:\n              "),a("span",{staticClass:"text-grey-8"},[t._v(t._s(t.longitude))])])],1)],1),a("q-item",[a("q-item-section",[a("q-item-label",{staticClass:"text-blue-7 text-subtitle2"},[t._v("\n              Orientation:\n              "),a("span",{staticClass:"text-grey-8"},[t._v(t._s(t.orientation)+"°")])])],1)],1)],1),a("q-list",{staticClass:"fixed-bottom text-center text-caption text-grey-9",attrs:{dense:""}},[a("q-item",[a("q-item-section",{staticClass:"about-top-line"},[t._v("\n            © 2020 Datawatch ® Systems, Inc.\n          ")])],1),a("q-item",[a("q-item-section",[t._v("\n            All rights reserved.\n          ")])],1)],1)],1)],1)],1)},s=[],r=a("2b0e"),o=a("b178"),n=a("d257"),l=r["a"].extend({name:"About",data(){return{title:"About",version:"1.0.0",latitude:0,longitude:0,orientation:0}},methods:{notifyError(t){this.$q.notify({type:"negative",position:"top",message:t})},onBack(){this.$router.back()},getGPSPosition(t){try{this.$q.loading.show(),navigator.geolocation.getCurrentPosition(e=>{this.$q.loading.hide(),t(e.coords.latitude,e.coords.longitude)},t=>{this.$q.loading.hide(),this.notifyError("The location service must be enabled.("+t.message+")"),this.onBack()},{maximumAge:3e5,timeout:3e4,enableHighAccuracy:!0})}catch(e){this.$q.loading.hide(),this.notifyError(e.message),this.onBack()}},showLocation(t,e){this.latitude=t,this.longitude=e},compass(t){this.orientation=Math.round(t)}},mounted(){this.version=n["a"].getVersion(),this.getGPSPosition((t,e)=>{this.showLocation(t,e)}),this.$q.platform.is.ios?window.addEventListener("deviceorientation",Object(o["d"])(t=>{if("webkitCompassHeading"in t){const e=t["webkitCompassHeading"]||0;this.compass(e)}else this.compass(t.alpha||0)},300),!1):window.addEventListener("deviceorientationabsolute",Object(o["d"])(t=>{null!==t.alpha&&this.compass(360-t.alpha)},300),!1)}}),c=l,d=(a("c069"),a("2877")),p=Object(d["a"])(c,i,s,!1,null,"036b953c",null);e["default"]=p.exports},b47d:function(t,e,a){},c069:function(t,e,a){"use strict";var i=a("d01f"),s=a.n(i);s.a},c746:function(t,e){t.exports="data:image/png;base64,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"},d01f:function(t,e,a){},d257:function(t,e,a){"use strict";a.d(e,"a",(function(){return i}));class i{static setRemeberMe(t){localStorage.setItem("D3000_VirtualScan_key",t)}static getRemeberMe(){return localStorage.getItem("D3000_VirtualScan_key")||""}static clearRemeberMe(){localStorage.removeItem("D3000_VirtualScan_key")}static setAuthorization(t){sessionStorage.setItem("D3000_VirtualScan_authorization",t)}static getAuthorization(){return sessionStorage.getItem("D3000_VirtualScan_authorization")||""}static clearAuthorization(){sessionStorage.removeItem("D3000_VirtualScan_authorization")}static hasAuthorization(){const t=sessionStorage.getItem("D3000_VirtualScan_authorization")||"";return t.length>0}static getVersion(){return"1.0.0"}static getTicks(){const t=621355968e9,e=1e4;return t+(new Date).getTime()*e}static encryptPassword(t,e){const a=[];for(let i=0;i<e.length;i++)if(i<t.length){const s=e.charCodeAt(i)+t.charCodeAt(i)-35;a.push(s.toString())}else{const t=e.charCodeAt(i)+5;a.push(t.toString())}return a.join(" ")+" "}static encryptPK(t){return t.replace(/-/g,"")}static decryptPK(t){if(32!==t.length)return t;let e=t.substring(0,8);return e+="-",e+=t.substring(8,12),e+="-",e+=t.substring(12,16),e+="-",e+=t.substring(16,20),e+="-",e+=t.substring(20),e}}},d4cf:function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("q-layout",{attrs:{view:"lHh Lpr lFf"}},[i("q-page-container",[i("q-page",[i("q-form",{directives:[{name:"show",rawName:"v-show",value:t.entity.firstName.length>0||t.entity.lastName.length>0,expression:"entity.firstName.length > 0 || entity.lastName.length > 0"}]},[i("q-input",{attrs:{outlined:"",label:"FirstName",readonly:""},scopedSlots:t._u([{key:"prepend",fn:function(){return[i("q-icon",{attrs:{name:"person"}})]},proxy:!0}]),model:{value:t.entity.firstName,callback:function(e){t.$set(t.entity,"firstName",e)},expression:"entity.firstName"}}),i("q-input",{attrs:{outlined:"",label:"LastName",readonly:""},scopedSlots:t._u([{key:"prepend",fn:function(){return[i("q-icon",{attrs:{name:"person"}})]},proxy:!0}]),model:{value:t.entity.lastName,callback:function(e){t.$set(t.entity,"lastName",e)},expression:"entity.lastName"}}),i("q-input",{attrs:{outlined:"",label:"Tenant",readonly:""},scopedSlots:t._u([{key:"prepend",fn:function(){return[i("q-icon",{attrs:{name:"place"}})]},proxy:!0}]),model:{value:t.entity.tenant,callback:function(e){t.$set(t.entity,"tenant",e)},expression:"entity.tenant"}}),i("q-field",{staticClass:"text-center",attrs:{outlined:"",readonly:""},scopedSlots:t._u([{key:"control",fn:function(){return[i("div",{staticClass:"self-center full-width no-outline text-center cursor-pointer"},[t.entity.photo.length>0?i("img",{attrs:{src:"data:image/jpeg;base64,"+t.entity.photo}}):i("img",{attrs:{src:a("c746")}})])]},proxy:!0}])}),i("video",{ref:"sucess",attrs:{name:"media"}},[i("source",{attrs:{src:"mp3/sucess.mp3",type:"audio/mpeg"}})]),i("video",{ref:"error",attrs:{name:"media"}},[i("source",{attrs:{src:"mp3/error.mp3",type:"audio/mpeg"}})])],1)],1)],1)],1)},s=[],r=a("2b0e"),o=a("b178");class n{static scanQRCode(t){o["b"].is.cordova?cordova.plugins.barcodeScanner.scan(e=>{e.cancelled||t(e.text)},t=>{n.showError("Scanning failed: "+t.message)},{preferFrontCamera:!1,showFlipCameraButton:!0,showTorchButton:!0,torchOn:!1,saveHistory:!0,prompt:"Place a barcode inside the scan area",resultDisplayDuration:500,formats:"QR_CODE",orientation:"portrait",disableAnimations:!0,disableSuccessBeep:!1}):n.showError("Scanning must be in mobile.")}static takePicture(t){o["b"].is.cordova?n.takePictureByCordova(t):o["b"].is.desktop?n.takePictureByDesktop(t):n.takePictureByMobile(t)}static showError(t){o["a"].create({title:"Error",message:t})}static takePictureByCordova(t){const e=navigator.camera;e?e.getPicture(t,()=>{},{quality:45,destinationType:0,sourceType:1,allowEdit:!0,encodingType:0,targetWidth:250,targetHeight:250}):n.showError("The camera does not exist in the cordova.")}static takePictureByDesktop(t){const e=document.createElement("input");e.setAttribute("type","file"),e.setAttribute("accept","image/*;capture=camera"),e.addEventListener("change",e=>{const a=e.currentTarget;if(!a||!a.files)return;const i=a.files[0];if(!i)return;const s=new FileReader;s.addEventListener("load",e=>{if(!e.target||!e.target.result)return;const a=e.target.result,i=document.createElement("canvas"),s=document.createElement("img");s.addEventListener("error",()=>{alert("Fail to load image(desktop).")}),s.addEventListener("load",()=>{const e=250;i.width=e,i.height=e;const a=i.getContext("2d");if(!a)return;let r,o;a.clearRect(0,0,e,e);let n=0,l=0;s.width>s.height?(r=Math.round(e*s.width/s.height),o=e,n=-Math.round((r-e)/2)):(o=Math.round(e*s.height/s.width),r=e,l=-Math.round((o-e)/2)),a.drawImage(s,n,l,r,o);const c=i.toDataURL("image/jpeg",.5),d=c.substr(23);t(d)},!1),s.setAttribute("src",a)}),s.readAsDataURL(i)}),e.click()}static takePictureByMobile(t){const e=document.createElement("input");e.setAttribute("type","file"),e.setAttribute("accept","image/*;capture=camera"),e.addEventListener("change",e=>{const a=e.currentTarget;if(!a||!a.files)return;const i=a.files[0];if(!i)return;const s=document.createElement("img");s.addEventListener("error",()=>{alert("Fail to load image(mobile).")}),s.addEventListener("load",()=>{window.URL.revokeObjectURL(s.src);const e=document.createElement("canvas"),a=250;e.width=a,e.height=a;const i=e.getContext("2d");if(!i)return;let r,o;i.clearRect(0,0,a,a);let n=0,l=0;s.width>s.height?(r=Math.round(a*s.width/s.height),o=a,n=-Math.round((r-a)/2)):(o=Math.round(a*s.height/s.width),r=a,l=-Math.round((o-a)/2)),i.drawImage(s,n,l,r,o);const c=e.toDataURL("image/jpeg",.5),d=c.substr(23);t(d)},!1),s.setAttribute("src",window.URL.createObjectURL(i))}),e.click()}}var l=a("2c75");class c{static CheckIn(t,e,a){const i={buildingPK:t,barcode:e,groupId:a};return l["a"].post("BizVisitor_CheckIn",i)}}var d=r["a"].extend({name:"ScanVisitor",data(){return{buildingPK:"",groupId:0,entity:{firstName:"",lastName:"",tenant:"",photo:""}}},methods:{checkInVisitor(t){this.$q.loading.show(),this.entity.firstName="",this.entity.lastName="",c.CheckIn(this.buildingPK,t,this.groupId).then(t=>{this.$q.loading.hide(),t.data.ok?(this.entity=t.data.result,this.$q.notify({type:"positive",position:"top",timeout:1500,progress:!0,message:"You have successfully checked in."}),this.$refs.sucess.play()):(this.$q.notify({type:"negative",position:"top",timeout:1500,progress:!0,message:t.data.message}),this.$refs.error.play()),window.setTimeout(()=>{this.scanVisitor()},3e3)}).catch(t=>{this.$q.notify({type:"negative",position:"top",timeout:1500,progress:!0,message:t.message}),this.$refs.error.play(),window.setTimeout(()=>{this.scanVisitor()},3e3)})},scanVisitor(){if(this.$q.platform.is.cordova)n.scanQRCode(t=>{const e=t.lastIndexOf("/"),a=t.substring(e+1);this.checkInVisitor(a)});else{const t="https://d3000apitest.azurewebsites.net/WebSites/#/Dashboard/2005805",e=t.lastIndexOf("/"),a=t.substring(e+1);this.checkInVisitor(a)}}},mounted(){this.buildingPK=this.$route.params.pk,this.groupId=Number.parseInt(this.$route.params.groupId),this.scanVisitor()}}),p=d,u=(a("d63a"),a("2877")),h=Object(u["a"])(p,i,s,!1,null,"412f9801",null);e["default"]=h.exports},d63a:function(t,e,a){"use strict";var i=a("12c5"),s=a.n(i);s.a},e202:function(t,e,a){},ec95:function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("q-layout",{attrs:{view:"lHh Lpr lFf"}},[i("q-header",{attrs:{elevated:""}},[i("q-toolbar",[i("q-btn",{attrs:{flat:"",dense:"",round:"",icon:"menu"},on:{click:t.onShowMenu}}),i("q-toolbar-title",[t._v(t._s(t.title))]),i("q-btn",{attrs:{flat:"",dense:"",round:"",icon:"gps_fixed"},on:{click:t.onSearchBuilding}})],1)],1),i("q-footer",{attrs:{elevated:""}},[i("q-toolbar",{staticClass:"row justify-around bg-primary text-white"},[i("q-btn",{staticClass:"bicode",attrs:{flat:"",dense:"",stack:"",icon:"camera",label:"QRCode"},on:{click:t.onScanVisitor}})],1)],1),i("q-drawer",{ref:"drawer",attrs:{"show-if-above":"",bordered:"","content-class":"bg-primary text-white"},model:{value:t.leftDrawerOpen,callback:function(e){t.leftDrawerOpen=e},expression:"leftDrawerOpen"}},[i("q-list",[i("q-item",{directives:[{name:"ripple",rawName:"v-ripple"}],attrs:{clickable:""},on:{click:t.onLogout}},[i("q-item-section",{attrs:{avatar:""}},[i("q-icon",{attrs:{name:"person"}})],1),i("q-item-section",[i("q-item-label",[t._v("Logout")])],1)],1),i("q-item",{directives:[{name:"ripple",rawName:"v-ripple"}],attrs:{clickable:""},on:{click:t.onAbout}},[i("q-item-section",{attrs:{avatar:""}},[i("q-icon",{attrs:{name:"info"}})],1),i("q-item-section",[i("q-item-label",[t._v("About")])],1)],1)],1)],1),i("q-page-container",[i("q-page",{staticClass:"flex text-center bg-grey-1"},[i("div",{staticStyle:{width:"100%"}},[i("div",{staticClass:"bg"},[i("div",{staticClass:"logo"})]),t.photo&&t.photo.length>0?i("q-avatar",{staticClass:"photo",attrs:{size:"80px"}},[i("img",{attrs:{src:"data:image/jpeg;base64,"+t.photo}})]):i("q-avatar",{staticClass:"photo",attrs:{color:"grey-3",size:"160px"}},[i("img",{attrs:{src:a("fa19"),draggable:"false"}}),i("span",{staticClass:"shadow"})]),i("h6",{staticClass:"text-grey-10"},[t._v("Welcome")]),i("h4",{staticClass:"text-grey-10",staticStyle:{"margin-bottom":"20px"}},[t._v("\n          "+t._s(t.firstName+" "+t.lastName+" #"+t.groupId)+"\n        ")])],1)])],1)],1)},s=[],r=a("2b0e"),o=a("d257"),n=a("2c75");class l{static GetBuildingList(t,e,a){const i={userPK:t,latitude:e,longitude:a};return n["a"].post("BizBuilding_GetBuildingList",i)}}var c=r["a"].extend({name:"Dashboard",data(){return{leftDrawerOpen:!1,title:"Home",workingBuilding:{pk:""},userPK:"",firstName:"",lastName:"",groupId:0,photo:""}},methods:{notifyError(t){this.$q.notify({type:"negative",position:"top",message:t})},onAbout(){this.$router.push({name:"About"})},onShowMenu(){this.leftDrawerOpen=!this.leftDrawerOpen},onLogout(){this.$q.dialog({dark:!1,title:"Confirmation",message:"Are you sure to logout?",cancel:!0,persistent:!0}).onOk(()=>{sessionStorage.clear(),localStorage.clear(),this.$router.push({name:"Login"})})},getGPSPosition(t){try{this.$q.loading.show(),navigator.geolocation.getCurrentPosition(e=>{this.$q.loading.hide(),t(e.coords.latitude,e.coords.longitude)},t=>{this.$q.loading.hide(),this.notifyError("The location service must be enabled.("+t.message+")")},{maximumAge:3e5,timeout:3e4,enableHighAccuracy:!0})}catch(e){this.$q.loading.hide(),this.notifyError(e.message)}},onSearchBuilding(){this.getGPSPosition((t,e)=>{this.getBuildingList(t,e,!0)})},getBuildingList(t,e,a){this.$q.loading.show(),l.GetBuildingList(this.userPK,t,e).then(t=>{this.$q.loading.hide(),t.data.ok?this.selectBuilding(t.data.result,a):(console.log(t),this.notifyError(t.data.message))}).catch(t=>{this.$q.loading.hide(),this.notifyError(t.message)})},selectBuilding(t,e){if(0===t.length)return this.notifyError("You are not near by a building."),this.workingBuilding.pk="",void(this.title="Home");if(1===t.length)return this.workingBuilding.pk=t[0].pk,void(this.title=t[0].address);const a=new Array;for(const i of t)a.push({label:i.address,value:i.pk});this.$q.dialog({title:"Select a building",message:"",options:{type:"radio",model:a[0].value,items:a},cancel:e,persistent:!0}).onOk(t=>{for(const e of a)e.value===t&&(this.workingBuilding.pk=e.value,this.title=e.label)})},onScanVisitor(){this.$router.push({name:"ScanVisitor",params:{pk:this.workingBuilding.pk,groupId:this.groupId.toString()}})}},mounted(){const t=o["a"].getRemeberMe();if(!t)return void this.$router.replace({name:"Login"});const e=this.$store.getters["UserStore/GET_USER"];e.pk?(this.userPK=e.pk,this.firstName=e.firstName,this.lastName=e.lastName,this.groupId=e.groupId,this.workingBuilding.pk||this.getGPSPosition((t,e)=>{this.getBuildingList(t,e,!1)})):this.$router.replace({name:"Login"})}}),d=c,p=(a("1eaa"),a("88fb"),a("2877")),u=Object(p["a"])(d,i,s,!1,null,"a8c37b94",null);e["default"]=u.exports},fa19:function(t,e,a){t.exports=a.p+"img/person.png"}}]);