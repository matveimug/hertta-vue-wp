<template>
  <div>
    <div class="Combos" v-if="productsLoaded">
      <h-combo
              v-for="(combo, index) in shuffle(makeCombos)"
              @click.native="storeCombo(combo)"
              :key="index"
              :combo="combo"
      />
    </div>
  </div>
</template>

<script>
    import {mapGetters} from 'vuex'
    import _ from "lodash";
    export default {
        computed: {
            ...mapGetters('mittens', ['makeCombos', 'productsLoaded'])
        },
        methods: {
            shuffle(deck) {
                return _.shuffle(deck);
            },
            storeCombo(colors) {
                this.$store.dispatch("mittens/selectedColors", colors);
            }
        }
    };
</script>

<style scoped lang="scss">
  @import "../../assets/scss/variables";

  p {
    padding-bottom: 2em;
    text-align: center;
  }

  .Combos {
    display: grid;
    grid-template-columns: repeat(auto-fit,minmax($hComboGridSize,1fr));
    grid-auto-rows: minmax($hComboGridSize,1fr);
    grid-gap: 2em;
  }
  .Combos > * {
    width: 100%;
  }
  .Combos::after {
    content: "";
    display: inline-block;
    width: 1px;
    height: 0;
    padding-bottom: 100%;
  }
</style>
