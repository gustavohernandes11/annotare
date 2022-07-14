import styled, { css } from "styled-components";

export const Container = styled.div`
    ${({ theme }) => css`
        padding: ${theme.spacings.medium};
        padding-inline: ${theme.spacings.xlarge};
        overflow-y: auto;
        height: 100vh;

        @media screen and (max-width: ${theme.screens.laptop}) {
            padding: ${theme.spacings.medium};
        }
        @media screen and (max-width: ${theme.screens.mobileL}) {
            padding: ${theme.spacings.small};
        }
    `}
`;
