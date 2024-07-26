import { FeaturesProps } from './features.type';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ShoppingCartRoundedIcon from '@mui/icons-material/ShoppingCartRounded';
import ReceiptRoundedIcon from '@mui/icons-material/ReceiptRounded';
import DnsRoundedIcon from '@mui/icons-material/DnsRounded';
import PublishIcon from '@mui/icons-material/Publish';

const adminPath = '/admin';

const dashboardFeature: FeaturesProps = {
  title: 'Dashboard',
  path: `${adminPath}/dashboard`,
  icon: <DashboardIcon />,
};
const purchaseFeature: FeaturesProps = {
  title: 'Purchase',
  path: `${adminPath}/purchases`,
  icon: <ReceiptRoundedIcon />,
};
const productFeature: FeaturesProps = {
  title: 'Products',
  path: `${adminPath}/products`,
  icon: <ShoppingCartRoundedIcon />,
};
const importProductFeature: FeaturesProps = {
  title: 'Import Products',
  path: `${adminPath}/products/import`,
  icon: <PublishIcon />,
};
const categoryFeature: FeaturesProps = {
  title: 'Categories',
  path: `${adminPath}/categories`,
  icon: <DnsRoundedIcon />,
};

const adminFeatures: FeaturesProps[] = [
  dashboardFeature,
  purchaseFeature,
  productFeature,
  importProductFeature,
  categoryFeature,
];

export {
  adminFeatures,
  adminPath,
  categoryFeature,
  dashboardFeature,
  productFeature,
  importProductFeature,
  purchaseFeature,
};
