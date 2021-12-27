import "../styles/globals.css";
import { ChakraProvider } from "@chakra-ui/react";
import GoogleAnalytics from "../components/GoogleAnalytics";

import { useRouter } from "next/router";
import { useEffect } from "react";
import * as gtag from "../lib/gtag";

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  // Ketika ada perubahan di route, akan trigger useEffect
  useEffect(() => {
    const handleRouteChange = (url) => {
      gtag.pageview(url);
    };
    router.events.on("routeChangeComplete", handleRouteChange);

    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);

  return (
    <ChakraProvider>
      <GoogleAnalytics />
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
