import { CategoryProps } from './category.type';
import { PaginationParams } from './pagination.type';

type ProductFormSchema = Omit<ProductProps, 'urlName' | 'picture' | 'createdAt'>;
interface ProductProps {
  id?: string;
  name: string;
  urlName: string;
  picture?: string;
  basePrice: number;
  discountPercentage: number;
  stock?: number;
  description?: string;
  createdAt?: string;
  categories: { name: CategoryProps['name'] }[];
}
interface GetAllProductParams extends PaginationParams {
  productName?: string;
}
interface UploadImageRequestProps {
  id: ProductProps['id'];
  formData: FormData;
}

export type { GetAllProductParams, ProductFormSchema, ProductProps, UploadImageRequestProps };
