<template>
  <div>
    <p>- {{makeCombos.length}} combos -</p>
    <div class="Combos">
      <Combo
              v-for="(combo, index) in makeCombos"
              @click.native="storeCombo(combo)"
              :key="index"
              :combo="combo"
      />
    </div>
  </div>
</template>

<script>
    import {mapGetters} from 'vuex'

    export default {
        name: "Combos",
        computed: {
            ...mapGetters(['makeCombos'])
        },
        methods: {
            storeCombo(colors) {
                this.$store.commit("selectedColors", colors);
            }
        }
    };
</script>

<style scoped>
  p {
    padding-bottom: 2em;
    text-align: center;
  }

  .Combos {
    display: flex;
    flex-wrap: wrap;
  }
</style>
