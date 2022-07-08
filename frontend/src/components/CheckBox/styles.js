import styled, { css } from 'styled-components'

export const Span = styled.span`
    ${({ theme }) => css`
        display: flex;
        flex-wrap: nowrap;
        align-items: center;
        row-gap: ${theme.spacings.large};
        
        label {
        display: inline-block;
       color: ${theme.colors.grey};
       padding: ${theme.spacings.small};
   }
        `}
    
`;