import "../styles/globals.css";
import { UserProvider } from "../context/user";
import AuthStateChangeProvider from "../context/auth";

function MyApp({ Component, pageProps }) {
  return (
    <UserProvider>
      <AuthStateChangeProvider>
        <Component {...pageProps} />
      </AuthStateChangeProvider>
    </UserProvider>
  );
}

export default MyApp;
