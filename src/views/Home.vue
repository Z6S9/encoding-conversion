<template>
  <!-- 文本输入 -->
  <el-row>
    <el-col :span="4">
      <div>文本</div>
    </el-col>
    <el-col :span="16">
      <el-input v-model="textInput" placeholder="请输入文本"></el-input>
    </el-col>
    <el-col :span="4">
      <el-button type="primary" v-on:click="submit">转换</el-button>
    </el-col>
  </el-row>
  
  <!-- base64输出 -->
  <el-row>
    <el-col :span="4">
      <div>base64</div>
    </el-col>
    <el-col :span="16">
      <el-input v-model="textBase64" id="base64"></el-input>
    </el-col>
    <el-col :span="4">
      <el-button type="info" v-on:click="copyText('base64')">复制</el-button>
    </el-col>
  </el-row>
  
  <!-- unicode输出 -->
  <el-row>
    <el-col :span="4">
      <div>Unicode</div>
    </el-col>
    <el-col :span="16">
      <el-input v-model="textUnicode" id="unicode"></el-input>
    </el-col>
    <el-col :span="4">
      <el-button type="info" v-on:click="copyText('unicode')">复制</el-button>
    </el-col>
  </el-row>
  
  <!-- utf8输出 -->
  <el-row>
    <el-col :span="4">
      <div>UTF-8</div>
    </el-col>
    <el-col :span="16">
      <el-input v-model="textUtf8" id="utf8"></el-input>
    </el-col>
    <el-col :span="4">
      <el-button type="info" v-on:click="copyText('utf8')">复制</el-button>
    </el-col>
  </el-row>
  
  <!-- gbk输出 -->
  <el-row>
    <el-col :span="4">
      <div>GBK</div>
    </el-col>
    <el-col :span="16">
      <el-input v-model="textGbk" id="gbk"></el-input>
    </el-col>
    <el-col :span="4">
      <el-button type="info" v-on:click="copyText('gbk')">复制</el-button>
    </el-col>
  </el-row>


</template>

<script>
  // @ is an alias to /src
  import { defineComponent, ref } from 'vue'
  import { Base64 } from 'js-base64'
  import { ElMessage } from 'element-plus'

  export default {
    name: 'Home',
    components: {},
    data() {
      return {
        textInput: '',
        textBase64: '',
        textUnicode: '',
        textUtf8: '',
        textGbk: ''
      }
    },
    methods: {
      submit() {
        var str = this.textInput
        const base = Base64.encodeURI(str)
        const ut8 = encodeURI(str)
        const uni = escape(str)
        const gbknpm = require("gbk-encode").encode(str)
        this.textBase64 = base
        this.textUnicode = uni
        this.textUtf8 = ut8
        this.textGbk = gbknpm
        console.log(this.textInput)
      },
      async copyText(code) {
        if(code === 'base64') {
          await navigator.clipboard.writeText(this.textBase64)
        } else if (code === 'unicode') {
          await navigator.clipboard.writeText(this.textUnicode)
        } else if (code === 'utf8') {
          await navigator.clipboard.writeText(this.textUtf8)
        } else if (code === 'gbk') {
          await navigator.clipboard.writeText(this.textGbk)
        }
        ElMessage({
          message: '复制成功！',
          type: 'success'
        })
        // console.log(code)
        // var area = document.getElementById(code)
        // console.log(area)
        // area.select()
        // document.execCommand("Copy")
      }
    },
    setup() {
      return {
        // textInput: ref(''),
        // textBase64: ref('')
      }
      const str = '你好，世界'
      const base = Base64.encodeURI(str)
      const ut8 = encodeURI(str)
      const s = decodeURI('%E5%9B%BE%E5%BA%93')
      const uni = escape(str)
      const gbknpm = require("gbk-encode").encode(str)
      // const ret = decodeURI(gbknpm.toString().replace(/%/g, '%25'))
      // const ret = decodeURI('%C4%E3%BA%C3%A3%AC%CA%C0%BD%E7')
      console.log('baseapi: ' + base)
      console.log('utf: ' + ut8)
      console.log('unicode: ' + uni)
      console.log("s: " + s)
      console.log('gbknpm: ' + gbknpm)
      // console.log("ret: " + ret)
    }
  }
</script>

<style>

</style>
