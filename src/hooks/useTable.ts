import {
  ColumnDef,
  getCoreRowModel,
  getPaginationRowModel,
  PaginationState,
  RowData,
  useReactTable,
  VisibilityState,
} from '@tanstack/react-table';
import { useMemo, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { defaultPaginationParams, getPaginationParams } from '../constants/pagination';
import { VisibleColumnStorageKey } from '../types/visibleColumnStorageKey.type';
import { usePagination } from './usePagination';
import { TableProps } from '../types/table.type';

interface UseTableProps<TData extends RowData> {
  columnDefs: ColumnDef<TData, any>[];
  data: TData[];
  localStorageKey: VisibleColumnStorageKey;
}

const urlParamsDefaults = getPaginationParams({});

export function useTable<TData extends RowData>({ columnDefs, data, localStorageKey }: UseTableProps<TData>) {
  const visibleColumnsDefaults: VisibilityState = getVisibleColumns(localStorageKey);
  const [columnVisibility, setColumnVisibility] = useState(visibleColumnsDefaults);
  const [columns] = useState<typeof columnDefs>(() => [...columnDefs]);
  const [pagination, setPagination] = useState<PaginationState>(defaultPaginationParams);

  const table = useReactTable<TData>({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    state: {
      columnVisibility,
      pagination,
      // sorting,
    },
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
    // debugTable: true,
    // debugHeaders: true,
    // debugColumns: true,
  });

  let { currentPageIndex, pageSize, resetPageIndex } = usePagination<TData>(table);
  useMemo(() => table, []);

  return {
    table,
    pagination,
    resetPageIndex,
    currentPageIndex,
    pageSize,
  };
}

const getVisibleColumns = (localStorageKey: VisibleColumnStorageKey) =>
  localStorage.getItem(localStorageKey) != 'undefined' ? JSON.parse(String(localStorage.getItem(localStorageKey))) : {};
