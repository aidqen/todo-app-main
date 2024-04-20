'use strict'

import { userService } from 'js/service/user.service.js'
import { utilService } from './service/util.service.js'

window.app = {
  onToggleCheckbox,
  onInit,
}



function onInit() {
  renderTodos()
}

function renderTodos() {
  const elTodos = document.querySelector('.todos')
  const todos = userService.getTodos()

  todos.map(todo => {
        `<div class="todo-container todo-${} flex flex-row flex-center">
        <div class="checkbox" onclick="app.onToggleCheckbox(this)">✔</div>
        <p></p>
        </div>`
  })
}

function onToggleCheckbox(elBtn) {
  elBtn.classList.toggle('active')
}
