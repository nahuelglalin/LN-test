import { useState, useEffect } from "react";
import { getArticles } from "../helpers/getArticles";

/**
 * CustomHook que tiene como objetivo ejecutar la HTTP request. 
 * Una vez obtenida la respuesta, la setea en el state.
 * 
 * @returns retorna el state
 */
export const useFetch = () => {

    const [state, setState] = useState({
        data: [],
        loading: true
    });
    
    useEffect(() => {

        getArticles().then( rta => {
            setState({
                data: rta,
                loading: false
            });   
        });

    }, [])

    return state;
}
