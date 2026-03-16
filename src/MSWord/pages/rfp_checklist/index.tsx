import { useState } from "react";
import ChecklistGeneratingScreen from "./ChecklistGeneratingScreen";
import ChecklistGenerated from "./ChecklistGenerated";

export default function ChecklistFlow() {
  const [currentStep, setCurrentStep] = useState(1);

  const returnChecklistStep = () => {
    switch (currentStep) {
      case 1:
        return <ChecklistGeneratingScreen goNext={() => setCurrentStep(2)} />;
      case 2:
        return <ChecklistGenerated />;
      default:
        return <ChecklistGeneratingScreen goNext={() => setCurrentStep(2)} />;
    }
  };

  return <div className="flex justify-center">{returnChecklistStep()}</div>;
}
