<template>
  <div id="my-app" class="page-wrapper">
    <template v-if="allPagesLoaded">
      <app-header/>

      <transition
              name="loader-animation"
              enter-active-class="animated fadeIn"
              leave-active-class="animated fadeOut"
      >
        <progress-bar :show-loader="showLoader" :loader-style="loaderStyle"/>
      </transition>

      <transition name="page-transition" mode="out-in" appear>
        <keep-alive>
          <router-view></router-view>
        </keep-alive>
      </transition>

      <h-background-graphics/>

      <app-footer/>
    </template>
    <template v-else>
      <Loading />
    </template>
  </div>
</template>

<script>
  import {mapGetters} from "vuex";
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
      }),

      loaderStyle() {
        return `width: ${this.loadingProgress}%;`;
      }
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
