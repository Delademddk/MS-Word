import TimelineItem from "../../components/TimelineItem";
import type { TimelineStatus } from "../../utils/types";

type TimelineEvent = {
  date: string;
  title: string;
  description: string;
  status: TimelineStatus;
  showReminder: boolean;
};

export default function RfpDatePage() {
  const timelineEvents: TimelineEvent[] = [
    {
      date: "Jan 15, 2026",
      title: "RFP Release",
      description: "Official RFP document published",
      status: "active",
      showReminder: true,
    },
    {
      date: "Feb 1, 2026",
      title: "Questions Due",
      description: "Last day to submit clarification questions",
      status: "upcoming",
      showReminder: true,
    },
    {
      date: "Feb 10, 2026",
      title: "Answers Posted",
      description: "Responses to questions published",
      status: "completed",
      showReminder: false,
    },
    {
      date: "Feb 28, 2026",
      title: "Proposal Due",
      description: "Submission deadline by 5:00 PM EST",
      status: "completed",
      showReminder: false,
    },
    {
      date: "Mar 15, 2026",
      title: "Award Notification",
      description: "Expected vendor selection announcement",
      status: "completed",
      showReminder: false,
    },
  ];

  return (
    <div className="p-4">
      <h2 className="text-sm font-semibold">Key Dates</h2>
      <p className="text-[12px] text-[#6B7280]">Important RFP milestones</p>

      <div className="mt-4 ml-2">
        {timelineEvents.map((event) => (
          <TimelineItem
            date={event.date}
            title={event.title}
            description={event.description}
            status={event.status}
            showReminder={event.showReminder}
          />
        ))}
      </div>
    </div>
  );
}
