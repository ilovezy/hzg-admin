<template>
  <div class="app-container">

  </div>
</template>

<script>
  export default {
    name: '',
    data() {
      return {

      }
    },
    created() {
      this.testAjax()
    },
    methods: {
      testAjax() {
        this.axios.post('/auth/memeber/info').then(res => {
        })
      }
    }
  }
</script>

<style scoped>
</style>
