<template>
  <mark ref="marker"></mark>
</template>

<script>
  import { mapState, mapGetters } from 'vuex'
  import { TimelineLite } from 'gsap';
  export default {
    props: ['parentCoords'],
    computed: {
      ...mapState('mittens', ['selected']),
      ...mapGetters('mittens', ["watchSelected"]),
    },
    data() {
      return {
        timeline: {},
        marker: {},
        parent_y: {}
      }
    },
    mounted() {
      console.log('yes', this.watchSelected);
      // this.timeline = new TimelineLite();
      // const { marker } = this.$refs;
      // this.marker = marker;
      // this.parent_y = this.selected.parent.y;
      // this.timeline.to(this.marker, 1, {
      //   ease: Expo.easeInOut,
      //   top: this.selected.pos.y - this.parent_y
      // });
    },
    watch: {
      watchSelected: {
        deep: true,
        handler(selected) {
          // this.timeline.to(this.marker, 1, {
          //   ease: Expo.easeInOut,
          //   top: selected.pos.y - this.parent_y
          // });
        }
      }
    },
  }
</script>

<style lang="scss" scoped>
  @import "../../assets/scss/variables";
  mark {
    position: absolute;
    border-radius: 50%;
    border: $h-border;
    width: $h-markersize;
    height: $h-markersize;
    margin: $h-markermargin;
    background: transparent;
  }
</style>