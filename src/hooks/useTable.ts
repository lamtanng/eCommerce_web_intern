import {
  ColumnDef,
  ColumnFiltersState,
  getCoreRowModel,
  getPaginationRowModel,
  PaginationState,
  RowData,
  useReactTable,
  VisibilityState,
} from '@tanstack/react-table';
import { useMemo, useState } from 'react';
import { defaultPaginationParams } from '../constants/pagination';
import { VisibleColumnStorageKey } from '../types/visibleColumnStorageKey.type';
import { usePagination } from './usePagination';

interface UseTableProps<TData extends RowData> {
  columnDefs: ColumnDef<TData, any>[];
  data: TData[];
  localStorageKey: VisibleColumnStorageKey;
}

export function useTable<TData extends RowData>({ columnDefs, data, localStorageKey }: UseTableProps<TData>) {
  const visibleColumnsDefaults: VisibilityState = getVisibleColumns(localStorageKey);
  const [columnVisibility, setColumnVisibility] = useState(visibleColumnsDefaults);
  const [columns] = useState<typeof columnDefs>(() => [...columnDefs]);
  const [pagination, setPagination] = useState<PaginationState>(defaultPaginationParams);
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);

  const table = useReactTable<TData>({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    state: {
      columnVisibility,
      pagination,
      columnFilters,
    },
    manualFiltering: true,
    onColumnFiltersChange: setColumnFilters,
    onColumnVisibilityChange: (updaterOrValue) => {
      setColumnVisibility((prev) => {
        const newColumnVisibility = typeof updaterOrValue === 'function' ? updaterOrValue(prev) : updaterOrValue;
        localStorage.setItem(localStorageKey, JSON.stringify(newColumnVisibility));
        return newColumnVisibility;
      });
    },
    manualPagination: true, //set pagination server-side
    onPaginationChange: setPagination,
    pageCount: -1,
    autoResetPageIndex: false,
    sortDescFirst: false,
  });

  let { currentPageIndex, pageSize, resetPageIndex } = usePagination<TData>(table);
  useMemo(() => table, [data]);

  return {
    table,
    pagination,
    resetPageIndex,
    currentPageIndex,
    pageSize,
    columnFilters,
  };
}

const getVisibleColumns = (localStorageKey: VisibleColumnStorageKey) =>
  localStorage.getItem(localStorageKey) != 'undefined' ? JSON.parse(String(localStorage.getItem(localStorageKey))) : {};
