import styled, { css } from "styled-components";

export const Container = styled.footer`
    ${({ theme }) => css`
        display: flex;
        flex-direction: row;
        border-top: 1px solid ${theme.colors.border};
        color: ${theme.colors.grey};
        padding-top: ${theme.spacings.medium};
        padding-bottom: ${theme.spacings.medium};
        font-size: ${theme.sizes.small};
        align-items: center;
        justify-content: space-between;

        > button,
        > a {
            border: ${theme.name === "rainbow" || "light"
                ? `1px solid ${theme.colors.border}`
                : "none"};
        }
        > span {
            display: flex;
            flex-direction: row;
            align-items: center;
        }
        @media screen and (max-width: ${theme.screens.laptop}) {
            gap: ${theme.spacings.medium};
            padding: ${theme.spacings.medium};
        }
         @media screen and (max-width: ${theme.screens.mobileL}) {
            padding-inline: 0;
        }
    `}
`;
