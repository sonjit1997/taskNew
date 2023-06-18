import React, { useEffect } from "react";
import "@/styles/globals.css";
import "bootstrap/dist/css/bootstrap.css";
import { SSRProvider } from "react-bootstrap";

function App({ Component, pageProps }) {
  useEffect(() => {
    import("bootstrap/dist/js/bootstrap.js");
  }, []);

  return (
    <SSRProvider>
      <Component {...pageProps} />
    </SSRProvider>
  );
}

export default App;
