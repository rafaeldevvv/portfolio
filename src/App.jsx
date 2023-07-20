import React from "react";
import Header from "./sections/Header.jsx";
import Main from "./sections/Main.jsx";
import Footer from "./sections/Footer.jsx";
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
