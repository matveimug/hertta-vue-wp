<template>
  <div class="cart">
    <h3>Cart</h3>
    <div class="cart-item" v-for="(item, index) in cart">
      <div class="cart-product-container">
        <h-product class="cart-product" :colors="{main: item.main, accent: item.accent}" :scale=".3"/>
      </div>
      <div>
        {{item.main}} / <br>
        {{item.accent}}
      </div>
      <div class="sizes">
        <template v-for="size in sizes">
          <div   :class="['size', { active : size === item.size }]"
                  @click="setSize(size, index)"
          >{{size}}</div>
        </template>
      </div>
    </div>
  </div>
</template>

<script>
  import {mapState, mapGetters, mapActions} from "vuex";
  export default {
    computed: {
      ...mapState('cart', ['maybe', 'cart']),
      ...mapState('mittens', ['main', 'accent', 'sizes']),
    },
    methods: {
      ...mapActions({
        'editCart': 'cart/editCart',
      }),
      setSize: function (size, index) {
        console.log(this.cart[index], size, index);
        this.editCart({
          index: index,
          attr: 'size',
          value: size
        })
      }
    }

  }
</script>

<style scoped lang="scss">
  @import "../../assets/scss/variables";
  .cart {
    &-item {
      display: flex;
      align-items: center;
    }
    &-product {
      &-container {
        height: 7em;
        width: 7em;
      }
      margin-top: 1.1em;
    }
  }
  .size {
    &s {
      display: flex;
    }
    display: flex;
    align-items: center;
    justify-content: center;
    min-width: 2em;
    min-height: 2em;
    padding: .2em;
    cursor: pointer;
    &.active {
      background-color: $black;
      color: $white;
      border-radius: 100px;
    }
  }
</style>