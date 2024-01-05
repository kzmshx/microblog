export default function BottomButton({ text, icon, onClick }: { text: string; icon: string; onClick: () => void }) {
  return (
    <button
      className="flex items-center justify-center space-x-3 rounded-lg border-2 border-gray-300 px-5 py-3 shadow-sm transition-all duration-100 hover:-translate-y-0.5 hover:border-opacity-30 hover:shadow-lg"
      onClick={onClick}
    >
      <img src={icon} alt="" className="w-8" />
      <span>{text}</span>
    </button>
  );
}
