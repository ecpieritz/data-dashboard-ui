import NextAuth, {NextAuthOptions} from "next-auth"
import GooleProvider from "next-auth/providers/google"

export const authOptions: NextAuthOptions = {
  providers: [
    GooleProvider(options: {
      clientId: process.env.GOOGLE_ID as string,
      clientSecret: process.env.GOOGLE_SECRET as string,
      authrization: {
        params: {
          prompt: "consent",
          access_type: "offline",
          response_type: "code"
        }
      }
    }),
  ]
}

export default NextAuth(authOptions);