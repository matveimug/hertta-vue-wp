<template>
  <div id="app">
    <section class="hero is-fullheight">
      <h-hero />
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
  import {mapGetters} from "vuex";
  import hHero from './partials/Hero.vue'

  export default {
    components: {hHero},
    computed: {
      ...mapGetters({
        page: "page",
        pageContent: "pageContent",
        allPages: "allPages",
        allPagesLoaded: "allPagesLoaded",
      }),

      pageContent() {
        return this.page("homepage");
      }
    },
  };
</script>

<style lang="scss" scoped>
  .copy {
    text-align: center;
  }
</style>

