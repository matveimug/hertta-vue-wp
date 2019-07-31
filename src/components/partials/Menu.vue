<template>
  <nav v-if="menu">
    <ul>
      <li v-for="item in menu.items" :key="item.ID">
        <router-link :to="parseUrl(item.url)" tag="span">
          {{ item.title }}
        </router-link>
      </li>
      <li class="cart" @click="toggleModal">
        <fa :icon="['fas', 'shopping-cart']"/>
        <span v-if="getCart.length">{{getCart.length}}</span>
      </li>
    </ul>
  </nav>
</template>

<script>
  import {mapGetters, mapActions} from "vuex";

  export default {
    props: ['menu'],
    computed: {
      ...mapGetters(
        'cart', ['getCart']
      ),
    },
    methods: {
      parseUrl: function (url) {
        const parser = document.createElement('a');
        parser.href = url;
        parser.hostname;
        let pathname = parser.pathname;
        if (pathname[0] != '/') {
          pathname = '/' + pathname
        }
        return pathname;
      },
      ...mapActions({
        'toggleModal': 'cart/toggleModal',
      })
    }
  }
</script>

<style scoped lang="scss">
  @import "../../assets/scss/variables";

  nav {
    font-family: 'Raleway', sans-serif;
    font-weight: bold;
    text-transform: uppercase;
    font-size: 18px;
    letter-spacing: 1px;
  }

  ul {
    list-style: none;
    display: flex;
    padding: 0 $h-menuitempadding;
  }

  li {
    padding: 0 $h-menuitempadding;
  }

  span {
    cursor: pointer;
    user-select: none;
  }

  .cart {
    cursor: pointer;
  }
  .router-link-active {
    cursor: default;
    border-bottom: $h-border;
  }
</style>