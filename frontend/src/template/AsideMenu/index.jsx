import { useContext } from "react";
import * as Styled from "./styles.js";
import { AsideMenuHeader } from "../../components/AsideMenuHeader";
import { Category } from "../../components/Category";
import { DataContext } from "../../contexts/dataContext/DataContextProvider.jsx";
import { AddCategoryForm } from "../../components/AddCategoryForm/index.jsx";
import { useGlobalContext } from "../../hooks/useGlobalContext.jsx";
import { ClickAway } from "./../../components/Popover/styles";

export const AsideMenu = () => {
    const [dataState] = useContext(DataContext);
    const [globalState, globalActions] = useGlobalContext();

    const handleClickCategory = (name) => {
        globalActions.setSelectedCategory(name);

        if (window.screen.width < 768) {
            globalActions.setIsAsideMenuOpen(false);
        }
    };

    return (
        <>
            {globalState.isAsideMenuOpen && window.screen.width < 768 ? (
                <ClickAway
                    onClick={() => globalActions.setIsAsideMenuOpen(false)}
                />
            ) : null}

            <Styled.Container id="asidemenu">
                <AsideMenuHeader />
                {globalState.addCategoryMode && <AddCategoryForm />}

                <Category
                    default
                    selected={globalState.selectedCategory === null}
                    color="grey"
                    onClick={() => handleClickCategory(null)}
                >
                    All
                </Category>
                {dataState.categories?.map((category) => (
                    <Category
                        onClick={() => handleClickCategory(category.name)}
                        selected={
                            globalState.selectedCategory === category.name
                        }
                        key={category.name}
                        color={category.color}
                    >
                        {category.name}
                    </Category>
                ))}
            </Styled.Container>
        </>
    );
};
