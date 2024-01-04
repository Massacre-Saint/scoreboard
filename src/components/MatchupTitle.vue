<script setup>
const props = defineProps(['blueTeam', 'redTeam']);
</script>

<template>
  <h1 class="is-size-1">{{ props.blueTeam.name }} vs. {{ props.redTeam.name }}</h1>
</template>

<style scoped></style>
