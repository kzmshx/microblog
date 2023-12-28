interface ButtonProps {
  label: string;
  primary?: boolean;
  onClick: () => void;
}

const Button: React.FC<ButtonProps> = ({ label, primary, onClick }) => {
  const style = primary ? { backgroundColor: "blue", color: "white" } : { backgroundColor: "white", color: "black" };
  return (
    <button style={style} onClick={onClick}>
      {label}
    </button>
  );
};

export default Button;
