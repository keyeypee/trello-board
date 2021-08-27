import React from "react";
import Card from "../Card";
import { Title, Button, Container, CardContainer } from "./styles";

const Section = ({ title, cards, name, onSave, onAdd, onRemove, onSectionRemove, onCardDrop }) => {
  const onAllowDrop = (e) => {
    e.preventDefault();
  };

  const onDrop = (e) => {
    e.preventDefault();
    const { sectionTitle, data } = JSON.parse(e.dataTransfer.getData("data"));
    if (sectionTitle !== title) {
      onCardDrop(sectionTitle, title, data);
    }
  };

  return (
    <Container>
      <Title>
        {title}
      </Title>
      <CardContainer onDrop={onDrop} onDragOver={onAllowDrop}>
        {cards.sort((a, b) => b.creationTime - a.creationTime).map((card, i) => (
          <Card
            key={i + 1}
            {...card}
            index={i}
            sectionTitle={title}
            onRemove={onRemove}
          />
        ))}
      </CardContainer>
      <Button onClick={() => { onAdd(title); }}>+</Button>
      <Button className="remove" onClick={() => { onSectionRemove(title); }}>x</Button>
    </Container>
  );
};

export default Section;
