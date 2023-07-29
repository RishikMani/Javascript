<script>
export default {
  data() {
    return {
      animalCount: 0,
    };
  },
  methods: {
    countAnimals() {
      this.animalCount++;
    },
  },
};
</script>

<template>
  <h1>Animal count</h1>
  <h2>Current animal count: {{ animalCount }}</h2>
  <button @click="countAnimals">Count an animal</button>
</template>
