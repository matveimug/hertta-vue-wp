<template>
  <div class="cart">
    <div class="cart-item" v-for="(item, index) in cart">
      {{item.main}}
      {{item.accent}}
      <div class="sizes">
        <template v-for="size in sizes">
          <span   :class="['size', { active : size === item.size }]"
                  @click="setSize(size, index)"
          >{{size}}</span>
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
  .size {
    &s {

    }
    margin: 0 .5em;
    cursor: pointer;
    &.active {
      background-color: $black;
      color: $white;
      border-radius: 100px;
    }
  }
</style>