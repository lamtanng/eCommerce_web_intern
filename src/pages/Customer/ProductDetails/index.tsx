import FavoriteBorderRoundedIcon from '@mui/icons-material/FavoriteBorderRounded';
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';
import { Button, Stack, Typography } from '@mui/material';
import { PageBreadcrumbs } from '../../../components/elements/Breadcrumbs';
import CardImage from '../../../components/elements/CardImage';
import PageSkeleton from '../../../components/elements/skeletons/PageSkeleton';
import Error from '../../Error';
import NoItemsFounded from '../../NoItemsFounded';
import ProductPrice from '../components/ProductPrice';
import QuantityInput from './components/QuantityRange';
import useProductDetails from './hooks';

export default function ProductDetails() {
  const { productUrl, error, loading, handleCreatePurchase, product, handleAmountChange, amount } = useProductDetails();

  if (!productUrl) return <NoItemsFounded />;
  if (error) return <Error errorMsg={error} />;
  if (loading === 'loading') return <PageSkeleton />;
  if (loading == 'succeeded') {
    const { basePrice, name, description, stock, discountPercentage, id, categories, picture } = product;
    return (
      <Stack direction="column" alignItems="start" justifyContent="start" spacing={8} className="">
        <PageBreadcrumbs />
        <Stack direction="row" alignItems="start" justifyContent="start" spacing={8} className="">
          <div className="w-full flex-1 basis-1/2 overflow-hidden rounded-md">
            <CardImage oldPicture={picture} alt={name} height={520} />
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
              <QuantityInput max={stock} defaultValue={amount} amount={amount} handleAmountChange={handleAmountChange} />
              {/* <QuantityPicker /> */}
              <Typography variant="body2" component="div" className="italic text-red-500" color="">
                {stock ? `${stock} in stock` : 'Out of stock'}
              </Typography>
            </Stack>

            <div className="">
              <Stack direction="row" spacing={2} alignItems="center" flex={1} justifyContent="start">
                <Button variant="text" size="large" color="error">
                  <FavoriteBorderRoundedIcon />
                </Button>
                <Button
                  size="large"
                  variant="contained"
                  fullWidth
                  startIcon={<ShoppingCartCheckoutIcon />}
                  onClick={() => handleCreatePurchase()}
                  disabled={stock < 1}
                >
                  Buy now
                </Button>
              </Stack>
            </div>

            {/* Details */}
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
      </Stack>
    );
  }
}
