import { createStore } from "redux";

const initialState = { id: "", project: "", workpack: "" };

const projectWorkpackReducer = (state = initialState, action) => {
  if (action.type === "change") {
    return {
      id: action.id,
      project: state.project,
      workpack: state.workpack,
    };
  }
  return state;
};

const store = createStore(projectWorkpackReducer);

export default store;
