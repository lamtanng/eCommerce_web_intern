import { Box, CardMedia, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import ImageDefault from '../../../assets/product_default.jpg';
import { ProductCardImageProps } from '../../../types/cardImage.type';
import { getProductUrl } from '../../../ultils/getProductUrl';

export default function ProductCardImage({
  selectedFile = undefined,
  oldPicture = undefined,
  height,
  width = '100%',
  url,
  discountPercentage,
  alt = 'Product Image',
}: ProductCardImageProps) {
  const getDefaultImage = () => {
    if (oldPicture) {
      return `http://${oldPicture}`;
    }
    if (selectedFile) {
      return URL.createObjectURL(selectedFile);
    } else {
      return ImageDefault;
    }
  };

  const productUrl = getProductUrl(url ? url : '');

  return (
    <Link to={productUrl} className={`relative w-full h-[${height}px] w-[${width}px] overflow-hidden`}>
      <CardMedia
        width={width}
        height={height}
        component="img"
        className={`h-[${height}px] w-[${width}px] transform object-cover object-top transition-transform duration-200 ease-in-out hover:scale-125`}
        alt={alt}
        image={getDefaultImage()}
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
    </Link>
  );
}
