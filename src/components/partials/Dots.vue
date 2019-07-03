<template>
  <div class="Dots" ref="parent">
    <h-dot
        v-for="color in colors"
        @click.native="isClicked(color)"
        :color="color"
        :ref="color"
        :key="color"/>
    <h-marker :top="marker_top"/>
  </div>
</template>

<script>
  import {mapState, mapActions, mapGetters} from 'vuex'
  import utils from '../../utils'
  import hDot from '../partials/Dot.vue'
  import hMarker from '../partials/Marker.vue'

  export default {
    components: { hDot, hMarker },
    props: ['colors', 'propsSelected'],
    computed: {
      ...mapState('mittens', ['selected']),
      ...mapGetters('mittens', ["watchSelected"]),
    },
    data() {
      return {
        marker_top: 0
      }
    },
    mounted() {
      console.log(this.selected)
    },
    watch: {
      watchSelected: {
        deep: true,
        handler() {
          const dot = this.$refs[this.propsSelected][0].$el;
          const { parent } = this.$refs;
          this.marker_top = utils.getPos(dot).y - utils.getPos(parent).y;
        }
      }
    },
    methods: {
      isClicked: function (payload) {
        this.$emit('emit', payload)
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