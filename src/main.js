import { createRoot } from 'react-dom/client';
import React from "react";
import Portfolio from './App.jsx';
import author from './data/author.js';

document.body.innerHTML = `<div id="app"></div>`;
const appDOM = document.getElementById("app");

createRoot(appDOM).render(<Portfolio author={author} />);