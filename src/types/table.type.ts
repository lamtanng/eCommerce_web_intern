import { RowData, Table } from '@tanstack/react-table';

export interface TableProps<TData extends RowData> {
  table: Table<TData>;
}
