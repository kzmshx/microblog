type Props = {
  onClick?: (event: React.MouseEvent<HTMLImageElement, MouseEvent>) => void;
};

export default function BookmarkIcon({ onClick }: Props) {
  return <img src="/image-gallery/images/bookmark.svg" alt="bookmark" onClick={onClick} />;
}
