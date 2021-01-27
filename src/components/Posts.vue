<template>
    <div>
        <Post v-for="post in posts" :key="post.id" :post="post" />
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Post from '@/components/Post.vue'

@Component({
    components: {
        Post
    }
})
export default class Posts extends Vue {
    get posts() {
        return this.$store.getters['posts/getPosts']
    }

    mounted() {
        this.$store.dispatch('posts/fetchPosts')
    }
}

</script>

<style></style>