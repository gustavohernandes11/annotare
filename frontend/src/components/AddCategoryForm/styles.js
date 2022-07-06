import styled, { css } from 'styled-components'

export const Container = styled.form`
    ${({ theme }) => css`
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    gap: ${theme.spacings.xsmall};
    `}
    
`;