import '../Login/Login.styles.css';
import FormCadastrar from '../../components/formCadastrar';
import axios from 'axios';


function Cadastro() {

    return(
        <div className='page'>
            <h1>Cadastrar</h1>
            <FormCadastrar />
            <hr style={{
                color: '#000',
                height: 1,
                width: '50%',
                margin: '0 auto'
            }} />
            <p>Ja possui cadastro? clique-aqui</p>
        </div>
    )
}

export default Cadastro
