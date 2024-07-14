import { Box, Button, Stack, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import { productApi } from '../../../../apis/product.api';
import ProductPrice from '../../../../pages/Customer/components/ProductPrice';
import { useAppSelector } from '../../../../redux/hooks';
import { productSelector } from '../../../../redux/slices/product.slice';
import { ProductProps } from '../../../../types/product.type';
import { getProductUrl } from '../../../../ultils/getProductUrl';
import { handleError } from '../../../../ultils/handleError';
import FavoriteButton from '../../buttons/FavoriteButton';
import ProductCardImage from '../../CardImage';

export default function WishListCard({ productUrl }: { productUrl: ProductProps['urlName'] }) {
  const { productList } = useAppSelector(productSelector);
  const [product, setProduct] = useState<ProductProps>(
    (productList.find((product) => product?.urlName === productUrl) as ProductProps) ?? {},
  );

  useEffect(() => {
    const getProductByUrl = async () => {
      try {
        const res = await productApi.getByURL(productUrl);
        setProduct(res.data);
      } catch (error) {
        handleError(error);
      }
    };

    if (!!product.id) setProduct(product);
    else {
      getProductByUrl();
    }
  }, []);

  const productFullPath = getProductUrl(product?.urlName);

  return (
    <Stack direction="row" alignItems="start" spacing={2} className="w-full">
      <Box flexBasis="32%">
        <ProductCardImage
          discountPercentage={product.discountPercentage}
          url={product.urlName}
          oldPicture={product.picture}
          alt={product.name}
          key={product.id}
          height="150px"
          width="150px"
        />
      </Box>
      <Stack
        direction="column"
        spacing="4px"
        justifyContent="space-between"
        alignItems="start"
        flexBasis="78%"
      >
        <Typography fontWeight={600} variant="body1">
          {product.name}
        </Typography>
        <Typography
          variant="body2"
          color="text.secondary"
          fontWeight={400}
          sx={{ overflow: 'hidden', display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical' }}
        >
          {product.description}
        </Typography>
        <ProductPrice basePrice={product.basePrice} discountPercentage={product.discountPercentage} />
        <Stack direction="row" spacing={1} alignItems="center" justifyContent="flex-start">
          <Button variant="contained" color="primary" href={productFullPath}>
            Buy Now
          </Button>
          <FavoriteButton productUrl={product.urlName} />
        </Stack>
      </Stack>
    </Stack>
  );
}
