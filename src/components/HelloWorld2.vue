<template>
  <div>
    test2
  </div>
</template>

<script>
  import request from "../utils/request";
  export default {
    name: "HelloWorld2",
    mounted() {
      request({
        method:'get',
        url:'/posts/2'
      })
        .then(response  => {
          console.log('response2', response)
        }).catch(err => {
          console.log('err2', err)
      });
    }
  }
</script>

<style scoped>

</style>
