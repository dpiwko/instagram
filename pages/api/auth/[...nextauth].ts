import NextAuth from 'next-auth'
import GoogleProviders from 'next-auth/providers/google'

export default NextAuth({
  providers: [
    GoogleProviders({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),
  ],
  pages: {
    signIn: '/login',
  },
  callbacks: {
    async session({ session, token }) {
      session.user.username = session.user?.name
        ?.split(' ')
        .join('')
        .toLowerCase()

      session.user.uid = token?.sub

      return session
    },
  },
})
