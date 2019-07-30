<template>
  <button>
    <slot />
  </button>
</template>

<style scoped lang="scss">
  @import "../../assets/scss/variables";
  button {
    border: none;
    border-bottom: 1px solid #000;
    background: transparent;
    font-family: Raleway,sans-serif;
    font-weight: 700;
    font-size: 13px;
    padding: 2px 0px;
    cursor: pointer;
    user-select: none;
    transition: all .2s ease-in-out;
    &:hover {
    }
  }
</style>