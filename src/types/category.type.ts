interface CategoryParams extends GetAllCategoryParams {}
interface GetAllCategoryParams {
  categoryName?: string;
  page?: number;
  offset?: number;
}

interface CategoryProps {
  id?: string;
  name: string;
}

export type { CategoryParams, CategoryProps };
