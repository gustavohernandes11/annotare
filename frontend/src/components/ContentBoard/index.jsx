import { useState, useEffect } from "react";
import * as Styled from "./styles.js";
import { Card } from "../Card/index.jsx";

import { useDataContext } from "../../hooks/useDataContext.jsx";
import { useGlobalContext } from "../../hooks/useGlobalContext.jsx";

export const ContentBoard = () => {
    const [dataState] = useDataContext();
    const [globalState] = useGlobalContext();
    const [filteredAnnotations, setFilteredAnnotations] = useState([]);

    useEffect(() => {
        const searchRegex = new RegExp(`${globalState.searchInputValue}`, "gi");
        const filterBySearch = (array) =>
            array?.filter((e) => e.content.search(searchRegex) !== -1);

        const filterByCategory = (array) =>
            array.filter((e) =>
                globalState.selectedCategory
                    ? e.category === globalState.selectedCategory
                    : e
            );

        setFilteredAnnotations(() =>
            filterByCategory(filterBySearch(dataState.annotations))
        );
    }, [
        dataState.annotations,
        globalState.searchInputValue,
        globalState.selectedCategory,
    ]);
    return (
        <>
            <Styled.Container
                style={{
                    gridTemplateColumns:
                        globalState.activeLayout === "grid"
                            ? "repeat(auto-fill, minmax(200px, 1fr))"
                            : "1fr",
                }}
            >
                {filteredAnnotations?.map((annotation) => (
                    <Card
                        key={annotation.id}
                        id={annotation.id}
                        heading={annotation.heading}
                        createdAt={annotation.created_at}
                        category={annotation.category}
                        data={annotation}
                    >
                        {annotation.content}
                    </Card>
                ))}
                {filteredAnnotations.length === 0 && <p>Nenhum resultado</p>}
            </Styled.Container>
        </>
    );
};
