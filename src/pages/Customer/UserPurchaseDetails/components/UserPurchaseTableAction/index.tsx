import { Row } from '@tanstack/react-table';
import { PurchaseProps, PurchaseReviewFormSchema } from '../../../../../types/purchase.type';
import { Drawer } from '../../../../../components/elements/Drawer';
import { ReviewForm } from '../../../../Purchase/components/ReviewForm';

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
