<template>
  <div>
    <button @click="goHome">Home页面</button>
  </div>
</template>

<script setup lang="ts">
import router from '@/router'

const goHome = () => {
  router.push('/mine')
}
</script>

<style scoped>

</style>
