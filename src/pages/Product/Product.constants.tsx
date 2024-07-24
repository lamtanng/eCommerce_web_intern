import { Link } from '@mui/material';
import { createColumnHelper } from '@tanstack/react-table';
import * as yup from 'yup';
import { ReactTableProps } from '../../components/elements/reactTable/ReactTable.type';
import { productFeature } from '../../constants/features/publicFeatures';
import { getPaginationParams } from '../../constants/pagination';
import { GetAllProductParams, ProductFormSchema, ProductProps } from '../../types/product.type';
import { formatDate } from '../../ultils/formatDate';
import { getRequiredMsg } from '../../ultils/getMessage';
import ProductTableAction from './Components/ProductTable/ProductTableAction';
import { ImageButton } from './Components/UploadImageButton';

const getProductURLParams = ({ productName }: GetAllProductParams): GetAllProductParams => ({
  ...getPaginationParams({}),
  productName,
});

const productSchema: yup.ObjectSchema<ProductFormSchema> = yup.object({
  id: yup.string(),
  name: yup.string().required(getRequiredMsg('Name')),
  basePrice: yup.number().required(getRequiredMsg('Price')),
  stock: yup.number().min(0, 'Stock must be greater than or equal to 0').default(0),
  discountPercentage: yup
    .number()
    .min(0, 'Discount percentage must be between 0 and 100')
    .max(100, 'Discount percentage must be between 0 and 100')
    .default(0),
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
  columnHelper.accessor((row) => `http://${row.picture}`, {
    id: 'picture',
    header: 'Picture',
    cell: ({ row }) => <ImageButton row={row} />,
  }),
  {
    accessorKey: 'name',
    header: 'Product Name',
  },
  columnHelper.accessor((row) => `http://localhost:5173${productFeature.path}/${row.urlName}`, {
    id: 'urlName',
    header: 'URL',
    cell: ({ row }) => (
      <Link
        underline="none"
        target="_blank"
        href={`http://localhost:5173${productFeature.path}/${row.original.urlName}`}
      >
        http://localhost:5173{productFeature.path}/{row.original.urlName}
      </Link>
    ),
  }),
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
  columnHelper.accessor((row) => `${formatDate(row.createdAt)}`, {
    id: 'createdAt',
    header: 'Created At',
    cell: ({ row }) => `${formatDate(row.original.createdAt)}`,
  }),
  columnHelper.accessor((row) => `${row.categories?.map(({ name }) => name).join(', ')}`, {
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

const productFilterColumns: ReactTableProps<ProductProps>['filterColumns'] = ['id'];
const productFileName = 'products';

export { columnDefs, getProductURLParams, productDefaultValue, productFileName, productFilterColumns, productSchema };
