webpackJsonp([0],{DXyP:function(t,i){},POBk:function(t,i,a){"use strict";Object.defineProperty(i,"__esModule",{value:!0});var e={name:"Discover",components:{Title:a("Pexp").a},data:function(){return{}},computed:{userdata:function(){return this.$store.state.userdata}}},s={render:function(){var t=this.$createElement,i=this._self._c||t;return i("div",{staticClass:"discover"},[i("Title",{attrs:{title:"发现"}})],1)},staticRenderFns:[]};var n=a("VU/8")(e,s,!1,function(t){a("gg3t")},"data-v-37604e44",null);i.default=n.exports},Pexp:function(t,i,a){"use strict";var e={render:function(){var t=this,i=t.$createElement,a=t._self._c||i;return a("div",{staticClass:"flex-row width-100"},[a("div",{staticClass:"f-20 f-w"},[t._v(t._s(this.$route.meta.title))]),t._v(" "),a("div",{staticClass:"margin-left-15 margin-right-15 flex-1 flex-row search f-15",on:{click:t.search}},[a("i",{staticClass:"iconfont icon-search"}),t._v(" "),a("span",{staticClass:"color-9"},[t._v("搜索")])]),t._v(" "),a("i",{staticClass:"f-30 iconfont icon-tinggeshiqu",on:{click:t.tingGeShiQu}})])},staticRenderFns:[]};var s=a("VU/8")({name:"Title",data:function(){return{searchvalue:""}},methods:{search:function(){this.$store.commit("updateSearch",!0)},tingGeShiQu:function(){}}},e,!1,function(t){a("i7Nj")},"data-v-4ec8f5dc",null);i.a=s.exports},gg3t:function(t,i){},i7Nj:function(t,i){},s9WY:function(t,i){},zKIK:function(t,i,a){"use strict";Object.defineProperty(i,"__esModule",{value:!0});var e=a("Au9i"),s=a("Pexp"),n={name:"Card",data:function(){return{}},props:{title:"",datalist:{type:Object,default:function(){return{}}},imgStyle:{type:Object,default:function(){return{width:"90px",height:"90px"}}}},mounted:function(){}},c={render:function(){var t=this,i=t.$createElement,a=t._self._c||i;return a("div",{staticClass:"width-100 margin-top-15"},[a("div",{staticClass:"flex-row"},[a("div",{staticClass:"f-20 f-w"},[t._v(t._s(t.title))]),t._v(" "),t._m(0)]),t._v(" "),a("div",{staticClass:"item-box"},t._l(t.datalist.items,function(i,e){return a("div",{key:e,staticClass:"item margin-left-15 margin-top-5",style:t.imgStyle},[a("div",{staticStyle:{position:"relative"}},[a("img",{attrs:{src:i.img,alt:""}}),t._v(" "),a("div",{staticClass:"play"},[a("i",{staticClass:"iconfont icon-play1 f-10"}),t._v(" "),a("span",[t._v(t._s(i.numbers))])])]),t._v(" "),a("div",{staticClass:"f-12 ttt"},[t._v(t._s(i.title))])])}),0)])},staticRenderFns:[function(){var t=this.$createElement,i=this._self._c||t;return i("div",{staticClass:"f-10 flex-1 text-right"},[i("span",[this._v("更多")]),this._v(" "),i("i",{staticClass:"iconfont icon-arrowRight f-10"})])}]};var r=a("VU/8")(n,c,!1,function(t){a("DXyP")},"data-v-666f6ac6",null).exports,o={name:"Home",props:{base:""},data:function(){return{baseData:{},ics:[{icon:"icon-flyme_icon-",text:"歌手"},{icon:"icon-msnui-chart",text:"排行"},{icon:"icon-leimupinleifenleileibie",text:"分类歌单"},{icon:"icon-diantai",text:"电台"},{icon:"icon-huabankaobei-",text:"一起听"}],flzqStyle:{width:"200px",height:"90px"},value:"",autofocus:!0}},computed:{userdata:function(){return this.$store.state.userdata},search:function(){return this.$store.state.search}},components:{Title:s.a,Card:r},methods:{getInitData:function(){var t=this;this.$fetch({url:"webapi/home/initData"}).then(function(i){t.baseData=i.data}).catch(function(t){Object(e.Toast)(t.msg)})},handleSearch:function(){var t=this;this.value?this.$fetch({url:"api/getSongList",data:{keyword:this.value}}).then(function(i){var a=i.data.info.map(function(t){return{songname:t.songname,singer:t.singername,albumname:t.album_name}});t.$store.commit("updateSongList",a),t.$store.commit("updateSearch",!1),t.$store.commit("updateOrigin","酷狗音乐"),t.$router.push("/songs")}).catch(function(t){console.log(t)}):this.getRankList()},getRecommend:function(){var t=this;this.$fetch({url:"api/getDiscList"}).then(function(i){var a=i.songlist.map(function(t){var i=t.data.albumid||"",a=i.toString().length,e=i.toString().slice(a-2);return e=0==e.indexOf("0")?e.slice(1):e,{songname:t.data.songname,singer:t.data.singer[0].name,albumname:t.data.albumname,img:"http://imgcache.qq.com/music/photo/album_300/"+e+"/300_albumpic_"+t.data.albumid+"_0.jpg"}});t.$store.commit("updateSongList",a),t.$store.commit("updateOrigin","qq音乐"),t.$router.push("/songs")}).catch(function(t){console.log(t)})},getRankList:function(){var t=this;this.$fetch({url:"api/getRankList"}).then(function(i){var a=i.songlist.map(function(t){var i=t.data.albumid||"",a=i.toString().length,e=i.toString().slice(a-2);return e=0==e.indexOf("0")?e.slice(1):e,{songname:t.data.songname,singer:t.data.singer[0].name,albumname:t.data.albumname,img:"http://imgcache.qq.com/music/photo/album_300/"+e+"/300_albumpic_"+t.data.albumid+"_0.jpg"}});t.$store.commit("updateSongList",a),t.$store.commit("updateOrigin","qq音乐"),t.$router.push("/songs")}).catch(function(t){console.log(t)})}},mounted:function(){this.getInitData()}},l={render:function(){var t=this,i=t.$createElement,a=t._self._c||i;return a("div",{staticClass:"content bg-theme width-100 height-100"},[a("Title"),t._v(" "),a("div",{staticClass:"flex-column width-100"},[a("mt-swipe",{staticClass:"width-100 margin-top-15",staticStyle:{height:"150px"},attrs:{auto:4e3}},t._l(t.baseData.imgs,function(t,i){return a("mt-swipe-item",{key:i},[a("img",{attrs:{src:t,alt:""}})])}),1),t._v(" "),a("div",{staticClass:"margin-top-15 ics width-100"},t._l(t.ics,function(i,e){return a("div",{key:e,on:{click:t.getRankList}},[a("i",{class:[i.icon,"iconfont","f-30"],staticStyle:{color:"rgb(214, 138, 67)"}}),t._v(" "),a("div",{staticClass:"f-15"},[t._v(t._s(i.text))])])}),0),t._v(" "),a("div",{staticClass:"flex-row margin-top-15 width-100"},[a("div",{staticClass:"diantai",on:{click:t.getRecommend}},[a("i",{staticClass:"iconfont icon-play1 f-30 color-f"}),t._v(" "),a("div",{staticClass:"f-15 color-f"},[t._v("个性电台")])]),t._v(" "),a("div",{staticClass:" flex-1 margin-left-30"},t._l(t.baseData.gexingdiantai,function(i,e){return a("div",{key:e,staticClass:"gxdt width-100 flex-row margin-top-5"},[a("div",{staticClass:"flex-1 padding-5"},[a("div",{staticClass:"f-15 text-left"},[t._v(t._s(i.title))]),t._v(" "),a("div",{staticClass:"f-12 text-left"},[t._v(t._s(i.text))])]),t._v(" "),a("div",{staticStyle:{width:"40px",height:"45px"}},[a("img",{attrs:{src:i.img,alt:""}})])])}),0)]),t._v(" "),a("Card",{attrs:{title:"为你推荐歌单",datalist:t.baseData.tjgd}}),t._v(" "),a("Card",{attrs:{title:"精选视频",datalist:t.baseData.flzq,imgStyle:t.flzqStyle}}),t._v(" "),t.userdata.is_login?a("div",{staticClass:"dingzhi width-100 f-15 margin-top-30"},[a("div",[t._v("Hi, "+t._s(t.userdata.username))]),t._v(" "),t._m(0),t._v(" "),t._l(t.userdata.dingzhi,function(i,e){return a("div",{key:e,staticClass:"width-100 flex-row margin-top-10"},[a("img",{attrs:{src:i.img,alt:""}}),t._v(" "),a("div",{staticClass:"flex-1 text-center"},[t._v(t._s(i.title))])])})],2):t._e()],1),t._v(" "),t.search?a("div",{staticClass:"search padding-top-30"},[a("mt-search",{attrs:{"cancel-text":"取消",placeholder:"搜索歌曲/歌手/歌词/专辑等",autofocus:t.autofocus},nativeOn:{keyup:function(i){return!i.type.indexOf("key")&&t._k(i.keyCode,"enter",13,i.key,"Enter")?null:t.handleSearch(i)}},model:{value:t.value,callback:function(i){t.value=i},expression:"value"}})],1):t._e()],1)},staticRenderFns:[function(){var t=this.$createElement,i=this._self._c||t;return i("div",{staticClass:"flex-row width-100 margin-top-15"},[i("div",{staticClass:"line margin-right-15"}),this._v(" "),i("div",[this._v("你的专属定制")]),this._v(" "),i("div",{staticClass:"line margin-left-15"})])}]};var u=a("VU/8")(o,l,!1,function(t){a("s9WY")},"data-v-1c1a65ab",null);i.default=u.exports}});
//# sourceMappingURL=0.3551375d81b66ea36625.js.map