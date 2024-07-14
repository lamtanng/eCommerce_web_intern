import { createSlice } from '@reduxjs/toolkit';
import { storedWishList } from '../../ultils/storeWishList';
import { RootState } from '../store';
import { ProductURLsProps } from '../../types/wishList.type';

const { getWishList, setWishList } = storedWishList;

export interface WishlistState {
  count: number;
  wishlist: ProductURLsProps;
}

const initialState: WishlistState = {
  count: getWishList().length,
  wishlist: getWishList(),
};

const wishlistSlice = createSlice({
  name: 'wishlist',
  initialState,
  reducers: {
    resetWishlist: (state) => {
      state.count = getWishList().length;
      state.wishlist = getWishList();
    },
    addToWishlist: (state, action) => {
      state.count += 1;
      state.wishlist.push(action.payload);
      setWishList(state.wishlist);
    },
    removeFromWishlist: (state, action) => {
      state.count -= 1;
      state.wishlist = state.wishlist.filter((productId) => productId !== action.payload);
      setWishList(state.wishlist);
    },
  },
});

export const wishlistSelector = (state: RootState) => state.wishlist;
export const { addToWishlist, removeFromWishlist, resetWishlist } = wishlistSlice.actions;
export default wishlistSlice.reducer;
