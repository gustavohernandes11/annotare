import styled, { css } from 'styled-components'

export const Container = styled.div`
    ${({ theme, color=theme.colors.secondary }) => css`
        border: 1px solid ${theme.colors.border};
        background-color: ${theme.colors.backgroundTertiary};
        border-left: 2px solid ${color};
        color: ${theme.colors.primary};
        border-radius: 5px;
        min-height: 100px;
    `}
    
`;