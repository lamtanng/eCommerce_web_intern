import { yupResolver } from '@hookform/resolvers/yup';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { fetchProductList } from '../../../redux/actions/product.actions';
import { createPurchase } from '../../../redux/actions/purchase.action';
import { useAppDispatch, useAppSelector } from '../../../redux/hooks';
import { productSelector } from '../../../redux/slices/product.slice';
import { PurchaseFormSchemaProps } from '../../../types/purchase.type';
import { MultiSelectData } from '../../../types/selector.type';
import convertToSelectData from '../../../ultils/convertToSelectData';
import { purchaseSchema } from '../Purchase.constants';
import { PurchaseFormProps } from '../Purchase.type';

export const usePurchaseForm = ({ defaultValues, action }: PurchaseFormProps) => {
  const dispatch = useAppDispatch();
  const { productList } = useAppSelector(productSelector);
  const {
    control,
    handleSubmit,
    reset,
    formState: { isSubmitting, isDirty },
  } = useForm<PurchaseFormSchemaProps>({
    resolver: yupResolver(purchaseSchema),
    defaultValues,
    shouldUnregister: true,
  });

  useEffect(() => {
    dispatch(fetchProductList());
  }, []);

  const onSubmit = async (data: PurchaseFormSchemaProps) => {
    action === 'UPDATE' ? handleUpdatePurchase(data) : handleCreatePurchase(data);
  };
  const handleUpdatePurchase = async (data: PurchaseFormSchemaProps) => {
    console.log(data);
  };

  const handleCreatePurchase = async (data: PurchaseFormSchemaProps) => {
    console.log(data);
    dispatch(createPurchase(data));
  };

  const onReset = () => reset(defaultValues);

  const productData: MultiSelectData[] = convertToSelectData({
    data: productList,
    valueField: 'id',
    nameField: 'name',
  });
  return { handleSubmit, onSubmit, control, isSubmitting, isDirty, onReset, productData };
};
