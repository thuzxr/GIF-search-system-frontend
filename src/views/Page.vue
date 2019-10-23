<template>
  <div>
    her
    <ul class="pagination">
      <li v-show="current != 1" @click="goto(1)"><a herf="javascript:void(0)">首页</a></li>
      <li v-show="current != 1" @click="current-- && goto(current)"><a herf="javascript:void(0)">上一页</a></li>
      <li v-for="index in pages" @click="goto(index)" :class="{'active':current == index}" :key="index">
        <a href="javascript:void(0)">{{index}}</a>
      </li>
      <li v-show="allpage != current && allpage != 0 " @click="current++ && goto(current++)"><a href="javascript:void(0)">下一页</a></li>
      <li v-show="allpage != current && allpage != 0 " @click="goto(allpage)"><a href="javascript:void(0)">尾页</a></li>
    </ul>
  </div>
</template>
<script>
export default {
  data () {
    return {
      current: 1, // 当前
      showItem: 5, // 每页显示条数
      allpage: 20 // 当前第n页 ， 也可以 watch current 的变化
    }
  },
  props: ['arr'],
  computed: {
    pages () {
      this.changevalue()
      // this.allpage = 300
      // this.allpage = this.arr[0]
      // this.item = this.arr[1]
      var pag = []
      if (this.current < this.showItem) {
        var i = Math.min(this.showItem, this.allpage)
        while (i) {
          pag.unshift(i--)
        }
      } else { // 当前页数大于显示页数
        var middle = this.current - Math.floor(this.showItem / 2)
        i = this.showItem
        if (middle > (this.allpage - this.showItem)) {
          middle = (this.allpage - this.showItem) + 1
        }
        while (i--) {
          pag.push(middle++)
        }
      }
      return pag
    }
  },
  methods: {
    changevalue () {
      this.allpage = this.arr[0]
      this.item = this.arr[1]
    },
    goto: function (index) {
      if (index === this.current) return
      this.current = index
      this.$emit('getPageList', [this.current, this.item ? this.item : null])
    },
    pagechange: function (p) {
      this.current = p // 页码改变event ， p 为新的 current
      console.log('pagechange', p)
    }
  }
}

</script>
<style>
.pagination {
  position: relative;
}

.pagination li {
  display: inline-block;
  margin: 0 5px;
}

.pagination li a {
  padding: .5rem 1rem;
  display: inline-block;
  border: 1px solid #ddd;
  background: #fff;
  color: #0E90D2
}

.pagination li a:hover {
  background: #eee;
}

.pagination li.active a {
  background: #0E90D2;
  color: #fff
}

</style>
