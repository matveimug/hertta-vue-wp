<template>
  <header>
    <router-link class="brand-link" :to="'/'">
      <h-brand class="navbar-brand"/>
    </router-link>
    <h-nav-menu :menu="menu"/>
  </header>
</template>

<script>
    import axios from "axios";
    import hNavMenu from "./Menu.vue";

    export default {
        components: { hNavMenu },
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
    color: $black;
    fill: $black;
  }
  .navbar-brand {
    width: 190px;
  }
  .brand-link.router-link-exact-active {
    cursor: default;
  }
</style>
