import { ImportCSVButton } from '../../../../components/elements/buttons/ImportCSVButton';
import { ReactTableProps } from '../../../../components/elements/reactTable/ReactTable.type';
import { ProductProps } from '../../../../types/product.type';
import useImportCSVButton from './useImportCSVButton';

export interface ImportCSVButtonProps<ProductProps> extends ReactTableProps<ProductProps> {}
export function ImportProductButton({ table }: ImportCSVButtonProps<ProductProps>) {
  const { handleFileChange } = useImportCSVButton({ table });
  return <ImportCSVButton handleFileChange={handleFileChange} />;
}
