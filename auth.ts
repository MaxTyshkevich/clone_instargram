import CredentialsProvider from 'next-auth/providers/credentials';
import GoogleProvider from 'next-auth/providers/google';
import { getServerSession, type NextAuthOptions } from 'next-auth';

import prisma from '@/lib/prisma';
import { PrismaAdapter } from '@next-auth/prisma-adapter';
import {
  GetServerSidePropsContext,
  NextApiRequest,
  NextApiResponse,
} from 'next';

export const config = {
  adapter: PrismaAdapter(prisma),
  providers: [
    CredentialsProvider({
      credentials: {
        login: { label: 'Login:*' },
        password: { label: 'Password:*', type: 'password' },
      },
      authorize: async function (credentials, req) {
        const user = await prisma.user.findUnique({
          where: {
            email: credentials?.login,
          },
        });

        return user;
      },
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
  ],
  pages: {
    signIn: '/login',
  },
  session: {
    strategy: 'jwt',
  },
  callbacks: {
    session: async ({ session, token, user }) => {
      if (token) {
        session.user.id = token.id;
        session.user.name = token.name;
        session.user.image = token.picture;
        session.user.email = token.email;
        session.user.username = token.username;
      }
      return session;
    },

    jwt: async ({ token, user }) => {
      const prismaUser = await prisma.user.findFirst({
        where: {
          email: token.email,
        },
      });

      if (!prismaUser) {
        token.id = user.id;
        return token;
      }

      if (!prismaUser.username) {
        await prisma.user.update({
          where: {
            id: prismaUser.id,
          },
          data: {
            username: user.name?.split(' ').join('').toLocaleLowerCase(),
          },
        });
      }

      return {
        id: prismaUser.id,
        name: prismaUser.name,
        email: prismaUser.email,
        username: prismaUser.username,
        picture: prismaUser.image,
      };
    },
  },
} satisfies NextAuthOptions;

export function auth(
  ...args:
    | [GetServerSidePropsContext['req'], GetServerSidePropsContext['res']]
    | [NextApiRequest, NextApiResponse]
    | []
) {
  return getServerSession(...args, config);
}

export const getAuthUserId = async () => {
  const session = await auth();

  if (!session) {
    throw Error('You must be signed in to use this feature');
  }
  return session.user.id;
};
