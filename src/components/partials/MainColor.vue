<template>
  <div class="MainColor">
    <div class="demo" :style="{backgroundColor: color}"></div>
  </div>
</template>

<script>
    export default {
        name: 'MainColor',
        props: ['color']
    }
</script>

<style scoped>
  .MainColor {}
  .demo {
    width: 10em;
    height: 20em;
  }
</style>