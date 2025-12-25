import { useFormContext } from "react-hook-form";

const TextArea = ({ name, label, rows = 3 }) => {
  const { register } = useFormContext();

  return (
    <div className="flex flex-col gap-1">
      {label && <label className="text-sm font-medium">{label}</label>}
      <textarea
        rows={rows}
        {...register(name)}
        className="rounded-md border border-gray-300 px-3 py-2 text-sm"
      />
    </div>
  );
};

export default TextArea;
