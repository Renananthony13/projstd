import { useState } from 'react';
import axios from 'axios';
import '../pages/Login/Login.styles.css';

export default function FormLogin() {

    const [dataForm, setDataForm] = useState({
        email: '',
        senha: ''
    })

    const hundleSubmitInput = (e) => {
        console.log(e.value, e.name)
        setDataForm((data) => ({
            ...data,
            [e.name]: e.value
        }))
    }

    const hundleSubmit = (e) => {
        e.preventDefault()

        axios.post('http://localhost:8080/login', dataForm)
            .then((res) => console.log(res))
            .catch((error) => console.log(error))
    }

    return (
        <form action="POST" onSubmit={hundleSubmit}>
            <label>
                Email:
                <input type="email" name='email' onChange={(e) => hundleSubmitInput(e.target)} placeholder='Digite seu email' />
            </label>
            <label>
                Senha:
                <input type="password" name='senha' onChange={(e) => hundleSubmitInput(e.target, 'senha')} placeholder='Digite sua senha' />
            </label>
            <button>Entrar</button>
        </form>
    )
} 

