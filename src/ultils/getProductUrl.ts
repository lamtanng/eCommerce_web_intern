import { productFeature } from '../constants/features/publicFeatures';

export const getProductUrl = (url: string) => `${productFeature.path}/${url}`;
