<template>
  <div id="app">
    <div class="container large">
      <Dots class="main" @emit="setMain" :colors="mainDots"/>
      <Product class="large" :colors="getSelected" :scale="1" />
      <Dots class="accent" @emit="setAccent" :colors="accentDots"/>
    </div>
    <Combos />
  </div>
</template>

<script>
import RecentPostsWidget from "./widgets/RecentPosts.vue";
import PagesWidget from "./widgets/Pages.vue";

export default {
  components: {
    RecentPostsWidget,
    PagesWidget
  }
};
</script>


