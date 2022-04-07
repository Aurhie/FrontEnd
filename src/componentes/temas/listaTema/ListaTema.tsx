import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Box, Button, Card, CardActions, CardContent, Typography } from "@material-ui/core";
import Tema from "../../../models/Tema";
import './ListaTema.css';

import {useHistory} from 'react-router-dom';
import { busca } from "../../../service/Service";
import { useSelector } from "react-redux";
import { UserState } from "../../../store/tokens/UserReducer";
import { toast } from 'react-toastify';

function ListaTema() {

    const [temas, setTemas] = useState<Tema[]>([])
    let history = useHistory();
    const token = useSelector < UserState, UserState["tokens"]> (
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
                theme: "colored",
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
            {
                temas.map(tema => (
                    <Box m={2}>
                        <Card variant='outlined'>
                            <CardContent>
                                <Typography gutterBottom>
                                    Tema
                                </Typography>

                                <Typography variant="h5" component='h2'>
                                    {tema.nome}
                                </Typography>

                                <Typography variant="h5" component='h2'>
                                    {tema.descricao}
                                </Typography>

                            </CardContent>

                            <CardActions>
                                <Box display='flex' justifyContent='center' mb={1.5}>
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
                            </CardActions>
                        </Card>
                    </Box>
                ))
            }
        </>
    );
}
export default ListaTema
