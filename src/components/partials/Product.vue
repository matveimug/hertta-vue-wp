<template>
  <div class="product">
    <div class="product-scene">
      <div class="left_container">
        <div class="left" :style="{
      backgroundImage: getBgs('left_top', colors.accent, 'left_bottom', colors.main)}">
        </div>
      </div>
      <div class="right_container">
        <div class="right" :style="{
      backgroundImage: getBgs('right_top', colors.accent, 'right_bottom', colors.main)}">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    props: ['colors', 'scale'],
    methods: {
      makeBg: function (dir, color) {
        return 'url("' + this.wp_obj.templateUrl + '/src/assets/images/mittens/' + dir + '/' + color + '.png")'
      },
      getBgs: function (dirMain, colorMain, dirAccent, colorAccent) {
        return this.makeBg(dirMain, colorMain) + ', ' + this.makeBg(dirAccent, colorAccent)
      }
    }
  }
</script>

<style scoped lang="scss">
  $rw: 1134;
  $rh: 1629;
  $rtw: 770;
  $rth: 1241;
  $rbw: 798;
  $rbh: 1167;

  $lw: 1138;
  $lh: 1610;
  $ltw: 953;
  $lth: 884;
  $lbw: 945;
  $lbh: 1008;

  .product {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;

    &-scene {
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: center;

      .right, .left {
        position: relative;
        display: block;
        width: 100%;
        background-repeat: no-repeat;
        &_container {
          width: 50%;
          height: 100%;
        }

        > .inner {
          position: absolute;
          top: 0;
          right: 0;
          bottom: 0;
          left: 0;
        }
      }

      .left {
        padding-top: ($lh / $lw) * 100%;
        background-size: ($ltw / $lw) * 100% ($lth / $lh) * 100%,
        ($lbw / $lw) * 100% ($lbh / $lh) * 100%;
        background-position: 100% 0,1.3% 97.6%;
        margin-left: 20%;
        margin-top: -7.5%;
      }

      .right {
        padding-top: ($rh / $rw) * 100%;
        background-size: ($rtw / $rw) * 100% ($rth / $rh) * 100%,
        ($rbw / $rw) * 100% ($rbh / $rh) * 100%;
        background-position: 100% 0,-0.5% 100%;
        margin-left: -20%;
        margin-top: 7.5%;
      }
    }
  }
</style>
