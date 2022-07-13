import * as Styled from "./styles.js";
import P from "prop-types";

export const CardBody = ({ children, onClick, isViewMode }) => {
    return (
        <Styled.Container isViewMode={isViewMode} onClick={onClick}>
            {children}
        </Styled.Container>
    );
};

CardBody.propTypes = {
    children: P.node.isRequired,
};
