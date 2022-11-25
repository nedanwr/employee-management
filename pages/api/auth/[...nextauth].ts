import NextAuth, { RequestInternal } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { validate as validateEmail } from "email-validator";
import { prisma } from "../../../prisma";

export default NextAuth({
    session: {
        strategy: "jwt",
    },
    providers: [
        CredentialsProvider({
            credentials: {},
            async authorize(credentials, _req: Pick<RequestInternal, "body" | "query" | "headers" | "method">) {
                const { email, password } = credentials as {
                    email: string;
                    password: string;
                };

                // Validate email
                if (!validateEmail(email)) {
                    return Promise.reject(new Error("Invalid email address"));
                }

                // Check if user exists
                const userExists = await prisma.user.findFirst({
                    where: {
                        email
                    }
                });

                if (!userExists) {
                    return Promise.reject(new Error(`User with email ${email} not found`));
                }

                return null;
            }
        }),
    ],
    pages: {
        signIn: "/auth/login/",
    }
});