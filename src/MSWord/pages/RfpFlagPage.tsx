import Tag from "../../components/Tag";
import type { Variant } from "../../utils/types";
import dangerIcon from "../../assets/danger-icon.svg";
import commentIcon from "../../assets/comment-icon.svg";
import tick from "../../assets/tick.svg";
import {
  addFlaggedIssue,
  deleteAllFlaggedIssues,
  deleteFlaggedIssue,
  editFlaggedIssue,
} from "../../api/flagIssueController";
import { getFlaggedIssues } from "../../api/flagIssueController";
import { useEffect, useState } from "react";
import { faker } from "@faker-js/faker";

export interface Issue {
  id?: string;
  title: string;
  description: string;
  risk: string;
  category: "Ambiguous" | "Missing" | "Clarification";
  resolve: boolean;
}

export default function RfpFlagPage() {
  const [flaggedIsssues, setFlaggedIsssues] = useState<Issue[]>([]);
  const [selectedIssueId, setSelectedIssueId] = useState<string | null>(null);

  useEffect(() => {
    async function loadIssues() {
      const data = await getFlaggedIssues();
      setFlaggedIsssues(data);
    }
    loadIssues();
  }, []);

  async function handleAddFlaggedIssues() {
    await addFlaggedIssue({
      title: faker.book.title(),
      description: faker.lorem.sentence(6),
      risk: `Risk: ${faker.lorem.sentence(5)}`,
      category: faker.helpers.arrayElement([
        "Ambiguous",
        "Missing",
        "Clarification",
      ]),
      resolve: faker.datatype.boolean(),
    });
    const updated = await getFlaggedIssues();
    setFlaggedIsssues(updated);
  }

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
      <p className="text-[12px] text-[#6B7280]">
        {flaggedIsssues.length} items require attention
      </p>
      <div className="flex gap-3">
        <button onClick={handleAddFlaggedIssues}>Add</button>
        <button
          onClick={async () => {
            if (!selectedIssueId) return;
            const issue = flaggedIsssues.find(
              (issue) => issue.id === selectedIssueId,
            );
            if (!issue) return;
            const title = prompt("Edit title", issue.title);
            if (title === null) return;
            const description = prompt("Edit description", issue.description);
            if (description === null) return;
            const risk = prompt("Edit risk", issue.risk);
            if (risk === null) return;
            const category = prompt(
              "Edit category (Ambiguous, Missing, Clarification)",
              issue.category,
            );
            if (category === null) return;
            const updatedIssue = {
              ...issue,
              title,
              description,
              risk,
              category: category as "Ambiguous" | "Missing" | "Clarification",
            };
            editFlaggedIssue(updatedIssue);
            const updated = await getFlaggedIssues();
            setFlaggedIsssues(updated);
            setSelectedIssueId(null);
          }}
        >
          Edit
        </button>
        <button
          onClick={async () => {
            if (!selectedIssueId) return;
            await deleteFlaggedIssue(selectedIssueId);

            const updated = await getFlaggedIssues();
            setFlaggedIsssues(updated);
            setSelectedIssueId(null);
          }}
        >
          Delete
        </button>
        <button
          onClick={async () => {
            deleteAllFlaggedIssues();
            setFlaggedIsssues([]);
          }}
        >
          Delete All
        </button>
      </div>
      {flaggedIsssues.map((issue) => (
        <div
          key={issue.id}
          onClick={() => setSelectedIssueId(issue.id || null)}
          className={`rounded-xl mb-3 p-3 cursor-pointer transition-all ${selectedIssueId === issue.id ? "border-2 border-[#6657FF]" : ""} ${issue.category === "Ambiguous" ? "bg-[#FFFBEB]" : issue.category === "Missing" ? "bg-[#FEF2F2]" : issue.category === "Clarification" ? "bg-[#EFF6FF]" : "bg-[#f3fcf7]"}`}
        >
          <div className="flex justify-between mb-3">
            <Tag
              label={issue.category}
              variant={getTagVariant(issue.category)}
            />
            <img
              className="w-4.5 h-4"
              src={issue.category === "Missing" ? dangerIcon : tick}
              alt={issue.category === "Missing" ? "Danger icon" : "Tick icon"}
            />
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
