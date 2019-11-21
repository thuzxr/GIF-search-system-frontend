<template>
  <div>
     <base-header class="header pt-6 d-flex align-items-center"
        style="background-position: center top;">
        <!-- Mask -->
        <span :class="'mask bg-gradient-' + color +' opacity-8'"></span>
        <!-- Header container -->
        <div class="container-fluid">
            <div class="row justify-content-center">
                <div class="col-12 text-center">
                    <h1 class="display-2 text-white">Manage</h1>
                    <p class="text-white mt-0 mb-5">This is upload page. You can share you favourite gif to others!</p>
                </div>
            </div>
        </div>
      </base-header>
    <div class="container">
      <div class="row justify-content-between" v-show="!noImg">
        <div class="col-4">
          <div class="row justify-content-start ml-2">
            <div class="text-center">
              <base-button type="white" class="mt-2 btn shadow-0" @click="clear(true)">approve all</base-button>
            </div>
          </div>
        </div>
        <div class="col-4">
          <div class="row justify-content-end mr-2">
            <div class="text-center">
              <base-button type="white" class="mt-2 btn shadow-0" @click="clear(false)">deny all</base-button>
            </div>
          </div>
        </div>
      </div>
      <div class="row justify-content-center"
          :class="[noImg ? ' my-xl-9 my-lg-9 my-md-7 my-sm-5 my-3' : 'my-5' ]">
        <div class="col-xl-6 col-md-8 col-10" v-show="noImg">
          <div class="card card-profile shadow">
            <div class="card-body pt-0 pt-4">
              <div class="text-center pt-1">
                <h4>no verifying gifs yet~ </h4>
              </div>
            </div>
          </div>
        </div>
        <img-gallery v-bind:imgList="imgList" :pop="true" @clickImg="clickImg" v-show="!noImg"></img-gallery>
      <modal :show="modalShow" @update:show="showModal">
            <h4 slot="header">{{ modalImg.title }}</h4>
      <div>
        <div class="row justify-content-center">
          <img :src="modalImg.url" style="max-height:300px; max-width: 90%">
          <!-- <img src="../assets/start.jpg" style="max-height:300px; max-width: 90%;"> -->
        </div>
        <hr class="my-4" />
        <div class="row mt-3 align-items-center justify-content-between">
          <div class="col-6">
            <base-button type="vue" class="mt-2 ml-md-6 ml-lg-8 btn shadow-0" @click.stop='remove(true)'>approve</base-button>
          </div>
          <div class="col-6">
            <base-button type="vue" class="mt-2 ml-md-6 ml-lg-8 btn shadow-0" @click.stop='remove(false)'>deny</base-button>
          </div>
        </div>
      </div>
      </modal>
      </div>
    </div>
  </div>
</template>

<script>
import ImgGallery from '../components/ImgGallery.vue'

export default {
  name: 'Manage',
  data () {
    return {
      imgList: [],
      err: false,
      modalShow: false,
      modalImg: {
        name: '',
        url: '',
        title: ''
      }
    }
  },
  computed: {
    noImg () {
      return (this.err || !this.imgList || this.imgList.length === 0)
    },
    color () {
      return 'purple'
    }
  },
  methods: {
    clickImg: function (img) {
      this.modalImg = img
      this.showModal(true)
    },
    showModal: function (visibility) {
      this.modalShow = visibility
    },
    clear: function (approve) {
      let namelist = ''
      for (let img of this.imgList) {
        namelist += img.name + ' '
      }
      this.imgList = []
      if (!approve) {
        this.$api.deleteVerify(namelist).then(res => {
          this.$notify('denied all gifs!', 'success')
        }).catch(err => {
          alert(err)
          console.log(err)
        })
      } else {
        this.$api.addVerify(namelist).then(res => {
          this.$notify('approved all gifs!', 'success')
        }).catch(err => {
          alert(err)
          console.log(err)
        })
      }
    },
    remove: function (approve) {
      var i = 0
      for (i = 0; i < this.imgList.length; i++) {
        if (this.imgList[i].name === this.modalImg.name) {
          break
        }
      }
      this.imgList.splice(i, 1)
      if (approve) {
        this.$api.deleteVerify(this.modalImg.name).then(res => {
          this.$notify('success to remove the gif!', 'success')
        }).catch(err => {
          alert(err)
          console.log(err)
        })
      } else {
        this.$api.addVerify(this.modalImg.name).then(res => {
          this.$notify('success to remove the gif!', 'success')
        }).catch(err => {
          alert(err)
          console.log(err)
        })
      }
      this.showModal(false)
    }
  },
  components: {
    'img-gallery': ImgGallery
  },
  created: function () {
    this.$api.getVerifyList().then(res => {
      console.log('in manage: ', res)
      if (res.result && res.result.length != 0) {
        this.err = false
        var list = res.result
        for (let item of list) {
          item.OSSURL = item.OSSURL.slice(0, 4) + 's' + item.OSSURL.slice(4)
        }
        this.imgList = list.map(function (item) {
          var t = {
            title: item.TITLE,
            url: item.OSSURL,
            thumbnail: item.OSSURL,
            name: item.GifId
          }
          return t
        })
        console.log('in get verify: ', this.imgList[0])
      } else {
        this.err = true
      }
    }).catch(err => {
      console.log(err)
    })
  }
}

</script>
<style>
</style>
