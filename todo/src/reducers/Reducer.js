import React, { useState, useReducer } from 'react';

export const initialState = [
  {
  item: 'clean kitchen',
  completed: false,
  id: Date.now(),
  }
]

console.log(initialState);

export const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TODO":
      const newTodo = {
        item: action.payload,
        completed: false,
        id: Date.now(),
      };
      return [...state, newTodo]


    case "TOGGLE":
      return state.map( item => {
        return item.id === action.payload ? { ...item, completed: !item.completed } : item
      });


    case "CLEAR":
      return state.filter( item => !item.completed);
      
    default:
      return state;
  }
}