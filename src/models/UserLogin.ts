interface UserLogin {
    id: number;
    nome: string;
    usuario: string;
    foto: string;
    senha: string;
    tipo: string;
    token?: string | null
}

export default UserLogin;