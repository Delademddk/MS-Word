import CategoryItems from "./CategoryItems";

type Requirements = {
  requirement: string;
};

export default function RequirementItems() {
  const requirements: Requirements[] = [
    { requirement: "Administrative Requirements" },
    { requirement: "Technical Requirements" },
    { requirement: "Pricing Requirements" },
    { requirement: "Legal Requirements" },
    { requirement: "Submission Requirements" },
    { requirement: "Evaluation Requirements" },
  ];
  return (
    <div className="w-81.5">
      {requirements.map((items) => (
        <div>
          <details>
            <summary>{items.requirement}</summary>
            {<CategoryItems />}
          </details>
        </div>
      ))}
    </div>
  );
}
