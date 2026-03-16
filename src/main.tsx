import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import MSWordApp from "./MSWord";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <div className="flex items-center justify-center min-h-screen bg-[#444444]">
      <MSWordApp />
    </div>
  </StrictMode>,
);
