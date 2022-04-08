import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Box, Button, Card, CardActions, CardContent, Typography, FormControlLabel, Checkbox } from "@material-ui/core";
import Tema from "../../../models/Tema";
import './ListaTema.css';

import { useHistory } from 'react-router-dom';
import { busca } from "../../../service/Service";
import { useSelector } from "react-redux";
import { UserState } from "../../../store/tokens/UserReducer";
import { toast } from 'react-toastify';
import { Favorite, FavoriteBorder } from "@material-ui/icons";

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
            <Typography gutterBottom>
                Tema
            </Typography>
            {
                temas.map(tema => (
                    <Box m={2}>
                        <Card variant='outlined' className="caixa-post2">
                            <CardContent>


                                <Typography variant="h5" component='h2'>
                                    {tema.nome}
                                </Typography>

                                <Typography variant="h5" component='h2'>
                                    {tema.descricao}
                                </Typography>

                            </CardContent>

                            <CardActions className="chari2">
                                <Box display='flex' justifyContent='center' alignItems="center" mb={1.5}>

                                    <Box display='flex' justifyContent='center' alignItems="center">
                                        <FormControlLabel
                                            control={<Checkbox icon={<FavoriteBorder />}
                                                checkedIcon={<Favorite />}
                                                name="checkedH" />}
                                            label="Curtir"
                                        />
                                        <Link to={`/formularioTema/${tema.id}`} className='text-decorator-none'>
                                            <Box mx={1}>
                                                <Button className='btn-atualizar'>
                                                    Atualizar
                                                </Button>
                                            </Box>
                                        </Link>

                                        <Link to={`/deletarTema/${tema.id}`} className='text-decorator-none'>
                                            <Box mx={1}>
                                                <Button className='btn-deletar'>
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
        </>
    );
}
export default ListaTema