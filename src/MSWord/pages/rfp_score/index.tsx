import { useState } from "react";
import ScoreProposal from "./ScoreProposal";
import ProposalCompleted from "./ProposalCompleted";

export default function ScoreFlow() {
  const [currentStep, setCurrentStep] = useState(1);

  const returnScoreStep = () => {
    switch (currentStep) {
      case 1:
        return <ScoreProposal onUpload={() => setCurrentStep(2)} />;
      case 2:
        return <ProposalCompleted />;
      default:
        return <ScoreProposal onUpload={() => setCurrentStep(2)} />;
    }
  };

  return <div>{returnScoreStep()}</div>;
}
