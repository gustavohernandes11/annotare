import styled, { css } from 'styled-components'

export const Container = styled.footer`
    ${({ theme }) => css`
    display: flex;
    flex-direction: row;
        border-top: 1px solid ${theme.colors.border};
        color: ${theme.colors.grey};
        padding: ${theme.spacings.xlarge};
        font-size: ${theme.sizes.small};
        align-items: center;
        justify-content: space-between;
        
        > button, > a {
            border: ${theme.name === 'rainbow' || 'light' ? `1px solid ${theme.colors.border}` : 'none'};

        }
        >span {
            display: flex;
            flex-direction: row;
            align-items: center;
        }
    `}
    
`;