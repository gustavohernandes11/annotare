import styled, { css } from 'styled-components'

export const Container = styled.main`
    ${({ theme, color = theme.colors.secondary }) => css`
        padding: ${theme.spacings.small} ${theme.spacings.medium};

    > p {
        display: -webkit-box;
        -webkit-line-clamp: 8;
        text-align: justify;
        -webkit-box-orient: vertical;  
        overflow: hidden; 
        text-overflow: ellipsis;
        line-break: anywhere;
    }
    
    `}
`;