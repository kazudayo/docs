(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{411:function(t,e,n){var content=n(435);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(38).default)("01b2f09b",content,!0,{sourceMap:!1})},434:function(t,e,n){"use strict";n(411)},435:function(t,e,n){var r=n(37)((function(i){return i[1]}));r.push([t.i,"@media screen and (min-width:505px) and (max-width:1265px){.main{margin-top:65px;padding-top:0!important}}@media screen and (max-width:504px){.main{margin-top:65px;padding-top:0!important}}#main-content{height:80sVh;overflow:scroll}",""]),r.locals={},t.exports=r},528:function(t,e,n){"use strict";n.r(e);var r=n(368),o=n(367),c=n(11);n(24),n(50),n(56),n(136),n(49),n(48),n(26),n(5),n(23),n(41),n(30),n(31),n(57);function l(t,e){var n="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!n){if(Array.isArray(t)||(n=function(t,e){if(!t)return;if("string"==typeof t)return m(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return m(t,e)}(t))||e&&t&&"number"==typeof t.length){n&&(t=n);var i=0,r=function(){};return{s:r,n:function(){return i>=t.length?{done:!0}:{done:!1,value:t[i++]}},e:function(t){throw t},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,c=!0,l=!1;return{s:function(){n=n.call(t)},n:function(){var t=n.next();return c=t.done,t},e:function(t){l=!0,o=t},f:function(){try{c||null==n.return||n.return()}finally{if(l)throw o}}}}function m(t,e){(null==e||e>t.length)&&(e=t.length);for(var i=0,n=new Array(e);i<e;i++)n[i]=t[i];return n}var d={layout:"PagesLayout",scrollToTop:!0,asyncData:function(t){return Object(c.a)(regeneratorRuntime.mark((function e(){var n,r,o;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.$content,r=localStorage.getItem("model"),e.next=4,n("articles",{deep:!0}).where({model:r,extension:".md"}).fetch();case 4:return o=e.sent,e.abrupt("return",{mdsData:o});case 6:case"end":return e.stop()}}),e)})))()},data:function(){return{pageTitle:"",mds:"",commonMds:"",md:""}},fetch:function(){var t=this;return Object(c.a)(regeneratorRuntime.mark((function e(){var n,r,o,c,i,section,m;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$content("articles",{deep:!0}).where({model:t.$route.params.model,extension:".md"}).fetch();case 2:return t.mds=e.sent,e.next=5,t.$content("articles",{deep:!0}).where({model:"common",extension:".md"}).fetch();case 5:if(t.commonMds=e.sent,localStorage.getItem("pageTitle")){r=localStorage.getItem("pageTitle"),o=l(t.commonMds);try{for(o.s();!(c=o.n()).done;)i=c.value,t.mds.push(i)}catch(t){o.e(t)}finally{o.f()}t.md=t.mds.find((function(data){return data.slug===r}))}else t.md=t.mds.find((function(data){return"index"===data.slug})),n=JSON.stringify(t.md.toc),localStorage.setItem("toc",n);section=localStorage.getItem("sectionTitle"),t.$route.params.page!==section&&(t.md=t.mdsData.find((function(data){return data.section===t.$route.params.page})),m=JSON.stringify(t.md.toc),localStorage.setItem("toc",m));case 9:case"end":return e.stop()}}),e)})))()},created:function(){this.setListener()},mounted:function(){localStorage.setItem("visited","true")},beforeDestroy:function(){localStorage.removeItem("visited")},methods:{countScroll:function(){document.getElementById("main-content").scrollTop=0},setListener:function(){this.$nuxt.$on("updatePageTitle",this.setPageTitle),this.$nuxt.$on("selectSameModel",this.selectSameModel)},setPageTitle:function(t){var e=this;this.countScroll(),this.pageTitle=t,localStorage.setItem("pageTitle",this.pageTitle);var n,r=l(this.commonMds);try{for(r.s();!(n=r.n()).done;){var i=n.value;this.mds.push(i)}}catch(t){r.e(t)}finally{r.f()}if(this.$route.params.page===localStorage.getItem("sectionTitle")){this.md=this.mds.find((function(data){return data.slug===e.pageTitle}));var o=JSON.stringify(this.md.toc);localStorage.setItem("toc",o)}else{var c=this.mds.find((function(data){return data.slug===e.pageTitle})),m=JSON.stringify(c.toc);localStorage.setItem("toc",m)}},selectSameModel:function(){}}},f=(n(434),n(52)),component=Object(f.a)(d,(function(){var t=this._self._c;return t(o.a,{staticClass:"main"},[t(r.a,{attrs:{id:"main-content"}},[t("nuxt-content",{attrs:{document:this.md}})],1)],1)}),[],!1,null,null,null);e.default=component.exports}}]);