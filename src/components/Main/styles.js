import styled from "styled-components";

export const Container = styled.div``;

export const Heading = styled.h1`
  text-align: center;
  padding: 16px 0;
  margin-top: 0;
  border-bottom: 1px solid #e7e7e7;
`;

export const SectionContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 24px;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const Action = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 0 24px;
`;

export const Message = styled.div`
  margin: 48px;
  font-size: 14px;
  text-align: center;
  padding: 0 24px;
`;
