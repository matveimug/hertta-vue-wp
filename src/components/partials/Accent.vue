<template>
  <div class="Accent">
    <AccentColor :color="current" />
  </div>
</template>

<script>
    export default {
        name: 'Accent',
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