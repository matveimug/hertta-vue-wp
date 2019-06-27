<template>
  <div id="app">
    <div class="container large">
      <Dots class="main" :colors="main"/>
      <Product class="large" :colors="randomColors" :scale="1"/>
      <Dots class="accent" :colors="accent"/>
    </div>
    <Combos/>
  </div>
</template>

<script>
    import { mapState, mapGetters } from "vuex";
    import RecentPostsWidget from "./widgets/RecentPosts.vue";
    import PagesWidget from "./widgets/Pages.vue";

    export default {
        computed: {
            function () {
                console.log(this.$store)
            },
            ...mapState(['main', 'accent']),
            ...mapGetters(['randomColors'])
        },
        components: {
            RecentPostsWidget,
            PagesWidget
        }
    };
</script>


