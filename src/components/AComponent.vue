<template v-if="true">
  <h1>{{ `${task} by ${worker}.` }}</h1>
</template>

<script setup lang="ts">
interface Props {
  task?: string
  worker: 'Vue' | 'TypeScript' | string
}

withDefaults(defineProps<Props>(), {
  task: 'Validate props',
})
</script>
