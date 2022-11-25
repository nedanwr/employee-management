import { SessionProvider } from "next-auth/react";
import "../styles/globals.scss";

const App = ({
    Component,
    pageProps: { session, ...pageProps },
}: any) => {
    return (
        <SessionProvider session={session}>
            <Component {...pageProps} />
        </SessionProvider>
    );
};

export default App;
