<template>
  <div>
     <base-header class="header pb-6 pt-6 d-flex align-items-center"
        style="background-position: center top;">
        <!-- Mask -->
        <span :class="'mask bg-gradient-' + color +' opacity-8'"></span>
        <!-- Header container -->
        <div class="container-fluid">
            <div class="row justify-content-center">
                <div class="col-12 text-center">
                    <h1 class="display-2 text-white">Upload</h1>
                    <p class="text-white mt-0 mb-5">This is upload page. You can share your favourite gifs to other people!</p>
                </div>
            </div>
        </div>
      </base-header>
      <div class="container-fluid mt--7 mb-5">
          <div class="row justify-content-center">
              <div class="col-xl-8 mb-5 mb-xl-0">
                    <card shadow type="secondary">
                        <div slot="header" class="bg-white border-0">
                            <div class="row align-items-center">
                                <div class="col-12">
                                    <h3 class="mb-0">Selected Picture</h3>
                                </div>
                            </div>
                        </div>
                        <template>
                            <form @submit.prevent>
                                <div class="row align-items-center">
                                  <div class="col-12">
                                    <picture-input
                                      ref="pictureInput"
                                      width="300"
                                      :crop="false"
                                      height="200"
                                      margin="16"
                                      radius="5"
                                      accept="image/gif"
                                      :removable="true"
                                      size="10"
                                      button-class="btn"
                                      remove-button-class="btn"

                                      :custom-strings="{
                                        upload: '<h1>Bummer!</h1>',
                                        drag: 'Drag a 😺 GIF or GTFO'
                                      }"
                                      @change="onChange">
                                    </picture-input>
                                  </div>
                                </div>
                                <hr class="my-4" />
                                <div class="pl-lg-4">
                                    <div class="row">
                                        <div class="col-lg-6">
                                            <base-input alternative=""
                                                        label="Gif Title"
                                                        placeholder="title"
                                                        input-classes="form-control-alternative"
                                                        v-model="title"
                                            />
                                        </div>
                                        <div class="col-lg-6">
                                            <base-input alternative=""
                                                        label="Main Tag"
                                                        placeholder="main tag"
                                                        input-classes="form-control-alternative"
                                                        v-model="tag"
                                            />
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-lg-6">
                                            <base-input alternative=""
                                                        label="Extra Tag 1"
                                                        placeholder="tag1"
                                                        input-classes="form-control-alternative"
                                                        v-model="tag1"
                                            />
                                        </div>
                                        <div class="col-lg-6">
                                            <base-input alternative=""
                                                        label="Extra Tag 2"
                                                        placeholder="tag2"
                                                        input-classes="form-control-alternative"
                                                        v-model="tag2"
                                            />
                                        </div>
                                    </div>
                                    <div class="row justify-content-around">
                                      <div class="col-lg-6">
                                          <div class="text-center">
                                            <base-button type="primary" class="my-4" @click.stop="upload">upload</base-button>
                                          </div>
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
import { mapState } from 'vuex'

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
  computed: mapState({
    color: state => state.themeColor
  }),
  methods: {
    onChange () {
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
      this.$api.upload(this.label, name, this.title, this.$refs.pictureInput.file).then(res => {
        this.$notify('gif uploaded ~', 'success')
      }).catch(err => {
        alert(err)
      })
    }
  }
}

</script>
<style>
</style>
