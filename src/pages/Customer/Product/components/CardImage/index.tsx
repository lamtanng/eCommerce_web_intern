import { Box, CardMedia, Typography } from '@mui/material';
import ImageDefault from '../../../../../assets/product_default.jpg';
import Image from '../../../../../assets/Ultraboost_1.0_Shoes_White_JH9183_01_standard_hover.avif';
import { Link, NavLink } from 'react-router-dom';

interface CardImageProps {
  picture: string | undefined;
  name: string;
  url: string;
  discountPercentage: number;
  height?: number;
}

export default function CardImage({ picture, name, url, discountPercentage, height = 280 }: CardImageProps) {
  return (
    <NavLink to={`/products/${url}`} className="relative w-full">
      <CardMedia
        component="img"
        className="transform transition-transform duration-200 ease-in-out hover:scale-110"
        alt={name}
        height={height}
        width="100%"
        image={Image}
        ref={(img) => (img = img)}
        onError={(e) => (e.currentTarget.src = ImageDefault)}
      />
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
