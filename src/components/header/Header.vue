<template>
  <div>
    <header>
      <img src="../../assets/logo.png" alt="logo" class="header-logo">
      <ul class="header-operations">
        <li>
          <span class="header-lang is-active">{{user.userName}}</span>
        </li>
        <li>退出系统</li>
      </ul>
    </header>
  </div>
</template>
<script>
export default {
  props: ['user']
}
</script>
<style>
  header {
    background-color: rgb(100, 100, 200);
    height: 80px;
    width: 100%;
    top: 0;
    left: 0;
    padding: 0 20px;
    z-index: 999;
    box-sizing: border-box;
    position: fixed;
  }

  .header-logo {
    width: 60px;
    height: 60px;
    display: inline-block;
    vertical-align: middle;
  }

  .header-operations {
    display: inline-block;
    float: right;
    padding-right: 30px;
    height: 100%;
  }

  .header-operations li {
    color: #fff;
    display: inline-block;
    vertical-align: middle;
    padding: 0 10px;
    margin: 0 10px;
    line-height: 80px;
    cursor: pointer;
  }

  .header-operations li:first-child {
    cursor: default
  }

  .header-operations:after, header:after {
    display: inline-block;
    content: "";
    height: 100%;
    vertical-align: middle;
  }
</style>
