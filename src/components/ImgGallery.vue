<template>
  <div>
  <v-gallery :images="imgList" class="image-box">
    <a href="javascript:void(0);" :data-image="img.url" :title="img.title" v-for="img in imgList" :key="img.title">
      <div class="bgbox">
        <div style="position:relative;">
          <img :src="img.url" v-if="!pop">
          <img :src="img.url" @click.stop="clickImg(img)" v-if="pop">
        </div>
      </div>
    </a>
  </v-gallery>
  </div>
</template>

<script>
import store from '@/store'
export default {
  name: 'ImgGallery',
  methods: {
    clickImg (img) {
      store.commit('setImgName', name)
      this.$emit('clickImg', img)
    }
  },
  props: {
    imgList: {
      type: Array,
      required: true
    },
    pop: {
      type: Boolean,
      default: true
    }
  }
}
</script>

<style>
.likeCss{
  color: #FF69B4;
  background-color: #FF69B4;
  border-color: #FF69B4;
}
.el-button--primary{
  color: #fff;
  background-color: #FF69B4;
  border-color: #FF69B4;
}
.el-button--primary:hover{
  background-color: #FF69B4;
  border-color: #FF69B4;
}
.el-button--primary:focus{
  background-color: #FF69B4;
  border-color: #FF69B4;
}
.red {
  color: #fff!important;
  background-color: orange!important;
  font-size: 14px;
}
.blue {
  color: blue!important;
  font-size: 20px;
}
.image-box a {
  clear: both;
  display: inline-block;
  margin: 0 10px 10px 0;
  position: relative;
  text-align: center;
}

.image-box a .bgbox {
  background-color: #FFFFFF;
  height: 150px;
  display: table-cell;
  vertical-align: middle;
  padding: 4px;
  border-radius: 2px;
}

.image-box a .bgbox img {
  width: 200px;
  display: block;
}

.image-box a .img-title {
  bottom: 5px;
  display: block;
  text-align: center;
  color: #999999;
  padding-top: 5px;
}

.image-box a:hover .img-title {
  color: #232323;
}

</style>
