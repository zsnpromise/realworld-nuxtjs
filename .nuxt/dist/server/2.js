exports.ids = [2];
exports.modules = {

/***/ 27:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return getArticles; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return getFeedArticles; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return setFavorite; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return delFavorite; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return getArticle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return getComments; });
/* harmony import */ var _plugins_request_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5);
 // 列表

const getArticles = params => Object(_plugins_request_js__WEBPACK_IMPORTED_MODULE_0__[/* request */ "b"])({
  url: '/api/articles',
  method: 'get',
  params
}); // 用户自己列表

const getFeedArticles = params => Object(_plugins_request_js__WEBPACK_IMPORTED_MODULE_0__[/* request */ "b"])({
  url: '/api/articles/feed',
  method: 'get',
  params
}); // 点赞

const setFavorite = slug => Object(_plugins_request_js__WEBPACK_IMPORTED_MODULE_0__[/* request */ "b"])({
  url: `/api/articles/${slug}/favorite`,
  method: 'post'
}); // 去除点赞

const delFavorite = slug => Object(_plugins_request_js__WEBPACK_IMPORTED_MODULE_0__[/* request */ "b"])({
  url: `/api/articles/${slug}/favorite`,
  method: 'delete'
}); // 详情

const getArticle = slug => Object(_plugins_request_js__WEBPACK_IMPORTED_MODULE_0__[/* request */ "b"])({
  url: `/api/articles/${slug}`,
  method: 'get'
}); // 详情

const getComments = slug => Object(_plugins_request_js__WEBPACK_IMPORTED_MODULE_0__[/* request */ "b"])({
  url: `/api/articles/${slug}/comments`,
  method: 'get'
});

/***/ }),

/***/ 29:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./pages/home/index.vue?vue&type=template&id=f0db94ac&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"home-page"},[_vm._ssrNode("<div class=\"banner\"><div class=\"container\"><h1 class=\"logo-font\">conduit</h1> <p>A place to share your knowledge.</p></div></div> "),_vm._ssrNode("<div class=\"container page\">","</div>",[_vm._ssrNode("<div class=\"row\">","</div>",[_vm._ssrNode("<div class=\"col-md-9\">","</div>",[_vm._ssrNode("<div class=\"feed-toggle\">","</div>",[_vm._ssrNode("<ul class=\"nav nav-pills outline-active\">","</ul>",[_vm._ssrNode("<li class=\"nav-item\">","</li>",[_c('nuxt-link',{staticClass:"nav-link",class:{active: _vm.tab === 'y_feed'},attrs:{"exact":"","to":{name: 'home', query: {tab: 'y_feed'}}}},[_vm._v("Your Feed")])],1),_vm._ssrNode(" "),_vm._ssrNode("<li class=\"nav-item\">","</li>",[_c('nuxt-link',{staticClass:"nav-link",class:{active: _vm.tab === 'g_feed'},attrs:{"exact":"","to":{name: 'home', query: {tab: 'g_feed'}}}},[_vm._v("Global Feed")])],1),_vm._ssrNode(" "),(_vm.tab === 'tag')?_vm._ssrNode("<li class=\"nav-item\">","</li>",[_c('nuxt-link',{staticClass:"nav-link",class:{active: _vm.tab === 'tag'},attrs:{"exact":"","to":{name: 'home', query: {tab: 'tag'}}}},[_vm._v("#"+_vm._s(_vm.tag))])],1):_vm._e()],2)]),_vm._ssrNode(" "),_vm._l((_vm.articles),function(item){return _vm._ssrNode("<div class=\"article-preview\">","</div>",[_vm._ssrNode("<div class=\"article-meta\">","</div>",[_c('nuxt-link',{attrs:{"to":{
              name: 'profile',
              params: {username: item.author.username}
            }}},[_c('img',{attrs:{"src":item.author.image}})]),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"author\">","</div>",[_c('nuxt-link',{attrs:{"to":{
                name: 'profile',
                params: {username: item.author.username}
              }}},[_vm._v("\n                "+_vm._s(item.author.username)+"\n              ")]),_vm._ssrNode(" <span class=\"date\">"+_vm._ssrEscape(_vm._s(_vm._f("time")(item.createdAt,'MMM DD,YYYY')))+"</span>")],2),_vm._ssrNode(" <button"+(_vm._ssrAttr("disabled",item.isBtn))+(_vm._ssrClass("btn btn-outline-primary btn-sm pull-xs-right",{active: item.favorited}))+"><i"+(_vm._ssrClass("ion-heart",{active: item.favorited}))+"></i>"+_vm._ssrEscape(" "+_vm._s(item.favoritesCount)+"\n            ")+"</button>")],2),_vm._ssrNode(" "),_c('nuxt-link',{staticClass:"preview-link",attrs:{"to":{name: 'articleDetial', params: {slug: item.slug}}}},[_c('h1',[_vm._v(_vm._s(item.title))]),_vm._v(" "),_c('p',[_vm._v(_vm._s(item.description))]),_vm._v(" "),_c('span',[_vm._v("Read more...")])])],2)}),_vm._ssrNode(" "),_vm._ssrNode("<nav>","</nav>",[_vm._ssrNode("<ul class=\"pagination\">","</ul>",_vm._l((_vm.totalPage),function(item){return _vm._ssrNode("<li"+(_vm._ssrClass("page-item ",{active: _vm.page === item}))+">","</li>",[_c('nuxt-link',{staticClass:"page-link ng-binding",attrs:{"to":{path: '/', query: {page: item, tag: _vm.tag, tab: _vm.tab}}}},[_vm._v(_vm._s(item))])],1)}),0)])],2),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"col-md-3\">","</div>",[_vm._ssrNode("<div class=\"sidebar\">","</div>",[_vm._ssrNode("<p>Popular Tags</p> "),_vm._ssrNode("<div class=\"tag-list\">","</div>",_vm._l((_vm.tags),function(item,index){return _c('nuxt-link',{key:index,staticClass:"tag-pill tag-default",attrs:{"to":{name: 'home', query: {tag: item, tab: 'tag'}}}},[_vm._v(_vm._s(item))])}),1)],2)])],2)])],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/home/index.vue?vue&type=template&id=f0db94ac&

