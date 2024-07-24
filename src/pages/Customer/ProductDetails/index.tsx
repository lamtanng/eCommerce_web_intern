import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';
import { Button, Stack, Typography } from '@mui/material';
import { PageBreadcrumbs } from '../../../components/elements/Breadcrumbs';
import DialogFormButton from '../../../components/elements/buttons/DialogFormButton';
import FavoriteButton from '../../../components/elements/buttons/FavoriteButton';
import ProductCardImage from '../../../components/elements/CardImage';
import ProductDetailsSkeleton from '../../../components/elements/skeletons/ProductDetailsSkeleton';
import Error from '../../Error';
import LoginModal from '../../Login/components/LoginModal';
import NoItemsFounded from '../../NoItemsFounded';
import ProductPrice from '../components/ProductPrice';
import ProductCarousel from './components/ProductCarousel';
import QuantityInput from './components/QuantityRange';
import useProductDetails from './hooks';

export default function ProductDetails() {
  const { productUrl, error, loading, handleCreatePurchase, handleAmountChange, auth, amount, productList } =
    useProductDetails();

  if (!productUrl) return <NoItemsFounded />;
  if (error) return <Error errorMsg={error} />;
  if (loading === 'loading') return <ProductDetailsSkeleton />;
  if (loading == 'succeeded') {
    const { basePrice, name, description, stock, discountPercentage, urlName, categories, picture } = productList[0];

    return (
      <>
        <PageBreadcrumbs />
        <Stack className="mt-7 flex flex-col items-start gap-5 md:flex-row md:gap-12">
          <div className="w-full flex-1 basis-1/2 overflow-hidden rounded-md">
            <ProductCardImage
              url={urlName}
              discountPercentage={discountPercentage}
              oldPicture={picture}
              alt={name}
            />
          </div>
          <Stack direction="column" alignItems="start" justifyContent="space-between" spacing={4} className="basis-1/2">
            <div className="">
              {categories?.map((category, index) => (
                <Typography
                  key={index}
                  variant="body2"
                  color="text.secondary"
                  className="inline-block uppercase tracking-wide"
                >
                  {(category as { name: string }).name}&nbsp;
                </Typography>
              ))}
            </div>
            <Typography
              gutterBottom
              component="div"
              fontWeight="bold"
              textTransform="uppercase"
              className="mt-2 line-clamp-1 text-lg italic md:mt-4 md:text-3xl"
            >
              {name}
            </Typography>
            <ProductPrice basePrice={basePrice} discountPercentage={discountPercentage} />
            <Stack direction="row" spacing={1} alignItems="center" className="w-full justify-center md:justify-start">
              <QuantityInput
                max={stock}
                defaultValue={amount}
                amount={amount}
                handleAmountChange={handleAmountChange}
              />
              <Typography variant="body2" className="italic text-red-500" color="">
                {stock ? `${stock} in stock` : 'Out of stock'}
              </Typography>
            </Stack>

            {/* Buttons */}
            <Stack
              direction="row"
              spacing={2}
              alignItems="center"
              flex={1}
              justifyContent="start"
              className="max-sm:w-full"
            >
              <Button variant="text" size="large" color="error">
                <FavoriteButton productUrl={urlName} />
              </Button>
              {auth.accessToken ? (
                <Button
                  size="large"
                  variant="contained"
                  fullWidth
                  startIcon={<ShoppingCartCheckoutIcon />}
                  onClick={() => handleCreatePurchase()}
                  disabled={Number(stock) < 1}
                >
                  Buy now
                </Button>
              ) : (
                <DialogFormButton
                  variant="text"
                  dialogButton={
                    <Button
                      size="large"
                      variant="contained"
                      fullWidth
                      startIcon={<ShoppingCartCheckoutIcon />}
                      disabled={Number(stock) < 1}
                    >
                      Buy now
                    </Button>
                  }
                >
                  <LoginModal />
                </DialogFormButton>
              )}
            </Stack>

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

        {/* Related products */}
        <Typography variant="h5" component="div" className="mt-16 font-bold uppercase md:mt-28">
          Related products
        </Typography>
        <ProductCarousel />
      </>
    );
  }
}
