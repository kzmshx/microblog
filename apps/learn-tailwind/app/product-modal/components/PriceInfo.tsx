import { format } from "date-fns";
import { Product } from "@/app/product-modal/types";

export default function PriceInfo({ product }: { product: Product }) {
  const priceStr = `$${product.price}`;
  const isDiscounted =
    product.stockQuantity > 0 &&
    product.discountPrice !== null &&
    product.discountEndDate &&
    new Date(product.discountEndDate) > new Date();

  if (!isDiscounted) {
    return (
      <div className="mb-4 flex flex-col space-y-3 text-center md:text-left">
        <p className="text-5xl font-bold">{priceStr}</p>
      </div>
    );
  }

  const discountPriceStr = `$${product.discountPrice}`;
  const discountEndDateString = format(product.discountEndDate!, "MMM d, yyyy");
  const discountEndDateCaution = `This price is valid until ${discountEndDateString} or as long as stock lasts!`;

  return (
    <div className="mb-4 flex flex-col space-y-3 text-center md:text-left">
      <p className="line-through">{priceStr}</p>
      <p className="text-5xl font-bold">{discountPriceStr}</p>
      <p className="text-sm font-light text-gray-400">{discountEndDateCaution}</p>
    </div>
  );
}
