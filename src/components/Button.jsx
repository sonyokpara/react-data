const Button = ({ label, backgroundColor, textColor, borderColor }) => {
  return (
    <button
      className={`text-md font-open-sans tracking-wide font-normal px-6 py-2 rounded-full ${
        backgroundColor
          ? `${backgroundColor} ${textColor} border-none hover:text-primary transition-all duration-300`
          : "bg-transparent border border-primary hover:text-primary hover:border-white transition-all duration-300"
      }`}
    >
      {label}
    </button>
  );
};

export default Button;
