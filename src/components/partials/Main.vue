<template>
  <div class="Main">
    <MainColor :color="current" />
  </div>
</template>

<script>
    export default {
        name: 'Main',
        props: ['current'],
        data: () => ({}),
    }
</script>

<style scoped>
  .Main {
    position: absolute;
    top: 0;
    left: 0;
  }
</style>