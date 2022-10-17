<template>
  <header>
    <div class="container-fluid">
      <a href="index.html" class="logo">
        <OriginalLogo :mode="'link'" />
      </a>
      <Nav />
      <Hamburger />
    </div>
  </header>
</template>

<style lang="scss" scoped>
  @import "@/assets/sass/import";

  a.logo {
    position: fixed;
    top: 16px;
    left: 24px;
    display: block;
    width: 102px;
    mix-blend-mode: difference;
    z-index: 2;
    @include media-breakpoint-up(lg) {
      top: 32px;
      left: 48px;
      width: 129px;
    }
    &:hover {
      mix-blend-mode: normal;
    }
  }
</style>
