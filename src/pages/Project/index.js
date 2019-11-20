import React, { useContext, useState } from "react";
import Layout from "../../layouts";
import Header from "../../components/Header";
import ClearFix from "../../components/ClearFix";
import Cta from "../../components/Cta";
import { Context } from "../../context";
import projects from "../../assets/projects";

import { Title, Container, Image } from "./styles";

export default function Project({ match }) {
  const context = useContext(Context);
  const projectNumber = parseInt(match.params.id) - 1;
  const project = projects[projectNumber];
  const img = require("../../assets/images/directa.png");

  const [imgSize, setImgSize] = useState({
    width: "0rem",
    height: "0rem"
  });

  function handleImageLoad(e) {
    const img = e.target;
    const aspectRatio = img.naturalWidth / img.naturalHeight;

    setImgSize({
      width: `${aspectRatio * 25}rem`,
      height: `${(1 / aspectRatio) * 25}rem`
    });
  }

  return (
    <Layout>
      <Container>
        <Header />
        <Title>{context.translation.projects[projectNumber].title}</Title>
        <ClearFix>
          <Image
            width={imgSize.width}
            height={imgSize.height}
            onLoad={handleImageLoad}
            src={img}
          ></Image>

          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt
            veritatis dignissimos sint nisi magni! Praesentium repellendus
            perferendis accusantium quisquam. Ea iure hic ex, quos sit inventore
            optio. Voluptatem, iste deleniti! Lorem ipsum dolor, sit amet
            consectetur adipisicing elit. Incidunt veritatis dignissimos sint
            nisi magni! Praesentium repellendus perferendis accusantium
            quisquam. Ea iure hic ex, quos sit inventore optio. Voluptatem, iste
            deleniti! Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Incidunt veritatis dignissimos sint nisi magni! Praesentium
            repellendus perferendis accusantium quisquam. Ea iure hic ex, quos
            sit inventore optio. Voluptatem, iste deleniti! Lorem ipsum dolor,
            sit amet consectetur adipisicing elit. Incidunt veritatis
            dignissimos sint nisi magni! Praesentium repellendus perferendis
            accusantium quisquam. Ea iure hic ex, quos sit inventore optio.
            Voluptatem, iste deleniti! Lorem ipsum dolor, sit amet consectetur
            adipisicing elit. Incidunt veritatis dignissimos sint nisi magni!
            Praesentium repellendus perferendis accusantium quisquam. Ea iure
            hic ex, quos sit inventore optio. Voluptatem, iste deleniti! Lorem
            ipsum dolor, sit amet consectetur adipisicing elit. Incidunt
            veritatis dignissimos sint nisi magni! Praesentium repellendus
            perferendis accusantium quisquam. Ea iure hic ex, quos sit inventore
            optio. Voluptatem, iste deleniti! Lorem ipsum dolor, sit amet
            consectetur adipisicing elit. Incidunt veritatis dignissimos sint
            nisi magni! Praesentium repellendus perferendis accusantium
            quisquam. Ea iure hic ex, quos sit inventore optio. Voluptatem, iste
            deleniti! Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Incidunt veritatis dignissimos sint nisi magni! Praesentium
            repellendus perferendis accusantium quisquam. Ea iure hic ex, quos
            sit inventore optio. Voluptatem, iste deleniti! Lorem ipsum dolor,
            sit amet consectetur adipisicing elit. Incidunt veritatis
            dignissimos sint nisi magni! Praesentium repellendus perferendis
            accusantium quisquam. Ea iure hic ex, quos sit inventore optio.
            Voluptatem, iste deleniti! Lorem ipsum dolor, sit amet consectetur
            adipisicing elit. Incidunt veritatis dignissimos sint nisi magni!
            Praesentium repellendus perferendis accusantium quisquam. Ea iure
            hic ex, quos sit inventore optio. Voluptatem, iste deleniti! Lorem
            ipsum dolor, sit amet consectetur adipisicing elit. Incidunt
            veritatis dignissimos sint nisi magni! Praesentium repellendus
            perferendis accusantium quisquam. Ea iure hic ex, quos sit inventore
            optio. Voluptatem, iste deleniti! Lorem ipsum dolor, sit amet
            consectetur adipisicing elit. Incidunt veritatis dignissimos sint
            nisi magni! Praesentium repellendus perferendis accusantium
            quisquam. Ea iure hic ex, quos sit inventore optio. Voluptatem, iste
            deleniti! Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Incidunt veritatis dignissimos sint nisi magni! Praesentium
            repellendus perferendis accusantium quisquam. Ea iure hic ex, quos
            sit inventore optio. Voluptatem, iste deleniti! Lorem ipsum dolor,
            sit amet consectetur adipisicing elit. Incidunt veritatis
            dignissimos sint nisi magni! Praesentium repellendus perferendis
            accusantium quisquam. Ea iure hic ex, quos sit inventore optio.
            Voluptatem, iste deleniti! Lorem ipsum dolor, sit amet consectetur
            adipisicing elit. Incidunt veritatis dignissimos sint nisi magni!
            Praesentium repellendus perferendis accusantium quisquam. Ea iure
            hic ex, quos sit inventore optio. Voluptatem, iste deleniti! Lorem
            ipsum dolor, sit amet consectetur adipisicing elit. Incidunt
            veritatis dignissimos sint nisi magni! Praesentium repellendus
            perferendis accusantium quisquam. Ea iure hic ex, quos sit inventore
            optio. Voluptatem, iste deleniti! Lorem ipsum dolor, sit amet
            consectetur adipisicing elit. Incidunt veritatis dignissimos sint
            nisi magni! Praesentium repellendus perferendis accusantium
            quisquam. Ea iure hic ex, quos sit inventore optio. Voluptatem, iste
            deleniti! Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Incidunt veritatis dignissimos sint nisi magni! Praesentium
            repellendus perferendis accusantium quisquam. Ea iure hic ex, quos
            sit inventore optio. Voluptatem, iste deleniti! Lorem ipsum dolor,
            sit amet consectetur adipisicing elit. Incidunt veritatis
            dignissimos sint nisi magni! Praesentium repellendus perferendis
            accusantium quisquam. Ea iure hic ex, quos sit inventore optio.
            Voluptatem, iste deleniti! Lorem ipsum dolor, sit amet consectetur
            adipisicing elit. Incidunt veritatis dignissimos sint nisi magni!
            Praesentium repellendus perferendis accusantium quisquam. Ea iure
            hic ex, quos sit inventore optio. Voluptatem, iste deleniti! Lorem
            ipsum dolor, sit amet consectetur adipisicing elit. Incidunt
            veritatis dignissimos sint nisi magni! Praesentium repellendus
            perferendis accusantium quisquam. Ea iure hic ex, quos sit inventore
            optio. Voluptatem, iste deleniti!
          </p>
        </ClearFix>
        {project.ctas.map((cta, index) => (
          <Cta key={index} link={cta.link}>
            {cta.text}
          </Cta>
        ))}
      </Container>
    </Layout>
  );
}
