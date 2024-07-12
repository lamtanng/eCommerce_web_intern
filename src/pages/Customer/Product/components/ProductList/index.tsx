import { CircularProgress, Stack } from '@mui/material';
import Grid2 from '@mui/material/Unstable_Grid2/Grid2';
import ProductItem from '../ProductItem';
import useProductList from './useProductList';

export interface ProductListProps {
  searchQuery?: string;
  perPage?: number;
}

export default function ProductList({ searchQuery, perPage }: ProductListProps) {
  const { productListDisplay, spinnerRef, hasMore, loading } = useProductList({ searchQuery: searchQuery, perPage });

  return (
    <>
      <Grid2
        container
        lg={12}
        maxWidth="lg"
        rowSpacing={{ lg: 5, md: 2 }}
        columnSpacing={{ lg: 3, md: 2 }}
        columns={{ lg: 12, md: 12 }}
      >
        {productListDisplay.map((product) => (
          <ProductItem key={product.id} product={product} />
        ))}
      </Grid2>
      {hasMore && (
        <Stack width="100%" ref={spinnerRef} alignItems="center">
          <CircularProgress sx={{ margin: 10 }} />
        </Stack>
      )}
    </>
  );
}
