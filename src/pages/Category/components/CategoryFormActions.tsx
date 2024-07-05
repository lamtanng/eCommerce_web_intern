import BorderColorRoundedIcon from '@mui/icons-material/BorderColorRounded';
import { Row } from '@tanstack/react-table';
import ConfirmButton from '../../../components/elements/buttons/ConfirmButton';
import FormDialogButton from '../../../components/elements/buttons/DialogFormButton';
import { CategoryProps } from '../../../types/category.type';
import { useCategoryTable } from '../useCategoryTable';
import CategoryForm from './CategoryForm';

function ActionColumn({ row }: { row: Row<CategoryProps> }) {
  const { handleDeleteCategory, handleUpdateCategory } = useCategoryTable();
  return (
    <>
      <ConfirmButton onConfirm={() => handleDeleteCategory(row.original.id)} />
      <FormDialogButton dialogButton={<BorderColorRoundedIcon />} variant='text'>
        <CategoryForm handleSubmit={handleUpdateCategory} defaultValues={row.original} />
      </FormDialogButton>
    </>
  );
}

export default ActionColumn;
