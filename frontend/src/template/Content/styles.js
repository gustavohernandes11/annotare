import styled, { css } from "styled-components";

export const Container = styled.div`
    ${({ theme }) => css`
        display: inline-flex;
        flex-direction: column;
        width: 100%;
        padding-top: ${theme.spacings.medium};
        padding-bottom: ${theme.spacings.medium};
        padding-inline: ${theme.spacings.xlarge};
        background: ${theme.name === "light"
            ? "#e3e3e3"
            : theme.colors.backgroundPrimary};

        overflow-y: auto;
        height: 100%;


        @media screen and (max-width: ${theme.screens.laptop}) {
            padding-inline: ${theme.spacings.medium};
        }
        @media screen and (max-width: ${theme.screens.mobileL}) {
            height: calc(100vh - 60px);
        }
    `}
`;
