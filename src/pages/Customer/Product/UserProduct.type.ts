export interface ColumnsIconProps {
  iconName: string;
  value: number;
}

export interface ColumnLayoutProps {
  handleColumnsChange: (columns: number) => void;
}

export interface ProductListProps {
  searchQuery?: string;
  perPage?: number;
  columns?: number;
}
