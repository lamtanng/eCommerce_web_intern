import AddCircleRoundedIcon from '@mui/icons-material/AddCircleRounded';
import BorderColorRoundedIcon from '@mui/icons-material/BorderColorRounded';
import { Button, Tooltip } from '@mui/material';
import { lazy } from 'react';
import DialogFormButton from '../../../../components/elements/buttons/DialogFormButton';
import { ImportProductTableActionProps } from '../../ImportProduct.types';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import { useAppDispatch } from '../../../../redux/hooks';
import { removeImportedProducts } from '../../../../redux/slices/importedProduct.slice';
const ImportProductForm = lazy(() => import('../UpdateForm'));

export default function ImportProductTableAction({ row, handleAddProduct, hasError }: ImportProductTableActionProps) {
  return (
    <>
      <DialogFormButton dialogButton={<BorderColorRoundedIcon />}>
        <ImportProductForm row={row} />
      </DialogFormButton>
      <CreateProductButton row={row} handleAddProduct={handleAddProduct} hasError={hasError} />
      <RemoveProductButton row={row} />
    </>
  );
}

function CreateProductButton({ handleAddProduct, hasError }: ImportProductTableActionProps) {
  return (
    <Tooltip title="Create product" arrow>
      <Button
        variant="text"
        onClick={handleAddProduct}
        className={`${hasError ? 'text-gray-300' : 'text-green-500'}`}
        disabled={hasError ? true : false}
      >
        <AddCircleRoundedIcon />
      </Button>
    </Tooltip>
  );
}

function RemoveProductButton({ row }: Pick<ImportProductTableActionProps, 'row'>) {
  const dispatch = useAppDispatch();
  const handleRemoveProduct = () => {
    dispatch(removeImportedProducts(row.original));
  };
  return (
    <Tooltip title="Remove product" arrow>
      <Button variant="text" onClick={handleRemoveProduct} className="text-red-500">
        <HighlightOffIcon />
      </Button>
    </Tooltip>
  );
}
