<template>
  <!-- 输入图片URL -->
  <el-row>
    <el-col :span="4">
      <div>图片地址</div>
    </el-col>
    <el-col :span="16">
      <el-input v-model="picUrl" placeholder="请输入图片URL地址"></el-input>
    </el-col>
    <el-col :span="4">
      <el-button type="primary" v-on:click="submit">转换</el-button>
    </el-col>
  </el-row>
  <div>示例：“https://fastmarket.oss-cn-shenzhen.aliyuncs.com/oss/static/other/1/images/baseMap_index.jpg”</div>
  
  <!-- 输出图片base64编码 -->
  <el-row>
    <el-col :span="4">
      <div>base64</div>
    </el-col>
    <el-col :span="16">
      <el-input v-model="picBase64"></el-input>
    </el-col>
    <el-col :span="4">
      <el-button type="info" v-on:click="copyUrl">复制</el-button>
    </el-col>
  </el-row>
</template>

<script>
  export default{
    name: 'About',
    data() {
      return {
        picUrl: '',
        picBase64: ''
      }
    },
    methods: {      
      getBase64(imgUrl) {
        var that = this
        window.URL = window.URL || window.webkitURL;
        var xhr = new XMLHttpRequest();
        xhr.open("get", imgUrl, true);
        xhr.responseType = "blob";
        xhr.onload = function () {
          if (this.status == 200) {
            //得到一个blob对象
            var blob = this.response;
            console.log("blob", blob)
            let oFileReader = new FileReader();
            oFileReader.onloadend = function (e) {
              // 此处拿到的已经是 base64的图片了
              let base64 = e.target.result;
              that.picBase64 = base64
              // console.log(base64)
            };
            oFileReader.readAsDataURL(blob);
            //====为了在页面显示图片，可以删除====
            var img = document.createElement("img");
            img.onload = function (e) {
              window.URL.revokeObjectURL(img.src); // 清除释放
            };
            let src = window.URL.createObjectURL(blob);
            img.src = src
            // document.getElementById("container1").appendChild(img);
            //====为了在页面显示图片，可以删除====
      
          }
        }
        xhr.send();
      },
      submit() {
        this.getBase64(this.picUrl)
      },
      async copyUrl() {
        await navigator.clipboard.writeText(this.picBase64)
        ElMessage({
          message: '复制成功！',
          type: 'success'
        })
      }
    }
  }
</script>