<template>
  <div class="Dot">
    <div class="circle" :style="{
      backgroundColor: color,
      width: radius*2 + 'px',
      height: radius*2 + 'px'
    }"></div>
  </div>
</template>

<script>
    export default {
        name: 'Dot',
        props: {
            color: {},
            radius: { default: 7 },
        }
    }
</script>

<style scoped>
  .circle {
    border-radius: 100%;
  }
</style>