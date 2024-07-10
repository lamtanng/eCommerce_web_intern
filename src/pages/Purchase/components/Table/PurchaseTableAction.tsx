import { Row } from '@tanstack/react-table';
import { lazy } from 'react';
import { Drawer } from '../../../../components/elements/Drawer';
import { removePurchase } from '../../../../redux/actions/purchase.action';
import { useAppDispatch } from '../../../../redux/hooks';
import { PurchaseProps, PurchaseReviewFormSchema } from '../../../../types/purchase.type';
import { ReviewForm } from '../ReviewForm';
import DialogFormButton from '../../../../components/elements/buttons/DialogFormButton';
import ConfirmButton from '../../../../components/elements/buttons/ConfirmButton';
const PurchaseForm = lazy(() => import('../PurchaseForm'));

export default function PurchaseTableAction({ row }: { row: Row<PurchaseProps> }) {
  const dispatch = useAppDispatch();
  const handleDeletePurchase = (id: PurchaseProps['id']) => {
    dispatch(removePurchase(id));
  };

  const defaultReview: PurchaseReviewFormSchema = {
    id: row.original.id,
    reviewComment: row.original.reviewComment,
    reviewNote: row.original.reviewNote,
  };

  return (
    <>
      <ConfirmButton onConfirm={() => handleDeletePurchase(row.original.id)} />
      <DialogFormButton>
        <PurchaseForm defaultValues={row.original} action="UPDATE" />
      </DialogFormButton>
      <Drawer>
        <ReviewForm defaultValues={defaultReview} />
      </Drawer>
    </>
  );
}
