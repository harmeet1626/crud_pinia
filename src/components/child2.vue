<template>
  <div>
    <label> this is child 2 </label><br />
    {{ message }} msg
  </div>
</template>

<script setup>
import { inject } from "vue";

const message = inject("child1");
</script>

<style></style>
