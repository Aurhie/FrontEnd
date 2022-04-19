import { useEffect, useState } from 'react';
import { Box, Button, Card, CardActions, CardContent, Checkbox, FormControlLabel, Grid, Typography } from '@material-ui/core';
import ListaPostagem from '../../componentes/postagens/listaPostagem/ListaPostagem';
import { Link, useHistory } from "react-router-dom";
import { useSelector } from 'react-redux';
import { UserState } from '../../store/tokens/UserReducer';
import { toast } from 'react-toastify';
import Profile from '../../componentes/estaticos/profile/Profile';
import Postagem from '../../models/Postagem';
import { busca } from '../../service/Service';
import { FavoriteBorder, Favorite } from '@material-ui/icons';


function Home() {

    const [postagens, setPostagens] = useState<Postagem[]>([])

    const token = useSelector<UserState, UserState["tokens"]>(
        (state) => state.tokens
    );

    const userId = useSelector<UserState, UserState['id']>(
        (state) => state.id
    )

    let history = useHistory();



    useEffect(() => {
        if (token === "") {
            toast.error('Você precisa estar logado', {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: false,
                theme: "dark",
                progress: undefined,
            });
            history.push("/login")

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

            <Grid container direction="row" justifyContent='center' className='corFundo'>
                <Grid xs={3} className='profile-container'>
                    <Profile />
                </Grid>

                <Grid xs={9} className='lista-postagem-container'>
                    <Typography gutterBottom className="titulo-lista-post">
                        Minhas Postagens
                    </Typography>
                    {
                        postagens.map(postagem => (

                            <Box m={2} >
                                {postagem.usuario?.id.toString() === userId ?
                                    <Card variant='outlined' className="caixa-post m-profile">
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

                                                <Link to={`/formularioPostagem/${postagem.id}`} className='text-decorator-none'>
                                                    <Box mx={1}>
                                                        <Button variant="contained" disableElevation color="primary" className='btnAtualizar btnPost btnColor'>
                                                            Atualizar
                                                        </Button>
                                                    </Box>
                                                </Link>

                                                <Link to={`/DeletarPostagem/${postagem.id}`} className='text-decorator-none'>
                                                    <Box mx={1}>
                                                        <Button variant="contained" disableElevation color="secondary" className='btnDeletar btnPost btnDelColor'>
                                                            Deletar
                                                        </Button>
                                                    </Box>
                                                </Link>

                                            </Box>
                                            <Box mx={1} >
                                                <Typography variant='body2' component='p' className="tema-postagens">
                                                    {postagem.tema?.nome}
                                                </Typography>
                                            </Box>
                                        </CardActions>
                                    </Card>
                                    : false}
                            </Box>
                        ))
                    }
                </Grid>
            </Grid>

        </>
    );
}

export default Home;