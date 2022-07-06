import { useContext } from "react";
import { GlobalContext } from "../contexts/globalContext/GlobalContextProvider";

export function useGlobalContext() {
    const [state, actions] = useContext(GlobalContext)    

    return {state, actions}
}