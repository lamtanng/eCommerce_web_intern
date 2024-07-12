import { useEffect, useRef, useState } from 'react';
import { ProductListProps } from '.';
import { productApi } from '../../../../../apis/product.api';
import { ProductProps } from '../../../../../types/product.type';
import { handleError } from '../../../../../ultils/handleError';

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
