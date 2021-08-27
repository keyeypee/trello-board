import styled from "styled-components";

export const Container = styled.div`
  width: 360px;
  padding: 16px;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  margin-top: 32px;
  background-color: orange;
  border: 1px solid orange;
  position: relative;
  padding-bottom: 72px;
  margin: 0 8px;
  overflow: visible;
  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const Title = styled.h3`
  text-align: center;
  text-transform: capitalize;
  margin: 0;
  padding: 8px 0 16px;
  border-bottom: 1px solid #222;
  width: 100%;
`;

export const Button = styled.button`
  position: absolute;
  bottom: 16px;
  left: calc(50% - 20px);
  z-index: 1;
  width: 40px;
  height: 40px;
  background-color: #fff;
  color: #555;
  border: 1px solid #555;
  border-radius: 50%;
  font-weight: bold;
  cursor: pointer;
  font-size: 24px;
  &.remove {
    bottom: initial;
    top: -16px;
    right: -16px;
    left: initial;
  }
`;

export const CardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex: 1;
  @media (max-width: 768px) {
    width: 100%;
    flex-direction: column;
  }
`;
