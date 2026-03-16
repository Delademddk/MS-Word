import { useState } from "react";
import menuIcon from "../assets/menu-icon.svg";
import Menu from "./Menu";
import type { PageKeys } from "../utils/types";

type Props = {
  selectedFlow: PageKeys;
  setSelectedFlow: (flow: PageKeys) => void;
};

export default function NavBar({ selectedFlow, setSelectedFlow }: Props) {  const [showMenu, setShowMenu] = useState(false);

  return (
    <nav className="flex h-14.25 items-center justify-between px-4.75">
      <div>
        <h1 className="text-[#111827] text-sm font-semibold">
          RFP Compliance assistant
        </h1>
        {selectedFlow !== "Upload" && (
          <p className="text-[12px] text-[#6B7280] ">Analyze and track RFP requirements</p>
        )}
      </div>
      <div
        className="cursor-pointer p-1"
        onClick={() => setShowMenu(!showMenu)}
      >
        <img src={menuIcon} alt="Menu Icon" />
      </div>
      {showMenu && (
  <Menu
    selectedFlow={selectedFlow}
    setSelectedFlow={setSelectedFlow}
  />
)}
    </nav>
  );
}
