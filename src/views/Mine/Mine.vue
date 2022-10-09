<template>
  <div>
    <h1 @click="goHome">Mine页面</h1>
  </div>
</template>

<script setup lang="ts">
import router from '@/router'

const goHome = () => {
  router.push('/')
}
</script>

<style scoped>

</style>
