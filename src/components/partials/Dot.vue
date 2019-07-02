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
        props: {
            color: {},
            radius: { default: 5 },
        }
    }
</script>

<style scoped>
  .circle {
    border-radius: 100%;
  }
</style>