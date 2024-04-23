'use strict'

import { userService } from './service/user.service.js'

window.onload = onInit

window.app = {
  onToggleCheckbox,
  onAddTodo,
  onRemoveTodo,
  onSetSort
}

function onInit() {
  renderTodos()
}

function renderTodos() {
  const elTodos = document.querySelector('div.todos')
  const todos = userService.getTodos()

  const strHTML = todos
    .map(todo => {
      console.log(todo.id)
      var elClass = ['todo', `${todo.id}`]
      if (todo.completed) {
        elClass.push('completed')
      }
      return `
        <div class="${elClass.join(
          ' '
        )}" >
        <div class="checkbox onclick="app.onToggleCheckbox('${todo.id}')""></div>
        <p onclick="app.onToggleCheckbox('${todo.id}')">${todo.text}</p>
        <button class="remove-btn" onclick="app.onRemoveTodo(event,'${todo.id}')">X</button>
        </div>
         `
    })
    .join('')

  elTodos.innerHTML = strHTML
}

function onToggleCheckbox(todoId) {
  const elTodos = document.querySelectorAll('.todo')
  const todosArr = Array.from(elTodos)
  const selectedTodo = todosArr.find(todo => todo.classList.contains(todoId))
  selectedTodo.classList.toggle('completed')
  userService.toggleCheckbox(todoId)
  // elTodo.classList.toggle('completed')
}

function onAddTodo(ev, elForm) {
  ev.preventDefault()
  const elInput = elForm.querySelector('input')
  userService.addTodo(elInput.value)
  renderTodos()
}

function onRemoveTodo(ev, todoId) {
  ev.preventDefault()
  userService.removeTodo(todoId)
  renderTodos()
}
