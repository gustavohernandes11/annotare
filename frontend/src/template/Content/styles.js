import styled, { css } from 'styled-components'

export const Container = styled.div`
    ${({ theme }) => css`
    padding-top: ${theme.spacings.medium};
    padding-inline: ${theme.spacings.xlarge};
    background: ${theme.colors.backgroundPrimary}
    overflow-y: scroll;
    height: 100vh;

    `}
`
