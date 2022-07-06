import styled, { css } from 'styled-components'

export const Container = styled.div`
    ${({ theme }) => css`
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    gap: ${theme.spacings.xsmall};
    padding: ${theme.spacings.medium} 0 ${theme.spacings.xsmall};

    
    `}
    
`;