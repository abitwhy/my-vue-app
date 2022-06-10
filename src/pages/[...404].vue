<template>
  <h1>Sorry, page does not existed.</h1>
  <code>{{ url }}</code> is an invalid URL. Please check your input.
  <p>
    <button @click="router.go(-1)">Go Back</button>
    <button @click="router.push('/')">Go Home</button>
  </p>
</template>

<script setup lang="ts">
import router from '~/router'

const url = window.location.href
</script>
