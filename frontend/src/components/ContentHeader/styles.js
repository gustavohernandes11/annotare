import styled, { css } from "styled-components";

export const Header = styled.header`
  ${({ theme }) => css`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    color: ${theme.colors.primary};

    .search-and-button-span {
      display: flex;
      flex-direction: row;
      gap: ${theme.spacings.medium};
    }

    .delete-category-icon {
      border: none;
      background-color: ${theme.colors.backgroundPrimary};
      margin-bottom: 0;
      path {
        fill: ${theme.colors.grey};
      }
    }
    .delete-category-icon:hover {
      background-color: inherit;
      margin-bottom: 0;
      path {
        fill: ${theme.colors.danger};
      }
    }
  `}
`;
