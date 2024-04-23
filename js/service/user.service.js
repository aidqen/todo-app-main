'use strict'

import { utilService } from './util.service.js'

export const userService = {
  getTodos,
  toggleCheckbox,
  addTodo,
  removeTodo,
  setSort,
}

var gTodos = []

export function getTodos() {
  if (gTodos.length === 0) {
    createTodos()
    console.log('hi')
  }
  return gTodos
}

function createTodos() {
  _makeTodo('Clean my room')
  _makeTodo('Clean my room')
  _makeTodo('Clean my room')
}

function _makeTodo(text) {
  gTodos.unshift({ text, completed: false, id: utilService.getRandomId(4) })
}

function findTodoById(todoId) {
  return gTodos.find(todo => todo.id === todoId)
}

function toggleCheckbox(todoId) {
  const selectedTodo = findTodoById(todoId)
  selectedTodo.completed = !selectedTodo.completed
}

function addTodo(value) {
  _makeTodo(value)
}

function removeTodo(todoId) {
  const idx = gTodos.findIndex(todo => todo.id === todoId)
  gTodos.splice(idx, 1)
}

}