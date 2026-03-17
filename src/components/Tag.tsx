import React from "react";
import type { Variant } from "../utils/types";

interface TagProps {
  label: string;
  variant?: Variant;
}

const Tag: React.FC<TagProps> = ({ label, variant = "primary" }) => {
  const variantStyles: Record<
    string,
    { backgroundColor: string; color: string }
  > = {
    warning: {
      backgroundColor: "#fef3c7",
      color: "#a16207",
    },
    danger: {
      backgroundColor: "#FECACA",
      color: "#b91c1c",
    },
    primary: {
      backgroundColor: "#BFDBFE",
      color: "#1E40AF",
    },
    success: {
      backgroundColor: "#DCFCE7",
      color: "#15803D",
    },
  };

  const style = variantStyles[variant];

  return (
    <span
      style={{
        display: "inline-block",
        padding: "2px 8px",
        borderRadius: "4px",
        fontSize: "10px",
        fontWeight: "500",
        ...style,
      }}
    >
      {label}
    </span>
  );
};

export default Tag;
