import React from "react";
import bellIcon from "../assets/bell.svg";
import type { TimelineStatus } from "../utils/types";

interface TimelineItemProps {
  date: string;
  title: string;
  description: string;
  status: TimelineStatus;
  showReminder: boolean;
}

const TimelineItem: React.FC<TimelineItemProps> = ({
  date,
  title,
  description,
  status,
  showReminder = true,
}) => {
  const DotColor = () =>
    status === "active"
      ? "bg-[#DFB400]"
      : status === "upcoming"
        ? "bg-[#F59E0B]"
        : status === "completed"
          ? "bg-[#D1D5DB]"
          : "bg-[#DFB400]";

  const DateColor = () =>
    status === "active"
      ? "text-[#333333]"
      : status === "upcoming"
        ? "text-[#333333]"
        : status === "completed"
          ? "text-[#9CA3AF]"
          : "text-[#333333]";

  const TitleColor = () =>
    status === "active"
      ? "text-[#1F2937]"
      : status === "upcoming"
        ? "text-[#1F2937]"
        : status === "completed"
          ? "text-gray-400"
          : "text-[#1F2937]";

  const DescriptionColor = () =>
    status === "active"
      ? "text-[#6B7280]"
      : status === "upcoming"
        ? "text-[#6B7280]"
        : status === "completed"
          ? "text-[#9CA3AF]"
          : "text-[#6B7280]";

  return (
    <div className="flex gap-3.5">
      <div className="flex flex-col items-center ">
        <div
          className={`w-3 h-3 rounded-full ${DotColor()} border-2 border-white  `}
        />

        <div className="w-0.5 h-18 bg-[#E5E7EB] mt-0.5" />
      </div>

      <div>
        <p className={`text-xs font-bold ${DateColor()}`}> {date} </p>

        <h3 className={`text-xs font-medium ${TitleColor()}`}> {title} </h3>

        <p className={`text-[10px]  ${DescriptionColor()}`}>{description}</p>

        {showReminder && (
          <button className="cursor-pointer mt-2">
            <div className="flex items-center gap-1 ">
              <img className="w-3 h-3.25" src={bellIcon} alt="Reminder Icon" />
              <p className="text-[10px] text-[#6B7280] ">Add Reminder</p>
            </div>
          </button>
        )}
      </div>
    </div>
  );
};

export default TimelineItem;
