<template>
  <div>
    <label> this is child one </label><br />
    {{ child1 }}
  </div>
</template>

<script>
export default {
  inject: ["child1"],
};
</script>

<style></style>
