import { useFormContext } from "react-hook-form";

const Input = ({
  name,
  label,
  type = "text",
  placeholder = "",
  className = "",
  inputClassName = "",
}) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  const error = errors?.[name]?.message;

  return (
    <div className={`flex flex-col gap-1 ${className}`}>
      {label && (
        <label className="text-sm font-medium text-gray-700">
          {label}
        </label>
      )}

      <input
        type={type}
        placeholder={placeholder}
        {...register(name)}
        className={`rounded-md border px-3 py-2 text-sm focus:outline-none focus:ring-2
          ${error ? "border-red-500 focus:ring-red-300" : "border-gray-300 focus:ring-indigo-300"}
          ${inputClassName}
        `}
      />

      {error && (
        <span className="text-xs text-red-500">{error}</span>
      )}
    </div>
  );
};

export default Input;
