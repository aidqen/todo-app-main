'use strict'

import { userService } from './service/user.service.js'

window.onload = onInit

window.app = {
  onToggleCheckbox,
}

function onInit() {
  renderTodos()
}

function renderTodos() {
  const elTodos = document.querySelector('div.todos')
  const todos = userService.getTodos()

  const strHTML = todos.map(todo => {
        return `
        <div class="todo todo-${todo.id}">
        <div class="checkbox" onclick="app.onToggleCheckbox(this)"></div>
        <p>${todo.text}</p>
        <button class="remove-btn" onRemoveTodo(${todo.id})></button>
        </div>
         `
  }).join('')
  console.log(todos);
  console.log(strHTML);

  elTodos.innerHTML = strHTML
}

function onToggleCheckbox(elBtn) {
  elBtn.classList.toggle('active')
}
