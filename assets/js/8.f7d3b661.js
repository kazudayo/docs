(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{366:function(t,e,n){"use strict";n.r(e);n(76);var s={data:function(){return{toggle:!0,userName:null,password:null,errorMessag:null,content:null,userData:{name:"amei",pass:"teac"}}},mounted:function(){this.content=document.getElementById("content")},methods:{loginPages:function(){document.login_form.id.value===this.userData.name&&document.login_form.pass.value===this.userData.pass?(this.toggle=!1,this.content.style.display="block"):(this.toggle=!0,this.errorMessag="ユーザー名又はパスワードに誤りがあります。",this.content.style.display="none")},logoutPages:function(){this.toggle=!0,this.errorMessag=null,this.content.style.display="none"}}},a=n(48),o=Object(a.a)(s,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("main",[t.toggle?n("div",[n("form",{attrs:{name:"login_form"}},[n("p",{staticClass:"center"},[t._v("ユーザー名, パスワードをご入力の上, 「ログイン」ボタンをクリックしてください.")]),t._v(" "),n("div",{staticClass:"center"},[t._m(0),t._v(" "),n("br"),t._v(" "),t._m(1),t._v(" "),n("div",{staticClass:"warning-label"},[t._v(t._s(t.errorMessag))])]),t._v(" "),n("button",{attrs:{type:"button"},on:{click:function(e){return t.loginPages()}}},[t._v("ログイン")])])]):t._e(),t._v(" "),t.toggle?t._e():n("button",{attrs:{type:"button"},on:{click:function(e){return t.logoutPages()}}},[t._v("ログアウト")])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("input",{attrs:{type:"id",name:"id",placeholder:"ユーザー名"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("input",{attrs:{type:"password",name:"pass",placeholder:"パスワード"}})])}],!1,null,null,null);e.default=o.exports}}]);