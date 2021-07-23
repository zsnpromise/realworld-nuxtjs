<template>
  <div>
        <form class="card comment-form">
          <div class="card-block">
            <textarea class="form-control" placeholder="Write a comment..." rows="3"></textarea>
          </div>
          <div class="card-footer">
            <img :src="user.image" class="comment-author-img" />
            <button class="btn btn-sm btn-primary">
             Post Comment
            </button>
          </div>
        </form>
        
        <div class="card" :key="item.id" v-for="item in comments">
          <div class="card-block">
            <p class="card-text">{{item.body}}</p>
          </div>
          <div class="card-footer">
               <nuxt-link  class="comment-author" :to="{
                        name: 'profile',
                        params: {
                            username: item.author.username
                        }
                    }">
                    <img :src="item.author.image" class="comment-author-img" />
               </nuxt-link>

            &nbsp;
             <nuxt-link  class="comment-author" :to="{
                        name: 'profile',
                        params: {
                            username: item.author.username
                        }
                    }">
                    {{ item.author.username }}
            </nuxt-link>
            <span class="date-posted">{{ item.createdAt|time('MMM YYYY,DD') }}</span>
          </div>
        </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import { getComments } from '../../../api/articles'
export default {
  name: 'article-comments',
  props: {
      article: {
          type: Object
      }
  },
   computed: {
      ...mapState(['user'])
   },
   data () {
       return {
           comments: []
       }
   },
   async mounted() {
      let { data: { comments } } = await getComments(this.article.slug)
      this.comments  = comments
   }
}
</script>

<style>

</style>