import { Box, CardMedia, Typography } from '@mui/material';
import ImageDefault from '../../../assets/product_default.jpg';
import { ProductCardImageProps } from '../../../types/cardImage.type';
import { getProductUrl } from '../../../ultils/getProductUrl';
import { Link } from 'react-router-dom';

export default function ProductCardImage({
  selectedFile = undefined,
  oldPicture = undefined,
  height = 280,
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

  const productUrl = getProductUrl(url);

  return (
    <Link to={productUrl} className={`relative w-full`}>
      <CardMedia
        component="img"
        width={width}
        height={height}
        className="transform object-cover object-top transition-transform duration-200 ease-in-out hover:scale-110"
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
