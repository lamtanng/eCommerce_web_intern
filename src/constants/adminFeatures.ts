export interface FeaturesProps {
  title: string;
  path: string;
}
const adminPath = '/admin';

const dashboardFeature: FeaturesProps = {
  title: 'Dashboard',
  path: `${adminPath}/dashboard`,
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

const adminFeatures: FeaturesProps[] = [
  dashboardFeature,
  purchaseFeature,
  productFeature,
  categoryFeature,
];

export {
  adminPath,
  productFeature,
  purchaseFeature,
  categoryFeature,
  adminFeatures,
  dashboardFeature,
};
