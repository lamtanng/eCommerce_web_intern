import * as React from 'react';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import ListItemText from '@mui/material/ListItemText';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import Checkbox from '@mui/material/Checkbox';
import { Table, VisibilityState } from '@tanstack/react-table';
import { CategoryProps } from '../../../types/category.type';
import makeAnimated from 'react-select/animated';
import { map } from 'lodash';
import { Button, Stack } from '@mui/material';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};


let columnDefault: VisibilityState = { id: true, name: false, actions: true };

const options = map(columnDefault, (value, key) => ({
  value: String(value),
  label: key,
}));

export default function ColumnSelector({ table }: { table: Table<CategoryProps> }) {
  const [personName, setPersonName] = React.useState<string[]>([]);

  return (
    <>
      <div>
        <FormControl sx={{ m: 1, width: 300 }}>
          <InputLabel id="demo-multiple-checkbox-label">Columns</InputLabel>
          <Select
            labelId="demo-multiple-checkbox-label"
            id="demo-multiple-checkbox"
            multiple
            value={personName}
            input={<OutlinedInput label="Columns" />}
            renderValue={(selected) => selected.join(', ')}
            MenuProps={MenuProps}
          >
            <div className="inline-block rounded border border-black shadow">
              <div className="border-b border-black px-1">
                <label>
                  <input
                    {...{
                      type: 'checkbox',
                      checked: table.getIsAllColumnsVisible(),
                      onChange: () => {
                        localStorage.setItem('cateCols', JSON.stringify(table.getToggleAllColumnsVisibilityHandler()));
                        table.getToggleAllColumnsVisibilityHandler();
                      },
                    }}
                  />{' '}
                  Toggle All
                </label>
              </div>

              {table.getAllLeafColumns().map((column) => {
                return (
                  <MenuItem>
                    <div key={column.id} className="pl-5">
                      <label>
                        <input
                          {...{
                            type: 'checkbox',
                            checked: column.getIsVisible(),
                            onChange: () => {
                              localStorage.setItem(
                                'cateCols',
                                JSON.stringify(table.getToggleAllColumnsVisibilityHandler()),
                              );

                              column.getToggleVisibilityHandler();
                            },
                          }}
                        />{' '}
                        {column.id}
                      </label>
                    </div>
                  </MenuItem>
                );
              })}
            </div>
          </Select>
        </FormControl>
      </div>{' '}
    </>
  );
}
