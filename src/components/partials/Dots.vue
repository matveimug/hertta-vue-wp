<template>
  <div class="Dots">
    <Dot
      v-for="(color, index) in colors"
      @click.native="emitColor(color)"
      :color="color"
      :key="index"/>
  </div>
</template>

<script>
    export default {
        name: 'Dots',
        props: ['colors'],
        methods: {
            emitColor (color) {
                console.log('click');
                console.log(color);
                this.$emit('emit', color)
            }
        }
    }
</script>

<style scoped>
  .Dots {
    display: flex;
    z-index: 1;
  }
  .Dot {
    padding: .3em;
  }
</style>