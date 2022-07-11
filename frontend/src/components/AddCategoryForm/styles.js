import styled, { css } from "styled-components";

export const Container = styled.form`
  ${({ theme }) => css`
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    gap: ${theme.spacings.xsmall};

    > button,
    > input {
      box-shadow: 4px 4px 10px rgb(0, 0, 0, 0.1);
    }
  `}
`;
