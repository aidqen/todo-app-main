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

function getTodos() {
  if (gTodos.length === 0) {
    createTodos()
    return gTodos
  }
  if (!gFilter) {
  return gTodos
  }
  if (gFilter === 'active') {
    return gTodos.filter(todo => !todo.completed)
  }
  if (gFilter === 'completed') {
    return gTodos.filter(todo => todo.completed)
  }
}

function createTodos() {
  _makeTodo('Clean my room')
  _makeTodo('Meditate')
  _makeTodo('Read a book')
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

function setSort(sortValue) {
  if (sortValue === 'All') {
    gFilter = ''
  }
  if (sortValue === 'Active') {
    gFilter = 'active'
  }
  if (sortValue === 'Completed') {
    gFilter = 'completed'
  }
}

