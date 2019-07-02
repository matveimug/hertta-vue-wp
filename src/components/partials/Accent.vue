<template>
  <div class="Accent">
    <h-accent-color :color="current" />
  </div>
</template>

<script>
    export default {
        props: ['current'],
        data: () => ({}),
    }
</script>

<style scoped>
  .Accent {
    position: absolute;
    bottom: 0;
    left: 0;
  }
</style>