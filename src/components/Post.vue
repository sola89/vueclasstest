<template>
    <div>
        <div class="post">
            <div class="post__id">{{ post.id }}</div>
            <div class="post__title">{{ post.title }}</div>
            <div class="post__body">{{ post.body }}</div>
       </div>
    </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { Component, Prop } from 'vue-property-decorator';

@Component
export default class Post extends Vue {
    @Prop() post!: object
}

</script>

<style lang="sass">
    .post
        border: 1px solid black
        padding: 25px
        margin: 10px 0
        width: 500px

        &__id
            color: red
        
        &__title
            color: blue

        &__body
            color: green
</style>