import React from "react";
import { Container, Bottom, Message } from "./styles";
import {
  FaLinkedin,
  FaGithub,
  FaRegEnvelope,
  FaChevronUp
} from "react-icons/fa";
import IconWrapper from "../IconWrapper";
import { useState, useEffect, useRef } from "react";

export default function Sidebar(props) {
  const [showArrow, setShowArrow] = useState(false);
  const [showMessage, setShowMessage] = useState(false);
  const firstUpdate = useRef(true);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  });

  useEffect(() => {
    if (firstUpdate.current || showMessage === false) {
      firstUpdate.current = false;
      return;
    }
    setTimeout(() => setShowMessage(false), 1000);
  }, [showMessage]);

  function handleScroll() {
    const y = window.scrollY;
    if (y === 0 && showArrow) setShowArrow(false);
    else if (y > 0 && !showArrow) setShowArrow(true);
  }

  function handleArrowClick() {
    window.scrollTo(0, 0);
  }

  function handleClickEmail() {
    const textarea = document.createElement("textarea");
    textarea.style.opacity = 0;
    textarea.innerText = "fabiowabreu@gmail.com";
    document.documentElement.append(textarea);
    textarea.select();
    textarea.setSelectionRange(0, 99999);
    document.execCommand("copy");
    setShowMessage(true);

    document.documentElement.removeChild(textarea);
  }

  return (
    <Container>
      <IconWrapper>
        <a
          target="_blank"
          href="https://www.linkedin.com/in/f%C3%A1bio-de-abreu-371303159/"
          rel="noopener noreferrer"
        >
          <FaLinkedin />
        </a>
      </IconWrapper>
      <IconWrapper>
        <a
          target="_blank"
          href="https://github.com/Abreu00"
          rel="noopener noreferrer"
        >
          <FaGithub />
        </a>
      </IconWrapper>
      <IconWrapper>
        <div onClick={handleClickEmail}>
          <FaRegEnvelope />
        </div>
        <Message show={showMessage}>Copied</Message>
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
