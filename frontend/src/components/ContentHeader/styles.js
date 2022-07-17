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
            margin-right: ${theme.spacings.medium};
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
        @media screen and (max-width: ${theme.screens.laptop}) {
            h1,
            h2 {
                font-size: 1.4rem;
                overflow-wrap: anywhere;
            }
            .search-and-button-span {
                gap: 0;
            }

            #add-annotations-button {
                display: none;
            }
            #float-add-annotation-button {
                display: flex;
            }
        }
        @media screen and (max-width: ${theme.screens.mobileL}) {
            justify-content: unset;
            flex-direction: column;
            gap: ${theme.spacings.small};
            align-items: baseline;
        }
    `}
`;
