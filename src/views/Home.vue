<template>
  <div class="home">
    <h1>Посты</h1>
    <Posts />
  </div>
</template>

<script>
import Posts from '@/components/Posts'
export default {
  name: 'Home',
  components: { Posts }
}
</script>
