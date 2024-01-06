type Props = {
  children: React.ReactNode;
};

export default function MenuButtonGroup({ children }: Props) {
  return (
    <div className="flex flex-col items-center justify-center space-y-3 md:mb-24 md:flex-row md:justify-end md:space-x-8 md:space-y-0">
      {children}
    </div>
  );
}
