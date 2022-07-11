import styled, { css } from "styled-components";

export const Container = styled.header`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: row;
    height: ${theme.spacings.xlarge};
    padding: ${theme.spacings.small} ${theme.spacings.medium};
    border-bottom: 1px solid ${theme.colors.border};
    transition: all ease-in-out 0.2s;

    svg {
      color: "red";
    }

    > span {
      display: flex;
      flex-direction: row;
      gap: 5px;
    }

    button {
      color: ${theme.colors.grey};
      max-width: 30px;
      max-height: 30px;
    }

    button:hover {
      color: ${theme.colors.primary};
    }
  `}
`;
