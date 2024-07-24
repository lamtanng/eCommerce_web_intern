import { createColumnHelper } from '@tanstack/react-table';
import currency from 'currency.js';
import { difference, every, isNaN, isString, map, split, trim } from 'lodash';
import { ProductProps } from '../../types/product.type';
import { displayInfo } from '../../ultils/displayToast';

const requiredFields = ['name', 'basePrice'];
const columnHelper = createColumnHelper<ProductProps>();
export const importProductColumnDefs = [
  {
    accessorKey: 'name',
    header: 'Product Name',
  },
  {
    accessorKey: 'basePrice',
    header: 'Price($)',
  },
  {
    accessorKey: 'discountPercentage',
    header: 'Discount(%)',
  },
  {
    accessorKey: 'stock',
    header: 'Stock',
  },
  columnHelper.accessor((row) => `${row.categories?.map(({ name }) => name).join(', ')}`, {
    id: 'categories',
    header: 'Categories',
    cell: ({ row }) => `${row.original.categories?.map(({ name }) => name).join(', ')}`,
  }),
  columnHelper.display({
    id: 'actions',
    header: 'Actions',
  }),
];

export const isNumberField = (fieldValue: string, index: number, fieldName: string) => {
  const value = fieldValue ? fieldValue : '0';
  if (isNaN(+value)) {
    displayInfo(`Error at line ${index + 1}: ${fieldName} must be a number`);
    return false;
  } else return true;
};

export const isStringField = (fieldValue: string, index: number, fieldName: string) => {
  const value = fieldValue ? fieldValue : '';
  if (!isString(value)) {
    displayInfo(`Error at line ${index + 1}: ${fieldName} must be a string`);
    return false;
  } else return true;
};

const formatToNumber = (value: any) => (+value ? +value : 0);

const formatToUSD = (value: any) => {
  return currency(+value, { separator: '.', errorOnInvalid: true, pattern: `#` }).dollars();
};

const formatToCategories = (categoryString: string) =>
  map(split(categoryString, ','), (category) => ({ name: trim(category) }));

//format data
export const formatProductData = (data: any[]) => {
  const result = map(data, (product: any, index) => {
    return {
      ...product,
      id: index,
      basePrice: formatToUSD(product.basePrice),
      discountPercentage: formatToNumber(product.discountPercentage),
      stock: formatToNumber(product.stock),
      categories: formatToCategories(product.categories),
    };
  });
  return result;
};

//check invalid headers
export const hasInvalidHeaders = (headerArray: string[], tableHeaders: any[]) => {
  const differenceHeaders = difference(headerArray, tableHeaders);
  if (differenceHeaders.length > 0) {
    displayInfo(`Invalid fields : ${differenceHeaders.join(', ')}`);
    return true;
  }
  return false;
};

//check required headers
export const hasRequiredHeaders = (headerArray: string[]) => {
  const missingKeys = difference(requiredFields, headerArray);
  if (missingKeys.length > 0) {
    displayInfo(`Missing required fields: ${missingKeys.join(', ')}`);
    return false;
  } else return true;
};

//check min-max items
export const isValidAmount = (valueArray: any[]) => {
  if (valueArray.length < 1) {
    displayInfo('Please import at least 1 item');
    return false;
  }
  if (valueArray.length > 10) {
    displayInfo('Please import at most 10 items');
    return false;
  }
  return true;
};

//check data type
export const isValidDataType = (valueArray: any[]): boolean => {
  const isValid = every(valueArray, ({ name, basePrice, discountPercentage, stock, categories }, index) => {
    if (
      !isStringField(name, index, 'name') ||
      !isStringField(categories, index, 'categories') ||
      !isNumberField(basePrice, index, 'basePrice') ||
      !isNumberField(discountPercentage, index, 'discountPercentage') ||
      !isNumberField(stock, index, 'stock')
    )
      return false;
    else return true;
  });
  return isValid;
};
