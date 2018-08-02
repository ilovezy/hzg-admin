<template>
  <div class="app-container">
    <div>
      <h1>demo fuck1</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A alias dicta est facere fuga labore nemo quis
        similique sunt totam.</p>
    </div>


    <el-steps :active="active"
              finish-status="success">
      <el-step title="步骤 1"></el-step>
      <el-step title="步骤 2"></el-step>
      <el-step title="步骤 3"></el-step>
    </el-steps>

    <el-button style="margin-top: 12px;"
               @click="next">下一步
    </el-button>
    <svg-icon icon-class="home" />

  </div>
</template>

<script>
  export default {
    name: 'demoPage1',
    data() {
      return {
        active: 0
      }
    },
    created() {
      this.testAjax()
      alert(fuck)
    },
    methods: {
      testAjax() {
        this.axios.post('/auth/memeber/info').then(res => {
        })
      }, next() {
        if (this.active++ > 2) this.active = 0
      }
    }
  }
</script>

<style scoped>
</style>
