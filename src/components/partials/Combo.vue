<template>
  <div class="Combo" :style="{backgroundColor: bgColor()}">
    <div class="container">
      <h-product class="Product" :colors="combo" :scale=".3"/>
    </div>
  </div>
</template>

<script>
  import Color from "color"
  export default {
    props: ['combo'],
    methods: {
      bgColor() {
        const color = Color(this.combo.accent).mix(Color(this.combo.main)).hsl();
        // color.color[1] = 20;
        color.color[2] = 90;
        return color
      }
    },
    mounted() {
      console.log(this.bgColor())
    },
  }
</script>

<style scoped>
  .Combo {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    cursor: pointer;
  }

  .container {
    position: relative;
  }

  .Product {
    position: absolute;
    left: -5em;
    top: 3em;
  }

  span {
    padding-top: 2em;
    text-align: center;
    font-size: .7em;
  }
</style>