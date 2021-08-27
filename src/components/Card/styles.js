import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.4);
  border-bottom-right-radius: 16px;
  position: relative;
  margin: 8px;
  background-color: #fff;
  padding: 16px;
  border: 1px solid orange;
  button {
    right: 0;
    position: absolute;
    top: 0;
    z-index: 1;
  }
`;

export const Title = styled.h3`
  margin-top: 0;
  margin-bottom: 8px;
`;

export const Description = styled.p`
  margin: 0;
`;
