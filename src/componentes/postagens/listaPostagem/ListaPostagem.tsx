import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import Typography from '@mui/material/Typography'
import { Box, Card, CardActions, Button, CardContent, FormControlLabel, Checkbox } from "@material-ui/core";
import { busca } from "../../../service/Service";
import Postagem from "../../../models/Postagem";
import './ListaPostagem.css'
import { useSelector } from "react-redux";
import { UserState } from "../../../store/tokens/UserReducer";
import { toast } from "react-toastify";
import { Favorite, FavoriteBorder } from "@material-ui/icons";


function ListaPostagem() {
    const [postagens, setPostagens] = useState<Postagem[]>([])

    const token = useSelector<UserState, UserState["tokens"]>(
        (state) => state.tokens
    );

    let history = useHistory();


    useEffect(() => {
        if (token == '') {
            toast.error('Você precisa estar logado', {
                position: 'top-right',
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: false,
                theme: 'dark',
                progress: undefined
            })
            history.push('/login')
        }
    }, [token])

    async function getPost() {
        await busca('/postagens', setPostagens, {
            headers: {
                'Authorization': token
            }
        })
    }

    useEffect(() => {
        getPost()

    }, [postagens.length])

    return (
        <>
            <Typography gutterBottom>
                Postagens
            </Typography>
            {
                postagens.map(postagem => (
                    <Box m={2}>
                        <Card variant='outlined' className="caixa-post">
                            <CardContent>
                                <Typography variant='h5' component='h2'>
                                    {postagem.titulo}
                                </Typography>

                                <Typography variant='body2' component='p'>
                                    {postagem.texto}
                                </Typography>
                            </CardContent>

                            <CardActions className="chari">
                                <Box display='flex' justifyContent='center' alignItems="center" mb={1.5}>

                                    <Box display='flex' justifyContent='center' alignItems="center">
                                        <FormControlLabel
                                            control={<Checkbox icon={<FavoriteBorder />}
                                                checkedIcon={<Favorite />}
                                                name="checkedH" />}
                                            label="Curtir"
                                        />

                                        <Link to={`/formularioPostagem/${postagem.id}`} className='text-decorator-none'>
                                            <Box mx={1}>
                                                <Button className='btn-atualizar'>
                                                    Atualizar
                                                </Button>
                                            </Box>
                                        </Link>

                                        <Link to={`/DeletarPostagem/${postagem.id}`} className='text-decorator-none'>
                                            <Box mx={1}>
                                                <Button className='btn-deletar'>
                                                    Deletar
                                                </Button>
                                            </Box>
                                        </Link>
                                    </Box>                                    
                                </Box>
                                <Box mx={1} >
                                        <Typography variant='body2' component='p' className="tema-postagens">
                                            {postagem.tema?.nome}
                                        </Typography>
                                 </Box>
                            </CardActions>
                        </Card>
                    </Box>
                ))
            }
        </>
    )

}

export default ListaPostagem;