<template>
  <div class="posts">
    <div v-for="post in posts" :key="post.id">
      <span><b>{{ post.title }}</b></span><br/>
      <span>{{ post.description }}</span>
    </div>
  </div>
</template>

<script>
import PostService from '@/services/PostService'

export default {
  name: 'posts',
  data() {
    return { posts: [] }
  },
  mounted() {
    this.getPosts()
  },
  methods: {
    async getPosts() {
      const response = await PostService.fetchPosts()
      this.posts = response.data
    }
  }
}
</script>
