<template>
  <div class="modal">
    <div class="modal-background" @click="closeModal"></div>
    <div class="modal-content">
      <div class="box">
        <article class="media">
          <slot />
        </article>
      </div>
    </div>
  </div>
</template>

<script>
  import {mapState, mapGetters, mapActions} from "vuex";
  export default {
    computed: {
      ...mapState('cart', ['adding', 'cart']),
    },
    methods: {
      closeModal: function () {
        this.toggleModal(false)
      },
      ...mapActions({
        'toggleModal': 'cart/toggleModal'
      })
    }

  }
</script>

<style scoped lang="scss">
  @import "../../assets/scss/variables";

  .modal {
    &-is-active {
      display: flex;
    }
    justify-content: center;
    align-items: center;
    &-background {
      background-color: hsla(0, 0%, 4%, .1);
      backdrop-filter: blur(10px);
    }

    &-content {
    }
    .box {
      border-radius: 0;
    }
  }
</style>