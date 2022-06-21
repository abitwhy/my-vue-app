import { mount } from '@vue/test-utils'
import TodoList from './index.vue'

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
const wrapper = mount(TodoList)

test('renders a todo', () => {
  const todo = wrapper.get('[data-test="todo"]')
  expect(todo.text()).toBe('Learn Vue.js 3')
  expect(wrapper.html()).toMatchSnapshot()
})

test('creates a todo', async () => {
  await wrapper.get('[data-test="new-todo"]').setValue('New todo')
  await wrapper.get('[data-test="form"]').trigger('submit')

  expect(wrapper.findAll('[data-test="todo"]')).toHaveLength(2)
})

test('usage of get: find a tag', () => {
  expect(wrapper.get('input').element.tagName).toBe('INPUT')
})

test('usage of find + exists: find a not exist tag', () => {
  expect(wrapper.find('.not-exist').exists()).toBe(false)
})

test(`usage of isVisible: assert tag's visibility`, () => {
  expect(wrapper.find('[data-test="visible"]').isVisible()).toBe(false)
})
