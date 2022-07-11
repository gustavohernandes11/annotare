import styled, { css } from "styled-components";

export const Container = styled.div`
  ${({ theme }) => css`
    display: grid;
    grid-template-columns: 50px 250px 1fr;
    background-color: ${theme.colors.backgroundPrimary};
    color: ${theme.colors.white};
    max-height: 100vh;
    transition: color ease-in-out 0.5s;

    path {
      fill: ${theme.name === "rainbow"
        ? `url('#my-cool-gradient')`
        : "inherit"};
    }
  `}
`;
