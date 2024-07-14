import { TableBody, TableCell, TableRow } from '@mui/material';
import { flexRender, RowData } from '@tanstack/react-table';
import { ReactTableProps } from '../ReactTable.type';
import NoItemsFounded from '../../../../pages/NoItemsFounded';

interface ReactTableBodyProps<TData extends RowData> extends ReactTableProps<TData> {}

function ReactTableBody<TData extends RowData>({ table }: ReactTableBodyProps<TData>) {
  return (
    <TableBody className="relative h-56">
      {table.getRowModel().rows.length <= 0 ? (
        <NoItemsFounded />
      ) : (
        table.getRowModel().rows.map((row) => (
          <TableRow key={row.id}>
            {row.getVisibleCells().map((cell) => (
              <TableCell key={cell.id}>{flexRender(cell.column.columnDef.cell, cell.getContext())} </TableCell>
            ))}
          </TableRow>
        ))
      )}
    </TableBody>
  );
}

export default ReactTableBody as typeof ReactTableBody;
