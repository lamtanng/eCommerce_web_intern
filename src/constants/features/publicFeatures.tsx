import { FeaturesProps } from './features.type';

const publicPath = '';

const loginFeature: FeaturesProps = {
  title: 'Sign in',
  path: `${publicPath}/login`,
};
const signupFeature: FeaturesProps = {
  title: 'Sign up',
  path: `${publicPath}/signup`,
};
const productFeature: FeaturesProps = {
  title: 'Product',
  path: `${publicPath}/products`,
};

const publicFeatures: FeaturesProps[] = [loginFeature, signupFeature];

export { loginFeature, publicFeatures, publicPath, signupFeature, productFeature };
