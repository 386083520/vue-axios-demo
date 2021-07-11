<template>
  <div>
    test2
  </div>
</template>

<script>
  export default {
    name: "HelloWorld2",
    mounted() {
      this.$http({
        method:'get',
        url:'http://localhost:3000/posts/2'
      })
        .then(response  => {
          console.log(response)
        });
    }
  }
</script>

<style scoped>

</style>
