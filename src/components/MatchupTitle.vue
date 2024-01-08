<script setup>
const props = defineProps(['blueTeam', 'redTeam']);
</script>

<template>
  <h1>
    <span class="blueTeam" :class="{ winning: blueTeam.score > redTeam.score }">
      {{ props.blueTeam.name }}
    </span>
    <span> vs. </span>
    <span class="redTeam" :class="{ winning: redTeam.score > blueTeam.score }">
      {{ props.redTeam.name }}
    </span>
  </h1>
</template>

<style scoped>
h1 {
  font-size: 8vw;
  margin-bottom: 0;
}
.winning {
  color: goldenrod;
}
</style>
