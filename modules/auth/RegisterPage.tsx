import type { NextPage } from "next";
import Head from "next/head";
import {Button, Input, Label} from "../../ui";

export const RegisterPage: NextPage = (): JSX.Element => {
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