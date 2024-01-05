export default function StockInfo({ stockQuantity }: { stockQuantity: number }) {
  let stockQuantityText: string;
  if (stockQuantity > 50) {
    stockQuantityText = `50+ pcs. in stock`;
  } else if (stockQuantity > 0) {
    stockQuantityText = `${stockQuantity} pcs. in stock`;
  } else {
    stockQuantityText = "Out of stock";
  }

  return (
    <div className="group flex items-center space-x-3">
      <div className="h-3 w-3 rounded-full bg-green-400 group-hover:animate-ping"></div>
      <div className="text-sm">{stockQuantityText}</div>
    </div>
  );
}
