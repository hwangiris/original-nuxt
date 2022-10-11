<template>
  <div>
    <Header />
    <Nuxt />
    <Footer />
  </div>
</template>

<script>
  export default {
    mounted() {
      this.$nextTick(() => {
        this.$nuxt.$loading.start()
        setTimeout(() => 
          this.$nuxt.$loading.finish(), 2200
        )
      })
    }
  }
</script>