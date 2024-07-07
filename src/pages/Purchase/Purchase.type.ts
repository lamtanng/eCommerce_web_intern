import { FormProps } from '../../types/form.type';
import { TableProps } from '../../types/table.type';

export interface PurchaseFormProps<TSchema> extends FormProps<TSchema> {}
export interface PurchaseReviewFormProps<TSchema> extends Pick<FormProps<TSchema>, 'defaultValues'> {}
export interface PurchaseTableProps extends TableProps {}
