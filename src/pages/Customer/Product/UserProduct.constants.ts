import Columns2 from '../../../assets/layout_2.png';
import Columns3 from '../../../assets/layout_3.png';
import Columns4 from '../../../assets/layout_4.png';
import { ColumnsIconProps } from './UserProduct.type';

export const defaultColumns = 3;
export const defaultPerPage = 6;
export const columnsIconList: ColumnsIconProps[] = [
  { iconName: Columns2, value: 2 },
  { iconName: Columns3, value: 3 },
  { iconName: Columns4, value: 4 },
];
