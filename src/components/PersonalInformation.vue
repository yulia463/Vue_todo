<script setup>

</script>

<template>
  <div class="container">
    <div class="input-container">
      <label for="name" class="input-label">Имя</label>
      <input
          type="text"
          v-model="name"
          id="name"
          class="custom-input"
          placeholder="Введите имя"
      />
    </div>
    <div class="input-container">
      <label for="name" class="input-label">Возраст</label>
      <input
          type="number"
          v-model="age"
          id="age"
          class="custom-input"
          placeholder="Введите возраст"
      />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: '',
      age: ''
    }
  },
  methods: {
    onSubmit() {

    }
  }
}
</script>

<style scoped>
.container{
  display: flex;
  flex-direction: column;
  border: 1px solid red;

}
.input-container {
  width: 616px;
  height: 56px;
  display: flex;
  flex-direction: column;
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 8px;
  margin-bottom: 10px;
}

.input-label {
  color: #888;
  font-weight: normal;
}

.custom-input {
  border: none;
  outline: none;
  height: 100%;
  font-size: 16px;
}

</style>