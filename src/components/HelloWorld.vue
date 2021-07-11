<template>
  <div class="hello">
    test
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'HelloWorld',
  mounted() {
    axios({
      method:'get',
      url:'http://localhost:3000/posts/1'
    })
      .then(response  => {
        console.log(response)
      });
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
