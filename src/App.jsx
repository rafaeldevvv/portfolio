import React from "react";
import Header from "./structural-components/Header.jsx";
import Main from "./structural-components/Main.jsx";
import Footer from "./structural-components/Footer.jsx";
import { AuthorContext } from "./AuthorContext.js";

export default function App({ author }) {
  return (
    <React.StrictMode>
      <AuthorContext.Provider value={author}>
        <Header />
        <Main />
        <Footer />
      </AuthorContext.Provider>
    </React.StrictMode>
  );
}