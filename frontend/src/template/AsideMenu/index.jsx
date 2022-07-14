import { useContext } from "react";
import * as Styled from "./styles.js";
import { AsideMenuHeader } from "../../components/AsideMenuHeader";
import { Category } from "../../components/Category";
import { DataContext } from "../../contexts/dataContext/DataContextProvider.jsx";
import { AddCategoryForm } from "../../components/AddCategoryForm/index.jsx";
import { useGlobalContext } from "../../hooks/useGlobalContext.jsx";

export const AsideMenu = () => {
    const [dataState] = useContext(DataContext);
    const [globalState, globalActions] = useGlobalContext();

    return (
        <Styled.Container>
            <AsideMenuHeader />
            {globalState.addCategoryMode && <AddCategoryForm />}

            <Category
                default
                selected={globalState.selectedCategory === null}
                color="grey"
                onClick={() => globalActions.setSelectedCategory(null)}
            >
                All
            </Category>
            {dataState.categories?.map((category) => (
                <Category
                    onClick={() =>
                        globalActions.setSelectedCategory(category.name)
                    }
                    selected={globalState.selectedCategory === category.name}
                    key={category.name}
                    color={category.color}
                >
                    {category.name}
                </Category>
            ))}
        </Styled.Container>
    );
};
