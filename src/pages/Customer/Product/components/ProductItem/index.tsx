import { Box, Button, Card, CardActions, CardContent, Stack, Typography } from '@mui/material';
import { ProductProps } from '../../../../../types/product.type';
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';
import CardImage from '../ProductCardImage';
import FavoriteBorderRoundedIcon from '@mui/icons-material/FavoriteBorderRounded';
import Grid2 from '@mui/material/Unstable_Grid2/Grid2';
import { calculateDiscountedPrice } from '../../../../../ultils/calcProductPrice';
import ProductPrice from '../../../components/ProductPrice';

export default function ProductItem({ product }: { product: ProductProps }) {
  return (
    <Grid2 xs={4} display="flex" justifyContent="center" alignItems="center">
      <Card sx={{ height: '100%', width: '100%', paddingBottom: '8px' }}>
        <Stack direction="column" spacing={1} justifyContent="space-between" alignItems="start">
          <Stack
            direction="column"
            spacing={1}
            justifyContent="space-between"
            alignItems="start"
            className="relative w-full"
          >
            <CardImage
              oldPicture={product.picture}
              alt={product.name}
              url={product.urlName}
              discountPercentage={product.discountPercentage}
            />
            <CardContent>
              {product.categories?.map((category, index) => (
                <Typography key={index} variant="body2" color="text.secondary" className="uppercase tracking-wide">
                  {category.name}
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
              <Typography variant="body2" color="text.secondary" className="line-clamp-4 min-h-20">
                {product.description}
              </Typography>
            </CardContent>
          </Stack>
          <Stack direction="row" spacing={1} alignItems="center" justifyContent="flex-end" className="w-full px-4">
            <ProductPrice basePrice={product.basePrice} discountPercentage={product.discountPercentage} />
          </Stack>

          <CardActions className="w-full px-4">
            <Stack direction="row" spacing={2} alignItems="center" flex={1} justifyContent="space-between">
              <Button variant="text" size="large" color="error">
                <FavoriteBorderRoundedIcon />
              </Button>
              <Button size="large" variant="contained" fullWidth startIcon={<ShoppingCartCheckoutIcon />}>
                Add to cart
              </Button>
            </Stack>
          </CardActions>
        </Stack>
      </Card>
    </Grid2>
  );
}
