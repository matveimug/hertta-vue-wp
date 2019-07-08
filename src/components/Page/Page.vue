<template>
  <div>
    <template v-if="allPagesLoaded">
      <section class="section">
        <div class="container">
          <h1>{{ pageContent.title.rendered }}</h1>
          <div v-html="pageContent.content.rendered"></div>
        </div>
      </section>
    </template>
    <Loader v-else/>
  </div>
</template>

<script>
  import Loader from "../partials/Loader.vue";
  import {mapGetters} from "vuex";

  export default {
    computed: {
      ...mapGetters({
        page: "page",
        allPagesLoaded: "allPagesLoaded"
      }),

      pageContent() {
        return this.page(this.$route.params.pageSlug);
      }
    },

    components: {
      Loader
    }
  };
</script>