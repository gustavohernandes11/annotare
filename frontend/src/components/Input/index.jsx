import * as Styled from "./styles.js";
import P from "prop-types";

export const Input = ({
    autoFocus,
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
            autoFocus={autoFocus}
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
    autoFocus: P.bool,
    defaultValue: P.oneOfType([P.string, P.number]),
    maxLength: P.oneOfType([P.string, P.number]),
    minLength: P.oneOfType([P.string, P.number]),
    value: P.oneOfType([P.string, P.number]),
    id: P.oneOfType([P.string, P.number]),
    onChange: P.func,
    onClick: P.func,
    type: P.string,
    height: P.oneOfType([P.string, P.number]),
    marginBottom: P.oneOfType([P.string, P.number]),
    padding: P.oneOfType([P.string, P.number]),
    name: P.string,
    as: P.string,
};
