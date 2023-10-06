<template>
  <div class="child">
    <p>Name: {{ name }}</p>
    <p>Age: {{ age }}</p>
  </div>
</template>

<script>
export default {
  props: {
    name: String,
    age: Number
  }
};
</script>

<style scoped>
.child {
  background-color: gray;
  margin: 10px;
  padding: 10px;
  border: 1px solid black;
}
</style>
