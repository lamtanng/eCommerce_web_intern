import { chain, some } from 'lodash';
import { CategoryProps } from '../types/category.type';
import { ProductProps } from '../types/product.type';

const getIDfromCateNames = ({
  categoryList,
  cateNames,
}: {
  categoryList: CategoryProps[];
  cateNames: ProductProps['categories'];
}) =>
  chain(categoryList)
    .filter((cate) => some(cateNames, { name: cate.name }))
    .map('id')
    .value();

export const getProductWithCateID = ({
  categoryList,
  productWithCateName,
}: {
  categoryList: CategoryProps[];
  productWithCateName: ProductProps;
}) => {
  const cateID = getIDfromCateNames({ categoryList, cateNames: productWithCateName.categories });
  return { ...productWithCateName, categories: cateID };
};
