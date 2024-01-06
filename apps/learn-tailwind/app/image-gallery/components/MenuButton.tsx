type Props = {
  text: string;
  url: string;
};

export default function MenuButton({ text, url }: Props) {
  return (
    <div className="group">
      <a href={url}>{text}</a>
      <div className="mx-2 mt-2 border-b-2 border-black opacity-0 duration-500 group-hover:opacity-100"></div>
    </div>
  );
}
