import { Stack, Typography } from '@mui/material';
import { calculateDiscountedPrice } from '../../../../ultils/calcProductPrice';

export interface ProductPriceProps {
  basePrice: number;
  discountPercentage: number;
}

export default function ProductPrice({ basePrice, discountPercentage }: ProductPriceProps) {
  const price = calculateDiscountedPrice({ basePrice, discountPercentage });
  return (
    <Stack direction="row" alignItems="center" spacing="8px">
      <Typography
        variant="body1"
        component="div"
        className={discountPercentage ? 'font-normal italic text-gray-500 line-through' : 'font-medium no-underline'}
      >
        ${basePrice}
      </Typography>
      {!!discountPercentage && (
        <Typography variant="h6" component="div" fontWeight="medium">
          ${price}
        </Typography>
      )}
    </Stack>
  );
}
