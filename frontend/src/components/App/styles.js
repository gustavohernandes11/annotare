
import styled, { css } from 'styled-components'

export const Container = styled.div`
    ${({ theme }) => css`
    display: grid;
    grid-template-columns: 50px 250px 1fr;
    min-height: 100vh;
    background-color: ${theme.colors.backgroundPrimary};
    color: ${theme.colors.white};
    `}
    
`;