import React from "react";
import Header from "./components/Header.jsx";
import Main from "./components/Main.jsx";
import Footer from "./components/Footer.jsx";
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