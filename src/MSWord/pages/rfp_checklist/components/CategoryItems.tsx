import Tag from "../../../../components/Tag";
import type { Variant } from "../../../../utils/types";

type Categories = {
  title: string;
  description: string;
  category: "Required" | "Advised" | "Conditional";
  checked?: boolean;
};

export default function CategoryItems() {
  const categories: Categories[] = [
    {
      title: "Provide company registration details",
      description:
        "Include your company’s full legal name, registration number, and date of incorporation.",
      category: "Required",
    },
    {
      title: "Submit Organizational chart of key personnel",
      description:
        "Include your company’s full legal name, registration number, and date of incorporation.",
      category: "Advised",
    },
    {
      title: "Detail proposed technical solution",
      description:
        "Include your company’s full legal name, registration number, and date of incorporation.",
      category: "Conditional",
    },
  ];

  const categoryVariantMap = (category: string): Variant => {
    switch (category) {
      case "Required":
        return "primary";
      case "Advised":
        return "success";
      case "Conditional":
        return "warning";
      default:
        return "danger";
    }
  };

  return (
    <div className="w-81.5 px-3 space-y-1.5 mt-1.5">
      {categories.map((item) => (
        <div className="flex items-start gap-1   ">
          <input checked className="mt-0.5" type="checkbox" />
          <div>
            <h2 className="text-xs font-bold">{item.title}</h2>
            <p className="text-[11px] text-[#6B7280]">{item.description}</p>
            <Tag
              label={item.category}
              variant={categoryVariantMap(item.category)}
            />
          </div>
        </div>
      ))}
    </div>
  );
}
