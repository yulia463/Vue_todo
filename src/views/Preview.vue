<template>
  <div class="container">
    <div style=" display: flex; flex-direction: column; align-items: center; ">
      <h3 style=" font-weight: normal">Персональные данные</h3>

      <p style="font-weight: bold ; margin-bottom: 60px">Василий, 30 лет</p>
      <p style="display: flex; justify-content: center">Дети</p>

      <div class="children-container">
        <div v-for="(child, index) in children" :key="index">
          <h4 class="child-info"> {{ child.name }}, {{ child.age }} лет</h4>
        </div>
      </div>

    </div>

  </div>
</template>
<script setup>


const children = [
{ name: "Петр", age: 10 },
{ name: "Василий", age: 14 },
];
</script>

<style>
.container{
  display: flex;
  margin: 30px 375px;
}
.children-container {
  display: flex;
  flex-direction: column;
  align-items: self-start;
}
.child-info {
  background-color:#F1F1F1;
  margin: 8px 0;
  padding: 5px 15px;
  border-radius: 5px;
  height: 44px;
  display: flex;
  align-items: center;
}
</style>