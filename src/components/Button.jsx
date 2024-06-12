const Button = ({ label, backgroundColor, textColor, borderColor }) => {
  return (
    <button
      className={`text-md font-open-sans tracking-wide font-normal px-6 py-3 rounded-md ${
        backgroundColor
          ? `${backgroundColor} ${textColor} ${borderColor}`
          : "bg-transparent border-[#00df9a]"
      }`}
    >
      {label}
    </button>
  );
};

export default Button;
