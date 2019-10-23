<template>
  <v-gallery :images="imgList" class="image-box">
    <a href="javascript:void(0);" :data-image="img.url" :title="img.title" v-for="img in imgList" :key="img.title">
      <div class="bgbox">
        <img :src="img.url">
      </div>
    </a>
  </v-gallery>
</template>

<script>
export default {
  name: 'ImgGallery',
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
