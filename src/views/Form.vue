<template>
  <div>
    <div style=" display: flex; flex-direction: column; align-items: center; ">

      <h3 style=" font-weight: normal">Персональные данные</h3>

      <PersonalInformation/>

      <AddTodo
          @add-todo="addTodo"
      />
      <p style="display: flex; justify-content: center">Дети (Макс. 5)</p>

    </div>
    <router-link to="/">Home</router-link>

    <Loader v-if="loading"/>
    <TodoList
        v-else-if="filteredTodos.length"
        v-bind:todos="filteredTodos"
        @remove-todo="removeTodo"
    />
    <p v-else>No todos!</p>
  </div>
</template>

<script>
import TodoList from '@/components/TodoList'
import AddTodo from '@/components/AddTodo'
import Loader from '@/components/Loader'
import PersonalInformation from "@/components/PersonalInformation.vue";

export default {
  name: 'app',
  data() {
    return {
      todos: [],
      loading: true,
      filter: 'all'
    }
  },
  mounted() {
    fetch('https://jsonplaceholder.typicode.com/todos?_limit=3')
        .then(response => response.json())
        .then(json => {
          setTimeout(() => {
            this.todos = json
            this.loading = false
          }, 1000)

        })
  },

  computed: {
    filteredTodos() {
      if (this.filter === 'all') {
        return this.todos
      }

      if (this.filter === 'completed') {
        return this.todos.filter(t => t.completed)
      }

      if (this.filter === 'not-completed') {
        return this.todos.filter(t => !t.completed)
      }
    }
  },
  methods: {
    removeTodo(id) {
      this.todos = this.todos.filter(t => t.id !== id)
    },
    addTodo(todo) {
      this.todos.push(todo)
    }
  },
  components: {
    TodoList, AddTodo, Loader, PersonalInformation
  }
}
</script>