import React from 'react';
import Header from './Header.jsx';
import Main from './Main-element.jsx';
import Footer from './Footer.jsx'

export default function App({skills, projects }) {
   return (
      <React.StrictMode>
         <Header />
         <Main projects={projects} skills={skills} />
         <Footer />
      </React.StrictMode>
   )
}