import { useEffect, useRef, useState } from 'react';
import { ProductListProps } from '.';
import { productApi } from '../../../../../apis/product.api';
import { GetAllProductParams, ProductProps } from '../../../../../types/product.type';
import { handleError } from '../../../../../ultils/handleError';
import { useAppDispatch, useAppSelector } from '../../../../../redux/hooks';
import { fetchProductList, fetchUserProductList } from '../../../../../redux/actions/product.actions';
import { unwrapResult } from '@reduxjs/toolkit';
import { productSelector } from '../../../../../redux/slices/product.slice';

export default function useProductList({ searchQuery = '', perPage }: ProductListProps) {
  const [productParams, setProductParams] = useState({ productName: searchQuery, page: '1', offset: String(perPage) });
  const [hasMore, setHasMore] = useState(true);
  const [loading, setLoading] = useState(false);
  const [num, setNum] = useState(2);
  const [error, setError] = useState(false);
  const [productListDisplay, setProductListDisplay] = useState<ProductProps[]>([]);
  const spinnerRef = useRef(null);

  console.log('re-render >>> ', perPage);

  useEffect(() => {
    setProductParams(() => ({ productName: searchQuery, page: '1', offset: String(perPage) }));
    // fetchMoreProduct();
  }, [searchQuery, perPage]);

  const fetchMoreProduct = async () => {
    try {
      setLoading(true);
      setError(false);
      const params = productParams;

      const res = await productApi.getAll(params);

      if (Array.isArray(res.data) && res.data.length) {
        setProductListDisplay((prev) => {
          return [...new Set<ProductProps>([...prev, ...res.data])];
        });
        setProductParams((prev) => {
          return { ...prev, page: (Number(prev.page) + 1).toString() };
        });
      } else {
        setHasMore(false);
      }
    } catch (error) {
      handleError(error);
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const onIntersection = (entries: any) => {
      let firstEntry = entries[0];

      if (firstEntry.isIntersecting && hasMore) {
        fetchMoreProduct();
      }
    };

    const observer = new IntersectionObserver(onIntersection);
    if (observer && spinnerRef.current) {
      observer.observe(spinnerRef.current);
    }
    return () => {
      if (observer) {
        observer.disconnect();
      }
    };
  }, [productListDisplay]);

  return { productListDisplay, hasMore, loading, spinnerRef };
}

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
    // const res = await productApi.getAll(params);
    // const products = res.data;
    // setParams({ productName: searchQuery, page: String(1), offset: String(perPage) });
    // if (products.length === 0) {
    //   setHasMore(() => false);
    // }
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
