<template>
  <form data-test="form" @submit.prevent="createTodo">
    <input v-model="newTodo" data-test="new-todo" />
    <button type="submit" :disabled="!newTodo">提交</button>
    <div v-show="false" data-test="visible"></div>
  </form>
  <ol>
    <li v-for="todo in todos" :key="todo.id" data-test="todo">
      {{ todo.text }}
    </li>
  </ol>
</template>

<script setup lang="ts">
import { reactive } from 'vue'

type Todo = {
  id: number
  text: string
  completed: boolean
}
withDefaults(
  defineProps<{
    todos?: Todo[]
  }>(),
  {
    todos: () =>
      reactive([
        {
          id: 0,
          text: 'Learn Vue.js 3',
          completed: false,
        },
      ]),
  }
)
</script>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  data() {
    return {
      newTodo: '',
    }
  },
  methods: {
    createTodo() {
      this.todos.push({
        id: this.todos.length + 1,
        text: this.newTodo,
        completed: false,
      })
      this.newTodo = ''
    },
  },
})
</script>
