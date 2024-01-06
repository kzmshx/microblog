"use client";

import MenuButtonGroup from "@/app/image-gallery/components/MenuButtonGroup";
import MenuButton from "@/app/image-gallery/components/MenuButton";
import SearchBar from "@/app/image-gallery/components/SearchBar";
import Button from "@/app/image-gallery/components/Button";
import ArtworkGrid from "@/app/image-gallery/components/ArtworkGrid";
import ArtworkItem from "@/app/image-gallery/components/ArtworkItem";
import { Artwork } from "@/app/image-gallery/types";
import { useMemo, useState } from "react";

type Props = {
  artworks: Artwork[];
};

export default function ImageGallery({ artworks }: Props) {
  const [filterQuery, setFilterQuery] = useState("");

  const handleSearch = (q: string) => {
    setFilterQuery(q);
  };

  const handleBookmarkClick = (artwork: Artwork) => {
    alert(`Bookmark clicked: "${artwork.title}"`);
  };

  const filteredArtworks = useMemo(() => {
    return artworks.filter((artwork) => {
      return artwork.title.toLowerCase().includes(filterQuery.toLowerCase());
    });
  }, [artworks, filterQuery]);

  return (
    <div className="m-3 space-y-10 rounded-3xl bg-white p-6 shadow-2xl md:p-40">
      <MenuButtonGroup>
        <MenuButton text="Vector" url="#" />
        <MenuButton text="Illustrations" url="#" />
        <MenuButton text="Images" url="#" />
        <MenuButton text="Icons" url="#" />
      </MenuButtonGroup>
      <div className="flex flex-col justify-between space-y-5 md:flex-row md:space-y-0">
        <SearchBar onSearch={handleSearch} />
        <Button onClick={() => alert(`Upload clicked`)}>Upload</Button>
      </div>
      <ArtworkGrid>
        {filteredArtworks.map((artwork) => (
          <ArtworkItem artwork={artwork} onBookmarkClick={handleBookmarkClick} />
        ))}
      </ArtworkGrid>
    </div>
  );
}
