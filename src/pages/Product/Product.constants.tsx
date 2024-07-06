import * as yup from 'yup';
import { getRequiredMsg } from '../../ultils/getRequiredMsg';
import { createColumnHelper } from '@tanstack/react-table';
import { ProductFormSchemaProps, ProductProps } from '../../types/product.type';
import ProductTableAction from './Components/Table/ProductTableAction';

const getProductParams = (searchQuery: string | undefined) => ({
  productName: searchQuery ?? '',
  page: 1,
  offset: 5,
});

const productSchema: yup.ObjectSchema<ProductFormSchemaProps> = yup.object({
  id: yup.string(),
  name: yup.string().required(getRequiredMsg('Name')),
  basePrice: yup.number().required(getRequiredMsg('Price')),
  stock: yup.number(),
  discountPercentage: yup.number(),
  categories: yup.array(),
  description: yup.string(),
});

const productDefaultValue: ProductFormSchemaProps = {
  id: '',
  name: '',
  basePrice: 0,
  stock: 0,
  discountPercentage: 0,
  categories: [],
  description: '',
};

const columnHelper = createColumnHelper<ProductProps>();
const columnDefs = [
  {
    accessorKey: 'id',
    header: 'ID',
  },
  {
    accessorKey: 'name',
    header: 'Category Name',
  },
  {
    accessorKey: 'urlName',
    header: 'URL',
  },
  {
    accessorKey: 'basePrice',
    header: 'Price',
  },
  {
    accessorKey: 'discountPercentage',
    header: 'Discount',
  },
  {
    accessorKey: 'stock',
    header: 'Stock',
  },
  {
    accessorKey: 'createdAt',
    header: 'Created At',
  },
  columnHelper.accessor((row) => row.categories, {
    id: 'categories',
    header: 'Categories',
    cell: ({ row }) => `${row.original.categories?.map((cate) => cate.name).join(', ')}`,
  }),
  columnHelper.display({
    id: 'actions',
    header: 'Actions',
    cell: ({ row }) => {
      return <ProductTableAction row={row} />;
    },
  }),
];

export { productSchema, columnDefs, productDefaultValue, getProductParams };
