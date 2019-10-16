<template>
  <div>
    <div>
      <input v-model="text" />
    </div>
    <div>
      <button @click="search">搜索</button>
    </div>
    <div>
      <page v-bind:arr="[total, item]" @click.native="getImgList(arr)"></page>
    </div>
    <div class="deit">
      <div class="crumbs">
        <el-breadcrumb separator="/">
          <el-breadcrumb-item>
            <i class="el-icon-date"></i> 数据管理
          </el-breadcrumb-item>
          <el-breadcrumb-item>用户列表</el-breadcrumb-item>
        </el-breadcrumb>
        <div class="cantainer">
          <el-table
            style="width: 100%;"
            :data="imgList.slice((currentPage-1)*pagesize,currentPage*pagesize)"
          >
            <el-table-column type="index" width="50"></el-table-column>
            <el-table-column label="日期" prop="date" width="180"></el-table-column>
              <template slot-scope="scope">
                <img :src="ImgSrc"/>
              </template>
          </el-table>
          <el-pagination
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :current-page="currentPage"
            :page-sizes="[5, 10, 20, 40]"
            :page-size="pagesize"
            layout="total, sizes, prev, pager, next, jumper"
            :total="imgList.length"
          ></el-pagination>
        </div>
      </div>
    </div>
    <div>
      <p>{{ImgTitle}}</p>
    </div>
    <div>
      <img :src="ImgSrc" />
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import picStart from '@/assets/start.gif'
import picNotfind from '@/assets/timg.jpg'
import page from '@/components/page'
axios.defaults.timeout = 5000

export default {
  data () {
    return {
      currentPage: 1,
      pagesize: 10,
      imgList: ['http://photocdn.sohu.com/20150605/mp17789131_1433477044749_5.gif',
        'http://photocdn.sohu.com/20150605/mp17789131_1433477044749_5.gif'],
      text: '',
      ImgSrc: picStart,
      ImgTitle: '点击按钮开始搜索',
      item: 1,
      total: 30
    }
  },
  methods: {
    search: function () {
      // var tmp = 'arr[0]' + this.arr[0]
      console.log('123123')
      /* axios.get('http://127.0.0.1:8000/search?key=' + this.text).then(response => {
        console.log(response)
        if (response.data.status === 'succeed') {
          this.ImgSrc = response.data.result[0].Oss_url
          this.ImgTitle = response.data.result[0].Title
        } else {
          this.ImgSrc = picNotfind
          this.ImgTitle = 'Oops! 找不到你想要的Gif'
        }
      })
      console.log(this.text) */
      this.ImgSrc = picNotfind
      this.ImgTitle = 'Oops! 找不到你想要的Gif'
    },
    getImgList (arr) {
      var tmp = 'arr[0] ' + arr[0]
      console.log(tmp)
      console.log('123123')
      this.pageNum = arr[0]
      if (arr[1]) {
        this.item = arr[1]
      }
    }
  },
  components: {
    page: page
  }
}
</script>
