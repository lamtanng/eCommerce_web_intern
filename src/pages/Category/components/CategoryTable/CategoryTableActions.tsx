import { Row } from '@tanstack/react-table';
import ConfirmButton from '../../../../components/elements/buttons/ConfirmButton';
import DialogFormButton from '../../../../components/elements/buttons/DialogFormButton';
import { deleteCategory } from '../../../../redux/actions/category.actions';
import { useAppDispatch } from '../../../../redux/hooks';
import { CategoryProps } from '../../../../types/category.type';
import CategoryForm from '../CategoryForm';

function CategoryTableAction({ row }: { row: Row<CategoryProps> }) {
  const dispatch = useAppDispatch();
  const handleDeleteCategory = async (id: CategoryProps['id']) => {
    dispatch(deleteCategory(id));
  };

  return (
    <>
      <ConfirmButton onConfirm={() => handleDeleteCategory(row.original.id)} />
      <DialogFormButton>
        <CategoryForm action="UPDATE" defaultValues={row.original} />
      </DialogFormButton>
    </>
  );
}

export default CategoryTableAction;
