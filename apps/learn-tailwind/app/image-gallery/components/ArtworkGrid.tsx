type Props = {
  children?: React.ReactNode;
};

export default function ArtworkGrid({ children }: Props) {
  return <div className="grid gap-4 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">{children}</div>;
}
