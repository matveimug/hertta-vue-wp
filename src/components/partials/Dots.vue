<template>
  <div class="Dots" ref="parent">
    <template v-for="color in colors">
      <div :class="[{ inactive: color === remove }, 'Dot']" :ref="color" :key="color" @click="isClicked(color)">
        <div class="circle" :style="{ backgroundImage: getDot(color) }"></div>
      </div>
    </template>
    <h-marker class="marker" v-if="marker_top" :top="marker_top"/>
  </div>
</template>

<script>
  import {mapState, mapActions, mapGetters} from 'vuex'
  import utils from '../../utils'
  import hMarker from '../partials/Marker.vue'
  import {TimelineLite} from 'gsap';

  export default {
    components: {hMarker},
    props: ['colors', 'propsSelected', 'remove', 'side'],
    computed: {
      ...mapState('mittens', ['selected']),
      ...mapGetters('mittens', ["watchSelected", "productsLoaded", "hoverHero"]),
    },
    data() {
      return {
        marker_top: 0
      }
    },
    mounted() {
      this.doTop();
    },
    watch: {
      watchSelected: {
        deep: true,
        handler() {
          this.doTop();
        }
      },
      hoverHero: {
        deep: true,
        handler(val) {
          const stag = .03;
          const dur = .2;
          const t = new TimelineLite();
          let el;
          let nudge;
          if (this.side === 'left') {
            el = '.main .Dot, .main .marker';
            nudge = 10
          } else {
            el = '.accent .Dot, .accent .marker';
            nudge = -10
          }
          if (val) {
            t.staggerFromTo(el, dur,
                {
                  opacity: 0,
                  x: nudge
                },{
                  opacity: 1,
                  x: 0
                }, stag);
          } else {
            t.staggerFromTo(el, dur,
                {
                  opacity: 1,
                  x: 0
                },{
                  opacity: 0,
                  x: nudge
                }, stag);
          }
        }
      }
    },
    methods: {
      isClicked: function (payload) {
        if (payload !== this.remove) {
          this.$emit('emit', payload)
        }
      },
      getDot: function (color) {
        return 'url("' + this.wp_obj.templateUrl + '/src/assets/images/mittens/dots/' + color + '.png")'
      },
      doTop: function () {
        if (this.productsLoaded) {
          const dot = this.$refs[this.propsSelected][0];
          const {parent} = this.$refs;
          this.marker_top = utils.getPos(dot).y - utils.getPos(parent).y;
        }
      },
      ...mapActions({
        'selectedPos': 'mittens/selectedPos',
      })
    }
  }
</script>

<style lang="scss">
  @import "../../assets/scss/variables";

  .Dots {
    z-index: 1;
  }
  .marker {
    opacity: 0;
  }
  .Dot {
    padding: $h-dotpadding;
    cursor: pointer;
    position: relative;
    opacity: 0;
  }

  .inactive {
    cursor: default;
    .circle {
      opacity: .2;
      background: none !important;
      border: solid 1px black;
    }
  }

  .circle {
    border-radius: 100%;
    background-position: center center;
    background-size: cover;
    width: 10px;
    height: 10px;
    transition: all .2s ease;

  }
</style>