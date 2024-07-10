import { FormGroup, MenuList } from '@mui/material';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import OutlinedInput from '@mui/material/OutlinedInput';
import Select from '@mui/material/Select';
import { RowData } from '@tanstack/react-table';
import { MenuProps } from '../../../../constants/menuProps';
import { ReactTableProps } from '../ReactTable.type';
import { CheckboxButton } from '../../buttons/CheckboxButton';

interface ColumnSelector<TData extends RowData> extends ReactTableProps<TData> {}

export default function ColumnSelector<TData extends RowData>({ table }: ColumnSelector<TData>) {
  let value = table.getVisibleLeafColumns().map((column) => column.columnDef.header);

  return (
    <FormControl sx={{ m: 1, width: 300 }}>
      <InputLabel id="demo-multiple-checkbox-label">Columns</InputLabel>
      <Select
        labelId="demo-multiple-checkbox-label"
        id="demo-multiple-checkbox"
        multiple
        value={value}
        input={<OutlinedInput label="Columns" />}
        renderValue={(selected) => <span className="capitalize">{selected.join(', ')}</span>}
        MenuProps={MenuProps}
      >
        <FormGroup sx={{ width: '100%' }}>
          <MenuList>
            <CheckboxButton
              checked={table.getIsAllColumnsVisible()}
              onChange={table.getToggleAllColumnsVisibilityHandler()}
              label={table.getVisibleLeafColumns().length === 0 ? 'Show All' : 'Hide All'}
            />

            {table.getAllLeafColumns().map((column) => (
              <CheckboxButton
                key={column.id}
                value={column.id}
                checked={column.getIsVisible()}
                onChange={column.getToggleVisibilityHandler()}
                label={column.columnDef.header?.toString()}
              />
            ))}
          </MenuList>
        </FormGroup>
      </Select>
    </FormControl>
  );
}
