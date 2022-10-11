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
      <p>
        © original COSME JAPAN CO.,LTD
      </p>
    </div>
  </footer>
</template>

<style lang="scss" scoped>
  footer {
    padding-top: 64px;
    padding-bottom: 50px;
    color: #505050;
    @media screen and (min-width: 768px) {
      padding-top: 120px;
    }

    .container {
      align-items: baseline;
      @media screen and (min-width: 768px) {
        display: flex;
      }
    }
    svg {
      width: 102px;
      margin-bottom: 24px;
      mix-blend-mode: difference;
      @media screen and (min-width: 768px) {
        width: 129px;
        margin-bottom: 0;
      }
    }
    p {
      margin: 72px 0 0;
      @media screen and (min-width: 768px) {
        margin-top: 0;
        margin-left: auto;
      }
    }
  }
  nav {
    text-transform: capitalize;
    z-index: 2;
    @media screen and (min-width: 768px) {
      margin-left: 40px;
    }
    @media screen and (min-width: 1024px) {
      margin-left: 100px;
    }
    @media screen and (min-width: 1280px) {
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
          background-color: #131313;
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
        color: #DFAD77;
      }
    }
    hr {
      width: 1px;
      height: 24px;
      margin: 0;
      background-color: #DFAD77;
      border-width: 0;
      transform: rotate(20deg);
    }
  }
</style>
