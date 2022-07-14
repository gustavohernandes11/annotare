import styled, { css } from "styled-components";

export const Container = styled.nav`
    ${({ theme }) => css`
        display: flex;
        align-items: center;
        justify-content: space-between;
        flex-direction: column;
        height: 100vh;
        background-color: ${theme.colors.backgroundSecondary};
        color: ${theme.colors.primary};
        padding: ${theme.spacings.xsmall};
        padding-top: ${theme.spacings.large};
        box-shadow: 4px 2px 10px rgba(0, 0, 0, 0.1);
        background: ${theme.name === "rainbow"
            ? `${theme.colors.secondary}`
            : `${theme.colors.backgroundSecondary}`};

        img {
            width: 90%;
        }
        button {
            border: ${theme.name === "rainbow" || "light"
                ? `1px solid ${theme.colors.border}`
                : "none"};
            background: ${theme.name === "rainbow" ? `transparent` : "inherit"};
        }

        > span {
            width: 100%;
            display: flex;
            flex-direction: column;
            align-items: center;
        }

        hr {
            border-color: ${theme.colors.border};
            width: 80%;
        }

        @media screen and (max-width: ${theme.screens.laptop}) {
            padding-top: ${theme.spacings.small};
            z-index: 100;

            button {
                border: none;
                background: transparent;
            }
        }
        @media screen and (max-width: ${theme.screens.mobileL}) {
            #toggle-layout-asibe-bar-button {
                display: none;
            }
            border: 1px solid ${theme.colors.border};
        }
    `}
`;
