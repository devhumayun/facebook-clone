import { useReducer } from "react";
import { LoaderContext } from "../context/LoaderContext";
import { LoaderReducer, Loader_INI } from "../reducer/LoaderReducer";


// loader context provider
export const LoaderContxtProvider = ({ children }) => {

    const [ loaderState, loaderDispatch ] = useReducer( LoaderReducer, Loader_INI )

    return(
        <LoaderContext.Provider
            value={{
                loaderState,
                loaderDispatch
            }}
        >
            { children }
        </LoaderContext.Provider>
    );

}