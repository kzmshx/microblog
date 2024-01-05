export default function ProductLabel({ title, color }: { title: string; color: "black" }) {
  return <div className={`inline-block rounded-full bg-black px-3 py-1 text-sm text-white`}>{title}</div>;
}
