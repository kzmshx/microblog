export default function ProductImage({ src, alt }: { src: string; alt: string }) {
  return <img src={src} alt={alt} className="mx-auto w-60 duration-200 hover:scale-105" />;
}
