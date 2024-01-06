import BookmarkIcon from "@/app/image-gallery/components/BookmarkIcon";
import { Artwork } from "@/app/image-gallery/types";

type Props = {
  artwork: Artwork;
  onBookmarkClick: (artwork: Artwork) => void;
};

export default function ArtworkItem({ artwork, onBookmarkClick }: Props) {
  const handleBookmarkClick = (e: React.MouseEvent<HTMLImageElement>) => {
    onBookmarkClick(artwork);
  };

  return (
    <div className="group relative">
      <img className="w-72" src={artwork.imageUri} alt={artwork.title} />
      <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-40 p-2 px-4 text-white opacity-0 duration-500 group-hover:opacity-100">
        <div className="flex w-full justify-between">
          <div className="font-normal">
            <p className="text-sm">{artwork.title}</p>
            <p className="text-xs">
              {artwork.likes} Likes - {artwork.shares} Shares
            </p>
          </div>
          <div className="flex items-center">
            <BookmarkIcon onClick={handleBookmarkClick} />
          </div>
        </div>
      </div>
    </div>
  );
}
