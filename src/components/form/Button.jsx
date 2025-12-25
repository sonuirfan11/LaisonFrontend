const Button = ({
  children,
  type = "submit",
  className = "",
}) => {
  return (
    <button
      type={type}
      className={`bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
