import { chain, includes, some } from 'lodash';
import { ImportedProductProps } from '../redux/slices/importedProduct.slice';
import { CategoryProps } from '../types/category.type';
import { ProductFormSchema, ProductProps } from '../types/product.type';

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
  productWithCateName: ProductProps | ImportedProductProps;
}): ImportedProductProps | ProductProps => {
  const cateID = getIDfromCateNames({ categoryList, cateNames: productWithCateName.categories });
  return { ...productWithCateName, categories: cateID };
};

export const getProductWithCateName = ({
  categoryList,
  productWithCateID,
}: {
  categoryList: CategoryProps[];
  productWithCateID: ProductProps | ProductFormSchema;
}) => {
  const cateNames = chain(categoryList)
    .filter((cate) => includes(productWithCateID.categories, cate.id))
    .map((cate) => ({ name: cate.name }))
    .value();
  return { ...productWithCateID, categories: cateNames };
};
