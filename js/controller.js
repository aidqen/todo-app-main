'use strict'

import { userService } from './service/user.service.js'

window.onload = onInit

window.app = {
  onToggleCheckbox,
  onAddTodo
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
        )}" onclick="app.onToggleCheckbox(this, '${todo.id}')">
        <div class="checkbox"></div>
        <p>${todo.text}</p>
        <button class="remove-btn" onRemoveTodo(${todo.id})>X</button>
        </div>
         `
    })
    .join('')

  elTodos.innerHTML = strHTML
}

function onToggleCheckbox(elTodo, todoId) {
  userService.toggleCheckbox(todoId)
  elTodo.classList.toggle('completed')
}

function onAddTodo(ev, elForm) {
  ev.preventDefault()
  const elInput = elForm.querySelector('input')
  userService.addTodo(elInput.value)
  renderTodos()
}

