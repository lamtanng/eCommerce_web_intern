import { yupResolver } from '@hookform/resolvers/yup';
import { FormHelperText, TableCell, TableRow } from '@mui/material';
import { Cell, flexRender, Row } from '@tanstack/react-table';
import { useForm } from 'react-hook-form';
import { ProductFormSchema, ProductProps } from '../../../../types/product.type';
import { productSchema } from '../../../Product/Product.constants';
import ImportProductTableAction from '../ImportProductTableActions';

export default function ImportProductTableRow({ row }: { row: Row<ProductProps> }) {
  const {
    trigger,
    register,
    formState: { errors },
  } = useForm<ProductFormSchema>({
    resolver: yupResolver(productSchema),
    values: row.original,
    shouldUnregister: true,
  });
  const getColumnId = (cell: Cell<ProductProps, unknown>) => cell.column.id;

  return (
    <TableRow key={row.id} className={`${Object.keys(errors).length && 'border-l-4 border-red-500 bg-red-50'}`}>
      {row.getVisibleCells().map((cell) => (
        <>
          {cell.column.id === 'actions' ? (
            <TableCell key={cell.id} variant="body">
              <ImportProductTableAction trigger={trigger} row={row} />
            </TableCell>
          ) : (
            <TableCell {...register(getColumnId(cell))} key={cell.id} variant="body">
              {flexRender(cell.column.columnDef.cell, cell.getContext())}

              {errors[getColumnId(cell)] && (
                <FormHelperText error={!!errors[getColumnId(cell)]}>{errors[getColumnId(cell)].message}</FormHelperText>
              )}
            </TableCell>
          )}
        </>
      ))}
    </TableRow>
  );
}
