import styled, { css } from 'styled-components'

export const Container = styled.footer`
    ${({ theme }) => css`
        border-top: 1px solid ${theme.colors.border};
        color: ${theme.colors.grey};
        padding: ${theme.spacings.xlarge};
        font-size: ${theme.sizes.small};
        display: flex;
        align-items: center;
        justify-content: center;
        
    `}
    
`;