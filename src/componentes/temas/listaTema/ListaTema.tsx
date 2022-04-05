import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import useLocalStorage from "react-use-localstorage";
import { Box, Button, Card, CardActions, CardContent, Typography } from "@material-ui/core";
import Tema from "../../../models/Tema";
import { busca } from "../../../service/Service";

function ListaTema() {

    const [temas, setTemas] = useState<Tema[]>([])

    const [token, setToken] = useLocalStorage('token')

    let history = useHistory()

    useEffect(() => {
        if (token == '') {
            alert('Você deve estar logado')
            history.push('/login')
        }
    }, [token])


    async function getTema() {
        await busca('/tema', setTemas, {
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
    )
}
export default ListaTema
