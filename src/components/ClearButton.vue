<template>
  <div>
    <el-button type="text" class="clear-button" v-on:click="clearTest(msg)">
      清空结果
    </el-button>
  </div>
</template>

<script>
import { clearText } from "../utils/clearText";
export default {
  name: "ClearButton",
  props: {
    msg: String,
  },
  methods: {
    clearTest(str) {
      clearText(str);
    },
  },
};
</script>

<style scoped>
div{
    width:0%;
}
.clear-button {
  margin-left: 30px;
  font-size: 13px;
  color: #0474c8;
  cursor: pointer;
}
</style>
