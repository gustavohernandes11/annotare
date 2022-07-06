import { useContext } from "react";
import { DataContext } from "../contexts/dataContext/DataContextProvider";

export function useDataContext() {
    const [state, actions] = useContext(DataContext)

    if (state === null) throw new Error('Utilize o hook apenas dentro do DataContextProvider.')

    return [state, actions]
}