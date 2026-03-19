import tick from "../../../assets/tick.svg";
import RequirementItems from "./components/RequirementItems";

export default function ChecklistGenerated() {
  return (
    <div>
      <div className="p-4">
        <div className="flex flex-col items-center mt-1">
          <img className="h-3 w-4 mb-1" src={tick} alt="Grgeen tick" />
          <p className="text-sm font-bold text-[#6B7280]">9/10 Completed</p>
          <div className="w-full bg-[#e0e0e0] border-8px h-1.5 rounded">
            <div className="w-[90%] bg-[#6657FF] h-full rounded "> </div>
          </div>
          <h3 className="text-sm font-semibold text-[#111827]">
            Compliance Checklist Generated
          </h3>
          <p className="text-xs font-bold my-1 text-[#6B7280]">
            RFP analysis done.
          </p>
        </div>
      </div>
      <RequirementItems />
    </div>
  );
}
