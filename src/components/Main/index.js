import React, { useState, useEffect } from "react";

import Section from "../Section";
import Modal from '../Modal';
import ListForm from "./ListForm";
import CardForm from "./CardForm";
import { Container, Heading, SectionContainer, Action } from "./styles";

const Main = () => {
  const [state, setState] = useState({});
  const [showSectionModal, setShowSectionModal] = useState(false);
  const [listData, setListData] = useState({
    show: false,
    listTitle: null,
  });

  const onAddList = () => {
    setShowSectionModal(true);
  };

  const setDataToLocalStorage = (requiredState) => {
    localStorage.setItem('trelloData', JSON.stringify(requiredState));
  };

  const onSectionFormSubmit = (values) => {
    const newState = { ...state };
    const requiredState = {
      ...newState,
      [values.listTitle]: [],
    };
    setState({
      ...newState,
      [values.listTitle]: [],
    });
    setState(requiredState);
    setDataToLocalStorage(requiredState);
    onSectionModalClose();
  };

  const onSectionModalClose =() => {
    setShowSectionModal(false);
  }

  const onCardFormSubmit = (values) => {
    const newState = { ...state };
    const requiredState = {
      ...newState,
      [listData.listTitle]: [...newState[listData.listTitle], {
        ...values,
        creationTime: new Date().getTime(),
      }],
    };
    setState(requiredState);
    setDataToLocalStorage(requiredState);
    onCloseCardModal();
  };

  const onAddCardToSection = (listName) => {
    setListData({
      show: true,
      listTitle: listName,
    });
  };

  const onCloseCardModal =() => {
    setListData({
      show: false,
      listTitle: null,
    });
  }

  const onCardRemove = (section, index) => {
    const newState = { ...state };
    const filteredSection = newState[section].filter((card, i) => i !== index);
    const requiredState = {
      ...newState,
      [section]: filteredSection,
    };
    setState(requiredState);
    setDataToLocalStorage(requiredState);
  };

  const onSectionRemove = (section) => {
    const newState = { ...state };
    delete newState[section];
    setState(newState);
    setDataToLocalStorage(newState);
  };

  useEffect(() => {
    const data = localStorage.getItem('trelloData');
    if (data) {
      setState(JSON.parse(data));
    }
  }, []);

  const onCardDrop = (previousSection, currentSection, data) => {
    const newState = { ...state };
    const { index, ...restData } = data;
    const filteredPrev = newState[previousSection].filter((card, i) => index !== i);
    newState[currentSection] = [...newState[currentSection], restData];
    const requiredState = {
      ...newState,
      [previousSection]: filteredPrev,
    };
    setState(requiredState);
    setDataToLocalStorage(requiredState);
  };

  return (
    <Container>
      <Heading>Trello Board</Heading>
      <Action>
        <button onClick={onAddList}>Add List</button>
      </Action>
      <SectionContainer>
        {Object.keys(state).map((section) => (
          <Section
            key={section}
            title={section}
            name={section}
            cards={state[section]}
            onAdd={onAddCardToSection}
            onRemove={onCardRemove}
            onSectionRemove={onSectionRemove}
            onCardDrop={onCardDrop}
          />
        ))}
      </SectionContainer>
      {showSectionModal && <Modal show={showSectionModal} onClose={onSectionModalClose}>
          <ListForm onSectionFormSubmit={onSectionFormSubmit} listObj={state} />
        </Modal>
      }
      {listData.show && <Modal show={listData.show} onClose={onCloseCardModal}>
          <CardForm onCardFormSubmit={onCardFormSubmit} listTitle={listData.listTitle} />
        </Modal>
      }
    </Container>
  );
};

export default Main;
