import { useContext } from "react";
import { DataContext } from "../contexts/dataContext/DataContextProvider";

export function useDataContext() {
    const context = useContext(DataContext);
    if (context === undefined) throw new Error('Utilize o hook apenas dentro do DataContextProvider.');
    return useContext(DataContext);
}