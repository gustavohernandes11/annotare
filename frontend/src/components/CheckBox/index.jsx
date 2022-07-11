import * as Styled from "./styles.js";
import P from "prop-types";
import { Input } from "../Input";
export const CheckBox = ({ onClick, onChange, label, name, width, value }) => {
    return (
        <Styled.Span>
            <span>
                <Input
                    value={value}
                    onClick={onClick}
                    onChange={onChange}
                    width={width}
                    type="checkbox"
                    name={name}
                />
                <label htmlFor="note-title">{label}</label>
            </span>
        </Styled.Span>
    );
};

CheckBox.propTypes = {
    onClick: P.func.isRequired,
    label: P.oneOfType([P.string, P.number]).isRequired,
    name: P.string,
};
