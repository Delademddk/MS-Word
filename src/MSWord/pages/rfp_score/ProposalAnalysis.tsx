import BlueTick from "../../../assets/blueTick.svg";
import RightArrow from "../../../assets/rightArrow.svg";

type Breakdown = {
  title: string;
  percentage: string;
};

export default function ProposalCompleted() {
  const breakdown: Breakdown[] = [
    {
      title: "Administrative",
      percentage: "100%",
    },
    {
      title: "Technical",
      percentage: "72%",
    },
    {
      title: "Legal",
      percentage: "80%",
    },
  ];
  return (
    <div className="p-4">
      <h2 className="text-sm font-semibold text-[#111827]">
        Proposal Analysis Completed
      </h2>
      <div className="flex flex-col items-center mt-3">
        <div className="h-30 w-30 my-5.5 border-11 border-[#10B981] rounded-full flex justify-center items-center text-[28px] font-bold ">
          100%
        </div>
        <p className="text-xs text-[#6B7280]">
          48 of 48 requirements addressed
        </p>
      </div>
      <div>
        <div className="flex items-center justify-between pr-1 mb-6 mt-9">
          <h3 className="text-sm font-bold">Category Breakdown</h3>
          <p className="text-[10px] text-[#9CA3AF]">5/5</p>
        </div>
        <div>
          {breakdown.map((item) => (
            <div className="mb-5">
              <div className="flex items-center justify-between mb-2">
                <div className="flex gap-2">
                  <img
                    className=" p-1 rounded bg-[#DBEAFE]"
                    src={BlueTick}
                    alt="Blue tick"
                  />
                  <p className="text-xs text-[#374151] font-medium">
                    {item.title}{" "}
                  </p>
                </div>
                <div className="flex gap-2">
                  <p className="text-xs font-bold text-[#1F2937">
                    {item.percentage}
                  </p>
                  <img src={RightArrow} alt="Right arrow" />
                </div>
              </div>
              <div className="w-full bg-[#e0e0e0] border-8px h-1.5 rounded">
                <div
                  className={` w-[${item.percentage}] bg-[#3B82F6] h-full ${item.percentage === "100%" ? "rounded" : "rounded-l"} `}
                >
                  {" "}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
