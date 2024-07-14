import { Link, Typography } from '@mui/material';
import { unwrapResult } from '@reduxjs/toolkit';
import { useCallback, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { loginFeature } from '../../../constants/features/publicFeatures';
import { getProductByURL } from '../../../redux/actions/product.actions';
import { createPurchase } from '../../../redux/actions/purchase.action';
import { useAppDispatch, useAppSelector } from '../../../redux/hooks';
import { productSelector } from '../../../redux/slices/product.slice';
import { ProductProps } from '../../../types/product.type';
import { PurchaseFormSchema } from '../../../types/purchase.type';
import { ProductURLsProps } from '../../../types/wishList.type';
import { getStoredAuth } from '../../../ultils/authToken';
import { displayInfo, displaySuccess } from '../../../ultils/displayToast';
import { getNumbersFromString } from '../../../ultils/getNumbersFromString';
import { handleError } from '../../../ultils/handleError';
import { storedRelatedProducts } from '../../../ultils/storeWishList';

export interface StoredUser {
  wishlist: ProductURLsProps;
  relatedProducts: ProductURLsProps;
}

export default function useProductDetails() {
  const { productUrl } = useParams<{ productUrl: string }>();
  const { error, loading, productList } = useAppSelector(productSelector);
  const dispatch = useAppDispatch();
  const [amount, setAmount] = useState<number>(0);
  const { getRelatedProducts, setRelatedProducts } = storedRelatedProducts;
  const auth = getStoredAuth();
  const navigate = useNavigate();
  const [product, setProduct] = useState<ProductProps>(
    (productList.find((product) => product.urlName === productUrl) as ProductProps) ?? {},
  );

  useEffect(() => {
    const getProductDetails = async () => {
      try {
        await dispatch(getProductByURL(productUrl));
        setAmount(Number(product.stock) > 0 ? 1 : 0);
      } catch (error) {
        handleError(error);
      }
    };
    getProductDetails();
    return () => {
      //prevent displayed product details before exit page
      !!productUrl && setRelatedProducts([...getRelatedProducts(), productUrl]); //set related products to local storage
    };
  }, []);

  const handleCreatePurchase = async () => {
    let data = { id: '', amount: amount, productId: String(product.id) } as PurchaseFormSchema;
    if (!auth.accessToken) {
      navigate(loginFeature.path);
    } else if (data.amount > Number(product.stock)) {
      displayInfo('Out of stock');
    } else if (data.amount < 1) {
      displayInfo('Please select at least 1 product');
    } else {
      try {
        const res = await dispatch(createPurchase(data));
        const purchase = unwrapResult(res);

        displaySuccess(
          <div className="">
            <Typography variant="body1">Successfully</Typography>
            <Link href={`/purchases/${purchase.id}`} className="italic text-white underline">
              <span>Clink here to view your purchase!</span>
            </Link>
          </div>,
        );
      } catch (rejectedValueOrSerializedError) {
        handleError(rejectedValueOrSerializedError);
      }
    }
  };

  const handleAmountChange = (value: string) => {
    const amountNumber = getNumbersFromString(value);
    setAmount((prev) => amountNumber);
  };

  useCallback(() => handleCreatePurchase, []);
  return { productUrl, error, loading, handleCreatePurchase, handleAmountChange, amount, productList };
}
