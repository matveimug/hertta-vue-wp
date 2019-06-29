<template>
  <div id="app">
    <div class="container large">
      <Dots class="main" :colors="main"/>
      <Product class="large" :colors="selected" :scale="1"/>
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
            ...mapState('mittens', ['main', 'accent', 'selected']),
            ...mapGetters('mittens', ['randomColors']),
            function () {
                this.$store.commit("mittens/selectedColors", this.randomColors);
                console.log('computed');
                console.log(this.$store.state.mittens);
                console.log(this.randomColors);
                console.log(this.selected);
                console.log(this.main);
            }
        },
        components: {
            RecentPostsWidget,
            PagesWidget
        }
    };
</script>


