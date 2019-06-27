<template>
  <div>
    <p>- {{combos.length}} combos -</p>
    <div class="Combos">
      <Combo v-for="(combo, index) in combos" @click.native="storeCombo(combo)" :key="index" :combo="combo" />
    </div>
  </div>
</template>

<script>
    export default {
        name: 'Combos',
        data: () => ({
            combos: []
        }),
        methods: {
            makeCombos: function (arr1, arr2) {
                const combos = [];
                for(let i = 0; i < arr1.length; i++) {
                    for(let j = 0; j < arr2.length; j++) {
                        combos.push({ main: arr1[i], accent: arr2[j]})
                    }
                }
                return combos
            },
            storeCombo (colors) {
                this.$store.commit('selectedColors', colors)
            }
        },
        computed: {
            main() {
                return this.$store.state.colors.main
            },
            accent() {
                return this.$store.state.colors.accent
            }
        },
        mounted() {
            this.combos = this.makeCombos(this.main, this.accent);
        }
    }
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
