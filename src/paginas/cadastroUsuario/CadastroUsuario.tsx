import { Box, Grid, TextField, Typography, Button, FormControl, FormControlLabel, FormLabel, Radio, RadioGroup } from "@material-ui/core";
import React, { ChangeEvent, useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { toast } from "react-toastify";
import User from "../../models/User";
import { cadastroUsuario } from "../../service/Service";
import './CadastroUsuario.css'


function CadastroUsuario() {

    let history = useHistory();
    const [confirmarSenha, setConfirmarSenha] = useState<String>("")

    /*Atualiza a partir do que o usuario está digitando*/
    const [user, setUser] = useState<User>(
        {
            id: 0,
            nome: '',
            usuario: '',
            foto: '',
            senha: '',
            tipo: ''
        })

    /*Atualiza a partir da resposta do back-end*/
    const [userResult, setUserResult] = useState<User>(
        {
            id: 0,
            nome: '',
            usuario: '',
            foto: '',
            senha: '',
            tipo: ''
        })

    useEffect(() => {
        if (userResult.id != 0) {
            history.push("/login")
        }
    }, [userResult])/*Este array dispara a função toda vez que o userResult é alterado*/


    /*Atualiza o estado do setUser a partir do que está sendo digitado*/
    function updatedModel(e: ChangeEvent<HTMLInputElement>) {
        setUser({
            ...user,
            [e.target.name]: e.target.value
        })

    }

    /**Atualiza o estado do confirmarSenha a partir do que foi digitado*/
    function confirmarSenhaHandle(e: ChangeEvent<HTMLInputElement>) {
        setConfirmarSenha(e.target.value)
    }

    /**Realiza o cadastro do usuário fazendo a comparação das senhas dentro do if */
    async function cadastrar(e: ChangeEvent<HTMLFormElement>) {
        e.preventDefault()
        if (confirmarSenha === user.senha && user.senha.length >= 8) {
            //Tenta executar o cadastro
            try {
                await cadastroUsuario(`/usuarios/cadastrar`, user, setUserResult)
                toast.success('Usúario cadastrado com sucesso!', {
                    position: 'top-right',
                    autoClose: 2000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: false,
                    draggable: false,
                    theme: 'dark',
                    progress: undefined
                })

                //Se houver erro, pegue o Erro e retorna uma mensagem (alert)
            } catch (error) {

                //Pode modificar a mensagem de acordo com o erro 
                toast.error('Usúario já cadastrado, por favor insira dados válidos.', {
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

        } else {
            toast.error('Dados inconsistentes', {
                position: 'top-right',
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: false,
                theme: 'dark',
                progress: undefined
            })

            setUser({ ...user, senha: "" }) // Reinicia o campo de Senha
            setConfirmarSenha("")           // Reinicia o campo de Confirmar Senha
        }
    }


    return (
        <Grid className='cadastro-container'>
            <Grid xs={6} className='imagem2-container'>
                <Box className='imagem2' />
            </Grid>
            <Grid alignItems='center' xs={6} >
                <Box className='rightgrid-container'>

                    <form onSubmit={cadastrar} className='form-container2'>

                        <Typography variant='h4'
                            gutterBottom
                            color="textPrimary"
                            component='h3' align='center'
                            className="textos2">
                            Cadastrar
                        </Typography>

                        <TextField
                            value={user.nome}
                            onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)}
                            id='nome'
                            label='nome'
                            variant='outlined'
                            name='nome'
                            margin="normal"
                            required
                            placeholder="Digite o seu nome completo"
                            fullWidth>
                        </TextField>

                        <TextField
                            value={user.usuario}
                            onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)}
                            id='usuario'
                            label='usuário'
                            variant='outlined'
                            name='usuario'
                            margin='normal'
                            type='email'
                            placeholder="Exemplo: usuario@email.com"
                            required
                            fullWidth>
                        </TextField>

                        <TextField
                            value={user.foto}
                            onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)}
                            id='foto'
                            label='foto'
                            variant='outlined'
                            name='foto'
                            margin="normal"
                            placeholder="Insira o link da sua foto"
                            fullWidth>
                        </TextField>

                        <FormControl>
                            <FormLabel id="demo-row-radio-buttons-group-label">Tipo</FormLabel>
                            <RadioGroup
                                row
                                aria-labelledby="demo-row-radio-buttons-group-label"
                                name="tipo"
                                value={user.tipo}
                                onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)}
                            >
                                <FormControlLabel value={'Voluntárie'} control={<Radio />} label="Voluntárie" />
                                <FormControlLabel value={"Alune"} control={<Radio />} label="Alune" />
                            </RadioGroup>
                        </FormControl>

                        <TextField
                            value={user.senha}
                            onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)}
                            id='senha'
                            label='senha'
                            variant='outlined'
                            name='senha'
                            margin="normal"
                            type='password'
                            required
                            placeholder="Sua senha deve ter pelo menos 8 caracteres"
                            fullWidth>
                        </TextField>

                        <TextField
                            value={confirmarSenha}
                            onChange={(e: ChangeEvent<HTMLInputElement>) => confirmarSenhaHandle(e)}
                            id='confirmarSenha'
                            label='Confirmar Senha'
                            variant='outlined'
                            name='confirmarSenha'
                            margin='normal'
                            type='password'
                            required
                            placeholder="Digite novamente a sua senha"
                            fullWidth>
                        </TextField>
                        <Box className="btns-box">
                            <Link to='/login' className='text-decorator-none'>
                                <Button variant='contained' color='secondary' className='btnCancelar btnDelColor'>
                                    Cancelar
                                </Button>
                            </Link>
                            <Button type='submit' variant='contained' className='btnCadastrar btnColor'>
                                Cadastrar
                            </Button>
                        </Box>

                    </form>
                </Box>
            </Grid>

        </Grid>
    )
}

export default CadastroUsuario;