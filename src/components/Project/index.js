import React, { useContext, useRef, useEffect } from "react";
import { Container, Image, Textarea, ButtonWrapper, Expanded } from "./styles";
import Button from "../Button";
import { Context } from "../../context";

export default function Project(props) {
  const context = useContext(Context);
  const ref = useRef(null);
  const expandRef = useRef(null);

  useEffect(() => {
    if (props.isPrev) {
      handleCollapse();
    }
  });

  function handleTranstionEnd(event) {
    if (event.propertyName === "opacity" && props.isExpanded) {
      const project = ref.current;
      const projectSize = project.clientHeight;
      const projectOffset = project.offsetTop;

      if (projectSize < window.innerHeight) {
        const spaceOnTop = (window.innerHeight - projectSize) / 2;
        window.scrollTo(0, projectOffset - spaceOnTop);
      } else {
        window.scrollTo(0, projectOffset - 10);
      }
    }
  }

  function handleCollapse() {
    const expanded = expandRef.current;
    const expandedHeight = expanded.scrollHeight;

    // temporarily disable all css transtions, but save reference to how transtion should work
    let transition = window.getComputedStyle(expanded).transition;
    expanded.style.transition = "none";

    window.requestAnimationFrame(() => {
      expanded.style.height = expandedHeight + "px";
      expanded.style.transition = transition;

      window.requestAnimationFrame(() => {
        expanded.style.height = 0 + "px";
      });
    });
  }

  function handleExpansion(element) {
    const expanded = expandRef.current;
    expanded.style.height = expanded.scrollHeight + "px";
    // when the next css transition finishes (which should be the one we just triggered)
    const handleTranstionEnd = () => {
      expanded.removeEventListener("transitionend", handleTranstionEnd);
      expanded.style.height = "auto";
    };

    expanded.addEventListener("transitionend", handleTranstionEnd);
  }

  function handleClick() {
    if (!props.isExpanded) handleExpansion();
    props.onClick();
  }

  return (
    <Container ref={ref} expanded={props.isExpanded}>
      <div>
        <Image src={props.img}></Image>
        <Textarea>
          <h2>{props.title}</h2>
          {props.children}
        </Textarea>
        <Expanded
          ref={expandRef}
          visible={props.isExpanded}
          onTransitionEnd={handleTranstionEnd}
        >
          <p>
            tae congue eu consequat ac felis donec. A cras semper auctor neque
            vitae tempus quam pellentesque. Erat pellentesque adipiscing commodo
            elit at imperdiet dui accumsan sit. Nisl nisi scelerisque eu
            ultrices vitae auctor eu augue. lLorem ipsum dolor sit amet,
            consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
            labore et dolore magna aliqua. Volutpat sed cras ornare arcu dui
            vivamus. Morbi enim nunc faucibus a pellentesque sit amet. Nulla
            aliquet porttitor lacus luctus accumsan tortor posuere ac. Nulla
            facilisi cras fermentum odio eu feugiat pretium. Eget aliquet nibh
            praesent tristique magna sit amet purus. Eget nunc scelerisque
            viverra mauris in aliquam sem fringilla ut. Eget arcu dictum varius
            duis at consectetur lorem donec massa. Congue nisi vitae suscipit
            tellus mauris a. Sed nisi lacus sed viverra tellus in hac. Sit amet
            purus gravida quis blandit turpis. Eget aliquet nibh praesent
            tristique magna sit amet purus gravida. Ut diam quam nulla
            porttitor. Ac odio tempor orci dapibus ultrices in iaculis nunc. Et
            ultrices neque ornare aenean. Non quam lacus suspendisse faucibus
            interdum posuere. Augue lacus viverra vitae congue eu consequat ac
            felis donec. A cras semper auctor neque vitae tempus quam
            pellentesque. Erat pellentesque adipiscing commodo elit at imperdiet
            dui accumsan sit. Nisl nisi scelerisque eu ultrices vitae auctor eu
            augue.
          </p>
        </Expanded>
      </div>
      <ButtonWrapper>
        <Button danger={props.isExpanded} onClick={handleClick}>
          {props.isExpanded
            ? context.translation.projectBtn[1]
            : context.translation.projectBtn[0]}
        </Button>
      </ButtonWrapper>
    </Container>
  );
}
