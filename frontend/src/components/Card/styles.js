import styled, { css } from 'styled-components'

export const Container = styled.div`
    ${({ theme, color=theme.colors.secondary }) => css`
        border: 1px solid ${theme.colors.border};
        border-left: 2px solid ${color};
        padding: ${theme.spacings.medium};
        color: ${theme.colors.primary};
        border-radius: 5px;
        min-height: 200px;
    `}
    
`;