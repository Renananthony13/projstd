import './Login.styles.css';
import axios from 'axios';
import FormLogin from '../../components/formLogin';

function Login() {



    return(
        <div className='page'>
            <h1>Login</h1>
            <FormLogin />
            <hr style={{
                color: '#000',
                height: 1,
                width: '50%',
                margin: '0 auto'
            }} />
            <p>Ainda não possui cadastro? clique-aqui</p>
        </div>
    )
}

export default Login

