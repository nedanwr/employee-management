import NextAuth, { RequestInternal } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { validate as validateEmail } from "email-validator";
import { prisma } from "../../../prisma";
import bcryptjs from "bcryptjs";

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
                const user = await prisma.user.findFirst({
                    where: {
                        email
                    }
                });

                if (!user) {
                    return Promise.reject(new Error(`User with email ${email} not found`));
                }

                // Check if password is correct
                const isPasswordCorrect = await bcryptjs.compare(password, user.password);

                if (!isPasswordCorrect) {
                    return Promise.reject(new Error("Incorrect password"));
                }

                return null;
            }
        }),
    ],
    pages: {
        signIn: "/auth/login/",
    }
});