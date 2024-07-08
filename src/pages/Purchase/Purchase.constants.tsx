import { createColumnHelper } from '@tanstack/react-table';
import * as yup from 'yup';
import {
  PurchaseFormSchema,
  PurchaseGetRequestParams,
  PurchaseProps,
  PurchaseReviewFormSchema,
} from '../../types/purchase.type';
import { formatDate } from '../../ultils/formatDate';
import { getRequiredMsg } from '../../ultils/getMessage';
import PurchaseTableAction from './components/table/PurchaseTableAction';

const purchaseSchema: yup.ObjectSchema<PurchaseFormSchema> = yup.object({
  id: yup.string(),
  productId: yup.string().required(getRequiredMsg('Product')),
  amount: yup.number().required(getRequiredMsg('Product')).min(1, 'Amount must be greater than 0'),
});

const reviewSchema: yup.ObjectSchema<PurchaseReviewFormSchema> = yup.object({
  id: yup.string(),
  reviewComment: yup.string().required(getRequiredMsg('Comment')),
  reviewNote: yup.number().required(getRequiredMsg('Rating')),
});

const purchaseDefault: PurchaseFormSchema = {
  productId: '',
  amount: 0,
};

const getPurchaseParams = (searchQuery?: string | undefined): PurchaseGetRequestParams => ({
  productId: searchQuery ?? undefined,
  userId: undefined,
  page: 1,
  offset: 5,
});

const columnHelper = createColumnHelper<PurchaseProps>();
const purchaseFormColumns = [
  {
    accessorKey: 'id',
    header: 'ID',
  },
  {
    accessorKey: 'userId',
    header: 'User',
  },
  {
    accessorKey: 'productId',
    header: 'Product',
  },
  {
    accessorKey: 'amount',
    header: 'Amount',
  },
  {
    accessorKey: 'totalPrice',
    header: 'Total',
  },
  {
    accessorKey: 'reviewNote',
    header: 'Review',
  },
  {
    accessorKey: 'reviewComment',
    header: 'Comment',
  },
  columnHelper.accessor((row) => row.createdAt, {
    id: 'createdAt',
    header: 'Created At',
    cell: ({ row }) => `${formatDate(row.original.createdAt)}`,
  }),
  columnHelper.display({
    id: 'actions',
    header: 'Actions',
    cell: ({ row }) => {
      return <PurchaseTableAction row={row} />;
    },
  }),
];

export { getPurchaseParams, purchaseDefault, purchaseFormColumns, purchaseSchema, reviewSchema };
