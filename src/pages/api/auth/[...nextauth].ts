import NextAuth, { NextAuthOptions } from 'next-auth'
import CredentialsProviders from 'next-auth/providers/credentials'

const authOptions: NextAuthOptions = {
    session: {
        strategy: 'jwt'
    },
    providers:[
        CredentialsProviders({
            type: 'credentials',
            credentials: {},
            authorize(credentials, req){
                throw new Error()
            }
        })
    ]
}

export default NextAuth(authOptions)
