import { map } from 'lodash';
import { SelectData } from '../types/selector.type';

/**
 * @description Convert data to multi select data
 * @returns array of select data
 */
const convertToSelectData = ({
  data,
  valueField,
  nameField,
}: {
  data: any[];
  valueField: string;
  nameField: string;
}): SelectData[] =>
  map(data, (item) => ({
    value: item[valueField],
    name: item[nameField],
  }));

export default convertToSelectData;
