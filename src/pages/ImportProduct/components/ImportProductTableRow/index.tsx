import { FormHelperText, TableCell, TableRow } from '@mui/material';
import { Cell, flexRender, Row } from '@tanstack/react-table';
import { ProductProps } from '../../../../types/product.type';
import ImportProductTableAction from '../ImportProductTableActions';
import { useImportProductTableRow } from './useImportProductTableRow';

export default function ImportProductTableRow({ row }: { row: Row<ProductProps> }) {
  const { errors, register, handleAddProduct, productDefaults } = useImportProductTableRow({ row });
  const getCellId = (cell: Cell<ProductProps, unknown>) => cell.column.id;
  const getCellError = (cell: Cell<ProductProps, unknown>) => errors[getCellId(cell)];
  const productServerError = productDefaults.error;
  const hasError = !!Object.keys(errors).length ? true : !!productServerError;

  return (
    <>
      <TableRow className={`${hasError && 'border-l-4 border-red-500 bg-red-50'}`}>
        {row.getVisibleCells().map((cell) => (
          <>
            {cell.column.id === 'actions' ? (
              <TableCell key={cell.id} variant="body">
                <ImportProductTableAction
                  key={cell.id}
                  handleAddProduct={handleAddProduct}
                  row={row}
                  hasError={hasError}
                />
              </TableCell>
            ) : (
              <TableCell {...register(getCellId(cell))} key={cell.id} variant="body">
                {flexRender(cell.column.columnDef.cell, cell.getContext())}

                {getCellError(cell) && (
                  <FormHelperText error={!!getCellError(cell)}>{getCellError(cell).message}</FormHelperText>
                )}

                {productServerError && cell.column.id === 'name' && (
                  <FormHelperText error={!!productServerError}>{productServerError}</FormHelperText>
                )}
              </TableCell>
            )}
          </>
        ))}
      </TableRow>
    </>
  );
}
