import styled, { css } from 'styled-components'

export const Container = styled.div`
    ${({ theme }) => css`
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: space-around;
    flex-direction: column;
    gap:  ${theme.spacings.medium};
    z-index: 100;
    width: 30%;
    min-width: 400px;
    min-height: 200px;

    background: ${theme.colors.backgroundPrimary};
    border: 1px solid ${theme.colors.border};
    color: ${theme.colors.primary};
    padding: ${theme.spacings.xlarge};
    box-shadow: 4px 4px 10px rgb(0, 0, 0, .1);


    border-radius: 5px;
    top: 30%;
    left: 50%;

    > span {
        display: flex;
    gap:  ${theme.spacings.xsmall};

    }

    `}
    
`;