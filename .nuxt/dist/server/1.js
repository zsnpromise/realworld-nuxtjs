exports.ids = [1];
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

/***/ 28:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./pages/article/index.vue?vue&type=template&id=cb904544&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"article-page"},[_vm._ssrNode("<div class=\"banner\">","</div>",[_vm._ssrNode("<div class=\"container\">","</div>",[_vm._ssrNode("<h1>"+_vm._ssrEscape(_vm._s(_vm.article.title))+"</h1> "),_c('article-meta',{attrs:{"article":_vm.article}})],2)]),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"container page\">","</div>",[_vm._ssrNode("<div class=\"row article-content\"><div class=\"col-md-12\">"+(_vm._s(_vm.article.body))+"</div></div> <hr> "),_vm._ssrNode("<div class=\"article-actions\">","</div>",[_c('article-meta',{attrs:{"article":_vm.article}})],1),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"row\">","</div>",[_vm._ssrNode("<div class=\"col-xs-12 col-md-8 offset-md-2\">","</div>",[_c('article-comments',{attrs:{"article":_vm.article}})],1)])],2)],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/article/index.vue?vue&type=template&id=cb904544&

// EXTERNAL MODULE: ./api/articles.js
var articles = __webpack_require__(27);

// EXTERNAL MODULE: external "markdown-it"
var external_markdown_it_ = __webpack_require__(26);
var external_markdown_it_default = /*#__PURE__*/__webpack_require__.n(external_markdown_it_);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./pages/article/compontens/article-meta.vue?vue&type=template&id=62a489d8&
var article_metavue_type_template_id_62a489d8_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"article-meta"},[_c('nuxt-link',{attrs:{"to":{
        name: 'profile',
        params: {
            username: _vm.article.author.username
        }
    }}},[_c('img',{attrs:{"src":_vm.article.author.image}})]),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"info\">","</div>",[_c('nuxt-link',{staticClass:"author",attrs:{"to":{
              name: 'profile',
              params: {
                  username: _vm.article.author.username
              }
          }}},[_vm._v("\n          "+_vm._s(_vm.article.author.username)+"\n          ")]),_vm._ssrNode(" <span class=\"date\">"+_vm._ssrEscape(_vm._s(_vm._f("time")(_vm.article.createdAt,'MMM YYYY,DD')))+"</span>")],2),_vm._ssrNode(" <button"+(_vm._ssrClass("btn btn-sm btn-outline-secondary",{active: _vm.article.author.following}))+"><i class=\"ion-plus-round\"></i>\n        \n       Follow Eric Simons <span class=\"counter\">(10)</span></button>\n       \n     <button"+(_vm._ssrClass("btn btn-sm btn-outline-primary",{active: _vm.article.favorited}))+"><i class=\"ion-heart\"></i>\n        \n       Favorite Post <span class=\"counter\">"+_vm._ssrEscape("("+_vm._s(_vm.article.favoritesCount)+")")+"</span></button>")],2)}
var article_metavue_type_template_id_62a489d8_staticRenderFns = []


// CONCATENATED MODULE: ./pages/article/compontens/article-meta.vue?vue&type=template&id=62a489d8&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/article/compontens/article-meta.vue?vue&type=script&lang=js&
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
/* harmony default export */ var article_metavue_type_script_lang_js_ = ({
  name: 'article-meta',
  props: {
    article: {
      type: Object
    }
  }
});
// CONCATENATED MODULE: ./pages/article/compontens/article-meta.vue?vue&type=script&lang=js&
 /* harmony default export */ var compontens_article_metavue_type_script_lang_js_ = (article_metavue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./pages/article/compontens/article-meta.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  compontens_article_metavue_type_script_lang_js_,
  article_metavue_type_template_id_62a489d8_render,
  article_metavue_type_template_id_62a489d8_staticRenderFns,
  false,
  injectStyles,
  null,
  "4e4522b6"
  
)

