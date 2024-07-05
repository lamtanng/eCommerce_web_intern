import { SubmitHandler } from "react-hook-form";
import { CategoryProps } from "../../types/category.type";

export type CategorySchemaProps = Pick<CategoryProps, 'name'>;

export interface CategoryFormProps {
    handleSubmit: SubmitHandler<CategorySchemaProps>;
    defaultValues?: CategorySchemaProps;
  }