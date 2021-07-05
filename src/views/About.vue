<template>
  <transition appear name="slide">
    <h1 class="h1">This is an about page</h1>
  </transition>
</template>

<script>
export default {
  beforeRouteEnter(to, from, next) {
    // next(false)
    next()
  },
}
</script>

<style lang="scss" scoped>
  .slide-enter-active, .slide-leave-active {
    transition: all 0.3s
  }

  .slide-enter, .slide-leave-to {
    transform: translate3d(100%, 0, 0)
  }
</style>
