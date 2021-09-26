<template>
  <div id="nav">
    <router-link to="/">常用编码转换</router-link> |
    <router-link to="/randomcode">中文乱码与繁简字转换</router-link> |
    <router-link to="/about">图片Base64编码</router-link> |
    <router-link to='/timestamp'>日期时间戳转换</router-link>
  </div>
  
  <el-container>
    <el-main>
      <div class="layout">
        <router-view v-slot="{ Component }">
          <transition name="fade">
                <component :is="Component" />
              </transition>
        </router-view>
      </div>
    </el-main>
  </el-container>
  
  
</template>

<style>
#app {
  min-height: 100%;
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
  padding: 5px;
  border-radius: 5px;
  border:solid #fff 2px;
  color: rgb(59, 170, 96);
}

.layout {
  width: 1300px;
  height: 770px;
  padding: 30px;
  margin: auto;
  box-shadow: 1px 1px 6px #c9d3dd;
  border-radius: 50px;
  overflow: hidden;
  background-color: #fff;
}

</style>
