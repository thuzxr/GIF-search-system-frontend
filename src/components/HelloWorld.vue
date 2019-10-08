<template>
  <div>
    <button v-on:click="gethw">从后端获取hello world</button>
    <p>{{ message }}</p>
  </div>
</template>

<script>
import axios from 'axios'
axios.defaults.timeout = 5000

export default {
  data () {
    return {
      message: 'hello vue.js!'
    }
  },
  methods: {
    gethw: function () {
      axios.get('http://127.0.0.1:8000/').then(response => {
        console.log(response)
        this.message = response.data.message
      })
    }
  }
}
</script>
