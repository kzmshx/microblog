export default function BottomButtonGroup({ children }: { children: React.ReactNode }) {
  return <div className="flex flex-col space-y-4 md:flex-row md:space-x-4 md:space-y-0">{children}</div>;
}
