<template>
  <section>
    <div class="row">
      <Ring
        class="kv__ring"
        :emitId="'kv__ring'"
        :emitWidth="185"
      />
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
  import VueSlickCarousel from 'vue-slick-carousel'
  import { gsap } from 'gsap';
  import { ScrollTrigger } from 'gsap/ScrollTrigger';

  gsap.registerPlugin(ScrollTrigger);

  export default {
    data () {
      return {}
    },
    props: ['emit-data'],
    mounted() {
      this.scrollAnimation();
    },
    methods: {
      scrollAnimation() {
        gsap.to('.kv__ring', {
          y: 50,
          duration: 1,
          scrollTrigger: {
            trigger: ".section--concept",
            scrub: true
          }
        });
        gsap.to('.kv__img--left', {
          y: 100,
          duration: 1,
          scrollTrigger: {
            trigger: ".section--concept",
            scrub: true
          }
        });
        gsap.to('.kv__img--right', {
          y: -100,
          duration: 1,
          scrollTrigger: {
            trigger: ".section--concept",
            scrub: true
          }
        });
      }
    },
  }
</script>

<style lang="scss" scoped>
  @import "@/assets/sass/import";

  section {
    position: relative;
    margin-bottom: 120px;
    overflow: hidden;
    @include media-breakpoint-up(lg) {
      margin-bottom: 0;
      padding-bottom: 120px;
    }
    @include media-breakpoint-up(xl) {
      padding-bottom: 200px;
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
      @include media-breakpoint-up(lg) {
        height: calc(100% - 180px);
      }
      @include media-breakpoint-up(xl) {
        height: calc(100% - 320px);
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
      @include media-breakpoint-up(xl) {
        position: static;
      }
    }
    > .container {
      z-index: 1;
      @include media-breakpoint-up(xl) {
        position: absolute;
        top: 0;
        left: 50%;
        height: calc(100% - 200px);
        transform: translateX(-50%);
      }

      > .row {
        align-items: end;
        height: 100%;
        padding-top: 120px;
        padding-bottom: 40px;
        @include media-breakpoint-up(md) {
          padding-top: 192px;
        }
        @include media-breakpoint-up(lg) {
          padding-top: 216px;
          padding-bottom: 160px;
        }
        @include media-breakpoint-up(xl) {
          padding-bottom: 216px;
        }
      }
    }
  }
  .kv__ring {
    position: absolute;
    top: 146px;
    left: 22%;
    width: auto;
    padding: 0;
    transform: translate(-50%, -50%) scale(.42);
    z-index: 2;
    @include media-breakpoint-up(md) {
      top: 116px;
      left: 50%;
      transform: translate(-50%, -50%);
    }
  }
  .kv__img {
    position: relative;
    &.kv__img--left {
      top: -72px;
      padding-top: 120px;
      padding-left: 0;
      padding-right: 0;
      margin-right: -100%;
      width: calc((100% - 48px) - 7px);
      @include media-breakpoint-up(md) {
        width: 50%;
      }
      @include media-breakpoint-up(lg) {
        padding-top: 178px;
        padding-right: calc(var(--bs-gutter-x) * .5);
        margin-right: 0;
        width: 50%;
      }
    }
    &.kv__img--right {
      top: 72px;
      padding-left: 0;
      padding-right: 0;
      right: -20%;
      width: calc((100% - 48px) * 3 / 4);
      @include media-breakpoint-up(md) {
        right: 0;
        width: calc( (696px / 4) + ((100% - 720px) / 2));
      }
      @include media-breakpoint-up(lg) {
        width: calc( (936px / 4) + ((100% - 960px) / 2));
      }
      @include media-breakpoint-up(xl) {
        padding-left: calc(var(--bs-gutter-x) * .5);
        width: calc( (1200px / 4) + ((100% - 1224px) / 2));
      }
      img {
        margin-top: -85px;
        @include media-breakpoint-up(md) {
          margin-top: -60px;
        }
        @include media-breakpoint-up(lg) {
          margin-top: -85px;
        }
        @include media-breakpoint-up(xl) {
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
      @include media-breakpoint-up(md) {
        display: none;
      }
    }
    > .row {
      > div:nth-child(1), 
      > div:nth-child(2) {
        position: absolute;
        top: 13.5%;
        @include media-breakpoint-up(md) {
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
    @include media-breakpoint-up(md) {
      margin-bottom: 60px;
      margin-left: 0;
    }
    @include media-breakpoint-up(lg) {
      font-size: 4.5rem;
    }
    @include media-breakpoint-up(xl) {
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
    @include media-breakpoint-up(lg) {
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
    @include media-breakpoint-up(md) {
      display: block;
    }
    @include media-breakpoint-up(xl) {
      bottom: 34px;
      left: 72px;
      font-size: 7rem;
    }
  }
  p {
    margin-top: 24px;
    margin-bottom: 32px;
    @include media-breakpoint-up(md) {
      margin-top: 0;
    }
    @include media-breakpoint-up(xl) {
      margin-bottom: 48px;
    }
  }
</style>
