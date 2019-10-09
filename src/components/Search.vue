<template>
  <div>
    <div>
      <input v-model="text">
    </div>
    <div >
      <button v-on:click="search">搜索</button>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
axios.defaults.timeout = 5000

export default {
  data () {
    return {
      text: ''
    }
  },
  methods: {
    search: function () {
      axios.get('http://127.0.0.1:8000/search?key=' + this.text).then(response => {
        console.log(response)
      })
      console.log(this.text)
    }
  }
}
</script>
