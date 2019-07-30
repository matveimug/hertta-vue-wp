<template>
    <div class="circle" :style="{
      backgroundImage: getDot(color),
      width: radius*2 + 'px',
      height: radius*2 + 'px'
    }"></div>
</template>

<script>
  export default {
    props: {
      color: {},
      radius: {default: 5},
    },
    methods: {
      getDot: function (color) {
        return 'url("' + this.wp_obj.templateUrl + '/src/assets/images/mittens/dots/' + color + '.png")'
      }
    }
  }
</script>

<style scoped>
  .circle {
    border-radius: 100%;
    background-position: center center;
    background-size: cover;
  }
</style>