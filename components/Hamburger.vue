<template>
  <button type="button" class="hamburger">
    <span></span><span></span><span></span>
  </button>
</template>

<style lang="scss" scoped>
  @import "@/assets/sass/import";
  .hamburger {
    position: fixed;
    top: 16px;
    right: 24px;
    padding: 13px 16px;
    background-color: $primary-100;
    border: 0;
    border-radius: 50px;
    z-index: 2;
    @media screen and (min-width: 1024px) {
      display: none;
    }

    span {
      display: block;
      width: 1rem;
      height: 1px;
      margin: 3px 0;
      background-color: $primary-400;
    }
  }
</style>
