import styled, { css } from 'styled-components'

export const Container = styled.div`
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
    `}
`;