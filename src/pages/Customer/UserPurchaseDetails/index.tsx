import { Box, Button, Divider, Link, Stack, Typography } from '@mui/material';
import { unwrapResult } from '@reduxjs/toolkit';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import MediaImage from '../../../components/elements/CardImage';
import { getPurchaseById } from '../../../redux/actions/purchase.action';
import { useAppDispatch } from '../../../redux/hooks';
import { PurchaseProps } from '../../../types/purchase.type';
import { formatDate } from '../../../ultils/formatDate';
import { productFeature } from '../../../constants/features/publicFeatures';
import { PageBreadcrumbs } from '../../../components/elements/Breadcrumbs';

export default function UserPurchaseDetails() {
  const { purchaseId } = useParams<{ purchaseId: string }>();
  const dispatch = useAppDispatch();
  const [purchase, setPurchase] = useState<PurchaseProps>({} as PurchaseProps);

  useEffect(() => {
    const getPurchaseDetails = async () => {
      const res = await dispatch(getPurchaseById(purchaseId));
      const purchaseDetails = unwrapResult(res);
      setPurchase(purchaseDetails);
    };

    getPurchaseDetails();
  }, []);
  return (
    <Box>
      <Stack direction="column" spacing={4} sx={{ position: 'relative' }}>
        <Stack spacing={2} direction="row" justifyContent="start" alignItems="center">
          <PageBreadcrumbs />
        </Stack>

        <div className="border-1 flex flex-col items-start gap-8 divide-x-8 divide-gray-200 overflow-hidden rounded-lg border-gray-500 p-10 shadow-md">
          <div className="flex flex-row items-start justify-start gap-8">
            <div className="">
              <MediaImage height={56} width={56} />
            </div>
            <div className="flex flex-col items-start gap-3">
              <Typography variant="body1" className="font-medium">
                Purchase ID: {purchase.id}
              </Typography>
              <Typography variant="body1" className="font-normal">
                {formatDate(purchase.createdAt)}
              </Typography>
            </div>
          </div>

          <Divider className="w-full" />

          <div className="flex flex-col items-start gap-4">
            <LinePurchaseInfo label="From" content="eCommerce Website" />
            <LinePurchaseInfo label="Reviews" content={purchase.reviewComment} />
            <LinePurchaseInfo label="Rating" content={purchase.reviewNote} />
          </div>

          <Divider className="w-full" />

          <div className="flex w-full flex-col items-start gap-5">
            <div className="flex w-full flex-row items-center justify-between">
              <Typography variant="body1" className="font-medium text-gray-500">
                Amount
              </Typography>
              <Typography variant="body1" className="font-semibold">
                {purchase.amount}
              </Typography>
            </div>
            <div className="flex w-full flex-row items-center justify-between">
              <Typography variant="body1" className="font-medium text-gray-500">
                Subtotal
              </Typography>
              <Typography variant="body1" className="font-semibold">
                $ {purchase.totalPrice}
              </Typography>
            </div>
          </div>

          <div className="mt-5 flex w-full flex-row justify-between">
            <Link variant="button" underline="none" href={productFeature.path} className="text-gray-500">
              <Button variant="outlined" color="primary">
                More product
              </Button>
            </Link>
            <Button variant="contained" color="primary">
              To repurchase
            </Button>
          </div>
        </div>
      </Stack>
    </Box>
  );
}

interface LinePurchaseInfoProps {
  label?: string;
  content?: string | number;
}

export function LinePurchaseInfo({ label, content }: LinePurchaseInfoProps) {
  return (
    <div className="flex flex-row items-center justify-between gap-24">
      <Typography variant="body1" className="font-medium text-gray-500">
        {label}
      </Typography>
      <Typography variant="body2" className="font-medium">
        {content}
      </Typography>
    </div>
  );
}
