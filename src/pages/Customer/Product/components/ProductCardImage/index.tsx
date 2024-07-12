import { Box, Typography } from '@mui/material';
import { NavLink } from 'react-router-dom';
import CardImage from '../../../../../components/elements/CardImage';
import { CardImageProps } from '../../../../../types/cardImage.type';

interface ProductCardImageProps extends CardImageProps {
  url: string;
  discountPercentage: number;
}

export default function ProductCardImage({
  oldPicture,
  alt,
  url,
  discountPercentage,
  height = 280,
}: ProductCardImageProps) {
  return (
    <NavLink to={`/products/${url}`} className="relative w-full">
      <CardImage alt={alt} oldPicture={oldPicture} height={height} width='100%' />
      {!!discountPercentage && (
        <Box className="flex w-full items-center justify-between px-4">
          <Typography
            variant="subtitle2"
            component="div"
            fontWeight="medium"
            className="absolute right-0 top-3 z-30 bg-green-600 px-3 py-1 italic text-white"
          >
            {discountPercentage}%
          </Typography>
        </Box>
      )}{' '}
    </NavLink>
  );
}
