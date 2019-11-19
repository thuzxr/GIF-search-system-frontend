<template>
  <div>
  <v-gallery :images="imgList" class="image-box">
    <a href="javascript:void(0);" :data-image="img.url" :title="img.title" v-for="img in imgList" :key="img.title">
      <div class="bgbox">
        <div style="position:relative;">
          <img :src="img.url" @click="saveName(img.name)" v-if="!pop">
          <img :src="img.url" @click.stop="popModal(img)" v-if="pop">
        </div>
      </div>
    </a>
  </v-gallery>

  <modal :show="modalShow" @update:show="showModal">
    <h4 slot="header">{{ currImg.title }}</h4>

    <div>
      <div class="row justify-content-center">
        <img :src="currImg.url" style="max-height:300px;">
      </div>
      <hr class="my-4" />
      <div class="row mt-3 align-items-center justify-content-between">
        <div class="col-6">
          <div class="media align-items-center" slot="title">
            <span class="avatar avatar-sm rounded-circle">
              <img src="../assets/dio.jpg">
            </span>
            <span class="mb-0 ml-2 text-primary font-weight-bold">dio brando</span>
          </div>
        </div>
        <div class="col-3">
          <div class="row">
            <div class="col-4">
              <i class="ni ni-satisfied dropdown-item-text text-red"></i>
            </div>
            <div class="col-4">
              <i class="ni ni-favourite-28 dropdown-item-text text-red"></i>
            </div>
          </div>
        </div>
        <!-- <div class="col-2 dropdown-item-text pull-right">
          <i class="ni ni-favourite-28"></i>
        </div> -->
        <!-- <div class="col-1 dropdown-item-text pull-right">

        </div> -->
      </div>
    </div>
  </modal>
  </div>
</template>

<script>
import store from '@/store'
export default {
  name: 'ImgGallery',
  data () {
    return {
      modalShow: false,
      currImg: {
        name: '',
        url: '',
        title: ''
      }
    }
  },
  methods: {
    saveName: function (name) {
      store.commit('setImgName', name)
      console.log(store.state.lastClick.name)
    },
    showModal: function (visibility) {
      this.modalShow = visibility
    },
    popModal (img) {
      this.currImg = img
      this.showModal(true)
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
