import styled, { css } from 'styled-components'

export const Container = styled.div`
    ${({ theme, color=theme.colors.secondary, isfullscreen=false }) => css`
        display: grid;
        direction: column-reverse;
        grid-template-rows: 40px 1fr 40px;
        background-color: ${theme.colors.backgroundTertiary};
        color: ${theme.colors.primary};
        border: 1px solid ${theme.colors.border};
        border-radius: 5px;
        transition: opacity ease-in-out 0.5s;
        min-height: 300px;
        box-shadow: 4px 2px 10px rgba(0,0,0, .10);
        {isfullscreen && background-color: yellow};

    
    `}
`;

export const Wrapper = styled.div`
    

`