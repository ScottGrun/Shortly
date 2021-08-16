import { PrismaAdapter } from '@next-auth/prisma-adapter';
import { NextApiHandler } from 'next';
import NextAuth, { User as NextAuthUser } from 'next-auth';
import Providers from 'next-auth/providers';

import prisma from '../../../lib/prisma';

interface NextAuthUserWithStringId extends NextAuthUser {
    id: string
}

const options = {
    pages: {
        verifyRequest: '/auth/verify'
    },
    providers: [
        Providers.GitHub({
            clientId: process.env.GITHUB_ID,
            clientSecret: process.env.GITHUB_SECRET,
            scope: 'read:user',
            profile(profile) {
                return {
                    id: profile.id.toString(),
                    name: profile.name || profile.login,
                    email: profile.email,
                    image: profile.avatar_url,
                } as NextAuthUserWithStringId
            },
        }),
        Providers.Google({
            clientId: process.env.GOOGLE_ID,
            clientSecret: process.env.GOOGLE_SECRET
        }),
        Providers.Email({
            server: {
                host: process.env.EMAIL_SERVER_HOST,
                port: process.env.EMAIL_SERVER_PORT,
                auth: {
                    user: process.env.EMAIL_SERVER_USER,
                    pass: process.env.EMAIL_SERVER_PASSWORD
                }
            },
            from: process.env.EMAIL_FROM
        }),
    ],
    adapter: PrismaAdapter(prisma)
};

const authHandler: NextApiHandler = (req, res) => NextAuth(req, res, options);

export default authHandler;