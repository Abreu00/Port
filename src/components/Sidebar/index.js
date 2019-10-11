import React from "react";
import { Container, Bottom } from "./styles";
import {
  FaLinkedin,
  FaGithub,
  FaRegEnvelope,
  FaChevronUp
} from "react-icons/fa";
import IconWrapper from "../IconWrapper";
import { useState, useEffect } from "react";

export default function Sidebar(props) {
  const [showArrow, setShowArrow] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  });

  function handleScroll() {
    const y = window.scrollY;
    if (y === 0 && showArrow) setShowArrow(false);
    else if (y > 0 && !showArrow) setShowArrow(true);
  }

  function handleArrowClick() {
    window.scrollTo(0, 0);
    console.log("oi");
  }

  return (
    <Container>
      <IconWrapper>
        <FaLinkedin />
      </IconWrapper>
      <IconWrapper>
        <FaGithub />
      </IconWrapper>
      <IconWrapper>
        <FaRegEnvelope />
      </IconWrapper>
      <Bottom showArrow={showArrow}>
        <div onClick={handleArrowClick}>
          <IconWrapper>
            <FaChevronUp />
          </IconWrapper>
        </div>
      </Bottom>
    </Container>
  );
}
