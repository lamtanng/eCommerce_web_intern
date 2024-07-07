import { CategoryProps } from '../../types/category.type';
import { FormProps } from '../../types/form.type';
import { TableProps } from '../../types/table.type';

export type CategorySchema = Pick<CategoryProps, 'name'>;
export interface CategoryFormProps<TSchema> extends FormProps<TSchema> {}
export interface CategoryTableProps extends TableProps {}
