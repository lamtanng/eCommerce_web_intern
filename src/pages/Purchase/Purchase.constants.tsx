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
import PurchaseTableAction from './components/Table/PurchaseTableAction';
import { Link, Rating } from '@mui/material';
import { ControlledStarRating } from '../../components/elements/controlledComponents/ControlledStarRating';

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
  columnHelper.accessor((row) => row.id, {
    id: 'id',
    header: 'Purchase ID',
    cell: ({ row }) => (
      <Link
        underline="none"
        target="_blank"
        className="text-black"
        href={`http://localhost:5173/purchases/${row.original.id}`}
      >
        {row.original.id}
      </Link>
    ),
  }),
  columnHelper.accessor((row) => row.user.email, {
    id: 'userEmail',
    header: 'User Email',
    cell: ({ row }) => <span>{row.original.user.email} </span>,
  }),
  columnHelper.accessor((row) => row.product.name, {
    id: 'productName',
    header: 'Product',
    cell: ({ row }) => <span className="capitalize">{row.original.product.name} </span>,
  }),
  {
    accessorKey: 'amount',
    header: 'Amount',
  },
  {
    accessorKey: 'totalPrice',
    header: 'Total',
  },

  columnHelper.accessor((row) => row.reviewNote, {
    id: 'reviewNote',
    header: 'Rating',
    cell: ({ row }) => <Rating value={row.original.reviewNote} readOnly />,
  }),
  columnHelper.accessor((row) => row.reviewComment, {
    id: 'reviewComment',
    header: 'Comment',
    cell: ({ row }) => <span className="line-clamp-2">{row.original.reviewComment}</span>,
  }),
  columnHelper.accessor((row) => `${formatDate(row.createdAt)}`, {
    id: 'createdAt',
    header: 'Created At',
  }),
  columnHelper.display({
    id: 'actions',
    header: 'Actions',
    enableResizing: true,
    cell: ({ row }) => {
      return <PurchaseTableAction row={row} />;
    },
  }),
];

export { getPurchaseParams, purchaseDefault, purchaseFormColumns, purchaseSchema, reviewSchema };
