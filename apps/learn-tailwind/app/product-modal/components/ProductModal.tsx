"use client";

import BottomButtonGroup from "@/app/product-modal/components/BottomButtonGroup";
import BottomButton from "@/app/product-modal/components/BottomButton";
import MainButton from "@/app/product-modal/components/MainButton";
import StockInfo from "@/app/product-modal/components/StockInfo";
import PriceInfo from "@/app/product-modal/components/PriceInfo";
import ProductTitle from "@/app/product-modal/components/ProductTitle";
import ProductLabelList from "@/app/product-modal/components/ProductLabelList";
import ProductLabel from "@/app/product-modal/components/ProductLabel";
import ProductImage from "@/app/product-modal/components/ProductImage";
import { Product } from "@/app/product-modal/types";

export default function ProductModal({ product }: { product: Product }) {
  return (
    <div className="m-3 flex flex-col space-y-10 rounded-2xl bg-white p-6 shadow-2xl md:m-0 md:flex-row md:space-x-10 md:space-y-0 md:p-16">
      <div>
        <ProductImage src={product.url} alt={product.title} />
      </div>
      <div className="flex flex-col space-y-6">
        <div className="mb-4 flex flex-col space-y-3 text-center md:text-left">
          <ProductLabelList>
            {product.freeShipping && <ProductLabel title="Free Shipping" color="black" />}
          </ProductLabelList>
          <ProductTitle title={product.title} />
          <PriceInfo product={product} />
          <MainButton text="Add to cart" onClick={() => alert(`Added '${product.title}' to cart!`)} />
          <StockInfo stockQuantity={product.stockQuantity} />
          <BottomButtonGroup>
            <BottomButton
              text="Add to cart"
              icon="/product-modal/images/weight.png"
              onClick={() => alert(`Added '${product.title}' to cart!`)}
            />
            <BottomButton
              text="Add to wishlist"
              icon="/product-modal/images/heart.png"
              onClick={() => alert(`Added '${product.title}' to wishlist!`)}
            />
          </BottomButtonGroup>
        </div>
      </div>
    </div>
  );
}
