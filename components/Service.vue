<template>
  <section>
    <div class="container">
      <Title>SERVICE</Title>
    </div>
    <VueSlickCarousel v-bind="settings">
      <div
        v-for="(data, index) in emitData"
        :key="`Service-${index}`"
      >
        <div v-html="data.icon" class="placement--svg"></div>
        <h3>{{ data.title }}</h3>
        <p>{{ data.preface }}</p>
      </div>
    </VueSlickCarousel>
  </section>
</template>

<script>
  import VueSlickCarousel from 'vue-slick-carousel'

  export default {
    data () {
      return {
        settings: {
          slidesToShow: 2,
          cssEase: 'fade',
          arrows: false,
          infinite: false,
        }
      }
    },
    props: ['emit-data'],
    components: { VueSlickCarousel },
  }
</script>

<style lang="scss">
  @import "@/assets/sass/import";

  section.section--service {
    $service: &;

    margin-bottom: 70px;
    color: $gray-300;

    h2 {
      margin-bottom: 56px;
    }
    h3 {
      margin-bottom: 16px;
      font-weight: bold;
      white-space: break-spaces;
    }

    .slick-track {
      display: flex !important;
      border: solid rgba($black, 0.1);
      border-width: 1px 1px 1px 0;
    }
    .slick-slide {
      float: none !important;
      height: auto !important;
      padding: 24px;
      border-left: 1px solid rgba($black, 0.1);
      @media screen and (min-width: 768px) {
        padding: 40px;
      }

      > * > * {
        display: flex !important;
        flex-direction: column;
      }

      &:nth-child(odd) {
        svg {
          margin: 35px 64px 14px 64px;
          @media screen and (min-width: 768px) {
            margin: 48px 60px;
          }
        }
      }
      &:nth-child(even) {
        .placement--svg {
          order: 3;
        }
        svg {
          margin: 22px 58px 14px;
          @media screen and (min-width: 768px) {
            margin: 40px 52px;
          }
        }
        p {
          margin-bottom: 16px;
          @media screen and (min-width: 768px) {
            margin-bottom: 69px;
          }
        }
      }

      svg {
        width: auto;
        height: 160px;
        @media screen and (min-width: 768px) {
          height: 160px;
        }
  
        path {
          stroke-dasharray: 300;
          stroke-dashoffset: 300;
          @at-root #{$service}.aos-animate .slick-slide.slick-active svg path {
            animation: pathAnimate 1s forwards alternate ease-in-out;
          }
        }
      }
    }
  }

  @keyframes pathAnimate {
    0%   {
      stroke-dasharray: 300;
      stroke-dashoffset: 300;
    }
    100% {
      stroke-dasharray: 300;
      stroke-dashoffset: 0;
    }
  }
</style>