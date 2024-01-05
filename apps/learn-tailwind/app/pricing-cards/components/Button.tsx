export default function Button({ children, emphasis }: { children: React.ReactNode; emphasis?: boolean }) {
  return (
    <button
      className={`my-6 inline-block rounded-lg border border-violet-600 px-10 py-3 text-center duration-200 hover:border-violet-800 hover:bg-violet-800 ${
        emphasis && "bg-violet-600"
      }`}
    >
      {children}
    </button>
  );
}
