import type { PageKeys } from "../utils/types";

type Props = {
  selectedFlow: PageKeys;
  setSelectedFlow: (flow: PageKeys) => void;
};

export default function Menu({ selectedFlow, setSelectedFlow }: Props) {
  const menuItems: PageKeys[] = [
    "Upload",
    "Checklist",
    "Flags",
    "Date",
    "Score",
  ];

  return (
    <div className="absolute top-9 right-3 bg-white rounded-xl p-3 shadow-xl flex flex-col items-center z-10">
      {menuItems.map((item) => (
        <button
          key={item}
          onClick={() => setSelectedFlow(item)}
          className={`w-22.5 h-9.5 py-3 text-[#64748b] text-sm font-medium transition-colors flex items-center justify-center ${
            selectedFlow === item
              ? "bg-[#8E82FF] text-white rounded-lg"
              : "hover:bg-[#EBE9FF] rounded-lg"
          }`}
        >
          {item}
        </button>
      ))}
    </div>
  );
}