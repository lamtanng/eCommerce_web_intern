import { FeaturesProps } from './features.type';
import { productFeature } from './publicFeatures';

const publicPath = productFeature.path;

const productDetailsFeature: FeaturesProps = {
  title: 'Products',
  path: `${publicPath}/:productId`,
};


export { productDetailsFeature };
