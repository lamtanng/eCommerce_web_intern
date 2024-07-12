import { Row } from '@tanstack/react-table';
import { lazy } from 'react';
import { Drawer } from '../../../../components/elements/Drawer';
import { removePurchase } from '../../../../redux/actions/purchase.action';
import { useAppDispatch } from '../../../../redux/hooks';
import { PurchaseProps, PurchaseReviewFormSchema } from '../../../../types/purchase.type';
import { ReviewForm } from '../ReviewForm';
import DialogFormButton from '../../../../components/elements/buttons/DialogFormButton';
import ConfirmButton from '../../../../components/elements/buttons/ConfirmButton';
import { getStoredAuth } from '../../../../ultils/authToken';
const PurchaseForm = lazy(() => import('../PurchaseForm'));
import PublicIcon from '@mui/icons-material/Public';
import { IconButton, Link } from '@mui/material';
import { purchaseFeature } from '../../../../constants/features/customerFeatures';

export default function PurchaseTableAction({ row }: { row: Row<PurchaseProps> }) {
  const dispatch = useAppDispatch();
  const role = getStoredAuth().userRole;
  const handleDeletePurchase = (id: PurchaseProps['id']) => {
    dispatch(removePurchase(id));
  };

  const defaultReview: PurchaseReviewFormSchema = {
    id: row.original.id,
    reviewComment: row.original.reviewComment,
    reviewNote: row.original.reviewNote,
  };

  return (
    <div className="w-fit">
      {role === 'ADMIN' && <ConfirmButton onConfirm={() => handleDeletePurchase(row.original.id)} />}
      {role === 'ADMIN' && (
        <DialogFormButton>
          <PurchaseForm defaultValues={row.original} action="UPDATE" />
        </DialogFormButton>
      )}

      {role === 'USER' && (
        <Drawer>
          <ReviewForm defaultValues={defaultReview} />
        </Drawer>
      )}

      <Link
        target="_blank"
        underline="none"
        className="text-black"
        href={`http://localhost:5173${purchaseFeature.path}/${row.original.id}`}
      >
        <IconButton color="primary" aria-label="add to shopping cart">
          <PublicIcon />
        </IconButton>
      </Link>
    </div>
  );
}
