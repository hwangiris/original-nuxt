<template>
  <section>
    <div class="container">
      <div class="col--grid">
        <Title>Collection</Title>
        <div
          v-for="(data, index) in emitData"
          :key="`collection-${data.id}`"
          class="card"
          :class="`card--${index+1}`"
          data-aos="fade-up"
          :data-aos-delay="100 * index"
        >
          <div class="card-img">
            <img :src="data.img" :alt="data.title">
          </div>
          <div class="btn btn--solid">
            {{ data.title }}
          </div>
          <a
            :href="`/collection/${data.id}`"
            class="stretched-link"
          ></a>
        </div>
      </div>
      <div class="col--btn">
        <a href="#!" class="btn btn--icon_text">
          <i></i> view All
        </a>
      </div>
    </div>
  </section>
</template>

<script>
import Title from "./Title.vue";
  export default {
    data() {
        return {};
    },
    props: ["emit-data"],
    components: { Title }
}
</script>

<style lang="scss" scoped>
  @import "@/assets/sass/import";

  section {
    margin-bottom: 160px;
  }
  .col--grid {
    align-items: flex-start;
    gap: 24px;
    @include media-breakpoint-up(md) {
      display: grid;
      grid-template-rows: 134px auto 15px auto;
      grid-template-columns: 2fr 3fr;
    }
    @include media-breakpoint-up(lg) {
      grid-template-rows: 254px 18px auto;
      grid-template-columns: 3fr 5fr 4fr;
    }
  }
  .col--btn {
    margin-top: 40px;
    text-align: right;
    @include media-breakpoint-up(lg) {
      margin-top: 6px;
    }
  }
  h2 {
    padding-bottom: 16px;
    margin-bottom: 0;
    grid-column: 1;
    grid-row: 1;
    @include media-breakpoint-up(md) {
      padding-bottom: 104px;
    }
    @include media-breakpoint-up(lg) {
      padding-top: 118px;
    }
  }
  .card {
    position: relative;
    margin-top: 8px;
    @include media-breakpoint-up(md) {
      margin-top: 0;
    }
    .card-img {
      position: relative;
      overflow: hidden;
      &::after {
        content: '';
        display: block;
        padding-top: 117.30769231%;
      }
      > * {
        position: absolute;
        top: 50%;
        left: 50%;
        max-width: none;
        width: 100%;
        height: 100%;
        object-fit: cover;
        transform: translate(-50%, -50%);
        transition: all .5s;
      }
    }

    .btn--solid {
      position: absolute;
      bottom: 24px;
      left: 50%;
      transform: translateX(-50%);
    }

    &.card--1 {
      grid-column: 1;
      grid-row-start: 2;
      grid-row-end: 3;
      @include media-breakpoint-up(lg) {
        grid-row-end: 4;
      }
      .card-img::after {
        @include media-breakpoint-up(md) {
          padding-top: 129.0780141844%;
        }
      }
    }
    &.card--2 {
      grid-column: 2;
      grid-row-start: 1;
      grid-row-end: 4;
      @include media-breakpoint-up(lg) {
        margin-top: 128px;
      }
      .card-img::after {
        @include media-breakpoint-up(md) {
          padding-top: 134.7736625514%;
        }
      }
    }
    &.card--3 {
      grid-column: 1;

      @include media-breakpoint-up(lg) {
        grid-column: 3;
        grid-row: 1 / span 2;
      }
      .card-img::after {
        @include media-breakpoint-up(md) {
          padding-top: 77.0833333333%;
        }
      }
    }
    &.card--4 {
      grid-column: 2;
      grid-row: 4 / span 1;

      @include media-breakpoint-up(md) {
        width: 75%;
      }
      @include media-breakpoint-up(lg) {
        grid-column: 3;
        grid-row: 3 / span 1;
      }
      .card-img::after {
        @include media-breakpoint-up(md) {
          padding-top: 106.7375886525%;
        }
      }
    }

    &:hover, &:active {
      .card-img img {
        width: 110%;
        height: 110%;
      }
    }
    &:hover {
      .btn--solid {
        color: $white;
        background-color: $primary-400;
      }
    }
    &:active {
      .btn--solid {
        color: $white;
        background-color: $primary-500;
      }
    }
  }
</style>
