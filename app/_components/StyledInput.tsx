import React, { ChangeEventHandler } from "react";

type Props = {
  type: string;
  placeholder?: string;
  disabled?: boolean;
  value: string;
  onChange: ChangeEventHandler;
};

const StyledInput = ({
  type,
  placeholder,
  disabled = false,
  value,
  onChange,
}: Props) => {
  if (type === "checkbox") {
    return (
      <div className="flex flex-row w-sm justify-center gap-4">
        <p>test</p>
        <input
          value={value}
          onChange={onChange}
          type={type}
          placeholder={placeholder}
          disabled={disabled}
          className="border-2 border-purple-400  focus:outline-purple-600 p-2 rounded-full"
        />
      </div>
    );
  }

  return (
    <input
      value={value}
      onChange={onChange}
      type={type}
      placeholder={placeholder}
      disabled={disabled}
      className="border-2 border-purple-400  focus:outline-purple-600 p-2 rounded-full w-sm"
    />
  );
};

export default StyledInput;
