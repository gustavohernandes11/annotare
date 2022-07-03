import styled, { css } from 'styled-components'

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
    `}
`;