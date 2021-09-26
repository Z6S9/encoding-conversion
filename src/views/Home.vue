<template>
  <!-- 文本输入 -->
  <el-row justify="center">
    <el-col :span="8">
      <el-input
        v-model="textInput"
        placeholder="请输入您想转化的文本"
        type="textarea"
        rows="5"
        id="input"
        :autosize="{ minRows: 6, maxRows: 8 }"
        suffix-icon="false"
        resize="none"
      ></el-input>
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

    <el-button type="text" class="clear-button" v-on:click="clearTest('input')">
      清空结果
    </el-button>
  </el-row>

  <!-- base64 && unicode -->
  <el-row justify="center" align="middle" style="margin-top:50px ">
    <!-- base64文本框 -->
    <el-col :span="6">
      <el-input
        v-model="textBase64"
        id="base64"
        placeholder="请输入您想转化的 base64 编码"
        type="textarea"
        resize="none"
        rows="5"
        :autosize="{ minRows: 6, maxRows: 8 }"
      ></el-input>
    </el-col>
    <!-- unicode文本框 -->
    <el-col :span="6">
      <el-input
        v-model="textUnicode"
        id="Unicode"
        placeholder="请输入您想转化的 Unicode 编码"
        type="textarea"
        resize="none"
        rows="5"
        :autosize="{ minRows: 6, maxRows: 8 }"
      ></el-input>
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
      >
        base64转中文
      </el-button>
      <el-button
        type="text"
        class="clear-button"
        v-on:click="clearTest('base64')"
      >
        清空结果
      </el-button>
    </el-col>
    <el-col :span="6" style="margin-left:80px">
      <el-button
        type="info"
        size="medium"
        v-on:click="decodeFunction('unicode')"
      >
        Unicode转中文
      </el-button>
      <el-button
        type="text"
        class="clear-button"
        v-on:click="clearTest('Unicode')"
      >
        清空结果
      </el-button>
    </el-col>
  </el-row>

  <!-- utf8 && gbk -->
  <el-row justify="center" align="middle" style="margin-top:50px;">
    <!-- utf8文本框 -->
    <el-col :span="6">
      <el-input
        v-model="textUtf8"
        id="utf8"
        placeholder="请输入您想转化的 utf8 编码"
        type="textarea"
        resize="none"
        rows="5"
        :autosize="{ minRows: 6, maxRows: 8 }"
        clearable
      ></el-input>
    </el-col>
    <!-- gbk文本框 -->
    <el-col :span="6">
      <el-input
        v-model="textGbk"
        id="gbk"
        placeholder="请输入您想转化的 gbk 编码"
        type="textarea"
        resize="none"
        rows="5"
        :autosize="{ minRows: 6, maxRows: 8 }"
        clearable
      ></el-input>
    </el-col>
    <!-- <el-col :span="2">
    <el-button type="info" v-on:click="copyText('base64')"
      >复制
    </el-button>
  </el-col> -->
  </el-row>

  <el-row>
    <el-col :span="6" style="margin-left:320px">
      <el-button type="info" size="medium" v-on:click="decodeFunction('utf8')">
        UTF-8转中文
      </el-button>
      <el-button
        type="text"
        class="clear-button"
        v-on:click="clearTest('utf8')"
      >
        清空结果
      </el-button>
    </el-col>
    <el-col :span="6" style="margin-left:80px">
      <el-button type="info" size="medium" v-on:click="decodeFunction('gbk')">
        GBK转中文
      </el-button>
      <el-button type="text" class="clear-button" v-on:click="clearTest('gbk')">
        清空结果
      </el-button>
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
      var str = this.textInput;
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
          str = this.textBase64;
          input = Base64.decode(str);
          this.textInput = input;
          break;
        case "unicode":
          str = this.textUnicode;
          input = unescape(str);
          this.textInput = input;
          break;
        case "utf8":
          str = this.textUtf8;
          input = decodeURI(str);
          this.textInput = input;
          console.log(str, input);
          break;
        case "gbk":
          str = this.textGbk;
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
    clearTest(str) {
      document.getElementById(str).value = "";
    },
  },
  setup() {
    return {
      // textInput: ref(''),
      // textBase64: ref('')
    };
    const str = "你好，世界";
    const base = Base64.encodeURI(str);
    const ut8 = encodeURI(str);
    const s = decodeURI("%E5%9B%BE%E5%BA%93");
    const uni = escape(str);
    const gbknpm = require("gbk-encode").encode(str);
    // const ret = decodeURI(gbknpm.toString().replace(/%/g, '%25'))
    // const ret = decodeURI('%C4%E3%BA%C3%A3%AC%CA%C0%BD%E7')
    console.log("baseapi: " + base);
    console.log("utf: " + ut8);
    console.log("unicode: " + uni);
    console.log("s: " + s);
    console.log("gbknpm: " + gbknpm);
    // console.log("ret: " + ret)
  },
};
</script>

<style scoped>
.el-row {
  margin: 15px;
}
.el-button{
  margin:0 20px;
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
