export default function MainButton({ text, onClick }: { text: string; onClick: () => void }) {
  return (
    <div className="group">
      <button className="w-full rounded-lg border-b-8 border-b-blue-700 bg-blue-700 text-white transition-all duration-100 group-hover:border-b-0 group-hover:border-t-8 group-hover:border-t-blue-700 group-hover:bg-blue-700 group-hover:shadow-lg">
        <div className="rounded-lg bg-blue-500 px-8 py-4 duration-100 group-hover:bg-blue-700" onClick={onClick}>
          {text}
        </div>
      </button>
    </div>
  );
}
