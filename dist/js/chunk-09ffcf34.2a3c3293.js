(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-09ffcf34"],{"016e":function(t,e,n){"use strict";var r=n("a2e9");t.exports=function(t,e){var n=[][t];return!!n&&r((function(){n.call(null,e||function(){throw 1},1)}))}},2252:function(t,e,n){},"22c2":function(t,e,n){"use strict";var r=n("a2e9");function a(t,e){return RegExp(t,e)}e.UNSUPPORTED_Y=r((function(){var t=a("a","y");return t.lastIndex=2,null!=t.exec("abcd")})),e.BROKEN_CARET=r((function(){var t=a("^r","gy");return t.lastIndex=2,null!=t.exec("str")}))},2479:function(t,e,n){var r=n("5c02"),a=n("31c4"),i=function(t){return function(e,n){var i,o,s=String(a(e)),c=r(n),l=s.length;return c<0||c>=l?t?"":void 0:(i=s.charCodeAt(c),i<55296||i>56319||c+1===l||(o=s.charCodeAt(c+1))<56320||o>57343?t?s.charAt(c):i:t?s.slice(c,c+2):o-56320+(i-55296<<10)+65536)}};t.exports={codeAt:i(!1),charAt:i(!0)}},"24ec":function(t,e,n){"use strict";var r=n("264b");t.exports=function(){var t=r(this),e="";return t.global&&(e+="g"),t.ignoreCase&&(e+="i"),t.multiline&&(e+="m"),t.dotAll&&(e+="s"),t.unicode&&(e+="u"),t.sticky&&(e+="y"),e}},"36dc":function(t,e,n){"use strict";var r=n("24ec"),a=n("22c2"),i=RegExp.prototype.exec,o=String.prototype.replace,s=i,c=function(){var t=/a/,e=/b*/g;return i.call(t,"a"),i.call(e,"a"),0!==t.lastIndex||0!==e.lastIndex}(),l=a.UNSUPPORTED_Y||a.BROKEN_CARET,u=void 0!==/()??/.exec("")[1],d=c||u||l;d&&(s=function(t){var e,n,a,s,d=this,f=l&&d.sticky,p=r.call(d),m=d.source,b=0,v=t;return f&&(p=p.replace("y",""),-1===p.indexOf("g")&&(p+="g"),v=String(t).slice(d.lastIndex),d.lastIndex>0&&(!d.multiline||d.multiline&&"\n"!==t[d.lastIndex-1])&&(m="(?: "+m+")",v=" "+v,b++),n=new RegExp("^(?:"+m+")",p)),u&&(n=new RegExp("^"+m+"$(?!\\s)",p)),c&&(e=d.lastIndex),a=i.call(f?n:d,v),f?a?(a.input=a.input.slice(b),a[0]=a[0].slice(b),a.index=d.lastIndex,d.lastIndex+=a[0].length):d.lastIndex=0:c&&a&&(d.lastIndex=d.global?a.index+a[0].length:e),u&&a&&a.length>1&&o.call(a[0],n,(function(){for(s=1;s<arguments.length-2;s++)void 0===arguments[s]&&(a[s]=void 0)})),a}),t.exports=s},"4b7d":function(t,e,n){var r=n("6dd5"),a=n("a2e9"),i=n("5b09"),o=Object.defineProperty,s={},c=function(t){throw t};t.exports=function(t,e){if(i(s,t))return s[t];e||(e={});var n=[][t],l=!!i(e,"ACCESSORS")&&e.ACCESSORS,u=i(e,0)?e[0]:c,d=i(e,1)?e[1]:void 0;return s[t]=!!n&&!a((function(){if(l&&!r)return!0;var t={length:-1};l?o(t,1,{enumerable:!0,get:c}):t[1]=1,n.call(t,u,d)}))}},5353:function(t,e,n){},6933:function(t,e,n){"use strict";n("d5aa")},"70a4":function(t,e,n){"use strict";n("5353")},"7b23":function(t,e,n){var r=n("9b21"),a=n("3f63"),i=n("3642"),o=n("ad3e"),s=n("9610"),c=[].push,l=function(t){var e=1==t,n=2==t,l=3==t,u=4==t,d=6==t,f=7==t,p=5==t||d;return function(m,b,v,g){for(var h,x,E=i(m),O=a(E),y=r(b,v,3),S=o(O.length),w=0,j=g||s,_=e?j(m,S):n||f?j(m,0):void 0;S>w;w++)if((p||w in O)&&(h=O[w],x=y(h,w,E),t))if(e)_[w]=x;else if(x)switch(t){case 3:return!0;case 5:return h;case 6:return w;case 2:c.call(_,h)}else switch(t){case 4:return!1;case 7:c.call(_,h)}return d?-1:l||u?u:_}};t.exports={forEach:l(0),map:l(1),filter:l(2),some:l(3),every:l(4),find:l(5),findIndex:l(6),filterOut:l(7)}},"7cf1":function(t,e,n){var r=n("3642"),a=Math.floor,i="".replace,o=/\$([$&'`]|\d\d?|<[^>]*>)/g,s=/\$([$&'`]|\d\d?)/g;t.exports=function(t,e,n,c,l,u){var d=n+t.length,f=c.length,p=s;return void 0!==l&&(l=r(l),p=o),i.call(u,p,(function(r,i){var o;switch(i.charAt(0)){case"$":return"$";case"&":return t;case"`":return e.slice(0,n);case"'":return e.slice(d);case"<":o=l[i.slice(1,-1)];break;default:var s=+i;if(0===s)return r;if(s>f){var u=a(s/10);return 0===u?r:u<=f?void 0===c[u-1]?i.charAt(1):c[u-1]+i.charAt(1):r}o=c[s-1]}return void 0===o?"":o}))}},"85a2":function(t,e,n){var r=n("9fd9"),a=n("9bdd"),i=n("d26e"),o=n("d0f9");for(var s in a){var c=r[s],l=c&&c.prototype;if(l&&l.forEach!==i)try{o(l,"forEach",i)}catch(u){l.forEach=i}}},8601:function(t,e,n){"use strict";var r=n("b591"),a=n("d26e");r({target:"Array",proto:!0,forced:[].forEach!=a},{forEach:a})},9610:function(t,e,n){var r=n("abdd"),a=n("fedf"),i=n("ec84"),o=i("species");t.exports=function(t,e){var n;return a(t)&&(n=t.constructor,"function"!=typeof n||n!==Array&&!a(n.prototype)?r(n)&&(n=n[o],null===n&&(n=void 0)):n=void 0),new(void 0===n?Array:n)(0===e?0:e)}},"9bdd":function(t,e){t.exports={CSSRuleList:0,CSSStyleDeclaration:0,CSSValueList:0,ClientRectList:0,DOMRectList:0,DOMStringList:0,DOMTokenList:1,DataTransferItemList:0,FileList:0,HTMLAllCollection:0,HTMLCollection:0,HTMLFormElement:0,HTMLSelectElement:0,MediaList:0,MimeTypeArray:0,NamedNodeMap:0,NodeList:1,PaintRequestList:0,Plugin:0,PluginArray:0,SVGLengthList:0,SVGNumberList:0,SVGPathSegList:0,SVGPointList:0,SVGStringList:0,SVGTransformList:0,SourceBufferList:0,StyleSheetList:0,TextTrackCueList:0,TextTrackList:0,TouchList:0}},acdf:function(t,e,n){"use strict";n("c12e");var r=n("91f2"),a=n("a2e9"),i=n("ec84"),o=n("36dc"),s=n("d0f9"),c=i("species"),l=!a((function(){var t=/./;return t.exec=function(){var t=[];return t.groups={a:"7"},t},"7"!=="".replace(t,"$<a>")})),u=function(){return"$0"==="a".replace(/./,"$0")}(),d=i("replace"),f=function(){return!!/./[d]&&""===/./[d]("a","$0")}(),p=!a((function(){var t=/(?:)/,e=t.exec;t.exec=function(){return e.apply(this,arguments)};var n="ab".split(t);return 2!==n.length||"a"!==n[0]||"b"!==n[1]}));t.exports=function(t,e,n,d){var m=i(t),b=!a((function(){var e={};return e[m]=function(){return 7},7!=""[t](e)})),v=b&&!a((function(){var e=!1,n=/a/;return"split"===t&&(n={},n.constructor={},n.constructor[c]=function(){return n},n.flags="",n[m]=/./[m]),n.exec=function(){return e=!0,null},n[m](""),!e}));if(!b||!v||"replace"===t&&(!l||!u||f)||"split"===t&&!p){var g=/./[m],h=n(m,""[t],(function(t,e,n,r,a){return e.exec===o?b&&!a?{done:!0,value:g.call(e,n,r)}:{done:!0,value:t.call(n,e,r)}:{done:!1}}),{REPLACE_KEEPS_$0:u,REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE:f}),x=h[0],E=h[1];r(String.prototype,t,x),r(RegExp.prototype,m,2==e?function(t,e){return E.call(t,this,e)}:function(t){return E.call(t,this)})}d&&s(RegExp.prototype[m],"sham",!0)}},b4e3:function(t,e,n){},b520:function(t,e,n){"use strict";var r=n("2479").charAt;t.exports=function(t,e,n){return e+(n?r(t,e).length:1)}},b66b:function(t,e,n){"use strict";var r=n("acdf"),a=n("264b"),i=n("ad3e"),o=n("5c02"),s=n("31c4"),c=n("b520"),l=n("7cf1"),u=n("f261"),d=Math.max,f=Math.min,p=function(t){return void 0===t?t:String(t)};r("replace",2,(function(t,e,n,r){var m=r.REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE,b=r.REPLACE_KEEPS_$0,v=m?"$":"$0";return[function(n,r){var a=s(this),i=void 0==n?void 0:n[t];return void 0!==i?i.call(n,a,r):e.call(String(a),n,r)},function(t,r){if(!m&&b||"string"===typeof r&&-1===r.indexOf(v)){var s=n(e,t,this,r);if(s.done)return s.value}var g=a(t),h=String(this),x="function"===typeof r;x||(r=String(r));var E=g.global;if(E){var O=g.unicode;g.lastIndex=0}var y=[];while(1){var S=u(g,h);if(null===S)break;if(y.push(S),!E)break;var w=String(S[0]);""===w&&(g.lastIndex=c(h,i(g.lastIndex),O))}for(var j="",_=0,k=0;k<y.length;k++){S=y[k];for(var C=String(S[0]),$=d(f(o(S.index),h.length),0),A=[],L=1;L<S.length;L++)A.push(p(S[L]));var T=S.groups;if(x){var R=[C].concat(A,$,h);void 0!==T&&R.push(T);var I=String(r.apply(void 0,R))}else I=l(C,h,$,A,T,r);$>=_&&(j+=h.slice(_,$)+I,_=$+C.length)}return j+h.slice(_)}]}))},b7d4:function(t,e,n){"use strict";n("b4e3")},c12e:function(t,e,n){"use strict";var r=n("b591"),a=n("36dc");r({target:"RegExp",proto:!0,forced:/./.exec!==a},{exec:a})},c1f7:function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"layout-index"},[n("div",{staticClass:"header"},[n("v-header")],1),n("div",{staticClass:"content"},[n("div",{staticClass:"content-body"},[n("router-view")],1)])])},a=[],i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"body"},[n("div",{staticClass:"nav"},[n("div",{staticClass:"logo"},[n("i",{staticClass:"logo-icon"},[t._v("BIT")]),t._v(" WELCOME, "+t._s(t.username)+" ")]),n("div",{staticClass:"tools"},[n("to-edit-account"),"admin"==t.username?n("to-add-account"):t._e(),"admin"==t.username?n("edit-user-list"):t._e(),n("span",{staticClass:"tools-item",on:{click:t.quik}},[n("i",{staticClass:"el-icon-error"}),t._v("退出")])],1)])])},o=[],s=(n("c12e"),n("b66b"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("span",[n("span",{staticClass:"tools-item",on:{click:t.toEditAccount}},[n("i",{staticClass:"el-icon-edit"}),t._v("修改账号信息")]),n("el-dialog",{attrs:{title:"修改账号信息",visible:t.dialogVisible,"append-to-body":"",width:"500px"},on:{"update:visible":function(e){t.dialogVisible=e}}},[n("el-form",{ref:"ruleForm",attrs:{"label-width":"80px",model:t.formObj}},["admin"==t.username?n("el-form-item",{attrs:{label:"用户名"}},[n("el-input",{model:{value:t.formObj.username,callback:function(e){t.$set(t.formObj,"username",e)},expression:"formObj.username"}})],1):t._e(),n("el-form-item",{attrs:{label:"密码"}},[n("el-input",{model:{value:t.formObj.password,callback:function(e){t.$set(t.formObj,"password",e)},expression:"formObj.password"}})],1),"admin"==t.username?n("el-form-item",{attrs:{label:"币商"}},[n("el-input",{model:{value:t.formObj.nickname,callback:function(e){t.$set(t.formObj,"nickname",e)},expression:"formObj.nickname"}})],1):t._e()],1),n("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[n("el-button",{attrs:{disabled:t.loading},on:{click:function(e){t.dialogVisible=!1}}},[t._v("取 消")]),n("el-button",{attrs:{type:"primary",disabled:t.loading},on:{click:t.update}},[t._v("保 存")])],1)],1)],1)}),c=[],l=n("c24f"),u={mounted:function(){},data:function(){return{loading:!1,dialogVisible:!1,formObj:{password:"",nickname:"",username:""}}},methods:{toEditAccount:function(){this.dialogVisible=!0},update:function(){var t=this;this.$refs.ruleForm.validate((function(e){e&&t.apiUpdate()}))},formatStr:function(t){return t.replace(/\s/g,"")},apiUpdate:function(){var t=this;this.loading=!0;var e=new FormData;""!=this.formatStr(this.formObj.password)&&e.append("password",this.formObj.password),""!=this.formatStr(this.formObj.nickname)&&e.append("nickname",this.formObj.nickname),e.append("username",this.formObj.username||this.username),l["a"].updateuser(e).then((function(e){if(1==e.data.status){for(var n in t.$message({message:"账号已更新",type:"success"}),t.$store.commit("SET_NICKNAME",t.formObj.nickname),t.formObj)t.formObj[n]="";t.loading=!1,t.dialogVisible=!1}else t.$message({message:e.data.msg,type:"warning"}),t.loading=!1})).catch((function(e){t.$message({message:"账号更新失败",type:"warning"}),t.loading=!1}))}},computed:{username:function(){return this.$store.getters.GTE_USERNAME}}},d=u,f=(n("70a4"),n("5d22")),p=Object(f["a"])(d,s,c,!1,null,"31e8c978",null),m=p.exports,b=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("span",[n("span",{staticClass:"tools-item",on:{click:t.toEditAccount}},[n("i",{staticClass:"el-icon-plus"}),t._v("新增账号")]),n("el-dialog",{attrs:{title:"新增账号",visible:t.dialogVisible,"append-to-body":"",width:"500px"},on:{"update:visible":function(e){t.dialogVisible=e}}},[n("el-form",{ref:"ruleForm",attrs:{"label-width":"80px",model:t.formObj,rules:t.rules}},[n("el-form-item",{attrs:{label:"账号",prop:"username"}},[n("el-input",{model:{value:t.formObj.username,callback:function(e){t.$set(t.formObj,"username",e)},expression:"formObj.username"}})],1),n("el-form-item",{attrs:{label:"密码",prop:"password"}},[n("el-input",{model:{value:t.formObj.password,callback:function(e){t.$set(t.formObj,"password",e)},expression:"formObj.password"}})],1),n("el-form-item",{attrs:{label:"币商"}},[n("el-input",{model:{value:t.formObj.nickname,callback:function(e){t.$set(t.formObj,"nickname",e)},expression:"formObj.nickname"}})],1)],1),n("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[n("el-button",{attrs:{disabled:t.loading},on:{click:function(e){t.dialogVisible=!1}}},[t._v("取 消")]),n("el-button",{attrs:{type:"primary",disabled:t.loading},on:{click:t.save}},[t._v("保 存")])],1)],1)],1)},v=[],g={mounted:function(){},data:function(){return{dialogVisible:!1,loading:!1,formObj:{username:"",password:"",nickname:""},rules:{username:[{required:!0,message:"请输入账号",trigger:"blur"}],password:[{required:!0,message:"请输入密码",trigger:"blur"}]}}},methods:{toEditAccount:function(){this.dialogVisible=!0},save:function(){var t=this;this.$refs.ruleForm.validate((function(e){e&&t.apiSave()}))},apiSave:function(){var t=this;this.loading=!0;var e=new FormData;e.append("username",this.formObj.username),e.append("password",this.formObj.password),e.append("nickname",this.formObj.nickname),l["a"].adduser(e).then((function(e){if(1==e.data.status){for(var n in t.$message({message:"账号已添加",type:"success"}),t.formObj)t.formObj[n]="";t.loading=!1,t.dialogVisible=!1}})).catch((function(e){t.$message({message:"添加失败",type:"warning"}),t.loading=!1}))}},computed:{}},h=g,x=Object(f["a"])(h,b,v,!1,null,"f97b15f4",null),E=x.exports,O=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("span",[n("span",{staticClass:"tools-item",on:{click:t.openUserList}},[t._v("账号管理")]),n("el-dialog",{attrs:{title:"账号列表",visible:t.dialogVisible,"append-to-body":"",width:"500px"},on:{"update:visible":function(e){t.dialogVisible=e}}},[n("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],staticStyle:{width:"100%"},attrs:{data:t.tableData,border:""}},[n("el-table-column",{attrs:{label:"用户名",prop:"username"}}),n("el-table-column",{attrs:{label:"所属币商",prop:"nickname"}}),n("el-table-column",{attrs:{label:"操作"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("el-button",{attrs:{type:"danger",icon:"el-icon-delete"},on:{click:function(n){return t.dropuser(e.row.username)}}},[t._v("删除")])]}}])})],1),n("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[n("el-button",{attrs:{disabled:t.loading},on:{click:function(e){t.dialogVisible=!1}}},[t._v("关 闭")])],1)],1)],1)},y=[],S=(n("8601"),n("85a2"),{mounted:function(){},data:function(){return{dialogVisible:!1,loading:!1,tableData:[]}},methods:{dropuser:function(t){var e=this;this.$confirm("删除后不可恢复，确定删除?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){var n=new FormData;n.append("username",t),e.loading=!0,l["a"].dropuser(n).then((function(t){e.loading=!1,e.$message({message:"删除成功",type:"success"}),e.openUserList()})).catch((function(t){e.loading=!1,e.$message({message:t.msg,type:"warning"})}))}))},openUserList:function(){var t=this;this.dialogVisible=!0,this.loading=!0,l["a"].getuserlist().then((function(e){var n=[];e.data.users.forEach((function(t){"admin"!=t.username&&n.push(t)})),t.tableData=n,t.loading=!1}))}},computed:{}}),w=S,j=Object(f["a"])(w,O,y,!1,null,"add4a23e",null),_=j.exports,k={components:{toEditAccount:m,toAddAccount:E,editUserList:_},mounted:function(){},data:function(){return{}},methods:{quik:function(){this.$store.commit("SET_NICKNAME",""),this.$router.replace({name:"login"})}},computed:{username:function(){return this.$store.getters.GTE_USERNAME}}},C=k,$=(n("c886a"),n("b7d4"),Object(f["a"])(C,i,o,!1,null,"1db41476",null)),A=$.exports,L={name:"layout-index",components:{vHeader:A},mounted:function(){}},T=L,R=(n("6933"),Object(f["a"])(T,r,a,!1,null,"1923f109",null));e["default"]=R.exports},c24f:function(t,e,n){"use strict";var r=n("a7fe");e["a"]={login:function(t){return Object(r["a"])({url:"/otc/user/get",method:"post",data:t})},adduser:function(t){return Object(r["a"])({url:"/otc/user/set",method:"post",data:t})},updateuser:function(t){return Object(r["a"])({url:"/otc/user/update",method:"post",data:t})},getuserlist:function(t){return Object(r["a"])({url:"/otc/user/list",method:"post",data:t})},dropuser:function(t){return Object(r["a"])({url:"/otc/user/delete",method:"post",data:t})}}},c886a:function(t,e,n){"use strict";n("2252")},d26e:function(t,e,n){"use strict";var r=n("7b23").forEach,a=n("016e"),i=n("4b7d"),o=a("forEach"),s=i("forEach");t.exports=o&&s?[].forEach:function(t){return r(this,t,arguments.length>1?arguments[1]:void 0)}},d5aa:function(t,e,n){},f261:function(t,e,n){var r=n("d9a5"),a=n("36dc");t.exports=function(t,e){var n=t.exec;if("function"===typeof n){var i=n.call(t,e);if("object"!==typeof i)throw TypeError("RegExp exec method returned something other than an Object or null");return i}if("RegExp"!==r(t))throw TypeError("RegExp#exec called on incompatible receiver");return a.call(t,e)}},fedf:function(t,e,n){var r=n("d9a5");t.exports=Array.isArray||function(t){return"Array"==r(t)}}}]);