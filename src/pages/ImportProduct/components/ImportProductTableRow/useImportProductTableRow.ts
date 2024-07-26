import { Row } from '@tanstack/react-table';
import { useEffect } from 'react';
import { createImportedProduct } from '../../../../redux/actions/importedProduct.actions';
import { useAppDispatch } from '../../../../redux/hooks';
import { setTriggeredProduct } from '../../../../redux/slices/importedProduct.slice';
import { ProductProps } from '../../../../types/product.type';
import { useTableForm } from '../../hooks';

export function useImportProductTableRow({ row }: { row: Row<ProductProps> }) {
  const dispatch = useAppDispatch();
  const { trigger, errors, register, productDefaults } = useTableForm({
    row,
  });
  const isTriggered = productDefaults.triggered;

  useEffect(() => {
    const createProduct = async () => {
      const isValidProduct = await trigger();
      if (isTriggered && isValidProduct) {
        dispatch(createImportedProduct(productDefaults));
      }
    };

    createProduct();
    return () => {
      dispatch(setTriggeredProduct({ id: productDefaults.id, triggered: false }));
    };
  }, [isTriggered]);

  const handleAddProduct = async () => {
    dispatch(setTriggeredProduct({ id: productDefaults.id, triggered: true }));
  };

  return { errors, register, handleAddProduct, productDefaults };
}
