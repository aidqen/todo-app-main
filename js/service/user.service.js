'use strict'

import { utilService } from './util.service.js'

export const userService = {
  getTodos,
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
  gTodos.push({ text, completed: false, id: utilService.getRandomId() })
}
