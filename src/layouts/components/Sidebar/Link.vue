<template>
  <component :is="type" v-bind="linkProps">
    <slot></slot>
  </component>
</template>

<script setup>
import { computed, defineProps } from "vue"
import { isExternal } from "utils/validate.js";

const props = defineProps({
  to: {
    type: String,
    required: true
  }
})

const isExernalVal = computed(() => {
  return isExternal(props.to)
})

const type = computed(() => {
  return isExernalVal.value ? 'a' : 'router-link'
})

const linkProps = computed(() => {
  if (isExernalVal.value) {
    return {
      href: props.to,
      target: '_blank',
      rel: 'noopener'
    }
  } else {
    return {
      to: props.to
    }
  }
})

</script>
