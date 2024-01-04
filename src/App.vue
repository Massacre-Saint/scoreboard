<script setup>
import { ref } from 'vue';
import MatchupTitle from './components/MatchupTitle.vue';

const blueTeam = ref({name: 'Blue Team', score: 0});
const redTeam = ref({name: 'Red Team', score: 0});
</script>

<template>
  <MatchupTitle :blue-team="blueTeam" :red-team="redTeam"/>
</template>

<style scoped>

</style>
