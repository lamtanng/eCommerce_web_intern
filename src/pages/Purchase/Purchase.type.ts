import { ColumnDef, RowData } from '@tanstack/react-table';
import { FormProps } from '../../types/form.type';
import { TableProps } from '../../types/table.type';

export interface PurchaseFormProps<TSchema> extends FormProps<TSchema> {}
export interface PurchaseReviewFormProps<TSchema> extends Pick<FormProps<TSchema>, 'defaultValues'> {}
export interface PurchaseTableProps<TData extends RowData> extends TableProps {
  columnDefs: ColumnDef<TData, any>[];
}
