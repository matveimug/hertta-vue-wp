<template>
  <div class="Dots">
    <h-dot
            v-for="(color, index) in colors"
            :class="isActive(color) && 'active'"
            @click.native="isClicked({color: color, ref: 'dot_' + index})"
            :color="color"
            :ref="'dot_' + index"
            :key="index"/>
  </div>
</template>

<script>
    import { mapState } from 'vuex'
    import utils from '../../utils'
    export default {
        props: ['colors'],
        computed: {
            ...mapState('mittens', ['selected']),
        },
        methods: {
            isActive: function (color) {
                if (color === this.selected.main || color === this.selected.accent) { return true }
            },
            isClicked: function (payload) {
                const el = this.$refs[payload.ref][0].$el;
                payload['pos'] = utils.getPos(el);
                console.log(payload);
                this.$emit('emit', payload)
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