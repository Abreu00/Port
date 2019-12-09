import React, { useEffect } from "react";
import { Route, useLocation } from "react-router-dom";
import Main from "../pages/Main/";
import TextPage from "../pages/TextPage";
import Project from "../pages/Project";
import { connect } from "react-redux";
import { updateHeaderWithPage } from "../store/actions/header";

function Routes({ updateHeaderWithPage }) {
  const location = useLocation();

  useEffect(() => {
    const path = location.pathname;
    if (path === "/" || path === "/home") {
      updateHeaderWithPage("home", true);
    } else {
      updateHeaderWithPage(path.split("/")[1]);
    }
  }, [location, updateHeaderWithPage]);

  return (
    <>
      <Route exact path="/(home|)" component={Main} />
      <Route path="/projects/:id" component={Project} />
      <Route
        path="/about"
        render={props => <TextPage {...props} name="about"></TextPage>}
      />
      <Route
        path="/experience"
        render={props => <TextPage {...props} name="experience"></TextPage>}
      />
    </>
  );
}

const mapDispatchToProps = dispatch => ({
  updateHeaderWithPage: (...item) => dispatch(updateHeaderWithPage(...item))
});

const mapStateToProps = state => ({
  isFirstLoad: state.isFirstLoad
});

export default connect(mapStateToProps, mapDispatchToProps)(Routes);
