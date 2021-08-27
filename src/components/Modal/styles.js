import styled from "styled-components";

export const Container = styled.div`
    overflow: visible;
    position: fixed;
    z-index: 10;
    top: calc(50% - 200px);
    bottom: 0;
    width: 500px;
    height: 400px;
    left: calc(50% - 200px);
    box-shadow: 0 0 3px rgba(0, 0, 0, 0.4);
    padding: 48px;
    background-color: #fff;
`;

export const Close = styled.button`
    position: absolute;
    top: -16px;
    right: -16px;
    background-color: transparent;
    border: 1px solid #ccc;
    font-size: 1.5rem;
    height: 40px;
    width: 40px;
    background-color: #fff;
    border-radius: 50%;
`;

export const OverLay = styled.div`
    background-color: rgba(0,0,0,0.7);
    position: fixed;
    height: 100vh;
    top: 0;
    left: 0;
    z-index: 9;
    width: 100%;
`;
