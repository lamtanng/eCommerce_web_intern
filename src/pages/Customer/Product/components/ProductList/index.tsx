import Grid2 from '@mui/material/Unstable_Grid2/Grid2';
import InfiniteScroll from 'react-infinite-scroll-component';
import { useProductPage } from './useProductList';
import { memo } from 'react';
import ProductCardItem from '../../../../../components/elements/ProductCardItem';

export interface ProductListProps {
  searchQuery?: string;
  perPage?: number;
}

function ProductList({ searchQuery, perPage }: ProductListProps) {
  const { productList, hasMore, fetchMoreProducts } = useProductPage({ searchQuery, perPage });
  return (
    <>
      {/* <InfiniteScroll
        dataLength={productList.length} 
        next={fetchMoreProducts}
        hasMore={hasMore}
        loader={<h4>Loading...</h4>}
        endMessage={
          <p style={{ textAlign: 'center' }}>
            <b>Yay! You have seen it all</b>
          </p>
        }
      > */}
      <Grid2
        container
        lg={12}
        maxWidth="lg"
        rowSpacing={{ lg: 5, md: 2 }}
        columnSpacing={{ lg: 3, md: 2 }}
        columns={{ lg: 12, md: 12 }}
      >
        {productList.map((product) => (
          <ProductCardItem key={product.id} product={product} />
        ))}
      </Grid2>
      {/* </InfiniteScroll> */}
    </>
  );
}

export default memo(ProductList);
