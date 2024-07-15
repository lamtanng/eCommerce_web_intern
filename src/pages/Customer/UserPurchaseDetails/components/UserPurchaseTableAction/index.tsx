import { Row } from '@tanstack/react-table';
import { PurchaseProps, PurchaseReviewFormSchema } from '../../../../../types/purchase.type';
import { ReviewForm } from '../../../../Purchase/components/ReviewForm';
import Drawer from '../../../../../components/elements/Drawer';

export default function UserPurchaseTableAction({ row }: { row: Row<PurchaseProps> }) {
  const defaultReview: PurchaseReviewFormSchema = {
    id: row.original.id,
    reviewComment: row.original.reviewComment,
    reviewNote: row.original.reviewNote,
  };

  return (
    <>
      <Drawer>
        <ReviewForm defaultValues={defaultReview} />
      </Drawer>
    </>
  );
}
