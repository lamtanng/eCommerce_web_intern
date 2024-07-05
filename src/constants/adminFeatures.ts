export interface FeaturesProps {
  title: string;
  path: string;
}
const adminPath = '/admin';
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

const adminFeatures: FeaturesProps[] = [purchaseFeature, productFeature, categoryFeature];

export {
  adminPath,
  productFeature,
  purchaseFeature,
  categoryFeature,
  adminFeatures,
};
