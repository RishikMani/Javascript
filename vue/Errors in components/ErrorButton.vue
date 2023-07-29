<script setup>
function makeError() {
  throw new Error("Error!");
}
</script>
<template>
  <div>
    <h1>Error on demand</h1>
    <button @click="makeError">Create error</button>
  </div>
</template>
