<template>
  <section>
    <div class="container">
      <Title>marquee</Title>
    </div>
    <div class="container-fluid">
      <MarqueeRingStand
        :emitId="'marquee-ring-stand-1'"
        :emitWidth="140"
      />
      <MarqueeRingStand
        :emitId="'marquee-ring-stand-2'"
        :emitWidth="126"
      />
      <MarqueeRingLie
        :emitId="'marquee-ring-lie-1'"
        :emitWidth="220"
      />
      <MarqueeRingLie
        :emitId="'marquee-ring-lie-2'"
        :emitWidth="92"
      />
      <MarqueeRingLie
        :emitId="'marquee-ring-lie-3'"
        :emitWidth="110"
      />
      <div class="slick-slider-marquee">
        <VueSlickCarousel v-bind="settings">
          <div
            v-for="(item, index) in value"
            :key="`Marquee-${index}`"
          >
            {{ item }}
          </div>
        </VueSlickCarousel>
        <VueSlickCarousel v-bind="settings">
          <div
            v-for="(item, index) in value"
            :key="`Marquee-${index}`"
          >
            {{ item }}
          </div>
        </VueSlickCarousel>
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
    data() {
      return {
        value: this.emitData,
        settings: {
          speed: 5000,
          autoplay: true,
          autoplaySpeed: 0,
          centerMode: true,
          cssEase: 'linear',
          slidesToShow: 1,
          slidesToScroll: 1,
          variableWidth: true,
          infinite: true,
          initialSlide: 1,
          arrows: false,
          buttons: false
        },
      }
    },
    props: ['emit-data'],
    components: { VueSlickCarousel },
    mounted() {
      let temp = [];
      this.emitData.forEach((element) => {
        temp.push(element);
      });
      this.value = temp;
      this.scrollAnimation();
    },
    methods: {
      scrollAnimation() {
        gsap.to('#marquee-ring-stand-1, #marquee-ring-stand-2', {
          y: 50,
          duration: 1,
          scrollTrigger: {
            trigger: ".slick-slider-marquee",
            scrub: true
          }
        });
        gsap.to('#marquee-ring-lie-2', {
          y: -50,
          duration: 1,
          scrollTrigger: {
            trigger: ".slick-slider-marquee",
            scrub: true
          }
        });
        gsap.to('#marquee-ring-lie-1, #marquee-ring-lie-3', {
          y: 100,
          duration: 1,
          scrollTrigger: {
            trigger: ".slick-slider-marquee",
            scrub: true
          }
        });
      }
    },
  }

</script>

<style lang="scss" scoped>
  @import "@/assets/sass/import";

  .container-fluid {
    position: relative;
    margin-top: 96px;
    margin-bottom: 198px;
    padding-left: 0;
    padding-right: 0;
    border-top: 1px solid rgba($black, .1);
    border-bottom: 1px solid rgba($black, .1);
  }
</style>

<style lang="scss">
  @import "@/assets/sass/import";

  .section--marquee {
    overflow: hidden;

    .slick-slider {
      position: relative;
      left: 312px;
      + .slick-slider {
        margin-top: 18px;
        left: 0;
        border-top: 1px solid rgba($black, .1);
      }
    }
    .slick-track {
      display: flex;
      flex-wrap: nowrap;
      white-space: nowrap;
    }
    .slick-list {
      overflow: visible;
    }
    .slick-slide {
      float: none;
      padding-top: 16px;
      padding-bottom: 20px;
      padding-right: 32px;
      color: $primary-300;
      font-size: 80px;
      line-height: 1;
      text-transform: capitalize;
      @media screen and (min-width: 768px) {
        padding-top: 0;
        padding-bottom: 0;
        font-size: 120px;
        line-height: 1.3;
      }

      > div {
        display: flex;
        align-items: center;
        gap: 32px;
        &::after {
          content: '';
          display: block;
          width: 1px;
          height: 48px;
          background-color: $primary-300;
          transform: rotate(20deg);
          @media screen and (min-width: 768px) {
            height: 96px;
          }
        }
      }
    }
  }

  [id*='marquee-ring-'] {
    position: absolute;
  }
  #marquee-ring-lie-1 {
    left: 15%;
    bottom: 0;
    transform: scaleX(-1) rotate(135deg) translateY(-75%) scale(.385);
    z-index: 2;
    @include media-breakpoint-up(md) {
      transform: scaleX(-1) rotate(135deg) translateY(-75%);
      left: calc(((100% - 720px) / 2) + 252px);
    }
    @include media-breakpoint-up(lg) {
      left: calc(((100% - 960px) / 2) + 252px);
    }
    @include media-breakpoint-up(xl) {
      left: calc(((100% - 1224px) / 2) + 252px);
    }
  }
  #marquee-ring-lie-2 {
    top: 0;
    right: 5.6%;
    transform: scaleX(-1) translate(-50%, -50%);
    @include media-breakpoint-up(md) {
      right: calc((100% - 720px) / 2);
    }
    @include media-breakpoint-up(lg) {
      right: calc((100% - 960px) / 2);
    }
    @include media-breakpoint-up(xl) {
      right: calc((100% - 1224px) / 2);
    }
  }
  #marquee-ring-lie-3 {
    display: none;
    bottom: 0;
    transform: scaleX(-1) rotate(160deg) translateY(-75%);
    @include media-breakpoint-up(md) {
      display: block;
      right: calc((100% - 720px) / 2);
    }
    @include media-breakpoint-up(lg) {
      right: calc((100% - 960px) / 2);
    }
    @include media-breakpoint-up(xl) {
      right: calc((100% - 1224px) / 2);
    }
  }
  #marquee-ring-stand-1 {
    left: 3.5%;
    transform: rotate(90deg) translate(-50%, 50%) scale(.45);
    @include media-breakpoint-up(md) {
      transform: rotate(90deg) translate(-50%, 50%);
      left: calc((100% - 720px) / 2);
    }
    @include media-breakpoint-up(lg) {
      left: calc((100% - 960px) / 2);
    }
    @include media-breakpoint-up(xl) {
      left: calc((100% - 1224px) / 2);
    }
  }
  #marquee-ring-stand-2 {
    top: 40%;
    right: 14%;
    transform: translateY(-50%) scale(.55);
    z-index: 2;
    @include media-breakpoint-up(md) {
      top: 175px;
      right: calc(((100% - 720px) / 2) + 152px);
      transform: translateY(-50%);
    }
    @include media-breakpoint-up(lg) {
      right: calc(((100% - 960px) / 2) + 232px);
    }
    @include media-breakpoint-up(xl) {
      right: calc(((100% - 1224px) / 2) + 322px);
    }
  }
</style>
