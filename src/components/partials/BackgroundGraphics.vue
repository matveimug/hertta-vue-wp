<template>
  <div class="g__wrapper">
    <div ref="main" class="g__main"></div>
    <div ref="accent" class="g__accent"></div>
  </div>
</template>

<script>
  import {mapState, mapGetters} from "vuex";
  import {TimelineLite} from 'gsap';
  import utils from "../../utils"

  export default {
    computed: {
      ...mapState('mittens', ['selected']),
      ...mapGetters('mittens', ["watchSelected"]),
    },
    data() {
      return {
        window: {
          width: 0,
          height: 0
        }
      }
    },
    created() {
      window.addEventListener('resize', this.handleResize)
      this.handleResize();
    },
    destroyed() {
      window.removeEventListener('resize', this.handleResize)
    },
    methods: {
      handleResize() {
        this.window.width = window.innerWidth;
        this.window.height = window.innerHeight;
      }
    },
    watch: {
      watchSelected: {
        deep: true,
        handler(selected) {
          const timeline = new TimelineLite();
          const {main} = this.$refs;
          const {accent} = this.$refs;
          const w = this.window.width / 2 - 60;
          const h = this.window.height / 2 - 60;
          const r = utils.randomNumbers(w / 2, w);
          timeline.to(main, 1, {
            ease: Expo.easeInOut,
            x: utils.randomNumbers(0, w),
            y: utils.randomNumbers(0, h),
            rotation: utils.randomNumbers(0, 180),
            backgroundColor: utils.colorToRgb(selected.main),
            width: utils.randomNumbers(w / 3, 3 * w),
            height: utils.randomNumbers(h / 3, 3 * h),
            zIndex: utils.randomNumbers(-1, 0)
          }, "go");
          timeline.to(accent, 1, {
            ease: Expo.easeInOut,
            x: -utils.randomNumbers(0, w),
            y: utils.randomNumbers(0, h),
            rotation: utils.randomNumbers(0, 180),
            backgroundColor: utils.colorToRgb(selected.accent),
            width: r,
            height: r,
            zIndex: utils.randomNumbers(-1, 0)
          }, "go");
        }
      }
    },
  }
</script>

<style scoped lang="scss">
  .g_ {
    &_wrapper {
      z-index: -1;
      position: absolute;
      display: flex;
      justify-content: center;
      align-items: center;
      user-select: none;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;

      & > * {
        position: absolute;
        user-select: none;
        min-width: 100px;
        min-height: 100px;
        mix-blend-mode: overlay;
      }
    }

    &_accent {
      border-radius: 50%;
    }
  }
</style>