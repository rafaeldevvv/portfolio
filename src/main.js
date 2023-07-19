import { createRoot } from 'react-dom/client';
import React from "react";
import App from './App.jsx';
import skills from './skills.js';
import projects from './projects.js'

document.body.innerHTML = `<div id="app"></div>`;
const appDOM = document.getElementById("app");

createRoot(appDOM).render(<App skills={skills} projects={projects} />);