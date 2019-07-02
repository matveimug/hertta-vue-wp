<template>
  <div class="Dots" ref="parent">
    <h-dot
        v-for="(color, index) in colors"
        :class="isActive({color: color, ref: 'dot_' + index}) && 'active'"
        @click.native="isClicked({color: color, ref: 'dot_' + index})"
        :color="color"
        :ref="'dot_' + index"
        :key="index"/>
    <h-marker />
  </div>
</template>

<script>
  import {mapState, mapActions} from 'vuex'
  import utils from '../../utils'

  export default {
    props: ['colors'],
    computed: {
      ...mapState('mittens', ['selected']),
    },
    data() {
      return {
        refs: false,
        parent_coords: {}
      }
    },
    mounted() {
      this.refs = this.$refs;
    },
    destroyed() {
      this.refs = false;
    },
    methods: {
      isActive: function (payload) {
        if (payload.color === this.selected.main || payload.color === this.selected.accent) {
          if (this.refs) {
            const dot = this.refs[payload.ref][0].$el;
            const coords = utils.getPos(dot);
            const { parent } = this.$refs;
            coords['parent'] = utils.getPos(parent);
            this.selectedPos(coords);
            return true
          }
        }
      },
      isClicked: function (payload) {
        if (this.refs) {
          const el = this.refs[payload.ref][0].$el;
          payload['pos'] = utils.getPos(el);
          this.$emit('emit', payload)
        }
      },
      ...mapActions({
        'selectedPos': 'mittens/selectedPos',
      })
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
</style>