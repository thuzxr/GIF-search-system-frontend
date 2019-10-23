<template>
  <v-gallery :images="imgList" class="image-box">
    <a href="javascript:void(0);" :data-image="img.url" :title="img.title" v-for="img in imgList" :key="img.title">
      <div class="bgbox">
        <img :src="img.url">
      </div>
      <div style="position:relative;">
        <img :src="this.imgLike" />
        <input type="button" value="按钮" style="position:absolute; right:10px; top:10px;" />
      </div>
    </a>
  </v-gallery>
</template>

<script>
import picNotfind from '@/assets/timg.jpg'
export default {
  name: 'ImgGallery',
  data () {
    return {
      imgLike: picNotfind
    }
  },
  props: {
    imgList: {
      type: Array,
      required: true
    }
  }
}
</script>

<style>

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
