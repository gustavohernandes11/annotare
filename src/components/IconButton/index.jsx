import * as Styled from "./styles.js";
import P from "prop-types";

export const IconButton = ({
    marginBottom,
    children,
    onClick,
    as,
    href,
    target,
    size,
    type,
    disabled,
    id,
    className,
}) => {
    return (
        <Styled.Container
        id={id}
        marginBottom={marginBottom}
            className={className}
            disabled={disabled}
            type={type}
            onClick={onClick}
            as={as}
            href={href}
            target={target}
            size={size}
        >
            {children}
        </Styled.Container>
    );
};

IconButton.propTypes = {
    children: P.node.isRequired,
    onClick: P.func,
    as: P.oneOf(["button", "a"]),
    href: P.string,
    target: P.string,
    size: P.oneOfType([P.string, P.number]),
    type: P.string,
    disabled: P.bool,
    className: P.string,
};
