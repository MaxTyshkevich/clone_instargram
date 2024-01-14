import { config } from '@/auth';
import NextAuth from 'next-auth';

const handle = NextAuth(config);

export { handle as GET, handle as POST };
