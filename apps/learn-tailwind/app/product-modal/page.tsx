import { Metadata } from "next";
import ProductModal from "@/app/product-modal/components/ProductModal";
import { product } from "@/app/product-modal/data";

export const metadata: Metadata = {
  title: "Learn Tailwind - Product Modal",
};

export default function Page() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-100">
      <ProductModal product={product} />
    </main>
  );
}
