export function selectProjects(selected) {
  return {
    type: "SELECT_PROJECTS",
    selected
  };
}

export function toggleHeadingAnimation() {
  return {
    type: "TOOGLE_ANIMATION"
  };
}

export function updateHeaderWithPage(navToHide, showProjectSelector = false) {
  return {
    type: "PAGE_CHANGE",
    navToHide: navToHide,
    showProjectSelector: showProjectSelector,
    isFirstLoad: false
  };
}
