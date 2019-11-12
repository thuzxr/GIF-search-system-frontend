<template>
  <div>
     <base-header class="header pt-6 d-flex align-items-center"
        style="background-position: center top;">
        <!-- Mask -->
        <span class="mask bg-gradient-light opacity-8"></span>
        <!-- Header container -->
        <div class="container-fluid">
            <div class="row justify-content-center">
                <div class="col-12 text-center">
                    <h1 class="display-2 text-white">Theme</h1>
                    <p class="text-white mt-0 mb-5">This is the theme page. You can change the primary color here!</p>
                </div>
            </div>
        </div>
      </base-header>
      <div class="container-fluid mt-5 mb-5">
          <div class="row justify-content-center">
              <div class="col-xl-8 col-lg-8 col-md-10 mb-5 mb-xl-0">
                    <card shadow type="secondary">
                        <div slot="header" class="bg-white border-0">
                            <div class="row align-items-center">
                                <div class="col-12">
                                    <h3 class="mb-0">Theme Color</h3>
                                </div>
                            </div>
                        </div>
                        <template>
                            <form @submit.prevent>
                              <div class="row justify-content-around mt-3 mb-3">
                                <div class="col-lg-4 col-6">
                                    <div class="text-center">
                                      <base-button type="primary" class="my-4 bg-orange border-0" @click.stop="upload">upload</base-button>
                                    </div>
                                </div>
                                <div class="col-lg-4 col-6">
                                    <div class="text-center">
                                      <base-button type="primary" class="my-4 bg-purple border-0" @click.stop="upload">upload</base-button>
                                    </div>
                                </div>
                                <div class="col-lg-4 col-6">
                                    <div class="text-center">
                                      <base-button type="primary" class="my-4 bg-green border-0" @click.stop="upload">upload</base-button>
                                    </div>
                                </div>
                                <div class="col-lg-4 col-6">
                                    <div class="text-center">
                                      <base-button type="primary" class="my-4 bg-red border-0" @click.stop="upload">upload</base-button>
                                    </div>
                                </div>
                                <div class="col-lg-4 col-6">
                                    <div class="text-center">
                                      <base-button type="primary" class="my-4 bg-light border-0" @click.stop="upload">upload</base-button>
                                    </div>
                                </div>
                                <div class="col-lg-4 col-6">
                                    <div class="text-center">
                                      <base-button type="primary" class="my-4 bg-dark border-0" @click.stop="upload">upload</base-button>
                                    </div>
                                </div>
                              </div>
                            </form>
                        </template>
                    </card>
              </div>
            </div>
      </div>
  </div>
</template>

<script>
import PictureInput from 'vue-picture-input'

export default {
  name: 'Manage',
  components: {
    PictureInput
  },
  data () {
    return {
      title: '',
      tag: '',
      tag1: '',
      tag2: '',
      label: ''
    }
  },
  methods: {
    onChange () {
      console.log('New picture selected!')
      if (this.$refs.pictureInput.image) {
        console.log('Picture loaded. ??? ' + this.$refs.pictureInput.image.substr(30, 32))
      } else {
        console.log('FileReader API not supported: use the <form>, Luke!')
      }
    },
    upload: function () {
      if (!this.$refs.pictureInput.image) {
        alert('Please select a gif!')
        return
      }
      if (this.title === '') {
        alert('Please input the title!')
        return
      }
      if (this.tag === '') {
        alert('Please input the main tag!')
        return
      }
      this.label = this.tag
      if (this.tag1 != '') {
        this.label += ' ' + this.tag1
      }
      if (this.tag2 != '') {
        this.label += ' ' + this.tag2
      }
      let name = this.$refs.pictureInput.image.substr(100, 32)
      console.log(name)

      this.$api.upload(this.label, name, this.title, this.$refs.pictureInput.file).then(res => {
        alert('上传成功！')
      }).catch(err => {
        alert(err)
      })
    }
  }
}

</script>
<style>
</style>
