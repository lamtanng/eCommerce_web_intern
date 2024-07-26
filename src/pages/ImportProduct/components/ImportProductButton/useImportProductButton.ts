import { filter, map } from 'lodash';
import Papa from 'papaparse';
import { useAppDispatch } from '../../../../redux/hooks';
import { importProducts } from '../../../../redux/slices/importedProduct.slice';
import { ProductProps } from '../../../../types/product.type';
import {
  formatProductData,
  hasInvalidHeaders,
  hasRequiredHeaders,
  isValidAmount,
  isValidDataType,
} from '../../ImportProduct.constants';
import { ImportCSVButtonProps } from '../../ImportProduct.types';

export default function useImportProductButton({ table }: ImportCSVButtonProps<ProductProps>) {
  const dispatch = useAppDispatch();
  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      Papa.parse(file, {
        header: true,
        skipEmptyLines: true,
        complete: (result) => {
          const headerArray: any[] = [];
          const valueArray: any[] = [];

          result.data.map((row: any) => {
            headerArray.push(Object.keys(row));
            valueArray.push(Object.values(row));
          });

          if (
            isValidAmount(valueArray) &&
            !hasInvalidHeaders(headerArray[0], getTableHeaders()) &&
            hasRequiredHeaders(headerArray[0]) &&
            isValidDataType(result.data)
          ) {
            const formattedProduct = formatProductData(result.data);
            dispatch(importProducts(formattedProduct));
          }
        },
      });
    }
  };

  const getTableHeaders = () => {
    const tableHeaders = filter(map(table.getHeaderGroups(), 'headers')[0], (header) => header.id !== 'actions');
    const tableHeaderIDs = map(tableHeaders, 'id');
    return tableHeaderIDs;
  };

  return { handleFileChange };
}
