import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import Typography from '@mui/material/Typography'
import { Box, Card, CardActions, Button, CardContent, FormControlLabel, Checkbox } from "@material-ui/core";
import { busca } from "../../../service/Service";
import Postagem from "../../../models/Postagem";
import './ListaPostagem.css'
import { useSelector } from "react-redux";
import { UserState } from "../../../store/tokens/UserReducer";
import { Favorite, FavoriteBorder } from "@material-ui/icons";
import { toast } from "react-toastify";
import TabPostagem from "../tabPostagem/TabPostagem";


function ListaPostagem() {
    const [postagens, setPostagens] = useState<Postagem[]>([])

    const token = useSelector<UserState, UserState["tokens"]>(
        (state) => state.tokens
    );

    const userId = useSelector<UserState, UserState['id']>(
        (state) => state.id
    )

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
        console.log('id do user ' + userId)
        getPost()

    }, [postagens.length])

    return (
        <>

            {
                postagens.map(postagem => (
                    <Box m={2}>
                        <Card variant='outlined' className="caixa-post">
                            <CardContent>

                                <Box className="user-data">
                                    <img src={postagem.usuario?.foto} className='user-picture' />

                                    <Box>
                                        <Typography variant='h5' component='h2' className="tituloPost">
                                            {postagem.usuario?.nome}
                                            <br />
                                        </Typography>
                                        <Typography variant="body2" component="p" className='data-postagem'>
                                            {postagem.data.substring(8, 10) + '/' +
                                                postagem.data.substring(5, 7) + '/' +
                                                postagem.data.substring(0, 4) + ' às ' +
                                                postagem.data.substring(11, 19)}
                                        </Typography>
                                    </Box>

                                </Box>

                                <Typography variant='h5' component='h2' className="tituloPost">
                                    {postagem.titulo}
                                </Typography>


                                <Typography variant='body2' component='p' className="textoPost">
                                    {postagem.texto}
                                </Typography>
                            </CardContent>

                            <CardActions className="chari">
                                <Box display='flex' justifyContent='center' alignItems="center" mb={1.5}>

                                {postagem.usuario?.id.toString() !== userId ?
                                <>
                                    <Box display='flex' justifyContent='center' alignItems="center">
                                        <FormControlLabel
                                            control={<Checkbox
                                                icon={<FavoriteBorder />}
                                                checkedIcon={<Favorite />}
                                                name="checkedH"
                                                className="btnCurtir" />}
                                            label="CURTIR"
                                        />
                                        
                                        
                                    </Box></>
                                    : false}

                                    {postagem.usuario?.id.toString() === userId ?
                                        <><Link to={`/formularioPostagem/${postagem.id}`} className='text-decorator-none'>
                                            <Box mx={1}>
                                                <Button variant="contained" disableElevation color="primary" className='btnAtualizar btnPost'>
                                                    Atualizar
                                                </Button>
                                            </Box>
                                        </Link><Link to={`/DeletarPostagem/${postagem.id}`} className='text-decorator-none'>
                                                <Box mx={1}>
                                                    <Button variant="contained" disableElevation color="secondary" className='btnDeletar btnPost'>
                                                        Deletar
                                                    </Button>
                                                </Box>
                                            </Link></>
                                        : false}


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