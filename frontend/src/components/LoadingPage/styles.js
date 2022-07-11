import styled, { css } from "styled-components";

export const Container = styled.div`
  ${() => css`
    background-color: #404040;
    color: #f4f4f4;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100vw;
    height: 100vh;
  `}
`;
