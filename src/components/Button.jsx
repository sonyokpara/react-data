const Button = ({
  label,
  backgroundColor,
  textColor,
  borderColor,
  fullWidth,
}) => {
  return (
    <button
      className={`text-md font-open-sans tracking-wide font-normal px-6 py-3 rounded-full ${
        fullWidth && "w-full"
      } ${
        backgroundColor
          ? `${backgroundColor} ${textColor} ${
              borderColor ? `border ${borderColor}` : ""
            } hover:shadow-lg transition-all duration-300`
          : "bg-transparent text-white hover:text-primary transition-all duration-300"
      }`}
    >
      {label}
    </button>
  );
};

export default Button;
