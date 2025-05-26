type InputProps = React.InputHTMLAttributes<HTMLInputElement>;

function Input(props: InputProps) {
  return (
    <input
      {...props}
      className={`border border-gray-300 outline-none focus:border-gray-500 bg-white rounded-md px-4 py-2 ${
        props.className || ""
      }`}
    />
  );
}

export default Input;
