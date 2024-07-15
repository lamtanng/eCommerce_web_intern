import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';
import { PageBreadcrumbs } from '../../../components/elements/Breadcrumbs';
import PageSkeleton from '../../../components/elements/skeletons/PageSkeleton';
import Error from '../../Error';
import NoItemsFounded from '../../NoItemsFounded';
import useProductDetails from './hooks';
import { Button, Stack, Typography } from '@mui/material';
import ProductCardImage from '../../../components/elements/CardImage';
import ProductPrice from '../components/ProductPrice';
import QuantityInput from './components/QuantityRange';
import FavoriteButton from '../../../components/elements/buttons/FavoriteButton';
import ProductCarousel from './components/ProductCarousel';
import DialogFormButton from '../../../components/elements/buttons/DialogFormButton';
import LoginModal from '../../Login/components/LoginModal';

export default function ProductDetails() {
  const { productUrl, error, loading, handleCreatePurchase, handleAmountChange, auth, amount, productList } =
    useProductDetails();

  if (!productUrl) return <NoItemsFounded />;
  if (error) return <Error errorMsg={error} />;
  if (loading === 'loading') return <PageSkeleton />;
  if (loading == 'succeeded') {
    const { basePrice, name, description, stock, discountPercentage, urlName, categories, picture } = productList[0];

    return (
      <>
        <PageBreadcrumbs />
        <Stack direction="column" alignItems="start" justifyContent="start" spacing={8} className="mt-7">
          <Stack direction="row" alignItems="start" justifyContent="start" spacing={8} className="">
            <div className="w-full flex-1 basis-1/2 overflow-hidden rounded-md">
              <ProductCardImage
                url={urlName}
                discountPercentage={discountPercentage}
                oldPicture={picture}
                alt={name}
                height={520}
              />
            </div>
            <Stack
              direction="column"
              alignItems="start"
              justifyContent="space-between"
              spacing={4}
              className="basis-1/2"
            >
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
                {/* <QuantityPicker /> */}
                <QuantityInput
                  max={stock}
                  defaultValue={amount}
                  amount={amount}
                  handleAmountChange={handleAmountChange}
                />
                <Typography variant="body2" component="div" className="italic text-red-500" color="">
                  {stock ? `${stock} in stock` : 'Out of stock'}
                </Typography>
              </Stack>

              {/* Buttons */}
              <div className="">
                <Stack direction="row" spacing={2} alignItems="center" flex={1} justifyContent="start">
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

        {/* Related products */}
        <Typography variant="h5" component="div" className="mt-28 font-bold uppercase">
          Related products
        </Typography>
        <ProductCarousel />
      </>
    );
  }
}
