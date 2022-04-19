import React, { useEffect, useState } from 'react'
import { Box, Button, Card, CardActions, CardContent, Grid, Typography } from '@material-ui/core'
import { useHistory, useParams } from 'react-router-dom';
import Tema from '../../../models/Tema';
import { buscaId, deleteId } from '../../../service/Service';
import "./DeletarTema.css"
import { useSelector } from 'react-redux';
import { UserState } from '../../../store/tokens/UserReducer';
import { toast } from 'react-toastify';

function DeletarTema() {

    let history = useHistory();

    const { id } = useParams<{ id: string }>();

    const token = useSelector<UserState, UserState["tokens"]>(

        (state) => state.tokens
    );

    const [tema, setTema] = useState<Tema>()

    useEffect(() => {
        if (token === "") {
            toast.error("Você precisa estar logado!", {
                position: 'top-right',
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: false,
                theme: 'dark',
                progress: undefined
            });
            history.push("/login")
        }
    }, [token])

    useEffect(() => {
        if (id !== '') {
            findById(id)
        }
    }, [id])

    async function findById(id: string) {
        await buscaId(`/temas/${id}`, setTema, {
            headers: {
                'Authorization': token
            }
        })
    }

    async function sim() {
        history.push('/home')
        deleteId(`/temas/${id}`, {
            headers: {
                'Authorization': token
            }
        });
        toast.success('Tema deletado com sucesso!', {
            position: 'top-right',
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: false,
            theme: 'dark',
            progress: undefined
        })
    }

    function nao() {
        history.push('/home')
    }

    return (
        <>
            <Grid container direction='row' justifyContent='center' alignItems='center' className='container-deleta-postagens'>
                <Grid xs={12}>
                    <Box>
                        <Typography className='titulo-deleta-tema' variant='h4' gutterBottom>
                            Deletar Tema
                        </Typography>
                        <Typography className='titulo-deleta-tema' variant='h5' gutterBottom>
                            Tem certeza que deseja deletar este tema?
                        </Typography>
                    </Box>
                </Grid>
                <Box m={12} className='caixa-cards'>
                    <Card variant="outlined" className='caixa-post2'>
                        <CardContent>

                            <Typography variant="h5" component='h2' className="tituloPost">
                                {tema?.nome}
                            </Typography>

                            <Typography variant="h5" component='h2' className="textoPost">
                                {tema?.descricao}
                            </Typography>

                        </CardContent>

                        <CardActions >
                            <Box display="flex" justifyContent="center" width='100%'>
                                <Box mx={2}>
                                    <Button
                                        onClick={sim}
                                        className="btnColor">
                                        Sim
                                    </Button>
                                </Box>

                                <Box mx={2}>
                                    <Button
                                        onClick={nao}
                                        className='btnDelColor'>
                                        Não
                                    </Button>
                                </Box>
                            </Box>
                        </CardActions>
                    </Card>
                </Box>
            </Grid>
        </>
    );
}

export default DeletarTema