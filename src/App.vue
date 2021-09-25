<template>
  <div id="nav">
    <router-link to="/">常用编码转换</router-link> |
    <router-link to="/randomcode">中文乱码转换</router-link> |
    <router-link to="/about">图片Base64编码</router-link> |
    <router-link to='/timestamp'>日期时间戳转换</router-link>
  </div>
  <router-view/>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 20px;
}

#nav a {
  margin:0 10px;
  font-weight: bold;
  color: #2c3e50;
  text-decoration: none;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
