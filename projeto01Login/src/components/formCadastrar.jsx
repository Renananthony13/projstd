import { useState } from 'react';
import axios from 'axios';
import '../pages/Login/Login.styles.css';

export default function FormCadastrar() {

    const [nomeData, setNomeData] = useState('')
    const [emailData, setEmailData] = useState('')
    const [telData, setTelData] = useState('')
    const [senhaData, setSenhaData] = useState('')

    const [dataValues, setDataValues] = useState({
        nome: '',
        email: '',
        telefone: '',
        senha: ''
    })

    const handleInputSubmit = (e, key) => {
        setDataValues(state => ({
            ...state,
            [e.name]: e.value
        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        // const values = {
        //     nome: nomeData,
        //     email: emailData,
        //     telefone: telData,
        //     senha: senhaData
        // }


        axios.post("http://localhost:8080/newuser", dataValues)
            .then((res) => res.config.data)
            .then((data) => {
                console.log(data)
            })
            .catch((error) => console.log(error))
      
    }


    return (
        <form action='POST' onSubmit={handleSubmit}>
            <label>
                Nome:
                <input type="text" name='nome' value={dataValues.nome} onChange={(val) => handleInputSubmit(val.target, 'name')} placeholder='Digite seu nome' />
            </label>
            <label>
                Email:
                <input type="email" name='email' onChange={(val) => handleInputSubmit(val.target, 'email')} placeholder='Digite seu melhor email...' />
            </label>
            <label>
                Telefone:
                <input type="tel" name='telefone' onChange={(val) => handleInputSubmit(val.target, 'telefone')} placeholder='ex: 14998435729' />
            </label>
            <label>
                Senha:
                <input type="password" name='senha' onChange={(val) => handleInputSubmit(val.target, 'senha')}  placeholder='Digite sua senha' />
            </label>
            <button>Entrar</button>
        </form>
    )

} 

