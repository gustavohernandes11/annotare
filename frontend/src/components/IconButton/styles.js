import styled, { css } from 'styled-components'

export const Container = styled.button`
    ${({ theme }) => css`
    background-color: ${theme.colors.backgroundTertiary};
    justify-content: center;
    align-items: center ;
    width: 100%;
    color: ${theme.colors.primary};
    border-radius: 5px;
    padding: 5px;
    `}
    :hover {
        cursor: pointer;
    }
    
    
`;