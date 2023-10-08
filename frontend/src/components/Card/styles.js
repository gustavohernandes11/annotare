import styled, { css } from "styled-components";

export const Container = styled.div`
    ${({ theme, isViewMode, activeLayout }) => css`
        display: grid;
        grid-template-rows: 40px 1fr 40px;
        background-color: ${theme.colors.backgroundTertiary};
        color: ${theme.colors.primary};
        border: 1px solid ${theme.colors.border};
        border-radius: 5px;
        -webkit-transition: transform 0.3s 0s ease-in-out;
        -moz-transition: transform 0.3s 0s ease-in-out;
        -o-transition: transform 0.3s 0s ease-in-out;
        transition: transform 0.3s 0s ease-in-out;
        box-shadow: 4px 2px 10px rgba(0, 0, 0, 0.1);

        min-height: ${activeLayout === "grid" ? "300px" : "none"};

        position: ${isViewMode ? "absolute" : "inherit"};
        z-index: ${isViewMode ? "110" : "inherit"};
        top: ${isViewMode ? "50%" : "inherit"};
        width: ${isViewMode ? "60%" : "inherit"};
        height: ${isViewMode ? "80%" : "inherit"};
        align-self: ${isViewMode ? "center" : "inherit"};
        justify-self: ${isViewMode ? "center" : "inherit"};
        overflow-y: ${isViewMode ? "auto" : "inherit"};
        padding: ${isViewMode ? theme.spacings.medium : "none"};
        transform: ${isViewMode ? "translateY(-50%)" : "inherit"};

        @media screen and (max-width: ${theme.screens.mobileL}) {
            width: ${isViewMode ? "95%" : "inherit"};
            height: ${isViewMode ? "90%" : "inherit"};
            transform: ${isViewMode
                ? "translateY(calc(-50% + 20px))"
                : "inherit"};
            padding: ${isViewMode ? theme.spacings.small : "none"};
        }
    `}
`;
