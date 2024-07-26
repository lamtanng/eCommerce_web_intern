import { ImportCSVButton } from '../../../../components/elements/buttons/ImportCSVButton';
import { ProductProps } from '../../../../types/product.type';
import { ImportCSVButtonProps } from '../../ImportProduct.types';
import useImportCSVButton from './useImportProductButton';

export function ImportProductButton({ table }: ImportCSVButtonProps<ProductProps>) {
  const { handleFileChange } = useImportCSVButton({ table });
  return <ImportCSVButton handleFileChange={handleFileChange} />;
}
