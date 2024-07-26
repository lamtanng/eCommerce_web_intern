import { Row } from '@tanstack/react-table';
import { ReactTableProps } from '../../components/elements/reactTable/ReactTable.type';
import { ProductProps } from '../../types/product.type';
import { SubmitButtonProps } from '../../components/elements/buttons/SubmitButton';
import { MouseEventHandler } from 'react';

export interface ImportProductTableBodyProps extends ReactTableProps<ProductProps> {}
export interface ImportCSVButtonProps<ProductProps> extends ReactTableProps<ProductProps> {}
export interface ImportProductTableActionProps extends SubmitButtonProps {
  row: Row<ProductProps>;
  handleAddProduct: MouseEventHandler<HTMLButtonElement>;
  hasError: boolean;
}
