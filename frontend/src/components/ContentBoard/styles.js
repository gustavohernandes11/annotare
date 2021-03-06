import styled, { css } from "styled-components";

export const Container = styled.main`
    ${({ theme }) => css`
        display: grid;
        width: 100%;
        flex-grow: 1;
        color: ${theme.colors.primary};
        padding-top: ${theme.spacings.xlarge};
        padding-bottom: ${theme.spacings.large};
        gap: ${theme.spacings.small};

        h3 {
            margin-bottom: ${theme.spacings.medium};
        }

        @media screen and (max-width: ${theme.screens.mobileL}) {
            grid-template-rows: 1fr;
            grid-template-columns: 1fr;

            padding-top: ${theme.spacings.medium};
            padding-bottom: ${theme.spacings.medium};
        }
    `}
`;
