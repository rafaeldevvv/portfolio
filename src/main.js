import {createRoot} from 'react-dom/client';
import React from "react";

document.body.innerHTML = `<div id="app"></div>`;
const appDOM = document.getElementById("app");

const heading = <h1>Hello, world!</h1>;
createRoot(appDOM).render(heading);