<template>
  <div id="app" style="margin: 0px; padding: 0px;">
    <router-view/>
  </div>
</template>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 0px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

body {
  margin: 0px;
  padding: 0px;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
