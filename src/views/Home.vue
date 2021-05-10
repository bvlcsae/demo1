<template>
  <div class="home">
    <About/>
    <div @click="clickHandle">111</div>
  </div>
</template>

<script>
import About from '@/views/About'

export default {
  name: 'Home',
  components: {
    About
  },
  methods: {
    clickHandle() {
      console.log('clickHandle')
    },
    moveHandle() {
      console.log('moveHandle')
    }
  },
  created() {
    function a() {
      console.log(this)
      console.log('a')
    }

    this.clickHandle = debounce(this.clickHandle, 1000)
    this.moveHandle = throttle(this.moveHandle, 3000)

    function debounce(fn, delay) {
      let timer = null

      return function () {
        const _this = this
        const args = arguments
        if (timer) {
          clearTimeout(timer)
        }

        timer = setTimeout(function () {
          fn.apply(_this, Array.prototype.slice.call(args))
        }, delay)
      }
    }

    function throttle(fn, delay) {
      let timer = null

      return function () {
        const _this = this
        const args = arguments
        if (timer) {
          return
        }

        timer = setTimeout(function () {
          fn.apply(_this, Array.prototype.slice.call(args))
          timer = null
        }, delay)
      }
    }
  },
  mounted() {
    document.addEventListener('mousemove', this.moveHandle)
  }
}
</script>
