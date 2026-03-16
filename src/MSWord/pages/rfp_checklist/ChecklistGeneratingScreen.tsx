import { useEffect } from "react";

interface Props {
  goNext: () => void;
}

export default function ChecklistGeneratingScreen({ goNext }: Props) {
  useEffect(() => {
    const timer = setTimeout(() => {
      goNext();
    }, 2000);

    return () => clearTimeout(timer);
  }, [goNext]);

  return (
    <div className="p-4">
      <div className="flex flex-col items-center pt-4">
        <div className="w-10 h-10 border-2 border-gray-300 border-t-[#6657FF] rounded-full animate-spin"></div>

        <h2 className="text-sm font-semibold text-[#111827] mt-5">
          Generating Compliance Checklist
        </h2>

        <p className="text-xs text-[#6B7280] mb-7">
          Analyzing RFP requirements...
        </p>

        <div className="w-full p-4 max-w-xl space-y-6 animate-pulse">
          <div className="flex items-center justify-between">
            <div className="h-3.5 w-36 bg-gray-300 rounded"></div>
            <div className="h-3.5 w-12 bg-gray-300 rounded"></div>
          </div>

          <div className="space-y-2">
            <div className="h-2.5 bg-gray-200 rounded w-[80%]"></div>
            <div className="h-2.5 bg-gray-200 rounded w-[60%]"></div>
            <div className="h-2.5 bg-gray-200 rounded w-[40%]"></div>
          </div>

          <div className="flex items-center justify-between">
            <div className="h-3.5 w-36 bg-gray-300 rounded"></div>
            <div className="h-3.5 w-12 bg-gray-300 rounded"></div>
          </div>

          <div className="flex items-center justify-between">
            <div className="h-3.5 w-32 bg-gray-300 rounded"></div>
            <div className="h-3.5 w-14 bg-gray-300 rounded"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
