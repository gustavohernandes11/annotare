import styled, { css } from "styled-components";

export const Container = styled.div`
  ${({ theme, color = theme.colors.secondary, selected }) => css`
    font-size: ${theme.sizes.medium};
    overflow-x: clip;
    align-items: center;
    padding: ${theme.spacings.small};
    color: ${theme.colors.primary};
    border-radius: 5px;
    margin-top: ${theme.spacings.xsmall};
    transition: opacity display ease-in-out 0.08s;
    ${selected && `border-left: 6px solid ${color}`};

    :hover,
    [selected="true"] {
      background-color: ${theme.colors.backgroundTertiary};
      box-shadow: 4px 2px 10px rgba(0, 0, 0, 0.1);
      cursor: pointer;
    }
  `}
`;
