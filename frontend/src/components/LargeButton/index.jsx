import React from "react";
import * as Styled from "./styles.js";
import P from "prop-types";

export const LargeButton = ({ primary, children, onClick, id }) => {
    return (
        <Styled.Container>
            <button
                onClick={onClick}
                aria-label="large-button"
                primary={primary}
                id={id}
            >
                {children}
            </button>
        </Styled.Container>
    );
};

LargeButton.propTypes = {
    children: P.oneOfType([P.string, P.object, P.node]).isRequired,
    primary: P.oneOfType([P.string, P.number, P.bool]),
    onClick: P.func.isRequired,
};
