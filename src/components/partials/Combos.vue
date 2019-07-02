<template>
  <div>
    <p>- {{makeCombos.length}} combos -</p>
    <div class="Combos">
      <h-combo
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
        computed: {
            ...mapGetters('mittens', ['makeCombos'])
        },
        methods: {
            storeCombo(colors) {
                this.$store.dispatch("mittens/selectedColors", colors);
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
