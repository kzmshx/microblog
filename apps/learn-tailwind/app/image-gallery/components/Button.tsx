type Props = {
  children: React.ReactNode;
  onClick: () => void;
};

export default function Button({ children, onClick }: Props) {
  return (
    <button
      className="rounded-md border border-black bg-black px-14 py-3 text-lg font-normal text-white shadow-2xl duration-200 hover:bg-white hover:text-black"
      type="button"
      onClick={onClick}
    >
      {children}
    </button>
  );
}
