<script setup>
import { onErrorCaptured, ref } from "vue";
import ErrorButton from "./ErrorButton.vue";

const error = {};
onErrorCaptured((e) => {
  error.value = e.message;
});
function resetError() {
  error.value = "";
}
</script>

<template>
  <div v-if="error">
    There's been an error:{{ error }} <button @click="resetError">OK</button>
  </div>
  <ErrorButton />
</template>
