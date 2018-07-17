<template>
  <el-container>
    <v-header :user="user"></v-header>
    <el-container>
      <el-aside width="200px">
        <v-aside></v-aside>
      </el-aside>
      <transition>
        <router-view></router-view>
      </transition>
    </el-container>
  </el-container>

</template>
<script>
import header from './header/Header'
import menu from './menu/Menu'

export default {
  data () {
    return {
      user: JSON.parse(sessionStorage.getItem('user'))
    }
  },
  components: {
    'v-header': header,
    'v-aside': menu
  }
}
</script>

<style scoped lang="scss">
  .el-header {
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    line-height: 60px;
  }

  .el-aside {
    background-color: #D3DCE6;
    color: #333;
    text-align: center;
    line-height: 512px;
  }

  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    line-height: 470px;
  }
</style>
