import { Row } from '@tanstack/react-table';
import ConfirmButton from '../../../../components/elements/buttons/ConfirmButton';
import FormDialogButton from '../../../../components/elements/buttons/DialogFormButton';
import { deleteCategory } from '../../../../redux/actions/category.actions';
import { useAppDispatch } from '../../../../redux/hooks';
import { CategoryProps } from '../../../../types/category.type';
import CategoryForm from '../form/CategoryForm';

function CategoryTableAction({ row }: { row: Row<CategoryProps> }) {
  const dispatch = useAppDispatch();
  const handleDeleteCategory = async (id: CategoryProps['id']) => {
    dispatch(deleteCategory(id));
  };

  return (
    <>
      <ConfirmButton onConfirm={() => handleDeleteCategory(row.original.id)} />
      <FormDialogButton>
        <CategoryForm action="UPDATE" defaultValues={row.original} />
      </FormDialogButton>
    </>
  );
}

export default CategoryTableAction;
