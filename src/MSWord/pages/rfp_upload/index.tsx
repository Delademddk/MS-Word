import { useState } from "react";
import UploadScreen from "./UploadScreen";
import UploadedCard from "./UploadCard";

interface Props {
  onNavigateToChecklist: () => void;
}

type UploadData = {
  file: File;
  status: "warning" | "success" | "danger";
  message: string;
};

export default function UploadFlow({ onNavigateToChecklist }: Props) {
  const [currentStep, setCurrentStep] = useState(1);
  const [uploadData, setUploadData] = useState<UploadData | null>(null);

  const goToCompliance = (data: UploadData) => {
    setUploadData(data);
    setCurrentStep(2);
  };

  const formatFileSize = (bytes: number) => {
    return (bytes / (1024 * 1024)).toFixed(1) + " MB";
  };

  const goBack = () => {
    setCurrentStep(1);
  };

  const handleGenerateChecklist = () => {
    onNavigateToChecklist();
  };

  const returnUploadsStep = () => {
    switch (currentStep) {
      case 1:
        return <UploadScreen goToCompliance={goToCompliance} />;

      case 2:
        if (!uploadData) return null;

        return (
          <UploadedCard
            fileName={uploadData.file.name}
            fileSize={formatFileSize(uploadData.file.size)}
            status={uploadData.status}
            message={uploadData.message}
            goBack={goBack}
            generateChecklist={handleGenerateChecklist}
          />
        );

      default:
        return <UploadScreen goToCompliance={goToCompliance} />;
    }
  };

  return <div className="flex justify-center">{returnUploadsStep()}</div>;
}
