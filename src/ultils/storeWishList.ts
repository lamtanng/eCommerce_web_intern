import { WishListProps } from '../types/wishList.type';
import { getStoredAuth } from './authToken';

const getStoredUserId = () => localStorage.getItem('userId') || '';
const getAccessToken = () => getStoredAuth()?.accessToken;
const getWishlistKey = () => (!!getStoredUserId() && !!getAccessToken() ? `wishlist_${getStoredUserId()}` : `wishlist`);
const getWishList = () => {
  return JSON.parse(localStorage.getItem(getWishlistKey()) || '[]') as WishListProps;
};
const setWishList = (wishList: WishListProps) => {
  localStorage.setItem(getWishlistKey(), JSON.stringify(wishList));
};
export const storedWishList = { getWishList, setWishList };
