<template>
  <div class="Product" :style="productStyle">
    <div class="product-scene" :style="sceneStyle">
      <div class="product-entity one">
        <Main :current="colors.main"/>
        <Accent :current="colors.accent"/>
      </div>
      <div class="product-entity two">
        <Main :current="colors.main"/>
        <Accent :current="colors.accent"/>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: 'Product',
        props: ['colors', 'scale'],
        computed: {
            productStyle: function () {
                return 'transform: scale(' + this.scale + ')'
            },
            sceneStyle: function () {
                return 'height: ' + 20 * this.scale + 'rem; width: ' + 20 * this.scale + 'rem; '
            }
        }
    }
</script>

<style scoped>
  .Product {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .product-scene {
    perspective: 1000px;
  }
  .product-entity {
    border-top-left-radius: 5em;
    border-top-right-radius: 5em;
    position: absolute;
    height: 28em;
    width: 10em;
    overflow: hidden;
  }
  .product-entity.one {
    transform:
            rotateX(55deg)
            rotateY(-2deg)
            rotateZ(-103deg)
            scale(1.4)
            translateY(3em)
            translateZ(2em)
    ;
    box-shadow: -70px -9px 15px -23px rgba(0,0,0,.18)
  }
  .product-entity.two {
    z-index: -1;
    transform:
            rotateX(55deg)
            rotateY(-2deg)
            rotateZ(-103deg)
            scale(1.4)
            scaleX(-1)
            translateY(3em)
            translateZ(-2em)
            translateX(1em)
    ;
    box-shadow: 21px -4px 13px -9px rgba(0, 0, 0, 0.29);
  }
</style>
