type InputProps = React.InputHTMLAttributes<HTMLInputElement>;

function Input(props: InputProps) {
  return (
    <input
      {...props}
      className={`border-gray-300 border bg-white focus:outline-none focus:ring-1 focus:ring-gray-400 rounded-md px-4 py-2 ${
        props.className || ""
      }`}
    />
  );
}

export default Input;
