import settings from "../assets/settings-icon.svg";

export default function Footer() {
  return (
    <div className="flex justify-between items-center px-4 pb-4 mt-auto">
      <span className="text-xs text-[#9CA3AF]">Last updated: 2 min ago</span>
      <button>
        <img className="w-3.25 h-3.25" src={settings} alt="Settings icon" />
      </button>
    </div>
  );
}
