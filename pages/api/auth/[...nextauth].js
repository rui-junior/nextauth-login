import nextAuth from 'next-auth'
import CredentialsProvider from "next-auth/providers/credentials";
import connect from '../../../database/connection'
import schema from '../../../database/schema'
import bcrypt from 'bcrypt'

export default nextAuth({

    providers: [

        CredentialsProvider({

            authorize: async (credentials) => {

                await connect()

                const dadosBD = await schema.findOne({ usuario: credentials.usuario })

                if (dadosBD) {

                    if (bcrypt.compareSync(credentials.senha, dadosBD.senha)) {

                        return({ 'logged': true })

                    }

                    throw new Error('Senha incorreta')

                }    
                
                throw new Error('Usuario nao encontrado')

            }

       })

    ],
    pages: {
        signIn: "/",
    },
    secret: process.env.SECRET

})