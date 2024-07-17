import { useEffect } from 'react';
import useStateRef from 'react-usestateref';
import { productApi } from '../../../../../apis/product.api';
import { GetAllProductParams, ProductProps } from '../../../../../types/product.type';
import { handleError } from '../../../../../ultils/handleError';
import { ProductListProps } from '../../UserProduct.type';

export function useProductPage({ searchQuery = '', perPage }: ProductListProps) {
  const [hasMore, setHasMore] = useStateRef<boolean>(true);
  const [products, setProducts] = useStateRef<ProductProps[]>([]);
  const [params, setParams] = useStateRef<GetAllProductParams>({
    productName: searchQuery,
    page: String(1),
    offset: String(perPage),
  });

  useEffect(() => {
    setParams({
      productName: searchQuery,
      page: String(1),
      offset: String(perPage),
    });
  }, [searchQuery, perPage]);

  useEffect(() => {
    const fetchProductList = async () => {
      try {
        const data = await productApi.getAll(params);
        const products = data.data;
        params.page === '1' ? setProducts(products) : setProducts((prev) => [...prev, ...products]);
        products.length === 0 ? setHasMore(false) : setHasMore(true);
      } catch (error) {
        handleError(error);
      }
    };

    fetchProductList();
  }, [params]);

  const fetchMoreProducts = async () => {
    setParams((prev) => {
      return { ...prev, page: String(Number(prev.page) + 1) };
    });
  };
  return { hasMore, fetchMoreProducts, products };
}
