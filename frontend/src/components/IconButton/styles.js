import styled, { css } from 'styled-components'

export const Container = styled.button`
    ${({ theme, size="40px" }) => css`

    
    display: flex;
    background-color: ${theme.colors.backgroundTertiary};
    justify-content: center;
    align-items: center ;
    width: 100%;
    aspect-ratio 1/1;
    color: ${theme.colors.primary};
    border: 1px solid ${theme.colors.border};
    margin-bottom: ${theme.spacings.xsmall};
    border-radius: 5px;
    padding: 5px;
    max-width: ${size};
    max-height: ${size};

    :hover {
        cursor: pointer;
        color: ${theme.colors.secondary};
    }
    `}
    
    > svg {
        max-width: 20px;
        max-height: 20px;
    }
    
    
`;