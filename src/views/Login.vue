<template>
        <div class="row justify-content-center" style="margin-top: 30px;">
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
</template>
<script>

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
      this.$api.login(this.model.name, this.model.password).then(res => {
        alert(res.status)
      }).catch(res => {
        alert(res)
      })
    }
  }
}
</script>
<style>
</style>
