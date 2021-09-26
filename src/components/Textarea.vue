<template>
  <div >
     <el-input
        v-model="msg"
        :placeholder="placeholder"
        type="textarea"
        rows="5"
        :id="id"
        :autosize="{ minRows: 6, maxRows: 8 }"
        resize="none"
      ></el-input>
  </div>
</template>

<script>
export default {
  name: 'Textarea',
  props: {
    msg: String,
    placeholder: String,
    id:String,
  }
}
</script>

<style scoped>

</style>
