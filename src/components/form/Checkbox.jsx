import { useFormContext } from "react-hook-form";

const Checkbox = ({ name, label }) => {
  const { register } = useFormContext();

  return (
    <label className="flex items-center gap-2 text-sm">
      <input type="checkbox" {...register(name)} />
      {label}
    </label>
  );
};

export default Checkbox;
