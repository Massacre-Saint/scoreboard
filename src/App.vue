<script setup>
import { ref } from 'vue';
import MatchupTitle from './components/MatchupTitle.vue';
import ScoreCard from './components/ScoreCard.vue';
import GameStatus from './components/GameStatus.vue';

const blueTeam = ref({name: 'Blue Team', score: 0});
const redTeam = ref({name: 'Red Team', score: 0});

const increment = (team) => {
  team.score++
};
const decrement = (team) => {
  if (team.score > 0) {
    team.score--
  };
};
</script>

<template>
  <MatchupTitle :blue-team="blueTeam" :red-team="redTeam"/>
  <GameStatus :blue-team="blueTeam" :red-team="redTeam"/>
  <ScoreCard
    :score="blueTeam.score"
    @increment="increment(blueTeam)"
    @decrement="decrement(blueTeam)"
  />
  <ScoreCard
    :score="redTeam.score"
    @increment="increment(redTeam)"
    @decrement="decrement(redTeam)"
  />
</template>

<style scoped>

</style>
