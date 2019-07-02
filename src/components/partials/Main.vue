<template>
  <div class="Main">
    <h-main-color :color="current" />
  </div>
</template>

<script>
    export default {
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