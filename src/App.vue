<template>
  <div
    id="app"
    class=""
  >
    <div onclick="window.history.back()">back</div>
    <div onclick="window.history.forward()">forward</div>
    <div onclick="window.history.go(0)">refresh</div>
    <router-view/>
  </div>

</template>
<style lang="scss">
</style>
