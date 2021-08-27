import React from "react";
import { Container, Title, Description } from "./styles";

const Card = ({ title, description, index, onRemove, sectionTitle, creationTime }) => {
  const onDragStart = (e, sectionTitle, data) => {
    e.dataTransfer.setData("data", JSON.stringify({ sectionTitle, title, data }));
  }

  return (
    <Container draggable onDragStart={(e) => { onDragStart(e, sectionTitle, { creationTime, title, description, index }); }}>
      <Title>{title}</Title>
      <Description>{description}</Description>
      <button onClick={() => { onRemove(sectionTitle, index); }}>x</button>
    </Container>
  );
};

export default Card;
