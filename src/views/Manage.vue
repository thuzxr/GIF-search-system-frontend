<template>
  <div>
     <base-header class="header pb-5 pt-6 d-flex align-items-center"
        style="background-position: center top;">
        <!-- Mask -->
        <span class="mask bg-gradient-success opacity-12"></span>
        <!-- Header container -->
        <div class="container-fluid">
            <div class="row justify-content-center">
                <div class="col-12 text-center">
                    <h1 class="display-2 text-white">Upload</h1>
                    <p class="text-white mt-0 mb-5">This is upload page. You can share you favourite gif to others!</p>
                </div>
            </div>
        </div>
      </base-header>
      <div class="container-fluid mt--5">
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
                                </div>
                                <hr class="my-4" />
                                <div class="pl-lg-4">
                                    <div class="row">
                                        <div class="col-lg-6">
                                            <base-input alternative=""
                                                        label="Username"
                                                        placeholder="Username"
                                                        input-classes="form-control-alternative"
                                                        v-model="model.username"
                                            />
                                        </div>
                                        <div class="col-lg-6">
                                            <base-input alternative=""
                                                        label="Email address"
                                                        placeholder="jesse@example.com"
                                                        input-classes="form-control-alternative"
                                                        v-model="model.email"
                                            />
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-lg-6">
                                            <base-input alternative=""
                                                        label="First name"
                                                        placeholder="First name"
                                                        input-classes="form-control-alternative"
                                                        v-model="model.firstName"
                                            />
                                        </div>
                                        <div class="col-lg-6">
                                            <base-input alternative=""
                                                        label="Last name"
                                                        placeholder="Last name"
                                                        input-classes="form-control-alternative"
                                                        v-model="model.lastName"
                                            />
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
      model: {
        username: '',
        email: '',
        firstName: '',
        lastName: '',
        address: '',
        city: '',
        country: '',
        zipCode: '',
        about: ''
      }
    }
  },
  methods: {
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
<style>
</style>
