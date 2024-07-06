import { CategoryProps } from './category.type';

interface ProductProps {
  id?: string;
  name: string;
  urlName: string | undefined;
  picture?: string | undefined;
  basePrice: number;
  discountPercentage?: number | undefined;
  stock?: number | undefined;
  description?: string | undefined;
  createdAt?: string | undefined;
  categories?: CategoryProps['id'][] | undefined;
}

type ProductFormSchemaProps = Omit<ProductProps, 'urlName' | 'picture' | 'createdAt'>;

interface GetAllProductParams {
  productName?: string;
  page?: number;
  offset?: number;
}

interface UploadImageRequestProps {
  id: ProductProps['id'];
  file: string;
}

export type { ProductProps, UploadImageRequestProps, ProductFormSchemaProps, GetAllProductParams };
