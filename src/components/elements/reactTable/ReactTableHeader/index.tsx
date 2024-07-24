import { TableCell, TableHead, TableRow, TextField } from '@mui/material';
import { flexRender, RowData } from '@tanstack/react-table';
import { ReactTableProps } from '../ReactTable.type';

interface ReactTableHeaderProps<TData extends RowData> extends ReactTableProps<TData> {}

function ReactTableHeader<TData extends RowData>({ table, filterColumns }: ReactTableHeaderProps<TData>) {
  return (
    <TableHead>
      {table.getHeaderGroups().map((headerGroup) => (
        <TableRow key={headerGroup.id}>
          {headerGroup.headers.map((header) => (
            <TableCell key={header.id}>
              {header.placeholderId ? null : flexRender(header.column.columnDef.header, header.getContext())}
              <br />
              {filterColumns &&
                filterColumns?.length > 0 &&
                filterColumns?.map((columnId, i) => {
                  if (header.column.id === String(columnId)) {
                    return (
                      <TextField
                        key={i}
                        value={header.column.getFilterValue()}
                        onChange={(e) => {
                          header.column.setFilterValue(e.target.value);
                          // debounce(() => header.column.setFilterValue(e.target.value), 800);
                        }}
                        hiddenLabel
                        variant="outlined"
                        size="small"
                        placeholder={`${header.column.columnDef.header}...`}
                      />
                    );
                  }
                })}
            </TableCell>
          ))}
        </TableRow>
      ))}
    </TableHead>
  );
}

export default ReactTableHeader as typeof ReactTableHeader;
