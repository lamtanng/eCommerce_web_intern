import { Typography } from '@mui/material';
import Grid2 from '@mui/material/Unstable_Grid2/Grid2';
import { memo } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import ProductCardItem from '../../../../../components/elements/ProductCardItem';
import SpinnerSkeleton from '../../../../../components/elements/skeletons/SpinnerSkeleton';
import { ProductListProps } from '../../UserProduct.type';
import { useProductPage } from './useProductList';
import CardsSkeleton from '../../../../../components/elements/skeletons/CardsSkeleton';
import NoItemsFounded from '../../../../NoItemsFounded';

function ProductList({ searchQuery, perPage, columns }: ProductListProps) {
  const { hasMore, products, fetchMoreProducts, isLoading } = useProductPage({ searchQuery, perPage });

  if (isLoading) return <CardsSkeleton />;
  if (products.length === 0)
    return (
      <div className="h-svh">
        <NoItemsFounded />
      </div>
    );
  return (
    <Grid2 className="w-full overflow-hidden px-0 mt-5 md:mt-2">
      <InfiniteScroll
        dataLength={products.length > Number(perPage) ? products.length : Number(perPage)}
        next={fetchMoreProducts}
        hasMore={hasMore}
        loader={
          <div className="relative py-20">
            <SpinnerSkeleton />
          </div>
        }
        endMessage={
          <Typography variant="body2" className="mt-10 text-center text-gray-600">
            e-Commerce Website
          </Typography>
        }
      >
        <Grid2
          container
          lg={12}
          maxWidth="xl"
          rowSpacing={{ lg: 5, md: 5, sm: 2, xs: 2 }}
          columnSpacing={{ lg: 3, md: 2, sm: 1, xs: 1 }}
          columns={{ lg: 12, md: 12 }}
          sx={{ marginX: 0 }}
        >
          {products.map((product) => (
            <ProductCardItem key={product.id} product={product} columns={columns} />
          ))}
        </Grid2>
      </InfiniteScroll>
    </Grid2>
  );
}

export default memo(ProductList);
