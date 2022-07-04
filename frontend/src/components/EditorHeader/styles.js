import styled, { css } from 'styled-components'

export const Header = styled.header`
    ${({ theme }) => css`
   display: flex;
   flex-direction: row;
    justify-content: space-between;
    align-items: center;
    color: ${theme.colors.primary};

    > span.buttons-area {
        display: flex;
        flex-direction: row;
    }

    `}
`