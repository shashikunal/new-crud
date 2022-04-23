import React from "react";
import { createRoot } from "react-dom/client";

//bootstrap library
import "bootstrap/dist/css/bootstrap.css";
import "jquery/dist/jquery";
import "popper.js/dist/popper";
import "bootstrap/dist/js/bootstrap";
import App from "./App";
import "./global.css";

createRoot(document.getElementById("root")).render(<App />);
