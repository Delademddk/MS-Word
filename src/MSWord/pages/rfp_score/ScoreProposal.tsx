import Whitetick from "../../../assets/whiteTick.svg";
import PDF from "../../../assets/PDF.svg";
import BlueDocument from "../../../assets/blueDocument.svg";
import Button from "../../../components/Button";

interface Props {
 
  onUpload: () => void;
}

export default function ScoreProposal({  onUpload }: Props) {
  return (
    <div className="p-4">

      <div>
        <h2 className="text-sm font-semibold text-[#111827] mb-4">
          Proposal Score
        </h2>
        <div className="w-77.75 h-57.25 p-4">
          <div className="space-y-2.5">
            <div className="flex items-center gap-2">
              <div className="flex items-center justify-center w-4 h-4 bg-green-500 rounded">
                <img src={Whitetick} alt="White tick" />
              </div>
              <p className="text-[#374151] font-medium text-sm">Draft usage</p>
            </div>

            <div className="flex items-center gap-2">
              <img src={BlueDocument} alt="Blue Document" />
              <p className="text-[#4B5563] text-xs">RFP Document.docx</p>
            </div>

            <div className="flex items-center gap-2">
              <img src={PDF} alt="Blue Document" />
              <p className="text-[#4B5563] text-xs">Technical_Appendix.pdf</p>
            </div>
          </div>

          <div className="mt-6 text-[10px] text-[#9CA3AF]">
            <p>Date analyzed: Feb 28, 2025</p>
            <p>Requirements extracted</p>
          </div>

          <div className="mt-6">
            <div className="w-full h-9 text-center py-2 bg-[#f0f0f0fd] rounded-lg text-[#059669] text-xs font-medium">
              Session Active
            </div>
          </div>
        </div>

        <p className="text-center text-[11px] text-gray-400 mt-6 mx-6">
          Your current draft proposal will automatically submitted from the open
          document.
        </p>
      </div>
      <Button
        onClick={onUpload}
        text="Score Proposal"
        className="bg-[#6657FF] h-11"
      />
    </div>
  );
}
