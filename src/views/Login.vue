<template>
    <div class="container">
        <div class="row justify-content-center mt-5 pb-5">
            <div class="col-lg-5 col-md-7 col-10">
                <div class="card bg-secondary shadow border-0">
                    <div class="card-body px-lg-5 py-lg-5">
                        <div class="text-center text-muted mb-4">
                            Login
                        </div>
                        <form role="form">
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

      <!--                      <base-checkbox class="custom-control-alternative">
                                <span class="text-muted">Remember me</span>
                            </base-checkbox> -->
                            <div class="text-center">
                                <base-button type="primary" class="my-4" @click.stop="login">Sign in</base-button>
                            </div>
                        </form>
                    </div>
                </div>
                <div class="row mt-3">
                    <div class="col-6">
                        <a href="#" class="text-light"><small>Forgot password?</small></a>
                    </div>
                    <div class="col-6 text-right">
                        <router-link to="/register" class="text-light"><small>Create new account</small></router-link>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>

import { resetRouter } from '@/router'

export default {
  name: 'login',
  data () {
    return {
      model: {
        name: '',
        password: ''
      }
    }
  },
  methods: {
    login () {
      if (this.model.name === '') {
        this.$notify('name can not be empty!', 'warning')
        return
      }
      if (this.model.password === '') {
        this.$notify('password can not be empty!', 'warning')
        return
      }
      this.$api.login(this.model.name, this.model.password).then(res => {
        console.log(res)
        console.log('perm before login:' + this.$store.state.user.perm)
        this.$store.commit('setPerm', 1)
        console.log('perm after login:' + this.$store.state.user.perm)
        alert(res.status)
        resetRouter()
      }).catch(err => {
        console.log(err)
        alert(err)
      })
    }
  }
}
</script>
<style>
</style>
