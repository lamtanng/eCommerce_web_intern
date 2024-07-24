import { Stack, Tooltip } from '@mui/material';
import { useState } from 'react';
import { columnsIconList, defaultColumns } from '../../UserProduct.constants';
import { ColumnLayoutProps } from '../../UserProduct.type';

export default function ColumnLayout({ handleColumnsChange }: ColumnLayoutProps) {
  const [activeIndex, setActiveIndex] = useState(defaultColumns);
  return (
    <>
      <Stack direction="row" spacing={1} justifyContent="flex-end" alignItems="center" className="hidden md:flex">
        {columnsIconList.map((column) => (
          <Tooltip title={`${column.value} Columns`} key={column.value}>
            <img
              src={column.iconName}
              onClick={() => {
                handleColumnsChange(column.value);
                setActiveIndex(column.value);
              }}
              alt={column.iconName}
              className={`${activeIndex === column.value ? 'opacity-100' : 'opacity-30'} aspect-square w-8 cursor-pointer rounded-md border-2 border-solid border-gray-800 p-1 transition-all duration-200 ease-in-out hover:scale-105 hover:opacity-80 focus:opacity-100`}
            />
          </Tooltip>
        ))}
      </Stack>
    </>
  );
}
