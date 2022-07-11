import * as Styled from "./styles.js";
import { Heading } from "../Heading/index.jsx";
import { Button } from "../Button/index.jsx";
import { Plus } from "@styled-icons/fa-solid";
import { useGlobalContext } from "../../hooks/useGlobalContext.jsx";

export const AsideMenuHeader = () => {
    const [state, actions] = useGlobalContext();

    return (
        <>
            <Styled.Header>
                <Heading as="h2">Categories</Heading>
                {!state.addCategoryMode && (
                    <Button onClick={() => actions.setAddCategoryMode(true)}>
                        <Plus width={15} height={15} />
                    </Button>
                )}
            </Styled.Header>
        </>
    );
};
