<template>
  <div>
    <div class="hello">    
    <picture-input 
      ref="pictureInput"
      width="300" 
      :crop="false"
      height="300" 
      margin="16" 
      accept="image/jpeg,image/png,image/gif" 
      size="10" 
      button-class="btn"
      :custom-strings="{
        upload: '<h1>Bummer!</h1>',
        drag: 'Drag a 😺 GIF or GTFO'
      }"
      @change="onChange">
    </picture-input>
  </div>
    <el-upload
      class="upload-demo"
      ref="upload"
      action="''"
      accept=".gif,.GIF"
      :http-request="uploadGif"
      :auto-upload="false">
      <div slot="tip" class="el-upload__tip">只能上传gif文件</div>
      <el-button slot="trigger" size="small" type="primary">选取文件</el-button>
      <el-button style="margin-left: 10px;" size="small" type="success" @click="upload">上传到服务器</el-button>
    </el-upload>
  </div>
</template>

<script>
import OSS from 'ali-oss'
import { Base64 } from 'js-base64'
import PictureInput from 'vue-picture-input'

export default {
  data () {
    return {
      title: '',
      label_1: '',
      label_2: '',
      label_3: '',
      label_4: '',
      label: '',
      counter: 0
    }
  },
  components: {
    PictureInput
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
      this.label = this.label_1
      if (this.label_2 != '') {
        this.label += ' ' + this.label_2
      }
      if (this.label_3 != '') {
        this.label += ' ' + this.label_3
      }
      if (this.label_4 != '') {
        this.label += ' ' + this.label_4
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
        let nowtime = new Date().toLocaleString()
        let str = nowtime + this.title + String(this.counter)
        this.counter += 1
        let name = Base64.encode(str)
        console.log(name)
        let result = client.put(name + '.gif', item.file)
        console.log(result)
        name = name.replace('+', '%2B')
        this.$api.upload(this.label, name, this.title)
      } catch (e) {
        console.log(e)
      }
    },
    onChange () {
      console.log('New picture selected!')
      if (this.$refs.pictureInput.image) {
        console.log('Picture loaded.')
      } else {
        console.log('FileReader API not supported: use the <form>, Luke!')
      }
    }
  }
}
</script>