// EXTERNAL MODULE: ./api/articles.js
var articles = __webpack_require__(27);

// EXTERNAL MODULE: ./plugins/request.js
var request = __webpack_require__(5);

// CONCATENATED MODULE: ./api/tag.js
 // 标签

const getTags = params => Object(request["b" /* request */])({
  url: '/api/tags',
  method: 'get'
});
// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/home/index.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ var homevue_type_script_lang_js_ = ({
  name: 'home',
  watchQuery: ['page', 'tag', 'tab'],

  async asyncData({
    query,
    store
  }) {
    let tab = query.tab || 'g_feed';
    let tag = query.tag;
    let page = parseInt(query.page || 1);
    let limit = 20;
    let loadArticles = store.state.user && tab === 'y_feed' ? articles["e" /* getFeedArticles */] : articles["c" /* getArticles */];
    let [{
      data
    }, {
      data: tags
    }] = await Promise.all([loadArticles({
      limit,
      tag,
      offset: limit * (page - 1)
    }), getTags()]);
    data.articles.forEach(item => {
      item.isBtn = false;
    });
    return {
      articles: data.articles,
      articlesCount: data.articlesCount,
      page,
      limit,
      tags: tags.tags,
      tab,
      tag
    };
  },

  computed: {
    totalPage() {
      return Math.ceil(this.articlesCount / this.limit);
    }

  },
  methods: {
    async favorite(article) {
      console.log(article);
      article.isBtn = true;

      if (article.favorited) {
        await Object(articles["a" /* delFavorite */])(article.slug);
        article.favorited = false;
        article.favoritesCount -= 1;
      } else {
        await Object(articles["f" /* setFavorite */])(article.slug);
        article.favorited = true;
        article.favoritesCount += 1;
      }

      article.isBtn = false;
    }

  }
});
// CONCATENATED MODULE: ./pages/home/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_homevue_type_script_lang_js_ = (homevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./pages/home/index.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_homevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "f10ebeec"
  
)

/* harmony default export */ var home = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=2.js.map