import { FormActions } from '../../types/formActions.type';
import { ProductFormSchemaProps } from '../../types/product.type';

export interface ProductTableProps {
  searchQuery?: string | undefined;
}

export interface ProductFormProps {
  defaultValues: ProductFormSchemaProps;
  action: FormActions;
}
