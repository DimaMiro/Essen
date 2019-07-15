import ACTION_TYPES from '../constants/ActionTypes';
let nextId = 0
export const addList = (list) => {
  return {
    type: ACTION_TYPES.ADD_LIST,
    payload: {
      id: nextId++,
      ...list
    }
  }
}

export const updateList = (list) => {
  return {
    type: ACTION_TYPES.UPDATE_LIST,
    payload: list
  }
}