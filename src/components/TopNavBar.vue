<template>
  <div class="el-menu-dio">
    <el-menu :default-active="$route.path" mode="horizontal" @select="handleSelect" background-color="#545c64" text-color="#fff" active-text-color="#ffd04b" router>
      <el-menu-item index="/">搜索</el-menu-item>
      <el-menu-item index="/recommend">推荐</el-menu-item>
      <el-menu-item index="/manage">管理</el-menu-item>
    </el-menu>
  </div>
</template>
<script>
export default {
  name: 'TopNavBar',
  data() {
    return {
      activeIndex: '1',
      activeIndex2: '1'
    }
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath)
    }
  }
}

</script>
<style>
.el-menu-dio {
  width: 100%;
  padding: 0px;
  margin: 0px;
}

</style>
