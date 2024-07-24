import { RowData, Table } from '@tanstack/react-table';
import { Leaves } from '../../../types/leaves.type';

export interface ReactTableProps<TData extends RowData> {
  table: Table<TData>;
  data?: Partial<TData[]>;
  fileName?: string;
  filterColumns?: Partial<Leaves<TData>>[];
}
