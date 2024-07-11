import { Button, CardMedia, Stack, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Image from '../../../assets/Ultraboost_1.0_Shoes_White_JH9183_01_standard_hover.avif';
import ImageDefault from '../../../assets/product_default.jpg';
import PageSkeleton from '../../../components/elements/skeletons/PageSkeleton';
import { getProductByURL } from '../../../redux/actions/product.actions';
import { useAppDispatch, useAppSelector } from '../../../redux/hooks';
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';
import { productSelector } from '../../../redux/slices/product.slice';
import Error from '../../Error';
import { calculateDiscountedPrice } from '../Product/components/ProductItem';
import FavoriteBorderRoundedIcon from '@mui/icons-material/FavoriteBorderRounded';
import QuantityInput from './components/QuantityRange';
import ProductPrice from '../components/ProductPrice';
import CardImage from '../Product/components/CardImage';

export default function ProductDetails() {
  const { productUrl } = useParams<{ productUrl: string }>();
  const [url, setUrl] = useState<string | undefined>('');
  const dispatch = useAppDispatch();
  const { error, loading, productList } = useAppSelector(productSelector);

  useEffect(() => {
    setUrl(() => productUrl);
    dispatch(getProductByURL(productUrl));
  }, []);

  // if (!productUrl) return <Error errorMsg="Product not found" />;
  if (error) return <Error errorMsg={error} />;
  if (loading === 'loading') return <PageSkeleton />;
  if (loading == 'succeeded') {
    const { basePrice, name, urlName, description, stock, discountPercentage, id, categories } = productList[0];
    return (
      <Stack direction="row" alignItems="start" justifyContent="start" spacing={8} className="">
        <div className="w-full flex-1 basis-1/2 overflow-hidden rounded-md">
          <CardImage picture={Image} name={name} url={urlName} height={520} discountPercentage={discountPercentage} />
        </div>
        <Stack direction="column" alignItems="start" justifyContent="space-between" spacing={4} className="basis-1/2">
          {categories?.map((category, index) => (
            <Typography key={index} variant="body2" color="text.secondary" className="uppercase tracking-wide">
              {category.name}
            </Typography>
          ))}
          <Typography
            gutterBottom
            variant="h4"
            component="div"
            fontWeight="bold"
            textTransform="uppercase"
            className="mt-4 line-clamp-1 italic"
          >
            {name}
          </Typography>
          <Stack direction="row" spacing={1} alignItems="center" justifyContent="start" className="w-full">
            <ProductPrice basePrice={basePrice} discountPercentage={discountPercentage} />
          </Stack>
          <Stack direction="row" spacing={1} alignItems="center" justifyContent="flex-start" className="w-full">
            <QuantityInput max={stock} />
            <Typography variant="body2" component="div" className="italic text-red-500" color="">
              {stock ? `${stock} in stock` : 'Out of stock'}
            </Typography>
          </Stack>

          <div className="">
            <Stack direction="row" spacing={2} alignItems="center" flex={1} justifyContent="start">
              <Button variant="text" size="large" color="error">
                <FavoriteBorderRoundedIcon />
              </Button>
              <Button size="large" variant="contained" fullWidth startIcon={<ShoppingCartCheckoutIcon />}>
                Add to cart
              </Button>
            </Stack>
          </div>
          <div className="">
            <Typography variant="body1" color="text.primary" className="font-bold uppercase">
              About the product
            </Typography>
            <Typography variant="body2" color="text.secondary" className="mt-2 text-justify">
              {description}
            </Typography>
          </div>
        </Stack>
      </Stack>
    );
  }
}
