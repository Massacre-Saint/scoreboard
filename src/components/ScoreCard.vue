<script setup>
const props = defineProps(['score']);
const emit = defineEmits(['increment', 'decrement']);
</script>

<template>
  <div class="is-flex is-flex-row">
    <div class="box">
      <div>
        {{ props.score }}
      </div>
      <button class="button is-danger is-large" @click="emit('decrement')">-</button>
      <button class="button is-success is-large" @click="emit('increment')">+</button>
    </div>
  </div>
</template>

<style scoped>
.box {
 background-color: gray;
 margin: auto;
 padding: auto;
}
</style>
