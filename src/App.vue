<template>
  <div id="my-app" class="page-wrapper">
    <template v-if="allPagesLoaded && productsLoaded">
      <app-header/>
      <main>
        <keep-alive>
          <router-view></router-view>
        </keep-alive>
      </main>

<!--      <h-background-graphics/>-->

      <app-footer/>
    </template>
    <template v-else>
      <Loading/>
    </template>
  </div>
</template>

<script>
  import {mapGetters, mapActions} from "vuex";
  import Loading from "./components/partials/Loading.vue";
  import Header from "./components/partials/Header.vue";
  import Footer from "./components/partials/Footer.vue";
  import ProgressBar from "./components/partials/ProgressBar.vue";

  export default {
    data() {
      return {
        showLoader: true
      };
    },
    computed: {
      ...mapGetters({
        isLoading: "isLoading",
        loadingProgress: "loadingProgress",
        allPagesLoaded: "allPagesLoaded",
        productsLoaded: "mittens/productsLoaded"
      }),

      loaderStyle() {
        return `width: ${this.loadingProgress}%;`;
      }
    },
    methods: {
      ...mapActions({
        'getProducts': 'mittens/getProducts',
      })
    },

    components: {
      appHeader: Header,
      appFooter: Footer,
      ProgressBar,
      Loading
    },

    watch: {
      // watch the value of isLoading and once it's false hide the loader
      isLoading(val) {
        if (val === false) {
          let self = this;
          setTimeout(function () {
            self.showLoader = false;
          }, 1000);
        }
      }
    }
  };
</script>

<style scoped>
  .page-wrapper {
    min-height: 100vh;
    display: grid;
    grid-template-areas: "header" "content" "footer";
    grid-template-rows: 0 auto 50px;
    position: relative;
  }
  main {
    grid-area: content;
  }
</style>