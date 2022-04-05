import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import useLocalStorage from "react-use-localstorage";

function ListaTema() {

    const[temas, setTemas] = useState<Temas[]>([])

    const[token, setToken] = useLocalStorage('token')

    let history = useHistory

    useEffect (() => {
        if(token == ''){
            alert('Você deve estar logado')
            history.push('/login')
        }
    }, [token])
}