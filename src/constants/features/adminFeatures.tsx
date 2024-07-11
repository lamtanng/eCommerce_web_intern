import { FeaturesProps } from './features.type';
import DashboardIcon from '@mui/icons-material/Dashboard';

const adminPath = '/admin';

const dashboardFeature: FeaturesProps = {
  title: 'Dashboard',
  path: `${adminPath}/dashboard`,
  icon: <DashboardIcon />,
};
const purchaseFeature: FeaturesProps = {
  title: 'Purchase',
  path: `${adminPath}/purchases`,
};
const productFeature: FeaturesProps = {
  title: 'Products',
  path: `${adminPath}/products`,
};
const categoryFeature: FeaturesProps = {
  title: 'Categories',
  path: `${adminPath}/categories`,
};

const adminFeatures: FeaturesProps[] = [dashboardFeature, purchaseFeature, productFeature, categoryFeature];

export { adminFeatures, adminPath, categoryFeature, dashboardFeature, productFeature, purchaseFeature };
