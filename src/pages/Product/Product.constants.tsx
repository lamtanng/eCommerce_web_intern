import { createColumnHelper } from '@tanstack/react-table';
import * as yup from 'yup';
import { GetAllProductParams, ProductFormSchema, ProductProps } from '../../types/product.type';
import { formatDate } from '../../ultils/formatDate';
import { getRequiredMsg } from '../../ultils/getMessage';
import ProductTableAction from './Components/ProductTable/ProductTableAction';
import { getPaginationParams } from '../../constants/pagination';

const getProductURLParams = ({ productName }: GetAllProductParams): GetAllProductParams => ({
  ...getPaginationParams({}),
  productName,
});

const productSchema: yup.ObjectSchema<ProductFormSchema> = yup.object({
  id: yup.string(),
  name: yup.string().required(getRequiredMsg('Name')),
  basePrice: yup.number().required(getRequiredMsg('Price')),
  stock: yup.number(),
  discountPercentage: yup.number(),
  categories: yup.array(),
  description: yup.string(),
});

const productDefaultValue: ProductFormSchema = {
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
  columnHelper.accessor((row) => row.createdAt, {
    id: 'createdAt',
    header: 'Created At',
    cell: ({ row }) => `${formatDate(row.original.createdAt)}`,
  }),
  columnHelper.accessor((row) => row.categories, {
    id: 'categories',
    header: 'Categories',
    cell: ({ row }) => `${row.original.categories?.map(({ name }) => name).join(', ')}`,
  }),
  columnHelper.display({
    id: 'actions',
    header: 'Actions',
    cell: ({ row }) => {
      return <ProductTableAction row={row} />;
    },
  }),
];

export { columnDefs, productDefaultValue, productSchema, getProductURLParams };
