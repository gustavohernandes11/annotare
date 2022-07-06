import styled, { css } from 'styled-components'

export const Container = styled.button`
    ${({ theme, primary }) => css`
        padding: ${theme.spacings.small};
        border-radius: 5px;
        box-shadow: ${theme.name === 'light' ? '4px 4px 10px rgb(0, 0, 0, .1)' : 'none'};
        
        background: ${primary ? theme.colors.secondary : `transparent`};
        border: ${primary ? 'none' : `1px  solid ${theme.colors.border}`};
        color: ${theme.name === 'light' && primary ? theme.colors.white : theme.colors.primary};

        

    `}
    :hover {
        cursor: pointer;
    }
    
`;