/* harmony default export */ var article_meta = (component.exports);
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./pages/article/compontens/article-comments.vue?vue&type=template&id=10cacf2c&
var article_commentsvue_type_template_id_10cacf2c_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_vm._ssrNode("<form class=\"card comment-form\"><div class=\"card-block\"><textarea placeholder=\"Write a comment...\" rows=\"3\" class=\"form-control\"></textarea></div> <div class=\"card-footer\"><img"+(_vm._ssrAttr("src",_vm.user.image))+" class=\"comment-author-img\"> <button class=\"btn btn-sm btn-primary\">\n           Post Comment\n          </button></div></form> "),_vm._l((_vm.comments),function(item){return _vm._ssrNode("<div class=\"card\">","</div>",[_vm._ssrNode("<div class=\"card-block\"><p class=\"card-text\">"+_vm._ssrEscape(_vm._s(item.body))+"</p></div> "),_vm._ssrNode("<div class=\"card-footer\">","</div>",[_c('nuxt-link',{staticClass:"comment-author",attrs:{"to":{
                      name: 'profile',
                      params: {
                          username: item.author.username
                      }
                  }}},[_c('img',{staticClass:"comment-author-img",attrs:{"src":item.author.image}})]),_vm._ssrNode("\n\n           \n           "),_c('nuxt-link',{staticClass:"comment-author",attrs:{"to":{
                      name: 'profile',
                      params: {
                          username: item.author.username
                      }
                  }}},[_vm._v("\n                  "+_vm._s(item.author.username)+"\n          ")]),_vm._ssrNode(" <span class=\"date-posted\">"+_vm._ssrEscape(_vm._s(_vm._f("time")(item.createdAt,'MMM YYYY,DD')))+"</span>")],2)],2)})],2)}
var article_commentsvue_type_template_id_10cacf2c_staticRenderFns = []


// CONCATENATED MODULE: ./pages/article/compontens/article-comments.vue?vue&type=template&id=10cacf2c&

// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(3);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/article/compontens/article-comments.vue?vue&type=script&lang=js&
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


/* harmony default export */ var article_commentsvue_type_script_lang_js_ = ({
  name: 'article-comments',
  props: {
    article: {
      type: Object
    }
  },
  computed: { ...Object(external_vuex_["mapState"])(['user'])
  },

  data() {
    return {
      comments: []
    };
  },

  async mounted() {
    let {
      data: {
        comments
      }
    } = await Object(articles["d" /* getComments */])(this.article.slug);
    this.comments = comments;
  }

});
// CONCATENATED MODULE: ./pages/article/compontens/article-comments.vue?vue&type=script&lang=js&
 /* harmony default export */ var compontens_article_commentsvue_type_script_lang_js_ = (article_commentsvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./pages/article/compontens/article-comments.vue



function article_comments_injectStyles (context) {
  
  
}

/* normalize component */

var article_comments_component = Object(componentNormalizer["a" /* default */])(
  compontens_article_commentsvue_type_script_lang_js_,
  article_commentsvue_type_template_id_10cacf2c_render,
  article_commentsvue_type_template_id_10cacf2c_staticRenderFns,
  false,
  article_comments_injectStyles,
  null,
  "011f32b6"
  
)

/* harmony default export */ var article_comments = (article_comments_component.exports);
// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/article/index.vue?vue&type=script&lang=js&
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




/* harmony default export */ var articlevue_type_script_lang_js_ = ({
  name: 'articleDetial',

  async asyncData({
    params
  }) {
    let {
      data: {
        article
      }
    } = await Object(articles["b" /* getArticle */])(params.slug);
    let md = new external_markdown_it_default.a();
    article.budy = md.render(article.body);
    return {
      article
    };
  },

  components: {
    articleMeta: article_meta,
    articleComments: article_comments
  }
});
// CONCATENATED MODULE: ./pages/article/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_articlevue_type_script_lang_js_ = (articlevue_type_script_lang_js_); 
// CONCATENATED MODULE: ./pages/article/index.vue



function article_injectStyles (context) {
  
  
}

/* normalize component */

var article_component = Object(componentNormalizer["a" /* default */])(
  pages_articlevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  article_injectStyles,
  null,
  "63646741"
  
)

/* harmony default export */ var pages_article = __webpack_exports__["default"] = (article_component.exports);

/***/ })

};;
//# sourceMappingURL=1.js.map