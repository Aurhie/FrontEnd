import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Box, Button, Card, CardActions, CardContent, Checkbox, FormControlLabel, Grid, Typography } from "@material-ui/core";
import Tema from "../../../models/Tema";
import './ListaTema.css';

import { useHistory } from 'react-router-dom';
import { busca } from "../../../service/Service";
import { useSelector } from "react-redux";
import { UserState } from "../../../store/tokens/UserReducer";
import { toast } from 'react-toastify';
import { Favorite, FavoriteBorder } from "@material-ui/icons";
import Profile from "../../estaticos/profile/Profile";

function ListaTema() {

    const [temas, setTemas] = useState<Tema[]>([])
    let history = useHistory();
    const token = useSelector<UserState, UserState["tokens"]>(
        (state) => state.tokens
    );

    useEffect(() => {
        if (token == '') {
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
            history.push('/login')
        }
    }, [token])


    async function getTema() {
        await busca('/temas', setTemas, {
            headers: {
                'Authorization': token
            }
        })

    }

    useEffect(() => {
        getTema()
    }, [temas.length])

    return (
        <>
            <Grid container direction="row" justifyContent="center" className='corFundo'>
                <Grid xs={3} className='profile-container'>
                    <Profile />
                </Grid>

                <Grid xs={9} >
                    <Typography className='titulo-lista-tema'>
                        Temas
                    </Typography>
                    {
                        temas.map(tema => (
                            <Box m={2}>
                                <Card variant='outlined' className="caixa-post2">
                                    <CardContent>

                                        <Typography variant="h5" component='h2' className="tituloPost">
                                            {tema.nome}
                                        </Typography>

                                        <Typography variant="h5" component='h2' className="textoPost">
                                            {tema.descricao}
                                        </Typography>

                                    </CardContent>

                                    <CardActions className="chari2">
                                        <Box display='flex' justifyContent='center' alignItems="center" mb={1.5}>

                                            <Box display='flex' justifyContent='center' alignItems="center">
                                                <Link to={`/formularioTema/${tema.id}`} className='text-decorator-none'>
                                                    <Box mx={1}>
                                                        <Button variant="contained" disableElevation color="primary" className='btnAtualizar btnPost btnColor'>
                                                            Atualizar
                                                        </Button>
                                                    </Box>
                                                </Link>

                                                <Link to={`/deletarTema/${tema.id}`} className='text-decorator-none'>
                                                    <Box mx={1}>
                                                        <Button variant="contained" disableElevation color="secondary" className='btnDeletar btnPost btnDelColor'>
                                                            Deletar
                                                        </Button>
                                                    </Box>
                                                </Link>
                                            </Box>
                                        </Box>
                                    </CardActions>
                                </Card>
                            </Box>
                        ))
                    }
                </Grid>
            </Grid>
            
        </>
    );
}


export default ListaTema
