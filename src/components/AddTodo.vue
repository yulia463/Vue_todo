<template>
  <form @submit.prevent="onSubmit">
    <div class="information">
      <template>From A: {{ store.count }}</template>
      <div class="btn">
        <button class="custom-button" type="submit">Добавить ребенка</button>
      </div>


      <div class="bottom-container">

        <div class="intuts-and-btn">
        <div class="input-container-small">
          <label for="name" class="input-label">Имя</label>
          <input
              type="text"
              v-model="title"
              id="name"
              class="custom-input"
              placeholder="Введите имя"
          />
        </div>
        <div class="input-container-small">
          <label for="name" class="input-label">Возраст</label>
          <input
              type="text"
              v-model="title"
              id="name"
              class="custom-input"
              placeholder="Введите возраст"
          />
        </div>

        <div >
          <button class="custom-button-delete" type="submit">Удалить</button>
        </div>
        </div>

        <div class="intuts-and-btn">
        <div class="input-container-small">
          <label for="name" class="input-label">Имя</label>
          <input
              type="text"
              v-model="title"
              id="name"
              class="custom-input"
              placeholder="Введите имя"
          />
        </div>
        <div class="input-container-small">
          <label for="name" class="input-label">Возраст</label>
          <input
              type="text"
              v-model="title"
              id="name"
              class="custom-input"
              placeholder="Введите возраст"
          />
        </div>
        <div >
          <button class="custom-button-delete" type="submit">Удалить</button>
        </div>
        </div>

        <div class="btn-save">
          <button class="custom-button-save" type="submit">Сохранить</button>
        </div>


      </div>
    </div>
  </form>
</template>

<script>
import { store } from './store.js'
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

.input-container-small {
  width: 260px;
  height: 56px;
  display: flex;
  flex-direction: column;
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 8px;
  margin-right: 20px;
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

.custom-input::placeholder {
  color: #bbb;
}

.information {
  display: flex;
  justify-content: center;
  flex-direction: column;
}

.btn {
  display: flex;
  justify-content: center;
}


.custom-button {
  width: 204px;
  height: 44px;
  background-color: transparent;
  border: 2px solid #01A7FD;
  border-radius: 24px;
  color: #01A7FD;
  text-align: center;
  font-size: 16px;
  line-height: 24px;
  cursor: pointer;
  margin-top: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.custom-button-delete {
  height: 44px;
  background-color: transparent;
  border: white;
  color: #01A7FD;
  font-size: 16px;
  cursor: pointer;
  margin-top: 16px;
}
.custom-button-save {
  width: 118px;
  height: 44px;
  border: 2px solid #01A7FD;
  border-radius: 24px;
  color: white;
  font-size: 16px;
  cursor: pointer;
  margin-top: 16px;
  background-color: #01A7FD;
}

.custom-button::before {
  content: "+ ";
  font-size: 20px;
  margin-right: 4px;
}

.bottom-container {
  display: flex;
  padding-top: 25px;
  flex-direction: column;
}
.intuts-and-btn{
  display: flex;

}
</style>