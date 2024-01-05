import { nextSunday } from "date-fns";
import { Product } from "@/app/product-modal/types";

const nextWeekend = nextSunday(new Date());

export const product: Product = {
  title: "Razer Kraken Kitty Edt Gaming Headset Quartz",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at ipsum eu nunc commodo posuere et sit amet ligula.",
  url: "/product-modal/images/headphone.png",
  price: 799,
  discountPrice: 599,
  discountEndDate: nextWeekend,
  freeShipping: true,
  stockQuantity: 100,
};
