<script setup>
import { ref } from 'vue';
import MatchupTitle from "./Matchuptitle.vue"
import GameStatus from "./GameStatus.vue"
import ScoreCard from './ScoreCard.vue';
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
  <div id="app">
    <MatchupTitle :blue-team="blueTeam" :red-team="redTeam"/>
    <GameStatus :blue-team="blueTeam" :red-team="redTeam"/>
    <div class="scores">
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
    </div>
  </div>
</template>

<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: rgba(255, 255, 255, 0.8);
  margin-top: 60px;
}
.scores {
  display: flex;
  justify-content: space-evenly;
}</style>
