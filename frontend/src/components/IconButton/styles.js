import styled, { css } from 'styled-components'

export const Container = styled.button`
    ${({ theme }) => css`
    background-color: ${theme.colors.backgroundTertiary};
    justify-content: center;
    align-items: center ;
    width: 100%;
    aspect-ratio 1/1;
    color: ${theme.colors.primary};
    border: none;
    margin-bottom: ${theme.spacings.xsmall};
    border-radius: 5px;
    padding: 5px;
    `}
    :hover {
        cursor: pointer;
    }
    > svg {
        width: 20px;
        height: 20px;
    }
    
    
`;