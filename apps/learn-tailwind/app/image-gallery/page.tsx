import { Metadata } from "next";
import ImageGallery from "@/app/image-gallery/components/ImageGallery";
import { artworks } from "@/app/image-gallery/data";

export const metadata: Metadata = {
  title: "Learn Tailwind - Image Gallery",
};

export default function Page() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-cyan-50">
      <ImageGallery artworks={artworks} />
    </main>
  );
}
