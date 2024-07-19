import { RowData } from "@tanstack/react-table";
import { ReactTableProps } from "../components/elements/reactTable/ReactTable.type";

export default function getVisibleDataTable<TData extends RowData>({ table }: ReactTableProps<TData>) {
    const rowData = table.getRowModel().flatRows;
    const visibleCells = rowData.map((row) => row._getAllVisibleCells().map((cell) => cell.getValue()));
    const visibleHeaders = table.getVisibleFlatColumns().map((column) => column.columnDef.header);
    return [visibleHeaders, ...visibleCells];
  }