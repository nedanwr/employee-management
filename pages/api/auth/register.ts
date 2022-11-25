import type { NextApiRequest, NextApiResponse } from "next";
import { validate as validateEmail } from "email-validator";
import { validatePassword } from "../../../utils/validatePassword";
import { prisma } from "../../../prisma";
import bcryptjs from "bcryptjs";

const registerHandler = async (req: NextApiRequest, res: NextApiResponse) => {
    // Get the data from the request body
    const { email, full_name, password } = req.body;

    // Validate email
    if (!validateEmail(email)) {
        return res
            .json({
                statusCode: 400,
                error: "Bad Request",
                message: "Invalid email address"
            });
    }

    // Validate password
    if (!validatePassword(password)) {
        return res
            .json({
                statusCode: 400,
                error: "Bad Request",
                message: "Invalid password"
            });
    }

    // Check if email already in use
    const emailExists = await prisma
        .user
        .findFirst({
            where: {
                email,
            }
        });

    if (emailExists) {
        await prisma.$disconnect();
        return res
            .json({
                statusCode: 400,
                error: "Bad Request",
                message: "Email already exists"
            });
    }

    // Create user in database
    await prisma
        .user
        .create({
            data: {
                email,
                name: full_name,
                password: await bcryptjs.hash(password, 12),
                createdAt: new Date().getTime(),
            }
        })
        .then(() => {
            return res
                .json({
                    statusCode: 201,
                    message: "User created successfully"
                });
        })
        .catch((error: any | unknown) => {
            throw new Error(error.message);
        })
        .finally(() => {
            return prisma.$disconnect();
        });
};

export default registerHandler;
