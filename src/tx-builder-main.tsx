import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import TxBuilder from "./TxBuilder";

createRoot(document.getElementById("tx-root")!).render(
    <StrictMode>
        <TxBuilder />
    </StrictMode>
);
