import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';
import { Button, Card, CardActions, CardContent, Stack, Typography } from '@mui/material';
import Grid2 from '@mui/material/Unstable_Grid2/Grid2';
import { useEffect } from 'react';
import useStateRef from 'react-usestateref';
import ProductPrice from '../../../pages/Customer/components/ProductPrice';
import { ProductProps } from '../../../types/product.type';
import { getProductUrl } from '../../../ultils/getProductUrl';
import FavoriteButton from '../buttons/FavoriteButton';
import ProductCardImage from '../CardImage';

export interface ProductCardItemProps {
  product: ProductProps;
  columns?: number;
}

export default function ProductCardItem({ product, columns = 4 }: ProductCardItemProps) {
  const [gridColumns, setGridColumns] = useStateRef<number>(columns);
  useEffect(() => {
    setGridColumns(12 / columns);
  }, [columns]);

  const productUrl = getProductUrl(product.urlName);
  return (
    <Grid2 md={gridColumns} xs={12} display="flex" justifyContent="center" alignItems="center">
      <Card sx={{ height: '100%', width: '100%', paddingBottom: '8px' }}>
        <Stack direction="column" spacing={1} justifyContent="space-between" alignItems="start">
          <Stack
            direction="column"
            spacing={0}
            justifyContent="space-between"
            alignItems="start"
            className="relative w-full"
          >
            <ProductCardImage
              oldPicture={product.picture}
              alt={product.name}
              url={product.urlName}
              discountPercentage={product.discountPercentage}
            />
            <CardContent>
              {product.categories?.map((category, index) => (
                <Typography
                  key={index}
                  variant="body2"
                  color="text.secondary"
                  className="inline-block uppercase tracking-wide"
                >
                  {category.name}&nbsp;
                </Typography>
              ))}
              <Typography
                gutterBottom
                variant="h6"
                component="div"
                fontWeight="medium"
                textTransform="capitalize"
                className="line-clamp-1"
              >
                {product.name}
              </Typography>
              <Typography variant="body2" color="text.secondary" className="line-clamp-2">
                {product.description}
              </Typography>
            </CardContent>
          </Stack>
          <Stack direction="row" spacing={0} alignItems="center" justifyContent="right" className="w-full px-4">
            <ProductPrice basePrice={product.basePrice} discountPercentage={product.discountPercentage} />
          </Stack>

          <CardActions className="w-full px-4">
            <Stack direction="row" spacing={2} alignItems="center" flex={1} justifyContent="space-between">
              <FavoriteButton productUrl={product.urlName} />
              <Button
                size="large"
                variant="contained"
                fullWidth
                startIcon={<ShoppingCartCheckoutIcon />}
                href={productUrl}
              >
                Add to cart
              </Button>
            </Stack>
          </CardActions>
        </Stack>
      </Card>
    </Grid2>
  );
}
