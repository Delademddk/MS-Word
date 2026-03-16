import Tag from "../../components/Tag";
import type { Variant } from "../../utils/types";
import dangerIcon from "../../assets/danger-icon.svg";
import commentIcon from "../../assets/comment-icon.svg";
import tick from "../../assets/tick.svg";

interface Issue {
  title: string;
  description: string;
  risk: string;
  category: "Ambiguous" | "Missing" | "Clarification";
  src: string;
  alt: string;
  resolve: boolean;
}


export default function RfpFlagPage() {
  const issues: Issue[] = [
    {
      title: "Section 4.2 - Performance Metrics",
      description: '"demonstrate adequate technical capacity"',
      risk: "Risk: Criteria not specific enough for objective evaluation",
      category: "Ambiguous",
      src: tick,
      alt: "Tick Icon",
      resolve: false,
    },
    {
      title: "Section 7.1 - Insurance Requirements",
      description: "No mention of cyber liability insurance",
      risk: "Risk: Potential gap in required coverage",
      category: "Missing",
      src: dangerIcon,
      alt: "Danger Icon",
      resolve: true,
    },
    {
      title: "Section 2.3 - Submission Format",
      description: "Conflicting instructions on page limits",
      risk: "Risk: May lead to non-compliant submissions",
      category: "Clarification",
      src: tick,
      alt: "Tick Icon",
      resolve: false,
    },
  ];
  const getTagVariant = (category: string): Variant => {
    switch (category) {
      case "Ambiguous":
        return "warning";
      case "Missing":
        return "danger";
      case "Clarification":
        return "primary";
      default:
        return "primary";
    }
  };

  return (
    <div className="p-4 ">
      <h2 className="text-sm font-semibold">Flagged Issues</h2>
      <p className="text-[12px] text-[#6B7280]">3 items require attention</p>
      {issues.map((issue) => (
        <div
          className={`rounded-xl mb-3 p-3 ${issue.category === "Ambiguous" ? "bg-[#FFFBEB]" : issue.category === "Missing" ? "bg-[#FEF2F2]" : issue.category === "Clarification" ? "bg-[#EFF6FF]" : "bg-[#f3fcf7]"}`}
        >
          <div className="flex justify-between mb-3">
            <Tag
              label={issue.category}
              variant={getTagVariant(issue.category)}
            />
            <img className="w-4.5 h-4" src={issue.src} alt={issue.alt} />
          </div>

          <h4 className="text-xs font-medium text-[#111827]">{issue.title}</h4>
          <p className="text-[10px] text-[#4B5563]">{issue.description}</p>
          <p className="text-[10px] text-[#6B7280] mb-3 mt-2.5">{issue.risk}</p>

          <div className="flex items-center gap-4 ">
            <div className="flex w-20.5 justify-between ">
              <img className="w-4 h-4" src={commentIcon} alt="Comment Icon" />
              <p className="text-[#8E8E8E] text-[10px] underline">
                Add Comment
              </p>
            </div>
            <div>
              {issue.resolve && (
                <button className="text-[10px] bg-[#6657FF] text-white w-24.5 h-4.5 rounded cursor-pointer">
                  Mark as Resolved
                </button>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
