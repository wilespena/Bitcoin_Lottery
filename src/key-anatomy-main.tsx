import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import "./App.css";
import KeyAnatomy from "./KeyAnatomy";

createRoot(document.getElementById("anatomy-root")!).render(
  <StrictMode>
    <KeyAnatomy />
  </StrictMode>
);

