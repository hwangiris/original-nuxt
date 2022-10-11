<template>
  <Transition name="fade">
    <div v-show="loading" class="loading">
      loading
      <div class="progress__bar">
        <div class="progress__item"></div>
      </div>
    </div>
  </Transition>
</template>

<script>
  export default {
    data() {
      return {
        loading: false
      }
    },
    methods: {
      start () {
        this.loading = true
      },
      finish () {
        this.loading = false
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import "@/assets/sass/import";

  .loading {
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 24px;
    width: 100%;
    height: 100%;
    color: $white;
    font-size: 1.25rem;
    text-transform: capitalize;
    background-color: $primary-400;
    z-index: 5;
  }
  .progress__bar {
    position: relative;
    width: 140px;
    height: 1px;
    background-color: rgba($white, 0.3);
    .progress__item {
      width: 0%;
      height: 100%;
      background-color: $white;
      animation: progress 2s forwards alternate ease-in-out;
    }
  }

  .fade-enter-active,
  .fade-leave-active {
    transition: opacity 0.5s ease;
  }

  .fade-enter-from,
  .fade-leave-to {
    opacity: 0;
  }

  @keyframes progress {
    0% {
      width: 0%;
    }
    100% {
      width: 100%;
    }
  }
</style>
