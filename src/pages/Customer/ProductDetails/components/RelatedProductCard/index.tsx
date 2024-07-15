import { useEffect, useState } from 'react';
import { productApi } from '../../../../../apis/product.api';
import ProductCardItem from '../../../../../components/elements/ProductCardItem';
import { ProductProps } from '../../../../../types/product.type';
import { handleError } from '../../../../../ultils/handleError';

export default function RelatedProductCard({ productUrl }: { productUrl: ProductProps['urlName'] }) {
  const [product, setProduct] = useState<ProductProps>({} as ProductProps);
  useEffect(() => {
    const getProductByUrl = async () => {
      try {
        const res = await productApi.getByURL(productUrl);
        setProduct(res.data);
      } catch (error) {
        handleError(error);
      }
    };
    getProductByUrl();
  }, []);
  return (
    <div className="pb-5">
      <ProductCardItem product={product} />
    </div>
  );
}
