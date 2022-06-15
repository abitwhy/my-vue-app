import { mount } from '@vue/test-utils'
import TodoList from './index.vue'

test('renders a todo', () => {
  const wrapper = mount(TodoList)
  const todo = wrapper.get('[data-test="todo"]')
  expect(todo.text()).toBe('Learn Vue.js 3')
  expect(wrapper.html()).toMatchSnapshot()
})
