<template>
  <section>
    <div class="row">
      <div class="kv__img kv__img--right">
        <img src="/images/white-cotton-buds-on-white-surface.jpg" class="img-fluid" alt="white-cotton-buds-on-white-surface">
      </div>
      <div class="kv__img kv__img--left">
        <div class="ratio">
          <img src="/images/asure01.jpg" class="img-fluid" alt="pure, organic, natural.">
        </div>
        <div class="display-2">pure, organic, natural.</div>
      </div>
    </div>
    <div class="container">
      <div class="row">
        <div class="col-md-6 offset-md-6 kv__text">
          <div class="row">
            <div class="col-md-2 col-3">
              <h3>
                Concept
              </h3>
            </div>
            <div class="col-md-10 col-9">
              <div class="h1">natural skin products</div>
            </div>
            <div class="col-xl-6 col-lg-8 col-md-10 offset-xl-6 offset-lg-4 offset-md-2">
              <p>
                Sit elit incididunt Lorem minim ea pariatur anim dolor ut veniam amet ad. Ipsum tempor commodo ullamco Lorem incididunt proident nisi nostrud dolore. Et labore minim laboris esse amet eu eu exercitation ea esse velit tempor culpa. 
              </p>
              <a href="#!" class="btn btn--white btn--icon_text">
                <i></i> view All
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  export default {
    data () {
      return {}
    },
    props: ['emit-data'],
  }
</script>

<style lang="scss" scoped>
  @import "@/assets/sass/import";

  section {
    position: relative;
    margin-bottom: 120px;
    overflow: hidden;
    @media screen and (min-width: 1280px) {
      margin-bottom: 200px;
    }

    &::before {
      content: '';
      display: block;
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: $primary-400;
      @media screen and (min-width: 1024px) {
        height: calc(100% - 60px);
      }
      @media screen and (min-width: 1280px) {
        height: calc(100% - 120px);
      }
    }

    > .row {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      margin: 0;
      justify-content: space-between;
      flex-direction: row-reverse;
      @media screen and (min-width: 1280px) {
        position: static;
      }
    }
    > .container {
      z-index: 1;
      @media screen and (min-width: 1280px) {
        position: absolute;
        top: 0;
        left: 50%;
        height: 100%;
        transform: translateX(-50%);
      }

      > .row {
        align-items: end;
        height: 100%;
        padding-top: 120px;
        padding-bottom: 40px;
        @media screen and (min-width: 768px) {
          padding-top: 192px;
        }
        @media screen and (min-width: 1024px) {
          padding-top: 216px;
          padding-bottom: 160px;
        }
        @media screen and (min-width: 1280px) {
          padding-bottom: 216px;
        }
      }
    }
  }
  .kv__img {
    position: relative;
    &.kv__img--left {
      padding-top: 120px;
      padding-left: 0;
      padding-right: 0;
      margin-right: -100%;
      width: calc((100% - 48px) - 7px);
      @media screen and (min-width: 768px) {
        width: 50%;
      }
      @media screen and (min-width: 1024px) {
        padding-top: 178px;
        padding-right: calc(var(--bs-gutter-x) * .5);
        margin-right: 0;
        width: 50%;
      }
    }
    &.kv__img--right {
      padding-left: 0;
      padding-right: 0;
      right: -20%;
      width: calc((100% - 48px) * 3 / 4);
      @media screen and (min-width: 768px) {
        right: 0;
        width: calc( (696px / 4) + ((100% - 720px) / 2));
      }
      @media screen and (min-width: 1024px) {
        width: calc( (936px / 4) + ((100% - 960px) / 2));
      }
      @media screen and (min-width: 1280px) {
        padding-left: calc(var(--bs-gutter-x) * .5);
        width: calc( (1200px / 4) + ((100% - 1224px) / 2));
      }
      img {
        margin-top: -85px;
        @media screen and (min-width: 768px) {
          margin-top: -60px;
        }
        @media screen and (min-width: 1024px) {
          margin-top: -85px;
        }
        @media screen and (min-width: 1280px) {
          margin-top: -200px;
        }
      }
    }
  }
  .ratio {
    position: relative;
    &::before {
      content: '';
      display: block;
      padding-top: 136.581920904%;
    }
    img {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
  .kv__text {
    position: relative;
    color: $white;
    &::before {
      content: '';
      display: block;
      padding-top: 133.5%;
      @media screen and (min-width: 768px) {
        display: none;
      }
    }
    > .row {
      > div:nth-child(1), 
      > div:nth-child(2) {
        position: absolute;
        top: 13.5%;
        @media screen and (min-width: 768px) {
          position: static;
        }
      }
      > div:nth-child(1) {
        left: 0;
      }
      > div:nth-child(2) {
        right: 0;
      }
    }
  }
  .h1 {
    display: table;
    margin-top: 0;
    margin-left: auto;
    font-size: 3.5rem;
    font-weight: normal;
    line-height: 0.8645833333;
    text-transform: capitalize;
    white-space: break-spaces;
    @media screen and (min-width: 768px) {
      margin-bottom: 60px;
      margin-left: 0;
    }
    @media screen and (min-width: 1024px) {
      font-size: 4.5rem;
    }
    @media screen and (min-width: 1280px) {
      margin-bottom: 72px;
      font-size: 6rem;
    }
  }
  h3 {
    display: flex;
    align-items: center;
    gap: 16px;
    margin: 0;
    font-size: $font-size-base;
    font-weight: normal;
    text-transform: uppercase;
    writing-mode: vertical-rl;
    @media screen and (min-width: 1024px) {
      font-size: 1.5rem;
    }
    &::before {
      content: '';
      display: block;
      width: 24px;
      height: 1px;
      background-color: currentColor;
      transform: rotate(20deg);
    }
  }
  .display-2 {
    position: absolute;
    bottom: 18px;
    left: 36px;
    display: none;
    margin: 0;
    color: $primary-400;
    font-size: 5rem;
    text-transform: capitalize;
    white-space: break-spaces;
    mix-blend-mode: overlay;
    @media screen and (min-width: 768px) {
      display: block;
    }
    @media screen and (min-width: 1280px) {
      bottom: 34px;
      left: 72px;
      font-size: 7rem;
    }
  }
  p {
    margin-top: 24px;
    margin-bottom: 32px;
    @media screen and (min-width: 768px) {
      margin-top: 0;
    }
    @media screen and (min-width: 1280px) {
      margin-bottom: 48px;
    }
  }
</style>
