<template>
  <h2>
    <slot></slot>
  </h2>
</template>

<script>
  export default {
    props: ['type'],
  }
</script>

<style lang="scss" scoped>
  @import "@/assets/sass/import";

  h2 {
    display: flex;
    align-items: center;
    gap: 16px;
    margin-top: 0;
    margin-bottom: 0;
    padding-left: 4px;
    color: $gray-200;
    font-size: 1.25rem;
    font-weight: normal;
    text-transform: uppercase;
    @media screen and (min-width: 1024px) {
      font-size: 1.5rem;
    }

    &::before {
      content: '';
      display: block;
      width: 1px;
      height: 24px;
      background-color: currentColor;
      transform: rotate(20deg);
    }
  }
</style>
