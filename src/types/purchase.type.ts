interface PurchaseProps {
  id?: string;
  userId: string;
  productId: string;
  amount: number;
  totalPrice?: number;
  reviewNote: number;
  reviewComment: string;
  createdAt: string;
}
interface PurchaseGetRequestParams extends Partial<Pick<PurchaseProps, 'userId' | 'productId'>> {
  page?: number;
  offset?: number;
}
interface PurchaseReviewFormSchema extends Partial<Pick<PurchaseProps, 'id' | 'reviewNote' | 'reviewComment'>> {}
interface PurchaseFormSchema extends Pick<PurchaseProps, 'id' | 'productId' | 'amount'> {}

export type { PurchaseProps, PurchaseFormSchema, PurchaseGetRequestParams, PurchaseReviewFormSchema };
