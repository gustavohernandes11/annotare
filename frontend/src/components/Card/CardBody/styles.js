import styled, { css } from 'styled-components'

export const Container = styled.main`
    ${({ theme }) => css`
    padding: ${theme.spacings.small} ${theme.spacings.medium};
    `}
    
`;