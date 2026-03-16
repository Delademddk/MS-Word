import tick from "../../../assets/tick.svg";


export default function ChecklistGenerated() {
  return (
    <div className="p-4">
      <div className="flex flex-col items-center mt-1">
        <img className="h-3 w-4 mb-1" src={tick} alt="Grgeen tick" />
        <p className="text-sm font-bold text-[#6B7280]">10/10 Completed</p>
        <div className="h-1.5 rounded w-42 my-1 bg-[#6657FF]"></div>
        <h3 className="text-sm font-semibold text-[#111827]">
          Compliance Checklist Generated
        </h3>
        <p className="text-xs font-bold my-1 text-[#6B7280]">
          RFP analysis done.
        </p>
      </div>
    </div>
  );
}
