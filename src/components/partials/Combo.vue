<template>
  <div class="Combo">
    <div class="container">
      <Product class="Product" :colors="combo" :scale=".3" />
    </div>
    <span>+ {{combo.main}}, {{combo.accent}} +</span>
  </div>
</template>

<script>
    export default {
        name: 'Combo',
        props: ['combo']
    }
</script>

<style scoped>
  .Combo {
    width: 15em;
    height: 10em;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 0 3px;

  }
  .container {
    height: 5em;
    position: relative;
  }
  .Product {
    position: absolute;
    left: -5em;
    top: -5em;
  }
  span {
    padding-top: 2em;
    text-align: center;
    font-size: .7em;
  }
</style>