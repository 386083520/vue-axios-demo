<template>
  <div class="hello">
    test
  </div>
</template>

<script>
import request from "../utils/request";
export default {
  name: 'HelloWorld',
  mounted() {
    request({
      method:'get',
      url:'/posts/1',
      timeout: '6000'
    })
      .then(response  => {
        console.log('response', response)
      }).catch(err => {
        console.log('err', err)
    })
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
