import { mount } from '@vue/test-utils'
import TodoList from './.vue'

// 静态测试可共用一个组件实例
const wrapper = mount(TodoList)

//#region 基础语法
test('usage of get: get a exist tag', () => {
  expect(wrapper.get('input').element.tagName).toBe('INPUT')
})

test('usage of find + exists: find a may not exist tag', () => {
  expect(wrapper.find('.not-exist').exists()).toBe(false)
})

test(`usage of isVisible: assert tag's visibility`, () => {
  expect(wrapper.find('[data-test="visible"]').isVisible()).toBe(false)
})
//#endregion

//#region 真实需求
test('render', () => {
  expect(wrapper.html()).toMatchSnapshot()
})

test('add a todo', async () => {
  const wrapper = mount(TodoList),
    { length } = wrapper.findAll('[data-test="todo"]')
  const text = String(Date.now())

  await wrapper.get('[data-test="new-todo"]').setValue(text)
  await wrapper.get('[data-test="form"]').trigger('submit')

  expect(wrapper.findAll('[data-test="todo"]')).toHaveLength(length + 1)
  expect(wrapper.get('[data-test="todo"]:last-child').text()).toBe(text)
  expect(wrapper.emitted()).toHaveProperty('update:modelValue')
})

test('remove a todo', async () => {
  const wrapper = mount(TodoList),
    { length } = wrapper.findAll('[data-test="todo"]'),
    randomnNth = randomIntIn(1, length),
    todo = wrapper.find(`[data-test="todo"]:nth-child(${randomnNth})`)

  await todo.find('button').trigger('click')

  expect(wrapper.findAll('[data-test="todo"]')).toHaveLength(length - 1)
  expect(
    wrapper
      .find(
        `[data-test="todo"]:nth-child(${randomnNth}):nth-last-child(${
          length - randomnNth + 1
        })`
      )
      .exists()
  ).toBe(false)
  expect(wrapper.emitted()).toHaveProperty('remove-todo')
  expect(wrapper.emitted()).toHaveProperty('update:modelValue')
})

test('check a todo', async () => {
  const wrapper = mount(TodoList),
    { length } = wrapper.findAll('[data-test="todo"]'),
    randomnNth = randomIntIn(1, length),
    todoInput = wrapper.find(
      `[data-test="todo"]:nth-child(${randomnNth}) input`
    )

  await todoInput.trigger('change')

  expect(wrapper.emitted()).toHaveProperty('update:modelValue')
})
//#endregion

function randomIntIn(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1)) + min
}
