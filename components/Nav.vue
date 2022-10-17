<template>
  <nav>
    <ul>
      <li><a href="#!">about</a></li>
      <li><a href="#!">how to</a></li>
      <li><a href="#!">product</a></li>
    </ul>
    <hr>
    <ul>
      <li>
        <a href="#!">
          <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M5.67385 6.55091V3.91364C5.67385 2.45655 6.7587 1.27637 8.09135 1.27637C9.42702 1.27637 10.5088 2.45984 10.5088 3.91364V6.55091M3.25635 5.23228H12.9263V15.7814H3.25635V5.23228Z" stroke-linecap="round"/>
          </svg>
          shop
        </a>
      </li>
    </ul>
  </nav>
</template>

<style lang="scss" scoped>
  @import "@/assets/sass/import";

  nav {
    position: fixed;
    top: 32px;
    right: 48px;
    display: none;
    align-items: center;
    gap: 24px;
    padding: 16px 40px;
    color: $gray-300;
    text-transform: capitalize;
    background-color: $primary-100;
    box-shadow: 0px 4px 24px rgba(#ACACAC, 0.2);
    border-radius: 50px;
    z-index: 2;

    @include media-breakpoint-up(lg) {
      display: flex;
    }

    ul {
      margin: 0;
      padding: 0;
      list-style: none;
      display: flex;
      align-items: center;
      gap: 40px;
      font-size: 0.9375rem;
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
