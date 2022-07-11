import React from "react";
import * as Styled from "./styles.js";
import P from "prop-types";

export const LargeButton = ({ primary, children, onClick }) => {
  return (
    <Styled.Container>
      <button onClick={onClick} aria-label="large-button" primary={primary}>
        {children}
      </button>
    </Styled.Container>
  );
};

LargeButton.propTypes = {
  children: P.oneOfType([P.string, P.object, P.node]).isRequired,
};
