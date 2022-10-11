<template>
  <section>
    <div class="container">
      <Title>marquee</Title>
    </div>
    <div class="container-fluid">
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
  </section>  
</template>

<script>
  import VueSlickCarousel from 'vue-slick-carousel'

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
    },
  }

</script>
<style lang="scss" scoped>
  @import "@/assets/sass/import";

  .container-fluid {
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
</style>
