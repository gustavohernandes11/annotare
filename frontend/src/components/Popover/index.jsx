import * as Styled from "./styles.js";
import P from "prop-types";
import { Button } from "../Button/index.jsx";

export const Popover = ({
    heading = "Atenção",
    mensage,
    cancelFunction,
    acceptFunction,
}) => {
    return (
        <>
            <Styled.ClickAway onClick={cancelFunction} />
            <Styled.Container>
                <h1>{heading}</h1>
                <p>{mensage}</p>
                <span>
                    {cancelFunction && (
                        <Button onClick={cancelFunction}>Cancelar</Button>
                    )}
                    {acceptFunction && (
                        <Button onClick={acceptFunction} primary>
                            Continuar
                        </Button>
                    )}
                </span>
            </Styled.Container>
        </>
    );
};

Popover.propTypes = {
    heading: P.string,
    mensage: P.string.isRequired,
    cancelFunction: P.func,
    acceptFunction: P.func,
};
