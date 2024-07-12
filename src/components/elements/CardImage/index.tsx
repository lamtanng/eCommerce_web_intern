import { CardMedia } from '@mui/material';
import ImageDefault from '../../../assets/product_default.jpg';
import { CardImageProps } from '../../../types/cardImage.type';

export default function CardImage({
  selectedFile = undefined,
  oldPicture = undefined,
  height = 280,
  width = '100%',
  alt = 'Product Image',
}: CardImageProps) {
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
  return (
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
  );
}
