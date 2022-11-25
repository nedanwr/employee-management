import React from "react";
import { useRouter, NextRouter } from "next/router";
import { useSession } from "next-auth/react";

export const WaitForAuth = ({ children }: any): JSX.Element => {
    // Get the user's session
    const { data: session, status } = useSession();

    // Router
    const router: NextRouter = useRouter();

    // If the user's session is loading,
    if (!session && status === "unauthenticated") {
        router.push("/auth/login");
        return <h1>Redirecting...</h1>;
    }

    return <>
        <div className={!session && status ? "hidden" : ""}>
            {children}
        </div>
    </>;
}