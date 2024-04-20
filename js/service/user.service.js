'use strict'

export const userService = {
    getTodos,
    
}

var gTodos = []

function getTodos() {
    if (gTodos === '') {
        createTodos()
    }
    return gTodos
}

function createTodos() {
    _makeTodo('Clean my room')
    _makeTodo('Clean my room')
    _makeTodo('Clean my room')
}

function _makeTodo(text) {
    gTodos.push({text, completed: false})
}