import styled from "styled-components";

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    h3 {
        text-align: center;
        margin-top: 0;
        margin-bottom: 16px;
    }
    input {
        height: 40px;
        margin-bottom: 8px;
    }
    button {
        height: 48px;
    }
`;

export const Error = styled.div`
    color: #ff0000;
    font-size: 12px;
    font-weight: bold;
    margin-bottom: 8px;
`;
