<template>
  <!-- 输入乱码 -->
  <el-row>
    <el-col :span="4">
      <div>乱码</div>
    </el-col>
    <el-col :span="16">
      <el-input v-model="rcode" placeholder="请输入中文乱码"></el-input>
    </el-col>
    <el-col :span="2">
      <el-button type="primary" v-on:click="toText">转换</el-button>
    </el-col>
    <el-col :span="2">
      <el-button type="info" v-on:click="copyText('rcode')">复制</el-button>
    </el-col>
  </el-row>
  <div>示例：“鍥惧簱”</div>
  
  <!-- 输入中文 -->
  <el-row>
    <el-col :span="4">
      <div>文本</div>
    </el-col>
    <el-col :span="16">
      <el-input v-model="text" placeholder="请输入文本"></el-input>
    </el-col>
    <el-col :span="2">
      <el-button type="primary" v-on:click="toRcode">转换</el-button>
    </el-col>
    <el-col :span="2">
      <el-button type="info" v-on:click="copyText('text')">复制</el-button>
    </el-col>
  </el-row>
</template>

<script>
  import { ElMessage } from 'element-plus'
  
  export default {
    name: 'RandomCode',
    data() {
      return {
        rcode: '',
        text: ''
      }
    },
    methods: {
      toText() {
        var str = this.rcode
        var ansi = require('gbk-encode').encode(str)
        console.log(ansi)
        var tex = decodeURI(ansi)
        console.log(tex)
        this.text = tex
      },
      toRcode() {
        var str = this.text
        var ut = encodeURI(str)
        var y = require('gbk-encode').decode(ut)
        console.log(y)
        this.rcode = y
        
      },
      async copyText(code) {
          if(code === 'rcode') {
            await navigator.clipboard.writeText(this.rcode)
          } else if (code === 'text') {
            await navigator.clipboard.writeText(this.text)
          }
          ElMessage({
            message: '复制成功！',
            type: 'success'
          })
        }
      },
    }
  
</script>