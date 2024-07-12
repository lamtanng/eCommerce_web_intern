import GetAppRoundedIcon from '@mui/icons-material/GetAppRounded';
import { Button } from '@mui/material';
import { CSVLink } from 'react-csv';
import { ReactTableProps } from '../../reactTable/ReactTable.type';
import { RowData } from '@tanstack/react-table';

interface ExportButtonProps<TData extends RowData> extends Omit<ReactTableProps<TData>, 'table'> {}

export default function ExportButton<TData extends RowData>({ data, fileName = 'table' }: ExportButtonProps<TData>) {
  return (
    <CSVLink data={data} filename={`${fileName}.csv`} className="" target="_blank">
      <Button variant="outlined" startIcon={<GetAppRoundedIcon />}>
        Export
      </Button>
    </CSVLink>
  );
}
