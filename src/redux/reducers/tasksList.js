import {
  ADD_TASK,
  TOGGLE_TASK,
  DELETE_TASK,
  UPDATE_TASK,
} from "../actionsTypes";

const INITIAL_STATE = [
  { id: 1, title: "Un exemple de tâche", completed: true },
];

export const tasksList = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_TASK:
      return [action.payload, ...state];
    case DELETE_TASK:
      return state.filter((task) => task.id !== action.payload.id);
    case UPDATE_TASK:
      const findTask = (task) => task.id === action.payload.updatedTask.id;
      const taskIndex = state.findIndex(findTask);
      return state.map((t, ti) => {
        if (ti === taskIndex) {
          return action.payload.updatedTask;
        }
        return t;
      });
    default:
      return state;
  }
};
