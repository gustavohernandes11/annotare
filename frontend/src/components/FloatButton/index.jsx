import * as Styled from "./styles.js";
import P from "prop-types";

export const FloatButton = ({ children, onClick, as, id }) => {
    return (
        <Styled.Button onClick={onClick} as={as} id={id}>
            {children}
        </Styled.Button>
    );
};

FloatButton.propTypes = {
    children: P.node.isRequired,
    as: P.string,
    onClick: P.func.isRequired,
};
