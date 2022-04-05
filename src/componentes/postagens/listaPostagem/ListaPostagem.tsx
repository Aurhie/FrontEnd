import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import useLocalStorage from "react-use-localstorage";
import Typography from '@mui/material/Typography'


function ListaPostagem() {
    const [postagens, setPostagens] = useState<Postagem[]>([])

    const [token, setToken] = useLocalStorage('token');

    let history = useHistory();
}

useEffect(() => {
    if (token == '') {
        alert('Você precisa estar logado')
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
        {
            postagens.map(postagem => (
                <Box m={2}>
                    <Card variant='outlined'>
                        <Cardcontent>
                            <Typography gutterBottom>
                                Postagens
                            </Typography>

                            <Typography variant='h5' component='h2'>
                                {postagem.titulo}
                            </Typography>

                            <Typography variant='body2' component='p2'>
                                {postagem.texto}
                            </Typography>

                            <Typography variant='body2' component='p2'>
                                {postagem.tema?.descricao}
                            </Typography>
                        </Cardcontent>

                        <CardActions>
                            <Box display='flex' justifyContent='center' mb={1.5}>
                                <Link to={`/formularioPostagem/${postagem.id}`} className='text-decorator-none'>
                                    <Box mx={1}>
                                        <Button className='btn-atualizar'>
                                            Atualizar
                                        </Button>
                                    </Box>
                                </Link>

                                <Link to={`/formularioPostagem/${postagem.id}`} className='text-decorator-none'>
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