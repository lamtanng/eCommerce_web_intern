import { Box, Button, Divider, Link, Rating, Stack, Typography } from '@mui/material';
import { ReactNode, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { purchaseApi } from '../../../apis/purchase.api';
import { PageBreadcrumbs } from '../../../components/elements/Breadcrumbs';
import ProductCardImage from '../../../components/elements/CardImage';
import { productFeature } from '../../../constants/features/publicFeatures';
import { PurchaseProps } from '../../../types/purchase.type';
import { formatDate } from '../../../ultils/formatDate';
import useStateRef from 'react-usestateref';

export default function UserPurchaseDetails() {
  const { purchaseId } = useParams<{ purchaseId: string }>();
  const [purchase, setPurchase] = useStateRef<PurchaseProps>({} as PurchaseProps);

  useEffect(() => {
    const getPurchaseDetails = async () => {
      const res = await purchaseApi.getById(purchaseId);
      setPurchase(res.data);
    };

    getPurchaseDetails();
  }, []);
  console.log(purchase);

  return (
    <Box>
      <Stack direction="column" spacing={4} sx={{ position: 'relative' }}>
        <Stack spacing={2} direction="row" justifyContent="start" alignItems="center" className="hidden md:flex">
          <PageBreadcrumbs />
        </Stack>

        <div className="border-1 mt-0 flex flex-col items-start gap-8 divide-x-8 divide-gray-200 overflow-hidden rounded-lg border-gray-500 p-5 shadow-md md:mt-5 md:p-10">
          <div className="flex flex-row items-start justify-start gap-8">
            <div className="hidden md:block">
              <ProductCardImage height={56} width={56} />
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

          <div className="flex w-full flex-col items-start gap-4">
            <LinePurchaseInfo label="From" content="eCommerce Website" />
            <LinePurchaseInfo label="Reviews" content={purchase.reviewComment} />
            <LinePurchaseInfo label="Rating" content={<Rating value={purchase.reviewNote} readOnly />} />
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

          <div className="mt-5 flex w-full flex-col-reverse justify-between gap-4 md:flex-row">
            <Link variant="button" underline="none" href={productFeature.path} className="w-full text-gray-500">
              <Button variant="outlined" color="primary" className="max-sm:w-full">
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
  content?: string | number | ReactNode;
}

export function LinePurchaseInfo({ label, content }: LinePurchaseInfoProps) {
  return (
    <div className="flex w-full flex-row items-center">
      <Typography variant="body1" className="basis-1/2 font-medium text-gray-500">
        {label}
      </Typography>
      <Typography variant="body2" className="basis-1/2 text-right font-medium">
        {content}
      </Typography>
    </div>
  );
}
