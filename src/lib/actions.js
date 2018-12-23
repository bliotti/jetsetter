import uniqueId from 'lodash'
import AppDispatcher from './dispatcher'
import { UPDATE_ITEM, REMOVE_ITEM, ADD_NEW_ITEM } from './constants'

export const addItem = value => {
  AppDispatcher.dispatch({
    type: ADD_NEW_ITEM,
    item: { value, packed: false, id: uniqueId() }
  })
}

export const toggleItem = item => {
  AppDispatcher.dispatch({
    type: UPDATE_ITEM,
    item: { ...item, packed: !item.packed }
  })
}

export const removeItem = item => {
  console.log({ item })
  AppDispatcher.dispatch({
    type: REMOVE_ITEM,
    item
  })
}
