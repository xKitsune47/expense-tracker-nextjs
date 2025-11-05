import React from "react";

type Props = {
  type: "submit" | "reset" | "button";
  text: string;
  disabled?: boolean;
};

const StyledButton = ({ type, text, disabled = false }: Props) => {
  return (
    <button
      type={type}
      className="w-sm p-2 rounded-full bg-purple-300"
      disabled={disabled}>
      {text}
    </button>
  );
};

export default StyledButton;
