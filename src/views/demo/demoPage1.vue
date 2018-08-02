<template>
  <div class="app-container">

  </div>
</template>

<script>
  export default {
    name: 'demoPage1',
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
      },
      next() {
        if (this.active++ > 2) this.active = 0
      }
    }
  }
</script>

<style scoped>
</style>
