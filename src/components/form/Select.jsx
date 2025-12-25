import { useFormContext } from "react-hook-form";

const Select = ({ name, label, options = [] }) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <div className="flex flex-col gap-1">
      {label && <label className="text-sm font-medium">{label}</label>}

      <select
        {...register(name)}
        className="rounded-md border border-gray-300 px-3 py-2 text-sm"
      >
        <option value="">Select</option>
        {options.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>

      {errors[name] && (
        <span className="text-xs text-red-500">
          {errors[name].message}
        </span>
      )}
    </div>
  );
};

export default Select;
