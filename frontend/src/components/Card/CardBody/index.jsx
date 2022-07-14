import * as Styled from "./styles.js";
import P from "prop-types";

export const CardBody = ({ children, isViewMode }) => {
    return (
        <Styled.Container isViewMode={isViewMode}>{children}</Styled.Container>
    );
};

CardBody.propTypes = {
    children: P.node.isRequired,
    isViewMode: P.bool.isRequired,
};
