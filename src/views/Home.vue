<template>
  <div class="home">
    <el-table
      :data="tableData"
      style="width: 100%">
      <el-table-column
        fixed
        label="Date"
        prop="date"
        width="150">
      </el-table-column>
      <el-table-column
        label="Name"
        prop="name"
        width="120">
      </el-table-column>
      <el-table-column
        label="State"
        prop="state"
        width="120">
      </el-table-column>
      <el-table-column
        label="City"
        prop="city"
        width="120">
      </el-table-column>
      <el-table-column
        label="Address"
        prop="address"
        width="300">
      </el-table-column>
      <el-table-column
        label="Zip"
        prop="zip"
        width="120">
      </el-table-column>
      <el-table-column
        fixed="right"
        label="Operations"
        width="120">
        <template >
          <el-button size="small" type="text" @click="handleClick">Detail</el-button>
          <el-button size="small" type="text">Edit</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data() {
    return {
      list: [1, 2, 3],
      message: '未更新',
      tableData: [{
        date: '2016-05-03',
        name: 'Tom',
        state: 'California',
        city: 'Los Angeles',
        address: 'No. 189, Grove St, Los Angeles',
        zip: 'CA 90036',
        tag: 'Home'
      }, {
        date: '2016-05-02',
        name: 'Tom',
        state: 'California',
        city: 'Los Angeles',
        address: 'No. 189, Grove St, Los Angeles',
        zip: 'CA 90036',
        tag: 'Office'
      }, {
        date: '2016-05-04',
        name: 'Tom',
        state: 'California',
        city: 'Los Angeles',
        address: 'No. 189, Grove St, Los Angeles',
        zip: 'CA 90036',
        tag: 'Home'
      }, {
        date: '2016-05-01',
        name: 'Tom',
        state: 'California',
        city: 'Los Angeles',
        address: 'No. 189, Grove St, Los Angeles',
        zip: 'CA 90036',
        tag: 'Office'
      }],
    }
  },
  components: {
    // About
  },
  methods: {
    handleClick() {
      console.log('click')
    },
    changeList() {
    },
    clickHandle() {
      this.$router.push({path: '/about'})
      console.log('clickHandle')
    },
    moveHandle1() {
      console.log('moveHandle1')
    },
    moveHandle2() {
      console.log('moveHandle2')
    }
  },
  created() {

    function a() {
      console.log(this)
      console.log('a')
    }

    this.clickHandle = debounce(this.clickHandle, 1000)

    // this.moveHandle = throttle(this.moveHandle, 1000)

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
    this.message = '已更新'
    console.log(this.$el.textContent) // => '未更新'
    this.$nextTick(function () {
      console.log(this.$el.textContent) // => '已更新'
    })
  },
  beforeRouteLeave(to, from, next) {
    document.body.removeEventListener('mouseover', this.moveHandle1)
    next()
  }
}
</script>

<style lang="scss" scoped>
.home {
  width: 800px;
}
</style>
