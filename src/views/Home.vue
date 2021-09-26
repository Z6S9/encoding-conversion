<template>
  <!-- 文本输入 -->
  <el-row justify="center">
    <el-col :span="8">
      <Textarea
        ref="Input"
        :msg="textInput"
        id="input"
        placeholder="请输入您想转化的文本"
      ></Textarea>
    </el-col>
  </el-row>
  <el-row justify="center" align="middle">
    <span class="change-text">
      转换中文为:
    </span>
    <el-button
      type="primary"
      size="medium"
      v-on:click="encodeFunction('base64')"
      >base64</el-button
    >
    <el-button
      type="primary"
      size="medium"
      v-on:click="encodeFunction('unicode')"
      >Unicode</el-button
    >
    <el-button type="primary" size="medium" v-on:click="encodeFunction('utf8')"
      >UTF-8</el-button
    >
    <el-button type="primary" size="medium" v-on:click="encodeFunction('gbk')">
      GBK
    </el-button>
    <ClearButton msg="input"> </ClearButton>
  </el-row>

  <!-- base64 && unicode -->
  <el-row justify="center" align="middle" style="margin-top:50px ">
    <!-- base64文本框 -->
    <el-col :span="6">
      <Textarea
        id="base64"
        ref="Base64"
        :msg="textBase64"
        placeholder="请输入您想转化的 base64 编码"
      ></Textarea>
    </el-col>
    <!-- unicode文本框 -->
    <el-col :span="6">
      <Textarea
        id="unicode"
        ref="Unicode"
        :msg="textUnicode"
        placeholder="请输入您想转化的 Unicode 编码"
      ></Textarea>
    </el-col>
    <!-- <el-col :span="2">
    <el-button type="info" v-on:click="copyText('base64')"
      >复制
    </el-button>
  </el-col> -->
  </el-row>

  <el-row>
    <el-col :span="6" style="margin-left:320px">
      <el-button
        type="info"
        size="medium"
        v-on:click="decodeFunction('base64')"
        class="el-buttom-info"
      >
        base64转中文
      </el-button>
      <ClearButton msg="base64" style="margin:-40px 0 0 150px"> </ClearButton>
    </el-col>
    <el-col :span="6" style="margin-left:80px">
      <el-button
        type="info"
        size="medium"
        v-on:click="decodeFunction('unicode')"
        class="el-buttom-info"
      >
        Unicode转中文
      </el-button>
      <ClearButton msg="unicode" style="margin:-40px 0 0 150px"> </ClearButton>
    </el-col>
  </el-row>

  <!-- utf8 && gbk -->
  <el-row justify="center" align="middle" style="margin-top:50px;">
    <!-- utf8文本框 -->
    <el-col :span="6">
      <Textarea
        id="utf8"
        ref="Utf8"
        :msg="textUtf8"
        placeholder="请输入您想转化的 utf8 编码"
      ></Textarea>
    </el-col>
    <!-- gbk文本框 -->
    <el-col :span="6">
      <Textarea
        id="gbk"
        ref="Gbk"
        :msg="textGbk"
        placeholder="请输入您想转化的 gbk 编码"
      ></Textarea>
    </el-col>
    <!-- <el-col :span="2">
    <el-button type="info" v-on:click="copyText('base64')"
      >复制
    </el-button>
  </el-col> -->
  </el-row>

  <el-row>
    <el-col :span="6" style="margin-left:320px">
      <el-button type="info" size="medium" v-on:click="decodeFunction('utf8')" class="el-buttom-info">
        UTF-8转中文
      </el-button>
      <ClearButton msg="utf8" style="margin:-40px 0 0 150px"> </ClearButton>
    </el-col>
    <el-col :span="6" style="margin-left:80px">
      <el-button type="info" size="medium" v-on:click="decodeFunction('gbk')" class="el-buttom-info">
        GBK转中文
      </el-button>
      <ClearButton msg="gbk" style="margin:-40px 0 0 150px"> </ClearButton>
    </el-col>
  </el-row>
</template>

<script>
// @ is an alias to /src
import { defineComponent, ref } from "vue";
import { Base64 } from "js-base64";
import { ElMessage } from "element-plus";

export default {
  name: "Home",
  components: {},
  data() {
    return {
      textInput: "",
      textBase64: "",
      textUnicode: "",
      textUtf8: "",
      textGbk: "",
    };
  },
  methods: {
    encodeFunction(type) {
      var str = this.$refs.Input.msg;
      switch (type) {
        case "base64":
          const base = Base64.encodeURI(str);
          this.textBase64 = base;
          break;
        case "unicode":
          const unicode = escape(str);
          this.textUnicode = unicode;
          break;
        case "utf8":
          const utf8 = encodeURI(str);
          this.textUtf8 = utf8;
          break;
        case "gbk":
          const gbk = require("gbk-encode").encode(str);
          this.textGbk = gbk;
          break;
        default:
          break;
      }
    },
    decodeFunction(type) {
      let str, input;
      switch (type) {
        case "base64":
          str = this.$refs.Base64.msg;
          input = Base64.decode(str);
          this.textInput = input;
          break;
        case "unicode":
          str = this.$refs.Unicode.msg;
          input = unescape(str);
          this.textInput = input;
          break;
        case "utf8":
          str = this.$refs.Utf8.msg;
          input = decodeURI(str);
          this.textInput = input;
          break;
        case "gbk":
          str = this.$refs.Gbk.msg;
          input = require("gbk-encode").decode(str);
          this.textInput = input;
          break;
        default:
          break;
      }
    },
    async copyText(code) {
      if (code === "base64") {
        await navigator.clipboard.writeText(this.textBase64);
      } else if (code === "unicode") {
        await navigator.clipboard.writeText(this.textUnicode);
      } else if (code === "utf8") {
        await navigator.clipboard.writeText(this.textUtf8);
      } else if (code === "gbk") {
        await navigator.clipboard.writeText(this.textGbk);
      }
      ElMessage({
        message: "复制成功！",
        type: "success",
      });
      // console.log(code)
      // var area = document.getElementById(code)
      // console.log(area)
      // area.select()
      // document.execCommand("Copy")
    },
  },
  // setup() {
  //   return {
  //     // textInput: ref(''),
  //     // textBase64: ref('')
  //   };
  //   const str = "你好，世界";
  //   const base = Base64.encodeURI(str);
  //   const ut8 = encodeURI(str);
  //   const s = decodeURI("%E5%9B%BE%E5%BA%93");
  //   const uni = escape(str);
  //   const gbknpm = require("gbk-encode").encode(str);
  //   // const ret = decodeURI(gbknpm.toString().replace(/%/g, '%25'))
  //   // const ret = decodeURI('%C4%E3%BA%C3%A3%AC%CA%C0%BD%E7')
  //   console.log("baseapi: " + base);
  //   console.log("utf: " + ut8);
  //   console.log("unicode: " + uni);
  //   console.log("s: " + s);
  //   console.log("gbknpm: " + gbknpm);
  //   // console.log("ret: " + ret)
  // },
};
</script>

<style scoped>
.el-row {
  margin: 15px;
}
.el-button {
  margin: 0 20px;
}
.el-buttom-info{
  margin-right:200px;
}
.el-col {
  margin: 0 80px;
}
.change-text {
  font-weight: 700;
}
.clear-button {
  margin-left: 30px;
  font-size: 13px;
  color: #0474c8;
  cursor: pointer;
}
</style>
