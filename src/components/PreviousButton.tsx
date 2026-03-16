interface PreviousButtonProps {
  onClick: () => void;
}

export default function PreviousButton({ onClick }: PreviousButtonProps) {
  return <button className="cursor-pointer py-0.5 pr-0.5 text-sm text-gray-950" onClick={onClick}>Back</button>;
}
