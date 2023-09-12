const db = require('../api/config/db.js');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

async function login(req, res) {
    
    const querySql = `SELECT * FROM usuarios WHERE email = '${req.body.email}'`

    try {
        db.query(querySql, (error, data) => {
            //! verifica se na query, a resposta veio vazia, assim resultando em erro, e que o usuario noa existe
            if(data.length === 0) {
                return res.status(500).json('Senha ou email, incorretos.')
            }
            if(error) {
                res.status(401).json('Senha ou email, incorretos.')
            } else {
                bcrypt.compare(req.body.senha, data[0].senha, (err, result) => {
                    if(err) {
                        res.status(500).json(err)
                    } else {
                        //! verifica se a senha condiz ou nao
                        if(!result) {
                            res.status(401).json('Senha ou email, incorretos.')
                        } else {

                            console.log(data[0])
                            const iduser = data[0].idusuarios
                            const emailUser = data[0].email
                            let secret = Math.floor(Date.now() / 1000) + (60 * 60)
                            let token_ = jwt.sign({iduser, emailUser}, process.env.SECRET_KEY,{
                                expiresIn: '800'
                            })

                            console.log(token_)
                            // console.log(data[0].idusuarios)
                            res.status(200).json({
                                erro: 'false',
                                mensagem: 'Login efetuado com sucesso!',
                                token: token_
                            })
                        }
                        
                    }
                })
    
            }
        })
    } catch(error) {
        res.status(401).json('Senha ou email, incorretos.')
    }

}


module.exports = login

// "nome": "pedro carlos2",
// "email": "pedrocarlos2@gmail.com",
// "senha": "kkasdas23"





// cambitoMeromba@gmail.com
// 123


