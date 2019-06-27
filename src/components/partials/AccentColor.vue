<template>
  <div class="AccentColor" >
    <div class="thumb" :style="{backgroundColor: color}"></div>
    <div class="bottom" :style="{backgroundColor: color}"></div>
  </div>
</template>

<script>
    export default {
        name: 'AccentColor',
        props: ['color']
    }
</script>

<style scoped>
  .AccentColor {
  }
  .thumb {
    height: 7em;
    width: 4em;
    border-top-left-radius: 2em;
    border-top-right-radius: 2em;
  }
  .bottom {
    height: 10em;
    width: 10em;
  }
</style>