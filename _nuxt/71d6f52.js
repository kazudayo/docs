(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{452:function(e,t,n){var content=n(481);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(19).default)("002f97fa",content,!0,{sourceMap:!1})},480:function(e,t,n){"use strict";n(452)},481:function(e,t,n){var o=n(18)((function(i){return i[1]}));o.push([e.i,".hoverListItem[data-v-5a7fabbe]:hover{color:red}.listItem[data-v-5a7fabbe]{border-left:solid;color:red}",""]),o.locals={},e.exports=o},508:function(e,t,n){"use strict";n.r(t);var o=n(498),r=n(497),l=n(183),c=n(185),d=n(123),f=n(89),m=n(186),h=n(423),v=n(496),y=(n(9),n(54),n(59),n(53),n(43),n(34),n(26),n(40),n(41),n(42),n(25));n(83),n(128),n(39),n(5);function S(e,t){var n="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!n){if(Array.isArray(e)||(n=function(e,t){if(!e)return;if("string"==typeof e)return w(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return w(e,t)}(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var i=0,o=function(){};return{s:o,n:function(){return i>=e.length?{done:!0}:{done:!1,value:e[i++]}},e:function(e){throw e},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var r,l=!0,c=!1;return{s:function(){n=n.call(e)},n:function(){var e=n.next();return l=e.done,e},e:function(e){c=!0,r=e},f:function(){try{l||null==n.return||n.return()}finally{if(c)throw r}}}}function w(e,t){(null==t||t>e.length)&&(t=e.length);for(var i=0,n=new Array(t);i<t;i++)n[i]=e[i];return n}var I={name:"PageLayouts",data:function(){return{drawer:null,modelName:"",pageTitle:"",sectionTitle:"",lists:[],list:"",toggleBoolean:!1,selected:null,section:null}},fetch:function(){var e=this;return Object(y.a)(regeneratorRuntime.mark((function t(){var n,o,r,l,c;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.$content("json").where({extension:".json"}).fetch();case 2:n=t.sent,o=S(n);try{for(o.s();!(r=o.n()).done;)l=r.value,e.lists.push(l)}catch(e){o.e(e)}finally{o.f()}e.modelName=e.$route.params.model,c=e.lists.find((function(data){return data.model===e.modelName})),e.list=c[e.modelName];case 8:case"end":return t.stop()}}),t)})))()},created:function(){this.setListener()},methods:{toggleDrawer:function(){this.drawer=!this.drawer},selectItem:function(e){this.pageTitle=e.markdown,localStorage.setItem("sectionTitle","".concat(e.section)),this.$nuxt.$emit("updatePageTitle",this.pageTitle),this.$router.push("/".concat(this.$route.params.model)+"/".concat(e.section)),this.toggleBoolean=!0},setListener:function(){this.$nuxt.$on("selectModel",this.setPageModel),this.$nuxt.$on("selectSameModel",this.selectSameModel)},setPageModel:function(e){var t=this.lists.find((function(data){return data.model===e.title}));this.list=t[e.title]},selectSection:function(e){this.toggleBoolean=!1,this.sectionTitle=e.text,this.sectionTitle!==localStorage.getItem("sectionTitle")&&(this.selected=null)},changeSelected:function(e){this.selected=e,localStorage.setItem("selectedId1",this.selected),localStorage.setItem("selectedId2",this.selected),this.$emit("change",this.selected)},changeSectionSelected:function(e){if(localStorage.removeItem("selectedId2"),this.section=null,this.sectionTitle===localStorage.getItem("sectionTitle")&&localStorage.getItem("pageTitle")||(this.selected=null),this.$route.params.page===e.text&&!localStorage.getItem("selectedId2")){var t=Number(localStorage.getItem("selectedId1"));this.selected=t}this.$emit("change",this.section)},selectSameModel:function(){this.$route.params.model!==localStorage.getItem("model")&&(this.section=!1)}}},x=(n(480),n(60)),component=Object(x.a)(I,(function(){var e=this,t=e._self._c;return t(v.a,[t(r.a,{staticClass:"d-lg-none pt-16 pb-0",staticStyle:{"flex-direction":"column-reverse",display:"flex"},attrs:{cols:"12",sm:"12",md:"12"}},[t("div",{staticStyle:{width:"100%",height:"40px",display:"flex","border-bottom":"solid","border-color":"#00000010"}},[t(o.a,{staticClass:"pl-12",on:{click:function(t){return t.stopPropagation(),e.toggleDrawer.apply(null,arguments)}}},[t("img",{attrs:{src:"icon/menu-icon.svg"}}),e._v(" Menu")])],1)]),e._v(" "),t(h.a,{attrs:{clipped:"",temporary:e.$vuetify.breakpoint.mdAndDown,app:""},model:{value:e.drawer,callback:function(t){e.drawer=t},expression:"drawer"}},[t(l.a,{attrs:{nav:"",dense:""}},e._l(e.list,(function(n,i){return t(c.a,{key:i,attrs:{value:e.section,"active-class":"red--text text--accent-4"},on:{change:function(t){return e.changeSectionSelected(n)},click:function(t){return e.selectSection(n)}},scopedSlots:e._u([{key:"activator",fn:function(){return[t(f.a,[t(f.b,[e._v(e._s(n.text))])],1)]},proxy:!0}],null,!0)},[e._v(" "),t(m.a,{attrs:{value:e.selected,"active-class":"listItem",mandatory:e.toggleBoolean}},e._l(n.content,(function(n,o){return t(d.a,{key:o,attrs:{ripple:!1},on:{click:function(t){return e.selectItem(n)},change:function(t){return e.changeSelected(o)}}},[t(f.a,{staticClass:"hoverListItem"},[t(f.b,{staticClass:"pl-3"},[e._v(e._s(n.text))])],1)],1)})),1)],1)})),1)],1)],1)}),[],!1,null,"5a7fabbe",null);t.default=component.exports}}]);