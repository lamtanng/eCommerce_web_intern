import AddCircleRoundedIcon from '@mui/icons-material/AddCircleRounded';
import BorderColorRoundedIcon from '@mui/icons-material/BorderColorRounded';
import { Button, Tooltip } from '@mui/material';
import { lazy } from 'react';
import DialogFormButton from '../../../../components/elements/buttons/DialogFormButton';
import { ImportProductTableActionProps } from '../../ImportProduct.types';
const ImportProductForm = lazy(() => import('../UpdateForm'));

export default function ImportProductTableAction({ row, handleAddProduct, hasError }: ImportProductTableActionProps) {
  return (
    <>
      <DialogFormButton dialogButton={<BorderColorRoundedIcon />}>
        <ImportProductForm row={row} />
      </DialogFormButton>
      <CreateProductButton row={row} handleAddProduct={handleAddProduct} hasError={hasError} />
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
