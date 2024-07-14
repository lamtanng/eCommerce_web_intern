import { useEffect, useState } from 'react';
import { ProductListProps } from '.';
import { fetchUserProductList } from '../../../../../redux/actions/product.actions';
import { useAppDispatch, useAppSelector } from '../../../../../redux/hooks';
import { productSelector } from '../../../../../redux/slices/product.slice';
import { GetAllProductParams } from '../../../../../types/product.type';

export function useProductPage({ searchQuery = '', perPage }: ProductListProps) {
  const dispatch = useAppDispatch();
  const { productList, loading } = useAppSelector(productSelector);
  const [hasMore, setHasMore] = useState<boolean>(true);
  const [params, setParams] = useState<GetAllProductParams>({
    productName: searchQuery,
    page: String(1),
    offset: String(perPage),
  });

  // useEffect(() => {
  //   setHasMore(true);
  //   setParams({ productName: searchQuery, page: String(1), offset: String(perPage) });
  // }, [perPage, searchQuery]);

  useEffect(() => {
    const productParams = { productName: searchQuery, page: String(1), offset: String(perPage) };
    dispatch(fetchUserProductList(productParams));
  }, [perPage, searchQuery]);

  const fetchMoreProducts = async () => {
    setParams((prev) => {
      return { ...prev, page: String(Number(prev.page) + 1) };
    });
    // const res = await productApi.getAll(params);
    // const products = res.data;
  };
  return { productList, hasMore, fetchMoreProducts };
}
