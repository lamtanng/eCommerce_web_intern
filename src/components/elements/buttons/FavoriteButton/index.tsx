import FavoriteBorderRoundedIcon from '@mui/icons-material/FavoriteBorderRounded';
import FavoriteRoundedIcon from '@mui/icons-material/FavoriteRounded';
import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../../../redux/hooks';
import { addToWishlist, removeFromWishlist, wishlistSelector } from '../../../../redux/slices/wishlist.slice';
import { ProductProps } from '../../../../types/product.type';
import { storedWishList } from '../../../../ultils/storeWishList';
import useStateRef from 'react-usestateref';

interface FavoriteButtonProps {
  productUrl: ProductProps['urlName'];
}

const isFavoritedProduct = ({ productUrl }: FavoriteButtonProps) => {
  const { getWishList } = storedWishList;
  console.log('getWishList', productUrl);

  return getWishList().includes(productUrl);
};

export default function FavoriteButton({ productUrl }: FavoriteButtonProps) {
  const dispatch = useAppDispatch();
  const { count } = useAppSelector(wishlistSelector);
  const [isFavorite, setIsFavorite] = useStateRef(() => isFavoritedProduct({ productUrl }));

  useEffect(() => {
    setIsFavorite(() => isFavoritedProduct({ productUrl }));
  }, [count, productUrl]);

  const handleFavorite = () => {
    isFavorite ? dispatch(removeFromWishlist(productUrl)) : dispatch(addToWishlist(productUrl));
    setIsFavorite(!isFavorite);
  };

  if (isFavorite)
    return (
      <FavoriteRoundedIcon
        color="error"
        className="cursor-pointer transition-all duration-200 ease-in-out hover:scale-110"
        onClick={handleFavorite}
      />
    );
  else
    return (
      <FavoriteBorderRoundedIcon
        color="error"
        className="cursor-pointer transition-all duration-200 ease-in-out hover:scale-110"
        onClick={handleFavorite}
      />
    );
}
