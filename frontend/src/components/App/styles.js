import styled, { css } from "styled-components";

export const Container = styled.div`
    ${({ theme }) => css`
        display: grid;
        grid-template-columns: 50px 250px 1fr;
        background-color: ${theme.colors.backgroundPrimary};
        color: ${theme.colors.white};
        min-height: 100vh;
        height: 100vh;
        width: 100vw;
        max-height: 100vh;
        max-width: 100vw;
        overflow: hidden;
        transition: color ease-in-out 0.5s;

        path {
            fill: ${theme.name === "rainbow"
                ? `url('#my-cool-gradient')`
                : "inherit"};
        }
        #toggle-menu-asibe-bar-button {
                display: none;
            }

        @media screen and (max-width: ${theme.screens.tablet}) {
            grid-template-columns: 40px 1fr;
            grid-template-areas: "asidebar content";

            #asidemenu {
                display: block;
                position: absolute;
                top: 0;
                left: 40px;
            }
            #toggle-menu-asibe-bar-button {
                display: block;
            }
        }
        @media screen and (max-width: ${theme.screens.mobileL}) {
            display: block;
            overflow-y: hidden;
            grid-template-columns: 1fr;
            grid-template-rows: 40px 1fr;
            grid-template-areas:
                "asidebar"
                "content";

            #content,
            #editor {
                padding-top: ${theme.spacings.medium};
            }

            #asidemenu {
                top: 0;
                left: 0;
            }

            #asidebar {
                display: flex;
                flex-direction: row;
                align-items: center;
                justify-content: space-between;

                height: 40px;
                padding: ${theme.spacings.small};

                hr {
                    display: none;
                }
                button {
                    margin-bottom: 0;
                }

                > span {
                    width: fit-content;
                    display: flex;
                    flex-direction: row;
                    justify-content: flex-end;
                    gap: ${theme.spacings.small};
                }
            }
        }
    `}
`;
