import NextAuth, { NextAuthOptions } from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'

const authOptions: NextAuthOptions = {
    session: {
        strategy: 'jwt'
    },
    providers:[
        CredentialsProvider({
            type: 'credentials',
            credentials: {
                email:{ label: "Email", type: "email", placeholder: "me@email.com"},
                password:{ label: "Password", type: "password" }
            },
            authorize(credentials, req){
                const { email, password } = credentials as {
                    email: string,
                    password: string
                }
                if(email !== 'sepehr@gmial.com' && password !== '12345'){
                    return null
                }
                return { id:'1234', name:'sepehr', email:'me@email.com'}
            }
        })
    ],
    // pages: {
    //     signIn: '/login/Login',
    //     // error: '/login/Error',
    //     // signOut: '/login/Register'
    // }
}

export default NextAuth(authOptions)
