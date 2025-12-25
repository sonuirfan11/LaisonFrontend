const FormRow = ({ children, cols = 2 }) => {
  const colsClass =
    cols === 1
      ? "md:grid-cols-1"
      : cols === 2
      ? "md:grid-cols-2"
      : cols === 3
      ? "md:grid-cols-3"
      : "md:grid-cols-2";

  return (
    <div className={`grid grid-cols-1 ${colsClass} gap-4`}>
      {children}
    </div>
  );
};

export default FormRow;

