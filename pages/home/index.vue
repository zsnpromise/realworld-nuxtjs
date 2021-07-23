<template>
<div class="home-page">

  <div class="banner">
    <div class="container">
      <h1 class="logo-font">conduit</h1>
      <p>A place to share your knowledge.</p>
    </div>
  </div>

  <div class="container page">
    <div class="row">

      <div class="col-md-9">
        <div class="feed-toggle">
          <ul class="nav nav-pills outline-active">
            <li class="nav-item">
              <!-- <a class="nav-link disabled" href=""></a> -->
              <nuxt-link class="nav-link" exact :class="{active: tab === 'y_feed'}" :to="{name: 'home', query: {tab: 'y_feed'}}">Your Feed</nuxt-link>
            </li>
            <li class="nav-item">
              <nuxt-link class="nav-link" exact :class="{active: tab === 'g_feed'}" :to="{name: 'home', query: {tab: 'g_feed'}}">Global Feed</nuxt-link>
            </li>
             <li class="nav-item" v-if="tab === 'tag'">
              <nuxt-link class="nav-link" exact :class="{active: tab === 'tag'}" :to="{name: 'home', query: {tab: 'tag'}}">#{{ tag }}</nuxt-link>
            </li>
          </ul>
        </div>

        <div class="article-preview" :key="item.slug" v-for="item in articles">
          <div class="article-meta">
            <nuxt-link :to="{
              name: 'profile',
              params: {username: item.author.username}
            }">
              <img :src="item.author.image" />
            </nuxt-link>
            <div class="author">
              <nuxt-link :to="{
                name: 'profile',
                params: {username: item.author.username}
              }">
                {{item.author.username}}
              </nuxt-link>
              <span class="date">{{item.createdAt | time('MMM DD,YYYY')}}</span>
            </div>
            <button :disabled="item.isBtn" @click="favorite(item)" :class="{active: item.favorited}" class="btn btn-outline-primary btn-sm pull-xs-right">
              <i class="ion-heart"  :class="{active: item.favorited}"></i> {{item.favoritesCount}}
            </button>
          </div>
          <nuxt-link :to="{name: 'articleDetial', params: {slug: item.slug}}" class="preview-link">
            <h1>{{item.title}}</h1>
            <p>{{item.description}}</p>
            <span>Read more...</span>
          </nuxt-link>
        </div>


        <!-- page   -->
        <nav>
           <ul class="pagination">
            <li class="page-item " :class="{active: page === item}" :key="item" v-for="item in totalPage">
              <nuxt-link class="page-link ng-binding"  :to="{path: '/', query: {page: item, tag, tab}}">{{item}}</nuxt-link>
            </li>
           </ul>
        </nav>
        <!-- page -->
      </div>

      <div class="col-md-3">
        <div class="sidebar">
          <p>Popular Tags</p>

          <div class="tag-list">
            <nuxt-link class="tag-pill tag-default" :to="{name: 'home', query: {tag: item, tab: 'tag'}}" :key="index" v-for="(item, index) in tags">{{ item }}</nuxt-link>
          </div>
        </div>
      </div>

    </div>
  </div>

</div>

</template>

<script>
import { getArticles, getFeedArticles, setFavorite, delFavorite } from '../../api/articles'
import { getTags } from '../../api/tag'
export default {
    name: 'home',
    watchQuery: ['page', 'tag', 'tab'],
    async asyncData({ query, store }) {
     let tab = query.tab || 'g_feed'
     let tag = query.tag
     let page = parseInt(query.page || 1)
     let limit = 20
     let loadArticles = store.state.user && tab === 'y_feed' ? getFeedArticles : getArticles
     let [ {data}, {data: tags}] = await Promise.all([loadArticles({
       limit,
       tag,
       offset: limit * (page - 1)
     }), getTags()])
     data.articles.forEach(item => {
       item.isBtn  = false
     });
     return {
       articles: data.articles,
       articlesCount: data.articlesCount,
       page,
       limit,
       tags: tags.tags,
       tab,
       tag
     }
   },
   computed: {
     totalPage() {
       return Math.ceil(this.articlesCount / this.limit)
     }
   },
   methods: {
     async favorite(article) {
       console.log(article)
       article.isBtn = true
       if (article.favorited) {
         await delFavorite(article.slug)
         article.favorited = false
         article.favoritesCount -= 1
       } else {
           await setFavorite(article.slug)
           article.favorited = true
           article.favoritesCount += 1
       }
       article.isBtn = false
     }
   }
}
</script>

<style>

</style>