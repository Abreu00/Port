import { createStore } from "redux";

const INITIAL_STATE = {
  hiddenNav: "home",
  isFirstLoad: true,
  projectSelector: {
    isVisible: true,
    selected: 0
  }
};

//reducer
function header(state = INITIAL_STATE, action) {
  if (action.type === "SELECT_PROJECTS") {
    return {
      ...state,
      projectSelector: {
        ...state.projectSelector,
        selected: action.selected
      }
    };
  } else if (action.type === "TOOGLE_ANIMATION") {
    return {
      ...state,
      animateHeading: !state.animateHeading
    };
  } else if (action.type === "PAGE_CHANGE") {
    return {
      ...state,
      hiddenNav: action.navToHide,
      projectSelector: {
        ...state.projectSelector,
        isVisible: action.showProjectSelector
      }
    };
  }

  return state;
}

export default createStore(header);
