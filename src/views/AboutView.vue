<template>
  <div>
    <label>This page is made to test provide and injet</label>
    <hr />
    <child1 />
    <hr />
    <child2 />
  </div>
</template>
<script>
import child1 from "../components/child1.vue";
import child2 from "../components/child2.vue";
export default {
  components: {
    child1,
    child2,
  },
  provide: {
    child1: "this is for child1 data from root",
  },
};
</script>
