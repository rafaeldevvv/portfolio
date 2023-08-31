import { createRoot } from 'react-dom/client';
import React from "react";
import Portfolio from './App.jsx';
import author from './data/author.js';

document.body.innerHTML += `<div id="root"></div>`;
const root = document.getElementById("root");

createRoot(root).render(<Portfolio author={author} />);