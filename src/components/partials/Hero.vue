<template>
  <div class="hero-body"
       @mouseover="hover(true)"
       @mouseleave="hover(false)"
  >
    <div class="container is-flex hero-center"
    >
      <h-dots class="dots main" side="left" :colors="main" :remove="selected.accent" :propsSelected="selected.main" v-on:emit="selectMain"/>
      <div class="product-container">
        <h-product class="large" :colors="selected"/>
        <div ref="add_cart" class="invisible btn-add-to-cart">
          <h-button @click.native="confirmAdd" class="">Add to cart</h-button>
        </div>
      </div>
      <h-dots class="dots accent" side="right" :colors="accent" :remove="selected.main" :propsSelected="selected.accent" v-on:emit="selectAccent"/>
    </div>
  </div>
</template>

<script>
  import hDots from './Dots.vue'
  import {TimelineLite} from 'gsap';
  import {mapState, mapGetters, mapActions} from "vuex";
  export default {
    components: {hDots},
    computed: {
      ...mapState('mittens', ['main', 'accent', 'selected', 'sizes']),
      ...mapGetters({
        page: "page",
        pageContent: "pageContent",
        allPages: "allPages",
        allPagesLoaded: "allPagesLoaded",
        randomColors: "mittens/randomColors",
        productsLoaded: "mittens/productsLoaded",
      }),

      pageContent() {
        return this.page("homepage");
      }
    },
    mounted() {
      this.selectedColors(this.randomColors);
    },
    methods: {
      selectMain: function (payload) {
        this.selectedMain(payload);
      },
      selectAccent: function (payload) {
        this.selectedAccent(payload);
      },
      confirmAdd: function () {
        let obj = { ...this.selected, size: this.sizes[1] };
        this.addCart(obj);
        this.toggleModal(true);
      },
      hover: function (payload) {
        this.hoverHero(payload);
        const timeline = new TimelineLite();
        const add_cart = this.$refs['add_cart'];
        if (payload) {
          timeline.to(add_cart, .6, {
            ease: Expo.easeOut,
            marginTop: '8vh',
            opacity: 1
          });
        } else {
          timeline.to(add_cart, .6, {
            ease: Expo.easeIn,
            marginTop: 0,
            opacity: 0
          });
        }
      },
      ...mapActions({
        'selectedColors': 'mittens/selectedColors',
        'selectedMain': 'mittens/selectedMain',
        'selectedAccent': 'mittens/selectedAccent',
        'hoverHero': 'mittens/hoverHero',
        'toggleModal': 'cart/toggleModal',
        'addCart': 'cart/addCart',
      })
    },
  };
</script>

<style lang="scss" scoped>
  @import "../../assets/scss/variables";
  .invisible {
    opacity: 0;
  }
  .large {
    width: 80vh;
    margin-top: 0vh;
    height: 56vh;
    z-index: 1;
  }
  .hero-center {
    width: 100%;
    height: 100%;
    min-height: 80vh;
    justify-content: center;
    align-items: center;
  }

  .dots {
    position: absolute;
    padding: $h-dotspadding;

    &.main {
      left: 0;
    }

    &.accent {
      right: 0;
    }
  }
  .product-container {
    position: relative;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
  }
  .btn-add-to-cart {
    position: absolute;
    top: 100%;
    &:before {
      content: "";
      width: 0;
      height: 100px;
      position: absolute;
      left: 50%;
      right: 50%;
      bottom: calc(100% + 10px);
      border-right: 1px $h-bordercolor dotted;
      border-top-style: none;
      border-bottom-style: none;
      border-left-style: none;
    }
  }
  .copy {
    text-align: center;
  }
</style>