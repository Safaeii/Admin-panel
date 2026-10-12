
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import "./index.css";

import Router from "./Router";

import { TransactionProvider } from "./context/TransactionContext";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <TransactionProvider>
      <Router />
    </TransactionProvider>
  </StrictMode>
);

