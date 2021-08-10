import {
  ADD_TASK,
  TOGGLE_TASK,
  DELETE_TASK,
  UPDATE_TASK,
} from "./actionsTypes";

export const addTask = (title) => ({
  type: ADD_TASK,
  payload: {
    id: new Date().getTime(),
    title: title,
    completed: false,
  },
});

export const deleteTask = (id) => ({
  type: DELETE_TASK,
  payload: {
    id: id,
  },
});

export const updateTask = (updatedTask) => ({
  type: UPDATE_TASK,
  payload: {
    updatedTask: updatedTask,
  },
});
