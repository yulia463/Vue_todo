<template>
  <form @submit.prevent="onSubmit">
    <div class="information">
      <div class="input-container">
        <label for="name" class="input-label">Имя</label>
        <input
            type="text"
            v-model="title"
            id="name"
            class="custom-input"
            placeholder="Введите имя"
        />
      </div>
      <div class="input-container">
        <label for="name" class="input-label">Возраст</label>
        <input
            type="text"
            v-model="title"
            id="name"
            class="custom-input"
            placeholder="Введите имя"
        />
      </div>

<div class="btn">
      <button type="submit">Create</button>
</div>
    </div>
  </form>
</template>

<script>
export default {
  data() {
    return {
      title: ''
    }
  },
  methods: {
    onSubmit() {
      if (this.title.trim()) {
        const newTodo = {
          id: Date.now(),
          title: this.title,
          completed: false
        }

        this.$emit('add-todo', newTodo)
        this.title = ''
      }
    }
  }
}
</script>

<style scoped>
form {
  display: flex;
}

.input-container {
  width: 616px;
  height: 56px;
  display: flex;
  flex-direction: column;
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 8px;
}

.input-label {
  color: #888;
  font-weight: bold;
}

.custom-input {
  border: none;
  outline: none;
  height: 100%;
  font-size: 16px;
}

.custom-input::placeholder {
  color: #bbb;
}

.information {
  display: flex;
  justify-content: center;
    flex-direction: column;
}
.btn{
  display: flex;
}
</style>