import styled, { css } from "styled-components";

export const Container = styled.div`
    ${({ theme }) => css`
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: ${theme.colors.backgroundPrimary};
        border: 1px solid ${theme.colors.border};
        border-radius: 5px;
        box-shadow: 4px 4px 10px rgb(0, 0, 0, 0.1);

        :focus {
            outline: auto;
        }

        > input {
            padding: ${theme.spacings.small};
            width: 140px;
            background-color: transparent;
            margin-right: ${theme.spacings.small};
            color: ${theme.colors.primary};
            border: none;
        }
        > input:focus {
            outline: none;
        }
        svg {
            color: ${theme.colors.grey};
            margin-right: ${theme.spacings.small};
        }
        > button {
            margin: ${theme.spacings.xsmall};
            border-right: 1px solid ${theme.colors.border};
        }
        @media screen and (max-width: ${theme.screens.mobileL}) {
            background: inherit;
            box-shadow: none;
        }
    `}
`;
