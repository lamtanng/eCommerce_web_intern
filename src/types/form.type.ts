import { FormActions } from './formActions.type';

export interface FormProps<TSchema> {
  defaultValues: TSchema;
  action: FormActions;
}
