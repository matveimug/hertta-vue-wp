<template>
  <div id="app">
    <section class="hero is-fullheight">
      <div class="hero-body">
        <div class="container is-flex hero-center">
          <h-dots class="dots main" :colors="main" :remove="selected.accent" :propsSelected="selected.main" v-on:emit="selectMain"/>
          <h-product class="large" :colors="selected"/>
          <h-dots class="dots accent" :colors="accent" :remove="selected.main" :propsSelected="selected.accent" v-on:emit="selectAccent"/>
        </div>
      </div>
    </section>
    <section class="section">
      <template v-if="allPagesLoaded">
        <div class="copy container" v-html="pageContent.content.rendered"></div>
      </template>
    </section>
    <section class="section">
      <h-combos class="container"/>
    </section>
  </div>
</template>

<script>
  import {mapState, mapGetters, mapActions} from "vuex";
  import hDots from './partials/Dots.vue'

  export default {
    components: {hDots},
    computed: {
      ...mapState('mittens', ['main', 'accent', 'selected']),
      ...mapGetters({
        page: "page",
        pageContent: "pageContent",
        allPages: "allPages",
        allPagesLoaded: "allPagesLoaded",
        randomColors: "mittens/randomColors"
      }),

      pageContent() {
        return this.page("homepage");
      }
    },
    mounted() {
      this.selectedColors(this.randomColors);
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
  .large {
    width: 68vh;
    height: 50vh;
  }
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
  .copy {
    text-align: center;
  }
</style>

