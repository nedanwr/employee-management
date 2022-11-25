import React, {
    useState,
    ChangeEvent
} from "react";
import type { NextPage } from "next";
import Head from "next/head";
import {
    Label,
    Input,
    Button
} from "../../ui";

export const LoginPage: NextPage = (): JSX.Element => {
    // State
    const [loading, setLoading] = useState<boolean>(false);
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");

    return (
        <>
            <Head>
                <title>Log In</title>
            </Head>
            <div className={`grid place-items-center h-screen w-screen bg-zinc-800 text-white`}>
                <form
                    autoComplete={`off`}
                    spellCheck={`false`}
                    noValidate={true}
                    className={`bg-zinc-900 rounded-md px-14 py-12 m-auto text-left`}
                >
                    <h1 className={`text-3xl font-bold mb-8`}>Log In</h1>
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
                    {/* Password Input */}
                    <div className={`form-group flex flex-col`}>
                        <div className={`flex flex-row justify-between`}>
                            <Label
                                title={`Password`}
                                className={`font-medium text-sm mb-1.5`}
                            />
                            <a
                                href={`/auth/reset/`}
                                className={`text-sm font-medium text-amber-400 cursor-pointer`}
                            >
                                Forgot your password?
                            </a>
                        </div>
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
                    </div>
                    <Button
                        className={`bg-amber-400 border-2 border-amber-400 text-black font-medium px-48 py-3.5 w-full mt-4 rounded-md hover:text-amber-400 hover:bg-black hover:border-amber-400 transition duration-500`}
                    >
                        Login
                    </Button>
                </form>
            </div>
        </>
    );
}