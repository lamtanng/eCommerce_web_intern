import { Typography } from '@mui/material';
import Grid2 from '@mui/material/Unstable_Grid2/Grid2';
import { memo } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import ProductCardItem from '../../../../../components/elements/ProductCardItem';
import PageSkeleton from '../../../../../components/elements/skeletons/PageSkeleton';
import { ProductListProps } from '../../UserProduct.type';
import { useProductPage } from './useProductList';

function ProductList({ searchQuery, perPage, columns }: ProductListProps) {
  const { hasMore, products, fetchMoreProducts } = useProductPage({ searchQuery, perPage });
  return (
    <Grid2 className="w-full overflow-hidden px-0">
      <InfiniteScroll
        dataLength={products.length > Number(perPage) ? products.length : Number(perPage)}
        next={fetchMoreProducts}
        hasMore={hasMore}
        loader={
          <div className="relative py-20">
            <PageSkeleton />
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
          rowSpacing={{ lg: 5, md: 2 }}
          columnSpacing={{ lg: 3, md: 2 }}
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
