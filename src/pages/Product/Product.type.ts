import { FormProps } from '../../types/form.type';
import { TableProps } from '../../types/table.type';

export interface ProductTableProps extends TableProps {}
export interface ProductFormProps<TSchema> extends FormProps<TSchema> {}
