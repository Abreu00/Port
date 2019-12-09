import React, { useContext, useState, useEffect } from "react";
import ClearFix from "../../components/ClearFix";
import Cta from "../../components/Cta";
import { Context } from "../../context";
import projects from "../../assets/projects";

import { Title, Container, Image, Row } from "./styles";

export default function Project({ match }) {
  const context = useContext(Context);
  const projectNumber = parseInt(match.params.id) - 1;
  const project = projects[projectNumber];
  const img = project.img;

  useEffect(() => {
    document.title =
      context.translation.projects[projectNumber].title + " | Fábio de Abreu";
  }, [context.translation, projectNumber]);

  const [imgState, setImgState] = useState({
    width: "0rem",
    height: "0rem",
    minHeight: "0",
    minWidth: "0"
  });

  function handleImageLoad({ target }) {
    const aspectRatio = target.naturalWidth / target.naturalHeight;
    const width = aspectRatio * 25;
    const height = (1 / aspectRatio) * 25;

    setImgState({
      width: `${width}vmax`,
      height: `${height}vmax`,
      minWidth: `${width}rem`,
      minHeight: `${height}rem`
    });
  }

  return (
    <Container>
      <Row>
        <Title>{context.translation.projects[projectNumber].title}</Title>
        <div>
          {project.ctas.map((cta, index) => (
            <Cta key={index} link={cta.link} disabled={cta.disabled}>
              {cta.text}
            </Cta>
          ))}
        </div>
      </Row>
      <ClearFix>
        <Image
          width={imgState.width}
          height={imgState.height}
          minHeight={imgState.minHeight}
          minWidth={imgState.minWidth}
          onLoad={handleImageLoad}
          src={img}
        />
        {context.translation.projects[projectNumber].desc.map((text, i) => (
          <p key={i}>{text}</p>
        ))}
      </ClearFix>
    </Container>
  );
}
