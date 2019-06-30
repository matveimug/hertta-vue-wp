<template>
  <div class="Dots">
    <Dot
            v-for="(color, index) in colors"
            :class="isActive(color) && 'active'"
            @click.native="$emit('emit', color)"
            :color="color"
            :key="index"/>
  </div>
</template>

<script>
    import { mapState } from 'vuex'
    export default {
        name: 'Dots',
        props: ['colors'],
        computed: {
            ...mapState('mittens', ['selected']),
        },
        methods: {
            isActive: function (color) {
                if (color === this.selected.main || color === this.selected.accent) { return true }
            }
        }
    }
</script>

<style lang="scss" scoped>
  @import "../../assets/scss/variables";

  .Dots {
    z-index: 1;
  }

  .Dot {
    padding: $h-dotpadding;
    cursor: pointer;
    position: relative;
  }

  .Dot.active:before {
    content: '';
    border-radius: 50%;
    border: $h-border;
    position: absolute;
    left: $h-dotpadding-active;
    right: $h-dotpadding-active;
    top: $h-dotpadding-active;
    bottom: $h-dotpadding-active;
  }
</style>