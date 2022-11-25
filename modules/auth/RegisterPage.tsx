import React, {
    useState,
    FormEventHandler,
    FormEvent,
    ChangeEvent
} from "react";
import type { NextPage } from "next";
import Head from "next/head";
import { useRouter, NextRouter } from "next/router";
import axios from "axios";
import { Button, Input, Label } from "../../ui";

export const RegisterPage: NextPage = (): JSX.Element => {
    // State
    const [loading, setLoading] = useState<boolean>(false);
    const [email, setEmail] = useState<string>("");
    const [fullName, setFullName] = useState<string>("");
    const [password, setPassword] = useState<string>("");

    // Router
    const router: NextRouter = useRouter();

    const handleSubmit: FormEventHandler<HTMLFormElement> = async (e: FormEvent<HTMLFormElement>) => {
        // Prevent default form submission
        e.preventDefault();

        // Set loading state
        setLoading(true);

        // Send request to register user
        await axios.post("/api/auth/register", {
            email,
            fullName,
            password
        })
            .then(async (response) => {
                // Redirect to login page
                if (response.data.statusCode === 201) {
                    await router.push("/auth/login/");
                }
            })
            .finally(() => {
                // Set loading state
                setLoading(false);
            });
    }

    return (
        <>
            <Head>
                <title>Register</title>
            </Head>
            <div className={`grid place-items-center h-screen w-screen bg-zinc-800 text-white`}>
                <form
                    autoComplete={`off`}
                    spellCheck={`false`}
                    noValidate={true}
                    className={`bg-zinc-900 rounded-md px-14 py-12 m-auto text-left`}
                    onSubmit={handleSubmit}
                >
                    <h1 className={`text-3xl font-bold mb-8`}>Create an Account</h1>
                    {/* Email Input */}
                    <div className={`form-group flex flex-col`}>
                        <Label
                            title={`Email`}
                            className={`font-medium text-sm mb-1.5`}
                        />
                        <Input
                            type={`email`}
                            name={`email`}
                            id={`email`}
                            aria-label={`severus@hogwarts.edu`}
                            className={`form-control`}
                            placeholder={`severus@hogwarts.edu`}
                            value={email}
                            onChange={
                                (e: ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)
                            }
                            required
                        />
                    </div>
                    {/* Full Name Input */}
                    <div className={`form-group flex flex-col`}>
                        <Label
                            title={`Full Name`}
                            className={`font-medium text-sm mb-1.5`}
                        />
                        <Input
                            type={`text`}
                            name={`full_name`}
                            id={`full_name`}
                            aria-label={`Severus Snape`}
                            className={`form-control`}
                            placeholder={`Severus Snape`}
                            value={fullName}
                            onChange={
                                (e: ChangeEvent<HTMLInputElement>) => setFullName(e.target.value)
                            }
                            required
                        />
                    </div>
                    {/* Password Input */}
                    <div className={`form-group flex flex-col`}>
                        <Label
                            title={`Password`}
                            className={`font-medium text-sm mb-1.5`}
                        />
                        <Input
                            type={`password`}
                            name={`password`}
                            id={`password`}
                            aria-label={`•••••••••••`}
                            className={`form-control`}
                            placeholder={"•••••••••••"}
                            value={password}
                            onChange={
                                (e: ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)
                            }
                            required
                        />
                        <p
                            id={`password_help`}
                            className={`italic text-xs font-medium text-gray-500 mt-1`}
                        >
                            *Note: Passwords are case-sensitive, and must be at least 8 characters long.
                        </p>
                        <p
                            id={`account_exists`}
                            className={`text-gray-50 text-sm font-medium mt-5`}
                        >
                            Already have an account? <a href={`/auth/login/`} className={`text-amber-400 cursor-pointer`}>Log In</a>
                        </p>
                    </div>
                    <Button
                        className={`bg-amber-400 border-2 border-amber-400 text-black font-medium px-48 py-3.5 w-full mt-4 rounded-md hover:text-amber-400 hover:bg-black hover:border-amber-400 transition duration-500`}
                    >
                        Create
                    </Button>
                </form>
            </div>
        </>
    );
}