//usar o mongo

require('dotenv').config()
const mongoose = require('mongoose')

//configurar logs pra sucesso ou pra falha
//o connect retorna uma promise é intrisicamente assincrono
//podemos usar then ou assync await. Vai retornar sucesso ou rejeição

//process para pegar variaveis do .env

const connect = () =>{
    mongoose.connect(process.env.DATABASE_URL,{
        useNewUrlParser: true,
        useUnifiedTopology: true
    }).then(console.log('Database conectada com sucesso')).catch(err => console.error)
}

module.exports = {connect}