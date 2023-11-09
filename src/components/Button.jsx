const Button = ({ label, iconURL }) => {
  return (
    <button
      className="flex items-center justify-center gap-2 px-7 py-4 border font-montserrat
    rounded-full leading-none bg-coral-red border-coral-red text-white"
    >
      {label}
      <img
        src={iconURL}
        alt="arrow right icon"
        className=" rounded-full w-5 h-5 ml-2 "
      />
    </button>
  );
};

export default Button;
