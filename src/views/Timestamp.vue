<template>
  <div class="block">
    <span class="demonstration">日期</span>
    <el-date-picker 
      v-model="value" 
      type="datetime" 
      placeholder="Select date and time" 
      :shortcuts="shortcuts"
      value-format="YYYY-MM-DD hh:mm:ss"
    >
    </el-date-picker>
    <el-button type="primary" v-on:click="toStamp">转换</el-button>
  </div>
  <div class="block">
    <span class="demonstration">时间戳</span>
    <el-input v-model="timestamp" placeholder="请输入时间戳"></el-input>
    <el-button type="primary" v-on:click="toDate">转换</el-button>
  </div>
</template>

<script>
  import { ElMessage } from 'element-plus'
  import { defineComponent, reactive, toRefs } from 'vue'
  
  export default defineComponent({
    name: 'Timestamp',
    data() {
      return {
        shortcuts: [
          {
            text: 'Today',
            value: new Date(),
          },
          {
            text: 'Yesterday',
            value: () => {
              const date = new Date()
              date.setTime(date.getTime() - 3600 * 1000 * 24)
              return date
            },
          },
          {
            text: 'A week ago',
            value: () => {
              const date = new Date()
              date.setTime(date.getTime() - 3600 * 1000 * 24 * 7)
              return date
            },
          },
        ],
        value: '',
        timestamp: ''
      }
    },
    methods: {
      toStamp() {
        let stamp = Date.parse(this.value)
        this.timestamp = stamp
      },
      toDate() {
        let ts = parseInt(this.timestamp)
        let dt = this.dateFormat('YYYY-mm-dd HH:MM:SS', ts)
        this.value = dt
      },
      dateFormat(fmt, dat) {
          let date = new Date(dat)
          let ret
          const opt = {
              "Y+": date.getFullYear().toString(),        // 年
              "m+": (date.getMonth() + 1).toString(),     // 月
              "d+": date.getDate().toString(),            // 日
              "H+": date.getHours().toString(),           // 时
              "M+": date.getMinutes().toString(),         // 分
              "S+": date.getSeconds().toString()          // 秒
          };
          for (let k in opt) {
              ret = new RegExp("(" + k + ")").exec(fmt);
              if (ret) {
                  fmt = fmt.replace(ret[1], (ret[1].length == 1) ? (opt[k]) : (opt[k].padStart(ret[1].length, "0")))
              };
          };
          return fmt
      }
    }
  })
</script>

<style>
</style>
