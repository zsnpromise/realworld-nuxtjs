<template>
<div class="article-page">

  <div class="banner">
    <div class="container">

      <h1>{{ article.title }}</h1>

     <article-meta :article="article"/>
    </div>
  </div>

  <div class="container page">

    <div class="row article-content">
      <div class="col-md-12" v-html="article.body">
        
      </div>
    </div>

    <hr />

    <div class="article-actions">
      <article-meta :article="article"/>
    </div>

    <div class="row">

      <div class="col-xs-12 col-md-8 offset-md-2">

          <article-comments :article="article" />
        
      </div>

    </div>

  </div>

</div>

</template>

<script>
import { getArticle } from '../../api/articles'
import markdownIt from 'markdown-it'
import articleMeta from './compontens/article-meta.vue'
import articleComments from './compontens/article-comments.vue'
export default {
   name: 'articleDetial',
   async asyncData({ params }) {
     let { data: { article } } = await getArticle(params.slug)
     let md = new markdownIt();
     article.budy = md.render(article.body);
     return {
       article
     }
   },
   components: {articleMeta, articleComments}
}
</script>

<style>

</style>