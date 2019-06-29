<template>
  <div id="app">
    <div class="container large">
      <Dots class="main" :colors="main" v-on:emit="selectMain"/>
      <Product class="large" :colors="selected" :scale="1"/>
      <Dots class="accent" :colors="accent" v-on:emit="selectAccent"/>
    </div>
    <Combos/>
  </div>
</template>

<script>
    import { mapState, mapGetters, mapActions } from "vuex";
    import RecentPostsWidget from "./widgets/RecentPosts.vue";
    import PagesWidget from "./widgets/Pages.vue";

    export default {
        computed: {
            ...mapState('mittens', ['main', 'accent', 'selected']),
            ...mapGetters('mittens', ['randomColors']),
            function () {
                this.selectedColors(this.randomColors);
            }
        },
        methods: {
            selectMain: function (color) {
                console.log(color);
                console.log(this.selected);
                this.selectedMain(color)
            },
            selectAccent: function (color) {
                console.log(color);
                console.log(this.selected);
                this.selectedAccent(color)
            },
            ...mapActions({
                    'selectedColors': 'mittens/selectedColors',
                    'selectedMain': 'mittens/selectedMain',
                    'selectedAccent': 'mittens/selectedAccent',
                })
        },
        components: {
            RecentPostsWidget,
            PagesWidget
        }
    };
</script>


