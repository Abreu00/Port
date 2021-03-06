import React, { useEffect, useContext } from "react";

import { TextContainer } from "./styles";
import { Context } from "../../context";
import PropTypes from "prop-types";

export default function TextPage({ name }) {
  const context = useContext(Context);
  const page = context.translation.textPages[name];

  useEffect(() => {
    document.title = page.title + " | Fábio de Abreu";
  }, [page.title]);

  return (
    <TextContainer>
      <h1>{page.title}</h1>
      {page.text.map((paragraph, i) => (
        <p key={i}>{paragraph}</p>
      ))}
    </TextContainer>
  );
}

TextPage.propTypes = {
  name: PropTypes.string.isRequired
};
