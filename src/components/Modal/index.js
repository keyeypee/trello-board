import React from 'react';
import { Container, Close, OverLay } from './styles';

const Modal = ({ children, onClose, show }) => {
    return show ? (
        <>
            <Container>
                {children}
                <Close onClick={onClose}>x</Close>
            </Container>
            <OverLay />
        
        </>
    ) : null;
};

export default Modal;
