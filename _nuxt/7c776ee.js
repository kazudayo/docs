(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{435:function(t,e,o){var content=o(462);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(19).default)("4b6e830a",content,!0,{sourceMap:!1})},458:function(t,e,o){var content=o(459);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(19).default)("564dbdf6",content,!0,{sourceMap:!1})},459:function(t,e,o){var r=o(18)((function(i){return i[1]}));r.push([t.i,".theme--light.v-footer{background-color:#f5f5f5;color:rgba(0,0,0,.87)}.theme--dark.v-footer{background-color:#272727;color:#fff}.v-sheet.v-footer{border-radius:0}.v-sheet.v-footer:not(.v-sheet--outlined){box-shadow:0 0 0 0 rgba(0,0,0,.2),0 0 0 0 rgba(0,0,0,.14),0 0 0 0 rgba(0,0,0,.12)}.v-sheet.v-footer.v-sheet--shaped{border-radius:16px 0}.v-footer{align-items:center;display:flex;flex:0 1 auto!important;flex-wrap:wrap;padding:6px 16px;position:relative;transition-duration:.2s;transition-property:background-color,left,right;transition-timing-function:cubic-bezier(.4,0,.2,1)}.v-footer:not([data-booted=true]){transition:none!important}.v-footer--absolute,.v-footer--fixed{z-index:3}.v-footer--absolute{position:absolute}.v-footer--absolute:not(.v-footer--inset){width:100%}.v-footer--fixed{position:fixed}.v-footer--padless{padding:0}",""]),r.locals={},t.exports=r},460:function(t,e,o){"use strict";o(284);var r=o(1);e.a=Object(r.h)("spacer","div","v-spacer")},461:function(t,e,o){"use strict";o(435)},462:function(t,e,o){var r=o(18)((function(i){return i[1]}));r.push([t.i,".footer[data-v-d719161a]{font-size:12px;padding:7px}",""]),r.locals={},t.exports=r},501:function(t,e,o){"use strict";o.r(e);o(9),o(12),o(21),o(22),o(11),o(5),o(13);var r=o(2),n=(o(39),o(282),o(458),o(157)),c=o(199),f=o(147),l=o(17),h=o(1);function d(t,e){var o=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),o.push.apply(o,r)}return o}function v(t){for(var e=1;e<arguments.length;e++){var o=null!=arguments[e]?arguments[e]:{};e%2?d(Object(o),!0).forEach((function(e){Object(r.a)(t,e,o[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(o)):d(Object(o)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(o,e))}))}return t}var m=Object(l.a)(n.a,Object(c.a)("footer",["height","inset"]),f.a).extend({name:"v-footer",props:{height:{default:"auto",type:[Number,String]},inset:Boolean,padless:Boolean,tag:{type:String,default:"footer"}},computed:{applicationProperty:function(){return this.inset?"insetFooter":"footer"},classes:function(){return v(v({},n.a.options.computed.classes.call(this)),{},{"v-footer--absolute":this.absolute,"v-footer--fixed":!this.absolute&&(this.app||this.fixed),"v-footer--padless":this.padless,"v-footer--inset":this.inset})},computedBottom:function(){if(this.isPositioned)return this.app?this.$vuetify.application.bottom:0},computedLeft:function(){if(this.isPositioned)return this.app&&this.inset?this.$vuetify.application.left:0},computedRight:function(){if(this.isPositioned)return this.app&&this.inset?this.$vuetify.application.right:0},isPositioned:function(){return Boolean(this.absolute||this.fixed||this.app)},styles:function(){var t=parseInt(this.height);return v(v({},n.a.options.computed.styles.call(this)),{},{height:isNaN(t)?t:Object(h.g)(t),left:Object(h.g)(this.computedLeft),right:Object(h.g)(this.computedRight),bottom:Object(h.g)(this.computedBottom)})}},methods:{updateApplication:function(){var t=parseInt(this.height);return isNaN(t)?this.$el?this.$el.clientHeight:0:t}},render:function(t){var data=this.setBackgroundColor(this.color,{staticClass:"v-footer",class:this.classes,style:this.styles});return t(this.tag,data,Object(h.m)(this))}}),O=o(460),x={name:"HomeFooter"},y=(o(461),o(60)),component=Object(y.a)(x,(function(){var t=this,e=t._self._c;return e(m,{staticClass:"footer",attrs:{dark:"",fixed:"",color:"#323232",app:""}},[e("a",{staticClass:"white--text text-decoration-none",attrs:{href:"https://www.kawai.co.jp/privacy/"}},[t._v(" 個人情報保護方針について ")]),t._v(" "),e(O.a),t._v(" "),e("strong",{staticClass:"text-right"},[t._v("© Kawai Musical Instruments Mfg. Co., Ltd. All Rights Reserved.")])],1)}),[],!1,null,"d719161a",null);e.default=component.exports}}]);