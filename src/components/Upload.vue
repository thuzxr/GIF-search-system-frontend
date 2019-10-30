<template>
  <div>
    <el-input v-model="title" placeholder="请输入标题" style="width: 50%;"></el-input>
    <el-upload
      class="upload"
      ref="upload"
      action="''"
      :http-request="uploadGif"
      :auto-upload="false">
      <el-button slot="trigger" size="small" type="primary">选取文件</el-button>
      <el-button style="margin-left: 10px;" size="small" type="success" @click="upload">上传到服务器</el-button>
      <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
    </el-upload>
    <el-row>
      <el-col :span="6"><el-input v-model="label_1" placeholder="标签1"></el-input></el-col>
      <el-col :span="6"><el-input v-model="label_2" placeholder="标签2"></el-input></el-col>
      <el-col :span="6"><el-input v-model="label_3" placeholder="标签3"></el-input></el-col>
      <el-col :span="6"><el-input v-model="label_4" placeholder="标签4"></el-input></el-col>
  </el-row>
  </div>
</template>

<script>
import OSS from 'ali-oss'
import { axiosInstance } from '../axios_config.js'
export default {
  data () {
    return {
      err_msg: '',
      title: '',
      label_1: '',
      label_2: '',
      label_3: '',
      label_4: '',
      counter: 0
    }
  },
  methods: {
    upload: function () {
      if (this.title === '') {
        alert('Please input title')
        return
      }
      if (this.label_1 === '') {
        alert('Please input labels')
        return
      }
      this.$refs.upload.submit()
    },
    uploadGif: function (item) {
      let client = new OSS({
        region: 'oss-cn-beijing',
        accessKeyId: 'LTAI4FduW6Yf6AZY8ysPGmB9',
        accessKeySecret: '2eayaXUYwzCzK8HuOv8yrqRvtmsxd9',
        bucket: 'gif-dio'
      })
      try {
        let name = 'test' + String(this.counter)
        this.counter += 1
        let result = client.put(name + '.gif', item.file)
        console.log(result)
        axiosInstance({ url: '/backend_upload?keyword=' + this.label_1 + '&name=' + name + '&title=' + this.title })
      } catch (e) {
        console.log(e)
      }
    }
  }
}
</script>
