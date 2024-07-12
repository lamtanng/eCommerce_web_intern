import { FeaturesProps } from './features.type';
import ReceiptRoundedIcon from '@mui/icons-material/ReceiptRounded';
import { productFeature } from './publicFeatures';

const productDetailsFeature: FeaturesProps = {
  title: 'Products',
  path: `${productFeature.path}/:productId`,
};

const purchaseFeature: FeaturesProps = {
  title: 'Purchase',
  path: `/purchases`,
  icon: <ReceiptRoundedIcon />,
};

const customerFeatures = [productDetailsFeature, purchaseFeature];
export { productDetailsFeature, purchaseFeature , customerFeatures};
