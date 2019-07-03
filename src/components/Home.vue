<template>
  <div id="app">
    <section class="hero is-fullheight">
      <div class="hero-body">
        <div class="container is-flex hero-center">
          <h-dots class="dots main" :colors="main" :propsSelected="selected.main" v-on:emit="selectMain"/>
          <h-product class="large" :colors="selected" :scale="1"/>
          <h-dots class="dots accent" :colors="accent" :propsSelected="selected.accent" v-on:emit="selectAccent"/>
        </div>
      </div>
    </section>
    <section class="section">
      <h-combos class="container"/>
    </section>
  </div>
</template>

<script>
  import {mapState, mapGetters, mapActions} from "vuex";
  import RecentPostsWidget from "./widgets/RecentPosts.vue";
  import PagesWidget from "./widgets/Pages.vue";

  import hDots from './partials/Dots.vue'

  export default {
    components: { hDots },
    computed: {
      ...mapState('mittens', ['main', 'accent', 'selected']),
      ...mapGetters('mittens', ['randomColors'])
    },
    mounted() {
      this.selectedColors(this.randomColors);
      console.log(this.selected)
    },
    methods: {
      selectMain: function (payload) {
        this.selectedMain(payload);
      },
      selectAccent: function (payload) {
        this.selectedAccent(payload);
      },
      ...mapActions({
        'selectedColors': 'mittens/selectedColors',
        'selectedMain': 'mittens/selectedMain',
        'selectedAccent': 'mittens/selectedAccent',
      })
    },
  };
</script>

<style lang="scss" scoped>
  @import "../assets/scss/variables";

  .hero-center {
    width: 100%;
    height: 100%;
    justify-content: center;
    align-items: center;
  }

  .dots {
    position: absolute;
    padding: $h-dotspadding;

    &.main {
      left: 0;
    }

    &.accent {
      right: 0;
    }
  }
</style>

