export function selectProjects(selected) {
  return {
    type: "SELECT_PROJECTS",
    selected
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
