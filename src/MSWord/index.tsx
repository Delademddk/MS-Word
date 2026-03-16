import { useState, useEffect } from "react";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import type { PageKeys } from "../utils/types";
import RfpFlagPage from "./pages/RfpFlagPage";
import RfpDatePage from "./pages/RfpDatePage";
import ScoreFlow from "./pages/rfp_score";
import ChecklistFlow from "./pages/rfp_checklist";
import UploadFlow from "./pages/rfp_upload";

export default function MSWordApp() {
  const [currentPage, setCurrentPage] = useState<PageKeys>(() => {
    return (localStorage.getItem("complianceStep") as PageKeys) || "Upload";
  });

  useEffect(() => {
    localStorage.setItem("complianceStep", currentPage);
  }, [currentPage]);
  const renderPage = () => {
    switch (currentPage) {
      case "Upload":
        return (
          <UploadFlow
            onNavigateToChecklist={() => setCurrentPage("Checklist")}
          />
        );
      case "Flags":
        return <RfpFlagPage />;
      case "Date":
        return <RfpDatePage />;
      case "Checklist":
        return <ChecklistFlow />;
      case "Score":
        return <ScoreFlow />;
      default:
        return (
          <UploadFlow
            onNavigateToChecklist={() => setCurrentPage("Checklist")}
          />
        );
    }
  };

  return (
    <div className="w-90 h-155 bg-[#f9fafbfd] flex flex-col relative overflow-hidden">
      <NavBar selectedFlow={currentPage} setSelectedFlow={setCurrentPage} />

      {renderPage()}

      {currentPage !== "Upload" && <Footer />}
    </div>
  );
}
