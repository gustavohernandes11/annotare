import { useContext } from "react";
import { GlobalContext } from "../contexts/globalContext/GlobalContextProvider";

export function useGlobalContext() {
    const context = useContext(GlobalContext);
    if (context === undefined)
        throw new Error(
            "Utilize o hook apenas dentro do GlobalContextProvider."
        );
    return useContext(GlobalContext);
}
