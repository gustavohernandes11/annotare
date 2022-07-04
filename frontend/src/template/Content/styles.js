import styled, { css } from 'styled-components'

export const Container = styled.div`
    ${({ theme }) => css`
    padding-top: ${theme.spacings.medium};
    padding-inline: ${theme.spacings.xlarge};
    overflow-y: scroll;
    height: 100vh;

    `}
`
