import { FormActions } from '../../types/formActions.type';
import { PurchaseFormSchemaProps } from '../../types/purchase.type';

export interface PurchaseFormProps {
  defaultValues: PurchaseFormSchemaProps;
  action: FormActions;
}
