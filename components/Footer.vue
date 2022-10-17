<template>
    <footer>
    <div class="container">
      <OriginalLogo />
      <nav>
        <ul>
          <li><a href="#!">Privacy Policy</a></li>
          <li><a href="#!">Brand Site</a></li>
        </ul>
      </nav>
      <div class="copyright">
        &copy; original COSME JAPAN CO.,LTD
      </div>
    </div>
  </footer>
</template>

<style lang="scss" scoped>
  @import "@/assets/sass/import";

  footer {
    padding-top: 64px;
    padding-bottom: 50px;
    color: $gray-200;
    @include media-breakpoint-up(md) {
      padding-top: 120px;
    }

    .container {
      align-items: baseline;
      @include media-breakpoint-up(md) {
        display: flex;
      }
    }
    svg {
      width: 102px;
      margin-bottom: 24px;
      mix-blend-mode: difference;
      @include media-breakpoint-up(md) {
        width: 129px;
        margin-bottom: 0;
      }
    }
    .copyright {
      margin: 72px 0 0;
      @include media-breakpoint-up(md) {
        margin-top: 0;
        margin-left: auto;
      }
    }
  }
  nav {
    text-transform: capitalize;
    z-index: 2;
    @include media-breakpoint-up(md) {
      margin-left: 40px;
    }
    @include media-breakpoint-up(lg) {
      margin-left: 100px;
    }
    @include media-breakpoint-up(xl) {
      margin-left: 180px;
    }

    $nav: &;

    ul {
      margin: 0;
      padding: 0;
      list-style: none;
      display: flex;
      align-items: center;
      gap: 12px;
      font-size: 0.9375rem;
      li {
        display: flex;
        align-items: center;
        gap: 12px;
        + li::before {
          content: '';
          display: block;
          width: 1px;
          height: 1rem;
          background-color: $gray-300;
          transform: rotate(20deg);
          opacity: 0.3;
        }
      }
    }
    a {
      display: flex;
      align-items: center;
      gap: 4px;
      color: currentColor;

      path {
        stroke: currentColor;
      }
      &:hover {
        color: $primary-400;
      }
    }
    hr {
      width: 1px;
      height: 24px;
      margin: 0;
      background-color: $primary-400;
      border-width: 0;
      transform: rotate(20deg);
    }
  }
</style>
