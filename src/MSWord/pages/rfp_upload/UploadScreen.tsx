import { useState, useEffect } from "react";
import Button from "../../../components/Button";
import Document from "../../../assets/document-icon.jpg";
import DownloadIcon from "../../../assets/download-icon.png";

type Props = {
  goToCompliance: (data: {
    file: File;
    status: "warning" | "success" | "danger";
    message: string;
  }) => void;
  
};

export default function UploadScreen({ goToCompliance }: Props) {
  const [file, setFile] = useState<File | null>(null);
  const [dragActive, setDragActive] = useState(false);

  const MAX_SIZE = 1 * 1024 * 1024; // 10MB

  // Prevent browser from opening dropped files
  useEffect(() => {
    const preventDefaults = (e: DragEvent) => {
      e.preventDefault();
      e.stopPropagation();
    };

    window.addEventListener("dragover", preventDefaults);
    window.addEventListener("drop", preventDefaults);

    return () => {
      window.removeEventListener("dragover", preventDefaults);
      window.removeEventListener("drop", preventDefaults);
    };
  }, []);

  const handleDragEnter = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setDragActive(true);
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setDragActive(true);
  };

  const handleDragLeave = () => {
    setDragActive(false);
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setDragActive(false);

    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      setFile(e.dataTransfer.files[0]);
    }
  };

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
    }
  };

  const processFile = (selectedFile: File) => {
    if (selectedFile.size > MAX_SIZE) {
      goToCompliance({
        file: selectedFile,
        status: "danger",
        message: "File too large (max 10MB)",
      });
      return;
    }

    goToCompliance({
      file: selectedFile,
      status: "warning",
      message: "Uploading",
    });

    setTimeout(() => {
      goToCompliance({
        file: selectedFile,
        status: "success",
        message: "Success",
      });
    }, 2000);
  };

  return (
    <div className="flex flex-col items-center px-4 mt-10 grow">
      <img className="w-51.25 h-25.75" src={Document} alt="Document" />

      <h2 className="text-lg text-[#333333] font-bold text-center mb-2">
        Upload RFP document
      </h2>

      <p className="text-sm text-[#6B7280] text-center mb-6">
        Transform your Request for Proposal into an actionable compliance matrix instantly.
      </p>

      <div className="flex flex-col items-center">
        <div
          className={`w-80 h-30.5 border-2 border-dashed rounded-lg flex flex-col items-center justify-center gap-2 p-3 transition
          ${dragActive ? "border-[#6657FF] bg-purple-50" : "border-gray-300"}`}
          onDragEnter={handleDragEnter}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
        >
          <div className="w-10 h-10 border border-gray-300 rounded-md flex items-center justify-center">
            <img className="h-3.25 w-5" src={DownloadIcon} alt="Download Icon" />
          </div>

          <div className="text-center text-xs">
            <p className="text-[#6B7280]">
              Drag and drop your RFP here or
            </p>

            <label className="text-[#6657FF] font-semibold cursor-pointer">
              Choose file
              <input
                type="file"
                accept=".pdf,.doc,.docx"
                onChange={handleFileSelect}
                className="hidden"
              />
            </label>
          </div>
        </div>

        {file && (
          <p className="text-sm text-green-600 mt-3">
            Selected: {file.name}
          </p>
        )}

        <Button
          onClick={() => file && processFile(file)}
          text="Upload RFP"
          className={`h-11 mt-4 ${
            file ? "bg-[#6657FF]" : "bg-gray-400 cursor-not-allowed"
          }`}
        />

        <p className="text-xs text-[#9CA3AF] mt-8 mb-9">
          Supported formats: PDF, DOCX, DOC
        </p>
      </div>
    </div>
  );
}