<template>
  <div class="app-container">
    <h1>
      dashboard-container
    </h1>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "Dashboard",
  mounted() {
    console.log('mounted')
  }
}

</script>

<style scoped>

</style>
