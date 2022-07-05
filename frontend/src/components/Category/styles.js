import styled, { css } from 'styled-components'

export const Container = styled.div`
    ${({ theme, color = theme.colors.secondary, selected }) => css`
        border: ${theme.name === 'light' ? 'none': `1px solid ${theme.colors.border};` } 
        align-items: center;
        padding: ${theme.spacings.medium};
        color: ${theme.colors.primary};
        border-radius: 5px;
        margin-top: ${theme.spacings.xsmall};
        background-color: ${theme.colors.backgroundTertiary};
        transition: opacity display ease-in-out 0.08s;
        ${selected && `border-left: 6px solid ${color}`};
        box-shadow: 4px 2px 10px rgba(0,0,0, .10);



        :hover {
            cursor: pointer;

        }

    `}
    
`;