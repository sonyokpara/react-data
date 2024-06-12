const Button = ({ label, backgroundColor, textColor, borderColor }) => {
  return (
    <button
      className={`text-md font-open-sans tracking-wide font-normal px-6 py-2 rounded-md ${
        backgroundColor
          ? `${backgroundColor} ${textColor} border-none`
          : "bg-transparent border border-primary"
      }`}
    >
      {label}
    </button>
  );
};

export default Button;
