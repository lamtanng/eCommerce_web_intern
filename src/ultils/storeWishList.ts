import { get, uniq } from 'lodash';
import { relatedProductsKey, userIDKey, wishListKey } from '../constants/localStorageKeys';
import { ProductURLsProps } from '../types/wishList.type';
import { getStoredAuth } from './authToken';

const getStoredUserId = () => localStorage.getItem(userIDKey) || '';
const getAccessToken = () => getStoredAuth()?.accessToken;
const getLocalStorageKey = (localStorageKeys: string) =>
  !!getStoredUserId() && !!getAccessToken() ? `${localStorageKeys}_${getStoredUserId()}` : localStorageKeys;
const getDataFromStorageKeys = (localStorageKeys: string) => {
  return JSON.parse(localStorage.getItem(getLocalStorageKey(localStorageKeys)) || '[]') as ProductURLsProps;
};

//wish list
const getWishList = () => getDataFromStorageKeys(wishListKey);
const setWishList = (wishList: ProductURLsProps) => {
  localStorage.setItem(getLocalStorageKey(wishListKey), JSON.stringify(wishList));
};

//related products
const getRelatedProducts = () => getDataFromStorageKeys(relatedProductsKey);
const setRelatedProducts = (relatedProducts: ProductURLsProps) => {
  localStorage.setItem(getLocalStorageKey(relatedProductsKey), JSON.stringify(uniq(relatedProducts)));
};

export const storedWishList = { getWishList, setWishList };
export const storedRelatedProducts = { getRelatedProducts, setRelatedProducts };
