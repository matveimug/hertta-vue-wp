<template>
  <header>
    <router-link :to="'/'">
      <Brand class="navbar-brand"/>
    </router-link>
    <nav-menu :menu="menu"/>
  </header>
</template>

<script>
    import axios from "axios";
    import NavMenu from "./Menu.vue";

    export default {
        components: { NavMenu },
        data() {
            return {
                menu: false
            }
        },
        beforeMount() {
            this.fetchMenu();
        },
        methods: {
            async fetchMenu() {
                axios
                    .get('/wp-json/menus/v1/menus/main-menu')
                    .then(response => {
                        console.log(response.data);
                        this.menu = response.data;
                    })
                    .catch(error => console.log("not working"));
            }
        }
    }
</script>

<style scoped lang="scss">
  @import "../../assets/scss/variables";
  header {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    padding-top: $h-menuitempadding;
  }
  .navbar-brand {
    width: 190px;
  }
</style>
