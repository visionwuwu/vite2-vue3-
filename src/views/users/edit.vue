<template>
  <detail :isEdit="true"></detail>
</template>

<script>
import Detail from './components/detail.vue'

export default {
  components: {
    Detail
  },
  mounted() {
    console.log('edit')
  }
}
</script>

<style lang="scss" scoped>

</style>