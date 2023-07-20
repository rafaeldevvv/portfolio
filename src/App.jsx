import React from "react";
import Header from "./sections/Header.jsx";
import Main from "./sections/Main.jsx";
import Footer from "./sections/Footer.jsx";

export default function App({ author }) {
  return (
    <React.StrictMode>
      <Header />
      <Main
        author={author}
      />
      <Footer />
    </React.StrictMode>
  );
}
