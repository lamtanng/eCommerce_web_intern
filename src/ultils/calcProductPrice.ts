import { ProductPriceProps } from '../pages/Customer/components/ProductPrice';

export function calculateDiscountedPrice({ basePrice, discountPercentage }: ProductPriceProps) {
  const discountedPrice = !!discountPercentage && basePrice - (basePrice * discountPercentage) / 100;
  return discountedPrice;
}
