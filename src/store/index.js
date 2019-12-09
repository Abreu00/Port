import { createStore } from "redux";

const INITIAL_STATE = {
  hiddenNav: "home",
  isFirstLoad: true,
  projectSelector: {
    isVisible: true,
    selected: 0
  }
};

function selectProjects(state, action) {
  return {
    ...state,
    projectSelector: {
      ...state.projectSelector,
      selected: action.selected
    }
  };
}

function pageChange(state, action) {
  return {
    ...state,
    hiddenNav: action.navToHide,
    projectSelector: {
      ...state.projectSelector,
      isVisible: action.showProjectSelector
    }
  };
}

const reducers = {
  PAGE_CHANGE: pageChange,
  SELECT_PROJECTS: selectProjects
};

const header = (state = INITIAL_STATE, action) =>
  reducers[action.type] ? reducers[action.type](state, action) : state;

export default createStore(header);
