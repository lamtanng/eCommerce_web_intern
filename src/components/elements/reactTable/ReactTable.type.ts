import { RowData, Table } from '@tanstack/react-table';

export interface ReactTableProps<TData extends RowData> {
  table: Table<TData>;
}
