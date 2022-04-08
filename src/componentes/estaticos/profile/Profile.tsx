import React, { useEffect, useState } from 'react'
import { Box, Typography } from '@material-ui/core'
import { useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { UserState } from '../../../store/tokens/UserReducer'

import User from '../../../models/User'
import { buscaId } from '../../../service/Service'

import './Profile.css'
import { toast } from 'react-toastify'

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

    // useEffect(() => {
    //     if (token === "") {
    //         toast.error('Você precisa estar logado', {
    //             position: "top-right",
    //             autoClose: 2000,
    //             hideProgressBar: false,
    //             closeOnClick: true,
    //             pauseOnHover: false,
    //             draggable: false,
    //             theme: "dark",
    //             progress: undefined,
    //         });
    //         history.push("/login")
    //         history.push("/login")
    //     }
    // }, [token])

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
        <Box>
            <Box className='card-principal'>
                <Box className='card-container-imagem'>
                    <img className='card-imagem'
                        src={user.foto}
                        alt={user.nome} />
                </Box>

                <Box className='card-container-info'>
                    <Box>
                        <h1>{user.nome}</h1>
                        <p className="textoProfile">Nome</p>
                    </Box>

                    <Box>
                        <h1>{user.usuario}</h1>
                        <p className="textoProfile">E-mail</p>
                    </Box>

                    <Box>
                        <h1>{user.tipo}</h1>
                        <p className="textoProfile">Tipo de usuário</p>
                    </Box>

                    <Box className="boxLogout">
                        <p className="logout">Logout</p>
                    </Box>
                </Box>


            </Box>
            <Box className="profilePostagem">
                <Typography className="btnProfile">Nova Postagem</Typography>
            </Box>
        </Box>
    )
}

export default Profile