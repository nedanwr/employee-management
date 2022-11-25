import type { NextApiRequest, NextApiResponse } from "next";
import { validate as validateEmail } from "email-validator";
import { validatePassword } from "../../../utils/validatePassword";

const registerHandler = async (req: NextApiRequest, res: NextApiResponse) => {
    // Get the data from the request body
    const { email, full_name, username, password } = req.body;

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
};

export default registerHandler;
