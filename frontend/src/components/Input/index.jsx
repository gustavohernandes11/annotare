import * as Styled from "./styles.js";
import P from "prop-types";

export const Input = ({
    defaultValue,
    maxLength,
    minLength = "3",
    value,
    id,
    onChange,
    onClick,
    type,
    placeholder,
    width,
    height,
    marginBottom,
    padding,
    name,
    as,
}) => {
    return (
        <Styled.Input
            defaultValue={defaultValue}
            maxLength={maxLength}
            minLength={minLength}
            autocomplete="off"
            autocorrect="off"
            autocapitalize="off"
            spellcheck="false"
            onChange={onChange}
            onClick={onClick}
            name={name}
            placeholder={placeholder}
            width={width}
            marginBottom={marginBottom}
            padding={padding}
            height={height}
            type={type}
            as={as}
            value={value}
            id={id}
        />
    );
};

Input.propTypes = {
    placeholder: P.string,
    width: P.oneOfType([P.string, P.number]),
};
