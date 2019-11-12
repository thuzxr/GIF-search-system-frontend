<template>
  <div class="container">
    <div class="row justify-content-center mt-5 pb-5">
        <div class="col-lg-5 col-md-7 col-10">
            <div class="card bg-secondary shadow border-0">
                <div class="card-body px-lg-5 py-lg-5">
                    <div class="text-center text-muted mb-4">
                        Register
                    </div>
                    <form role="form" @keyup.enter='register'>

                        <base-input class="input-group-alternative mb-3"
                                    placeholder="Name"
                                    addon-left-icon="ni ni-hat-3"
                                    v-model="model.name">
                        </base-input>

                        <base-input class="input-group-alternative"
                                    placeholder="Password"
                                    type="password"
                                    addon-left-icon="ni ni-lock-circle-open"
                                    v-model="model.password">
                        </base-input>

                        <base-input class="input-group-alternative"
                                    placeholder="Confirm Password"
                                    type="password"
                                    addon-left-icon="ni ni-lock-circle-open"
                                    v-model="model.confirm_password">
                        </base-input>

                            <base-input class="input-group-alternative"
                                        placeholder="Verification code"
                                        type="Name"
                                        addon-left-icon="ni ni-send"
                                        v-model="model.vericode">
                            </base-input>
                        <div class="row text-center justify-content-center">
                            <!-- <span @click.stop="getCaptchaImgUrl" class="box-verify"><img id="captchaIdImg" :src="model.captchaImgUrl" /></span> -->
                            <div class="col-md-4 col-12">
                            <base-button type="primary" class="my-4" @click.stop="getCaptchaImgUrl">刷新验证码</base-button>
                            </div>

                            <div class="col-md-8 col-12">
                            <img id="captchaIdImg" style="width: 100%; height: 100%" :src="model.captchaImgUrl"/>
                            </div>

                        </div>

     <!--                   <div class="text-muted font-italic">
                            <small>password strength: <span class="text-success font-weight-700">strong</span></small>
                        </div> -->

<!--                        <div class="row my-4">
                            <div class="col-12">
                                <base-checkbox class="custom-control-alternative">
                                    <span class="text-muted">I agree with the <a href="#!">Privacy Policy</a></span>
                                </base-checkbox>
                            </div>
                        </div> -->
                        <div class="text-center">
                            <base-button type="primary" class="my-4" @click.stop="register">Create account</base-button>
                        </div>
                    </form>
                </div>
            </div>
            <div class="row mt-3">
                <div class="col-6">
                    <a href="#" class="text-light">
                        <small>Forgot password?</small>
                    </a>
                </div>
                <div class="col-6 text-right">
                    <router-link to="/login" class="text-light">
                        <small>Login into your account</small>
                    </router-link>
                </div>
            </div>
        </div>
    </div>
  </div>
</template>
<script>
import config from '../http/config'
import { resetRouter } from '@/router'
export default {
  name: 'register',
  data () {
    return {
      model: {
        name: '',
        password: '',
        confirm_password: '',
        vericode: '',
        captchaId: '',
        captchaImgUrl: ''
      }
    }
  },
  mounted () {
    this.getCaptchaImgUrl()
  },
  methods: {
    register () {
      if (this.model.name === '') {
        this.$notify('用户名不能为空', 'warning')
      } else if (this.model.password == '') {
        this.$notify('请输入密码', 'warning')
      } else if (this.model.confirm_password == '') {
        this.$notify('请确认密码', 'warning')
      } else if (this.model.password != this.model.confirm_password) {
        this.$notify('两次密码不一致', 'warning')
      } else {
        this.$api.register(this.model.name, this.model.password, this.model.vericode, this.model.captchaId).then(response => {
          if (response.status === '验证码错误') {
            this.$notify(response.status, 'warning')
            this.getCaptchaImgUrl()
          } else {
            this.$notify(response.status, 'info')
            this.$store.commit('login', {
              name: this.model.name,
              perm: 1
            })
            resetRouter()
            this.$router.push('/profile')
          }
        })
      }
    },
    getCaptchaImgUrl () {
      this.$api.getCaptchaId().then(res => {
        this.model.captchaId = res.captchaId
        this.model.captchaImgUrl = config.baseURL + '/get_veri/' + res.captchaId + '.png'
        console.log('captchaId' + this.model.captchaId)
      }).catch(err => {
        console.log(err)
      })
    }
  }
}
</script>
<style>
</style>
