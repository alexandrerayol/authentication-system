import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import db from "./lib/db";

export const { handlers, signIn, signOut, auth } = NextAuth({
  pages: {},
  providers: [
    Credentials({
      credentials: {
        email: {
          label: "Email",
        },
        password: {
          label: "Senha",
          type: "text",
        },
      },
      authorize: async (credentials) => {
        const email = credentials.email as string;
        const password = credentials.password as string;
        console.log("EXUTADO NA FUNCAO AUTHORIZE", { email, password });

        if (!email || !password) {
          return null;
        }

        //verificar se o usuário existe no bd
        const user = await db.user.findUnique({ where: { email: email } });

        if (!user) {
          return null;
        }

        const match = user.password === password;

        if (!match) {
          return null;
        }

        return user;
      },
    }),
  ],
});
