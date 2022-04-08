import React, { useEffect, useState } from 'react'
import { Box } from '@material-ui/core'
import { useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { UserState } from '../../../store/tokens/UserReducer'

import User from '../../../models/User'
import { buscaId } from '../../../service/Service'

import './Profile.css'

function Profile() {

    let history = useHistory()

    // Pega o ID guardado no Store
    const id = useSelector<UserState, UserState["id"]>(
        (state) => state.id
    );

    // Pega o Token guardado no Store
    const token = useSelector<UserState, UserState["tokens"]>(
        (state) => state.tokens
    )

    const [user, setUser] = useState<User>({
        id: +id,    // Faz uma conversão de String para Number
        nome: '',
        usuario: '',
        foto: '',
        senha: '',
        tipo: ''
    })

    useEffect(() => {
        if (token === "") {
            alert("Você precisa estar logado")
            history.push("/login")
        }
    }, [token])

    // Métedo para pegar os dados de um Usuário especifico pelo ID
    async function findById(id: string) {
        buscaId(`/usuarios/${id}`, setUser, {
            headers: {
                'Authorization': token
            }
        })
    }

    useEffect(() => {
        if (id !== undefined) {
            findById(id)
        }
    }, [id])

    return (
        <Box className='card-principal'>
            <Box className='card-container-imagem'>
                <img className='card-imagem'
                    src={ user.foto }
                    alt={ user.nome } />
            </Box>

            <Box className='card-container-info'>
                <Box>
                    <h1>{ user.nome }</h1>
                    <hr />
                </Box>

                <p className='card-container-texto'>
                   teste
                </p>

                <p className='card-container-texto'>
                    teste
                </p>
            </Box>
        </Box>
    )
}

export default Profile