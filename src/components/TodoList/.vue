<template>
  <form data-test="form" @submit.prevent="add">
    <input v-model.trim="newTodo" data-test="new-todo" />
    <button type="submit" :disabled="!newTodo">提交</button>
    <div v-show="false" data-test="visible"></div>
  </form>
  <ol>
    <li v-for="(todo, i) in todos" :key="i" class="todo" data-test="todo">
      <label v-for="({ text, checked }, i) of [todo]" :key="i">
        <input type="checkbox" :checked="checked" @change="toggle(todo)" />
        {{ text }}
      </label>
      <button type="button" @click="remove(i)"></button>
    </li>
  </ol>
</template>

<script setup lang="ts">
withDefaults(
  defineProps<{
    modelValue?: Todo[]
  }>(),
  {
    modelValue: () =>
      reactive([
        {
          id: 0,
          text: 'Learn VueJS 3',
          checked: false,
        },
      ]),
  }
)

defineEmits<{
  (e: 'update:modelValue', todos: Todo[]): void
  (e: 'remove-todo', todo: Todo, index: number): void
}>()
</script>

<script lang="ts">
import { defineComponent, reactive } from 'vue'

type Todo = {
  id: number
  text: string
  checked: boolean
}

export default defineComponent({
  data: ({ modelValue }): { newTodo: string; todos: Todo[] } => {
    return {
      newTodo: '',
      todos: modelValue,
    }
  },
  watch: {
    todos: {
      handler(todos) {
        this.$emit('update:modelValue', todos)
      },
      deep: true,
    },
  },
  methods: {
    add() {
      this.todos.push({
        id: this.todos.length + 1,
        text: this.newTodo,
        checked: false,
      })
      this.newTodo = ''
    },
    remove(index: number) {
      const [todo] = this.todos.splice(index, 1)
      this.$emit('remove-todo', todo, index)
    },
    toggle(target: Todo) {
      target.checked = !target.checked
    },
  },
})
</script>

<style lang="scss" scoped>
.todo {
  > button::before {
    content: 'x';
  }
}
</style>
